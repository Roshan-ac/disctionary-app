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
      <div className={`navBarHeader space-x-10 px-10 py-5 bg-slate-900 justify-between flex items-center`}>
      <img src={logo} alt="logo here" className='w-12 h-12'/>
        <nav className="text-md md:float-none flex space-x-10 text-white list-none">
          <div className="navlistRight space-y-4 md:flex items-center md:space-y-0 md:space-x-10">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Favourite</li>
          </div>
          <div className="navlistLeft space-y-4 md:flex items-center md:space-y-0 md:space-x-10">
            <li className="cursor-pointer">Custume</li>
            <li className="cursor-pointer">Setting</li>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar