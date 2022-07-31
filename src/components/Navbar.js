import React, { useState } from 'react'
import logo from '../assets/app.png'
function Navbar() {
  const [smNavBar, setSmNavBar] = useState(false)
  const RenderNavbar = () => {
    if (smNavBar) {
      setSmNavBar(false)
    } else {
      setSmNavBar(true)
    }
  }
  return (
    <div className="navBar">
      <div className={`navBarHeader space-x-10 px-10 py-5 justify-between flex items-center`}>
        <nav className="text-md md:float-none flex space-x-10 text-white list-none items-center">
      <img src={logo} alt="logo here" className='w-12 h-12'/>
         <h3 className='text-xl tracking-widest uppercase font-bold text-black'>XFORD Dictionary</h3>
        </nav>
      </div>
    </div>
  )
}

export default Navbar