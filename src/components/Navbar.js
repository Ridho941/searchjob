import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (

    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container px-10 pt-6 flex flex-wrap items-center justify-between mx-auto">
        <a href='/' class=" bg-gradient-to-r from-green-800 via-green-600 to-green-500 bg-clip-text align-middle text-4xl font-black tracking-widest text-transparent">SearchJob.ID</a>
        <div class="flex items-center md:order-2 space-x-6">
          <a href='/profile' class="flex  text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span class="sr-only">Open user menu</span>
            <img class="w-8 h-8 rounded-full" src="https://media.suara.com/pictures/653x366/2022/05/18/39185-ilustrasi-perempuan-tersenyum.jpg" alt="user photo" />
          </a>

          <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
            <div class="px-4 py-3">
              <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
              <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
            </div>
            <ul class="py-2" aria-labelledby="user-menu-button">
              <li>
                <a href="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="/profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
              </li>
            </ul>
          </div>
          <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div className="space-x-4 flex flex-row items-center ">
            <a href='/login' className="font-bold hover:text-green-600">Sign In</a>
            <a href='/register' className="border border-green-600 bg-green-600 text-white hover:bg-green-700 rounded-full py-2 px-6">
              Sign Up
            </a>
          </div>
        </div>

        < div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2" >
          <ul className="flex flex-col pl-48 p-2 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" class="  hover:text-green-600 text-lg duration-150" >Home</Link>
            </li>
            <li>
              <Link to="/" class="  hover:text-green-600 text-lg duration-150" >About</Link>
            </li>
            <li>
              <Link to="/llowongan" class=" hover:text-green-600 text-lg duration-150">lowongan</Link>
            </li>
            <li>
              <Link to="/favorite" class=" hover:text-green-600 text-lg duration-150">Fav</Link>
            </li>
            <li>
              <Link to="/chat" class="hover:text-green-600 text-lg duration-150">Chat</Link>
            </li>
          </ul>

        </div >

      </div>
    </nav >


  )
}

export default Navbar

