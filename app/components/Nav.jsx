import React from 'react'
import Link from 'next/link'
import "./nav.css"

export default function Nav() {
  return (
    <nav>
      <h3>Edie</h3>
      <ul>
        <li><Link href={""}>Home</Link></li>
        <li><Link href={""}>Services</Link></li>
        <li><Link href={""}>Our Works</Link></li>
        <li><Link href={""}>Clients</Link></li>
        <li><Link href={""}>Contact</Link></li>  
      </ul> 
    </nav>
  )
}
