import { Avatar, Dropdown } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (

    <nav className="bg-white border-gray-200 shadow-md px-6 py-6 sm:px-6 rounded dark:bg-gray-900">
      <div className="container px-10 pt-4 flex flex-wrap items-center justify-between mx-auto">
        <a href='/' class=" bg-gradient-to-r from-green-800 via-green-600 to-green-500 bg-clip-text align-middle text-4xl font-black tracking-widest text-transparent">SearchJob.ID</a>
        <div class="flex items-center jsutify-center md:order-2 space-x-6 gap-3">

          <div className='font-bold hover:text-green-600'>
            <a href='/'>Home</a>
          </div>
          <div className='font-bold hover:text-green-600'>
            <a href='/'>About</a>
          </div>
          <div className='font-bold hover:text-green-600'>
            <a href='/llowongan'>Lowongan</a>
          </div>
          <div className='font-bold hover:text-green-600'>
            <a href='/favorite'>Fav</a>
          </div>
          <div className='font-bold hover:text-green-600'>
            <a href='/chat'>Chat</a>
          </div>
        </div>
        <div class="flex items-center md:order-2 space-x-6 px-4 gap-3">
          <div className="space-x-4 flex flex-row items-center ">
            <a href='/login' className="font-bold hover:text-green-600">Sign In</a>
            <a href='/register' className="border border-green-600 bg-green-600 text-white hover:bg-green-700 rounded-full py-2 px-6">
              Sign Up
            </a>
          </div>
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
              <a href="/profile">
                Profile
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="/">
                Inbox
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="/llowongan">
                Setting
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="/profile">
                Help
              </a>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              Sign out
            </Dropdown.Item>
          </Dropdown>
        </div>

      </div>
    </nav >


  )
}

export default Navbar

