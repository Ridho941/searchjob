import { Avatar, Dropdown } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (

    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container px-10 pt-6 flex flex-wrap items-center justify-between mx-auto">
        <a href='/' class=" bg-gradient-to-r from-green-800 via-green-600 to-green-500 bg-clip-text align-middle text-4xl font-black tracking-widest text-transparent">SearchJob.ID</a>
        <div class="flex items-center md:order-2 space-x-6">

          <Dropdown
            label={<Avatar size="md" alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
            arrowIcon={false}
            placement="bottom"
            inline={true}
          >
            <Dropdown.Header>
              <span className="block text-sm">
                Ridho
              </span>
              <span className="block truncate text-sm font-medium">
                ridho@gmail.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <a href="/">
                Home
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="/">
                About
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="/llowongan">
                Lowongan
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="/profile">
                Profile
              </a>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              Sign out
            </Dropdown.Item>
          </Dropdown>

          <div className="space-x-4 flex flex-row items-center ">
            <a href='/login' className="font-bold hover:text-green-600">Sign In</a>
            <a href='/register' className="border border-green-600 bg-green-600 text-white hover:bg-green-700 rounded-full py-2 px-6">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav >


  )
}

export default Navbar

