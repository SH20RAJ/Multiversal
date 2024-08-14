import React from 'react'
import Post from './Post'

export default function Content() {
  return (
    <div className='flex '>
        <div className="main">
            {
                Array(4).fill(0).map((ii,i)=><Post key={i}/>)
            }
        </div>
        <div className="sidebar">
          
        </div>
    </div>
  )
}
