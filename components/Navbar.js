import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
       <nav>
           <div>
               <Link href="/"><a>Udemy-Online</a></Link>
           </div>
           <div>
           <Link href="/about"><a>About</a></Link>
           <Link href="/users"><a>All Users</a></Link>
           </div>
       </nav>
    )
}
