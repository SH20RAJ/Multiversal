'use client';

import React, { useEffect, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import Typography from '@tiptap/extension-typography';
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import Link from '@tiptap/extension-link';
import {
    Button,
    Tooltip,
    Space,
    Divider,
    Popover,
    Input,
    theme,
    Select
} from 'antd';
import {
    Bold,
    Italic,
    Underline as UnderlineIcon,
    Quote,
    AlignLeft,
    AlignCenter,
    AlignRight,
    CornerDownLeft,
    Link as LinkIcon,
    LinkOff,
    Sparkles,
    PanelLeft,
    HighlighterIcon,
    BookOpen,
    Heading1,
    Heading2,
    List,
    ListOrdered
} from 'lucide-react';

const { Option } = Select;

const MenuBar = ({ editor }) => {
    const { token } = theme.useToken();
    const [linkUrl, setLinkUrl] = useState('');
    const [linkPopoverOpen, setLinkPopoverOpen] = useState(false);

    if (!editor) {
        return null;
    }

    const setLink = () => {
        if (linkUrl) {
            // Use regex to ensure URL has protocol
            const url = linkUrl.match(/^https?:\/\//) ? linkUrl : `https://${linkUrl}`;

            editor
                .chain()
                .focus()
                .extendMarkRange('link')
                .setLink({ href: url })
                .run();

            setLinkUrl('');
            setLinkPopoverOpen(false);
        }
    };

    const removeLink = () => {
        editor.chain().focus().extendMarkRange('link').unsetLink().run();
    };

    const linkPopoverContent = (
        <div className="flex flex-col gap-2">
            <Input
                value={linkUrl}
                onChange={e => setLinkUrl(e.target.value)}
                placeholder="https://example.com"
                onPressEnter={setLink}
            />
            <Button size="small" type="primary" onClick={setLink}>
                Apply
            </Button>
        </div>
    );

    return (
        <div className="story-editor-menu rounded-t-lg border-b border-gray-100 p-3 bg-white flex flex-wrap gap-1 items-center">
            <div className="mr-2 flex items-center">
                <BookOpen className="w-4 h-4 mr-1 text-blue-500" />
                <span className="text-xs font-medium text-gray-500">Story</span>
            </div>

            <Divider type="vertical" className="h-6" />

            <Space wrap size={2}>
                <Tooltip title="Heading 1">
                    <Button
                        type="text"
                        size="small"
                        icon={<Heading1 className="w-3.5 h-3.5" />}
                        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                        className={editor.isActive('heading', { level: 1 }) ? 'bg-gray-100' : ''}
                    />
                </Tooltip>

                <Tooltip title="Heading 2">
                    <Button
                        type="text"
                        size="small"
                        icon={<Heading2 className="w-3.5 h-3.5" />}
                        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                        className={editor.isActive('heading', { level: 2 }) ? 'bg-gray-100' : ''}
                    />
                </Tooltip>

                <Divider type="vertical" className="h-6" />

                <Tooltip title="Bold">
                    <Button
                        type="text"
                        size="small"
                        icon={<Bold className="w-3.5 h-3.5" />}
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        className={editor.isActive('bold') ? 'bg-gray-100' : ''}
                    />
                </Tooltip>

                <Tooltip title="Italic">
                    <Button
                        type="text"
                        size="small"
                        icon={<Italic className="w-3.5 h-3.5" />}
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        className={editor.isActive('italic') ? 'bg-gray-100' : ''}
                    />
                </Tooltip>

                <Tooltip title="Underline">
                    <Button
                        type="text"
                        size="small"
                        icon={<UnderlineIcon className="w-3.5 h-3.5" />}
                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                        className={editor.isActive('underline') ? 'bg-gray-100' : ''}
                    />
                </Tooltip>

                <Tooltip title="Highlight">
                    <Button
                        type="text"
                        size="small"
                        icon={<HighlighterIcon className="w-3.5 h-3.5" />}
                        onClick={() => editor.chain().focus().toggleHighlight().run()}
                        className={editor.isActive('highlight') ? 'bg-gray-100' : ''}
                    />
                </Tooltip>

                <Divider type="vertical" className="h-6" />

                <Tooltip title="Quote">
                    <Button
                        type="text"
                        size="small"
                        icon={<Quote className="w-3.5 h-3.5" />}
                        onClick={() => editor.chain().focus().toggleBlockquote().run()}
                        className={editor.isActive('blockquote') ? 'bg-gray-100' : ''}
                    />
                </Tooltip>

                <Tooltip title="Bullet List">
                    <Button
                        type="text"
                        size="small"
                        icon={<List className="w-3.5 h-3.5" />}
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        className={editor.isActive('bulletList') ? 'bg-gray-100' : ''}
                    />
                </Tooltip>

                <Tooltip title="Ordered List">
                    <Button
                        type="text"
                        size="small"
                        icon={<ListOrdered className="w-3.5 h-3.5" />}
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                        className={editor.isActive('orderedList') ? 'bg-gray-100' : ''}
                    />
                </Tooltip>

                <Popover
                    content={linkPopoverContent}
                    title="Add Link"
                    trigger="click"
                    open={linkPopoverOpen}
                    onOpenChange={setLinkPopoverOpen}
                >
                    <Tooltip title="Add Link">
                        <Button
                            type="text"
                            size="small"
                            icon={<LinkIcon className="w-3.5 h-3.5" />}
                            className={editor.isActive('link') ? 'bg-gray-100' : ''}
                        />
                    </Tooltip>
                </Popover>

                <Tooltip title="Remove Link">
                    <Button
                        type="text"
                        size="small"
                        icon={<LinkOff className="w-3.5 h-3.5" />}
                        onClick={removeLink}
                        disabled={!editor.isActive('link')}
                    />
                </Tooltip>

                <Divider type="vertical" className="h-6" />

                <Tooltip title="Align Left">
                    <Button
                        type="text"
                        size="small"
                        icon={<AlignLeft className="w-3.5 h-3.5" />}
                        onClick={() => editor.chain().focus().setTextAlign('left').run()}
                        className={editor.isActive({ textAlign: 'left' }) ? 'bg-gray-100' : ''}
                    />
                </Tooltip>

                <Tooltip title="Align Center">
                    <Button
                        type="text"
                        size="small"
                        icon={<AlignCenter className="w-3.5 h-3.5" />}
                        onClick={() => editor.chain().focus().setTextAlign('center').run()}
                        className={editor.isActive({ textAlign: 'center' }) ? 'bg-gray-100' : ''}
                    />
                </Tooltip>

                <Tooltip title="Align Right">
                    <Button
                        type="text"
                        size="small"
                        icon={<AlignRight className="w-3.5 h-3.5" />}
                        onClick={() => editor.chain().focus().setTextAlign('right').run()}
                        className={editor.isActive({ textAlign: 'right' }) ? 'bg-gray-100' : ''}
                    />
                </Tooltip>
            </Space>

            <div className="ml-auto">
                <Tooltip title="Line Break">
                    <Button
                        type="text"
                        size="small"
                        icon={<CornerDownLeft className="w-3.5 h-3.5" />}
                        onClick={() => editor.commands.setHardBreak()}
                    />
                </Tooltip>

                <Tooltip title="Format & Beautify">
                    <Button
                        type="text"
                        size="small"
                        icon={<Sparkles className="w-3.5 h-3.5" style={{ color: token.colorPrimary }} />}
                    />
                </Tooltip>
            </div>
        </div>
    );
};

const StoryEditor = ({ content = '', onChange, placeholder = 'Start writing your story here...' }) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder,
                emptyEditorClass: 'is-editor-empty',
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Typography,
            Underline,
            Highlight.configure({
                multicolor: true,
            }),
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-blue-500 underline hover:text-blue-700',
                },
            }),
        ],
        content,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    useEffect(() => {
        if (editor && content && editor.getHTML() !== content) {
            editor.commands.setContent(content);
        }
    }, [content, editor]);

    return (
        <div className="story-editor border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <MenuBar editor={editor} />
            <EditorContent
                editor={editor}
                className="prose max-w-none p-4 min-h-[300px] focus:outline-none"
            />
            <style jsx global>{`
        .story-editor .ProseMirror {
          min-height: 300px;
          outline: none !important;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.7;
        }
        .story-editor .ProseMirror p {
          margin: 0.8em 0;
        }
        .story-editor .ProseMirror h1 {
          font-size: 1.8em;
          margin: 1em 0 0.5em;
          font-weight: 600;
        }
        .story-editor .ProseMirror h2 {
          font-size: 1.4em;
          margin: 1em 0 0.5em;
          font-weight: 600;
        }
        .story-editor .ProseMirror blockquote {
          border-left: 3px solid #ddd;
          margin-left: 0;
          margin-right: 0;
          padding-left: 1em;
          font-style: italic;
          color: #667;
        }
        .story-editor .ProseMirror ul, .story-editor .ProseMirror ol {
          padding-left: 1.5em;
        }
        .story-editor .ProseMirror.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #adb5bd;
          pointer-events: none;
          height: 0;
        }
      `}</style>
        </div>
    );
};

export default StoryEditor;
