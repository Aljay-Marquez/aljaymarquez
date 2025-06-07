import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import '../assets/fonts/font.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className='topnav flex flex-row justify-between items-center p-3 fixed z-50 w-full h-12 text-white bg-gray-800 border-b-amber-50 border-b-1'>
      <a className='logo md:ml-5 text-cyan-500 text-3xl font-blade-round' href="#home"> ALJAY. </a>
      {/* Hamburger Icon for Mobile */}
      <button
        className="lg:hidden block "
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <FaBars size={24} />
      </button>
      {/* Desktop Nav */}
      <ul className='nav-icons flex-row gap-4 mr-5 text-xs hidden lg:flex'>
        <li className='icon hover:bg-cyan-500 hover:text-slate-900 active:bg-cyan-600 active:text-slate-900 rounded-sm p-2'><a className='font-blade-round' href="#home">Home</a></li>
        <li className='icon hover:bg-cyan-500 hover:text-slate-900 rounded-sm p-2'><a className='font-blade-round' href="#about">About Me</a></li>
        <li className='icon hover:bg-cyan-500 hover:text-slate-900 rounded-sm p-2'><a className='font-blade-round' href="#projects">Projects</a></li>
        <li className='icon hover:bg-cyan-500 hover:text-slate-900 rounded-sm p-2'><a className='font-blade-round' href="#contact">Contact Info</a></li>
      </ul>
      {/* Mobile Nav */}
      {open && (
        <ul className='nav-icons flex flex-col gap-2 absolute top-12 right-0 bg-gray-800 w-full min-w-[150px] p-4 rounded-bl-lg shadow-lg lg:hidden'>
          <li><a className='font-blade-round block py-2' href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a className='font-blade-round block py-2' href="#about" onClick={() => setOpen(false)}>About Me</a></li>
          <li><a className='font-blade-round block py-2' href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a className='font-blade-round block py-2' href="#contact" onClick={() => setOpen(false)}>Contact Info</a></li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar