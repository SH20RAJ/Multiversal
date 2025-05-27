'use client';

import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
    Button,
    Tooltip,
    Space,
    Divider
} from 'antd';
import {
    Bold,
    Italic,
    List,
    ListOrdered,
    Quote,
    Code,
    Heading1,
    Heading2,
    Heading3,
    Undo,
    Redo,
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignJustify,
    Sparkles
} from 'lucide-react';

const MenuBar = ({ editor }) => {
    if (!editor) {
        return null;
    }

    return (
        <div className="editor-menu rounded-t-lg border-b border-gray-100 p-2 bg-white flex justify-between flex-wrap gap-1">
            <Space wrap size="small">
                <Tooltip title="Bold">
                    <Button
                        type="text"
                        size="small"
                        icon={<Bold className="w-4 h-4" />}
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        className={editor.isActive('bold') ? 'bg-gray-100' : ''}
                    />
                </Tooltip>

                <Tooltip title="Italic">
                    <Button
                        type="text"
                        size="small"
                        icon={<Italic className="w-4 h-4" />}
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        className={editor.isActive('italic') ? 'bg-gray-100' : ''}
                    />
                </Tooltip>

                <Divider type="vertical" />

                <Tooltip title="Heading 1">
                    <Button
                        type="text"
                        size="small"
                        icon={<Heading1 className="w-4 h-4" />}
                        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                        className={editor.isActive('heading', { level: 1 }) ? 'bg-gray-100' : ''}
                    />
                </Tooltip>

                <Tooltip title="Heading 2">
                    <Button
                        type="text"
                        size="small"
                        icon={<Heading2 className="w-4 h-4" />}
                        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                        className={editor.isActive('heading', { level: 2 }) ? 'bg-gray-100' : ''}
                    />
                </Tooltip>

                <Tooltip title="Heading 3">
                    <Button
                        type="text"
                        size="small"
                        icon={<Heading3 className="w-4 h-4" />}
                        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                        className={editor.isActive('heading', { level: 3 }) ? 'bg-gray-100' : ''}
                    />
                </Tooltip>

                <Divider type="vertical" />

                <Tooltip title="Bullet List">
                    <Button
                        type="text"
                        size="small"
                        icon={<List className="w-4 h-4" />}
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        className={editor.isActive('bulletList') ? 'bg-gray-100' : ''}
                    />
                </Tooltip>

                <Tooltip title="Numbered List">
                    <Button
                        type="text"
                        size="small"
                        icon={<ListOrdered className="w-4 h-4" />}
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                        className={editor.isActive('orderedList') ? 'bg-gray-100' : ''}
                    />
                </Tooltip>

                <Tooltip title="Block Quote">
                    <Button
                        type="text"
                        size="small"
                        icon={<Quote className="w-4 h-4" />}
                        onClick={() => editor.chain().focus().toggleBlockquote().run()}
                        className={editor.isActive('blockquote') ? 'bg-gray-100' : ''}
                    />
                </Tooltip>

                <Tooltip title="Code Block">
                    <Button
                        type="text"
                        size="small"
                        icon={<Code className="w-4 h-4" />}
                        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                        className={editor.isActive('codeBlock') ? 'bg-gray-100' : ''}
                    />
                </Tooltip>
            </Space>

            <Space wrap size="small">
                <Tooltip title="Undo">
                    <Button
                        type="text"
                        size="small"
                        icon={<Undo className="w-4 h-4" />}
                        onClick={() => editor.chain().focus().undo().run()}
                        disabled={!editor.can().undo()}
                    />
                </Tooltip>

                <Tooltip title="Redo">
                    <Button
                        type="text"
                        size="small"
                        icon={<Redo className="w-4 h-4" />}
                        onClick={() => editor.chain().focus().redo().run()}
                        disabled={!editor.can().redo()}
                    />
                </Tooltip>

                <Tooltip title="AI Assistant">
                    <Button
                        type="text"
                        size="small"
                        icon={<Sparkles className="w-4 h-4" />}
                        className="text-indigo-500"
                        onClick={() => alert('AI Assistant coming soon!')}
                    />
                </Tooltip>
            </Space>
        </div>
    );
};

export default function TipTapEditor({
    content,
    onChange,
    placeholder = "Start writing...",
    contentType = "default"
}) {
    const extensions = [
        StarterKit,
    ];

    const editor = useEditor({
        extensions,
        content,
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            if (onChange) {
                onChange(html);
            }
        },
    });

    useEffect(() => {
        if (editor && content !== editor.getHTML()) {
            editor.commands.setContent(content);
        }
    }, [content, editor]);

    return (
        <div className="tiptap-editor rounded-lg border border-gray-200 overflow-hidden hover:border-indigo-500 transition-all">
            <MenuBar editor={editor} />
            <EditorContent
                editor={editor}
                className="prose max-w-none p-4 min-h-[400px] focus:outline-none"
            />
            <style jsx global>{`
        .tiptap-editor .ProseMirror {
          outline: none;
          min-height: 400px;
        }
        
        .tiptap-editor .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #adb5bd;
          pointer-events: none;
          height: 0;
        }

        .tiptap-editor .ProseMirror:focus {
          outline: none;
        }

        /* Cute minimalistic styling for content types */
        .tiptap-editor.poetry .ProseMirror {
          font-family: 'Georgia', serif;
          line-height: 1.7;
        }

        .tiptap-editor.story .ProseMirror {
          font-family: 'Bookerly', 'Georgia', serif;
          line-height: 1.8;
        }

        .tiptap-editor.music .ProseMirror {
          font-family: 'Arial', sans-serif;
        }

        .tiptap-editor.art .ProseMirror {
          font-family: 'Helvetica', sans-serif;
        }

        /* Block quote styling */
        .tiptap-editor .ProseMirror blockquote {
          border-left: 3px solid rgba(99, 102, 241, 0.4);
          padding-left: 1rem;
          font-style: italic;
        }

        /* Headings */
        .tiptap-editor .ProseMirror h1 {
          font-size: 1.75rem;
          margin-bottom: 0.75em;
        }

        .tiptap-editor .ProseMirror h2 {
          font-size: 1.5rem;
          margin-bottom: 0.5em;
        }

        .tiptap-editor .ProseMirror h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5em;
        }
      `}</style>
        </div>
    );
}
