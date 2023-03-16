import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="">
      <header className="container max-w-5xl mx-auto flex flex-row pt-12 items-center space-x-40" >
        {/*<img alt="icon-laslesvpn" src={IconLaslesVpn} className="w-36" />*/}
        <a href='/' class=" bg-gradient-to-r from-green-800 via-green-600 to-green-500 bg-clip-text align-middle text-3xl font-black tracking-widest text-transparent">SearchJob.ID</a>
        < div className="" >
          <ul className="flex flex-row gap-6">
            <li>
              <Link to="/" class="  hover:text-green-600" >Home</Link>
            </li>
            <li>
              <Link to="/profile" class=" hover:text-green-600 ">Profile</Link>
            </li>
            <li>
              <Link to="/favorite" class=" hover:text-green-600">Fav</Link>
            </li>
            <li>
              <Link to="/chat" class="hover:text-green-600">Chat</Link>
            </li>
          </ul>
        </div >
        <div className="space-x-6 flex flex-row items-center ">
          <a href='/login' className="font-bold hover:text-green-600">Sign In</a>
          <a href='/register' className="border border-green-600 bg-green-600 text-white hover:bg-green-700 rounded-full py-2 px-6">
            Sign Up
          </a>
        </div>
      </header >
    </div>

  )
}

export default Navbar

