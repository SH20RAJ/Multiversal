import Nav from '@/components/NavBar'
import React from 'react'

export default function layout({children}) {
  return (
    <div>
      <Nav/>
      <main>
        {children}
      </main>
    </div>
  )
}
