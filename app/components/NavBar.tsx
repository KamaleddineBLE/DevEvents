import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from "../../public/icons/logo.png"
const NavBar = () => {
  return (
    <header >
        <nav> 
            <Link href ='/' className='logo'>
                <Image src={logo} alt="logo" width={24} height={24}/>
                <p>DevEvent</p>
            </Link>
            <ul>
                <Link href ='/' >Home</Link>
                <Link href ='/events' >Events</Link>
                <Link href ='/contact' >Create Event</Link>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar