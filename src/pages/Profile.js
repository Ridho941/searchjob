import React from 'react'
import Navbar from '../components/Navbar'
import { ListGroup } from 'flowbite-react'
import { Link } from 'react-router-dom'

function Profile() {
    return (
        <div>
            <Navbar />
            <div className="flex p-7">
                <ListGroup>
                    <div className="flex flex-col h-screen p-4 bg-white shadow-lg w-56">
                        <div className="space-y-5">
                            <div className='py-2'>
                                <span className='text-sm text-gray-500 uppercase ml-4 inline-block mb-2'>Menu</span>
                                <div className="flex justify-centeritems-center gap-2">
                                    <ul className="pt-2 pb-4  text-sm">
                                        <ListGroup.Item>
                                            <li className="rounded-sm">
                                                <Link
                                                    to="/llowongan"
                                                    className="flex p-2  items-center space-x-3 rounded-md  "
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-5 h-5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                        />
                                                    </svg>
                                                    <span>List Lowongan</span>
                                                </Link>
                                            </li>
                                        </ListGroup.Item>
                                        <ListGroup.Item>

                                            <li className="rounded-sm">
                                                <a
                                                    href="/chat"
                                                    className="flex items-center p-2 space-x-3 rounded-md"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-5 h-5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                                        />
                                                    </svg>
                                                    <span>Chat</span>
                                                </a>
                                            </li>
                                        </ListGroup.Item>
                                        <ListGroup.Item>

                                            <li className="rounded-sm">
                                                <a
                                                    href="/favorite"
                                                    className="flex items-center p-2 space-x-3 rounded-md"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-5 h-5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                                        />
                                                    </svg>
                                                    <span>Favorite</span>

                                                </a>
                                            </li>
                                        </ListGroup.Item>
                                        <ListGroup.Item>

                                            <li className="rounded-sm">
                                                <Link
                                                    to="/formkerja"
                                                    className="flex items-center p-2 space-x-3 rounded-md"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-5 h-5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        />
                                                    </svg>
                                                    <span>Form Kerja</span>
                                                </Link>
                                            </li>
                                        </ListGroup.Item>
                                        <ListGroup.Item>

                                            <li className="rounded-sm">
                                                <Link
                                                    to="/formlowongan"
                                                    className="flex items-center p-2 space-x-3 rounded-md"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-5 h-5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        />
                                                    </svg>
                                                    <span>Form Lowongan</span>
                                                </Link>
                                            </li>
                                        </ListGroup.Item>
                                        <ListGroup.Item>

                                            <li className="rounded-sm">
                                                <button
                                                    className="flex items-center p-2 space-x-3 rounded-md"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-5 h-5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                                        />
                                                    </svg>
                                                    <span>Logout</span>
                                                </button>
                                            </li>
                                        </ListGroup.Item>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </ListGroup>
                <section className=' col-span-4 px-20 relative'>
                    <div className='pl-0  transition-all gap-8'>
                        <div className='p-8'>
                            <div className='flex items-center gap-4 mt-2'>
                                <img
                                    src="https://img.freepik.com/free-photo/young-asian-teenage-girl-surprised-excited-isolated-pink-background_74952-2590.jpg?w=900&t=st=1677461617~exp=1677462217~hmac=751528225d96d149accb3e39885833ba389a438d75b7ff66edb5e54ee7f400c5"
                                    className="w-28 h-28 object-cover rounded-full"
                                />
                                <div>
                                    <h2 className='text-lg font-semibold mb-2'>Nama user</h2>
                                    <span className='text-md text-gray-500'>apani</span>
                                </div>
                                <a href="#" className='py-2 px-4 rounded bg-blue-500 flex items-center gap-4 text-white hover:bg-blue-600'>
                                    Edit Profile
                                </a>
                            </div>
                            <p className='text-gray-500 flex-items-center mt-8 mb-10 '>
                                <div>
                                    <tr className=''>
                                        <span className='w-1/5  text-right pr-20 space-y-6 align-top'>Bio</span>
                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                        </td>

                                    </tr>
                                    <tr >
                                        <span className='w-1/5 text-right pr-20 space-y-8 align-top'>About Me</span>
                                        <td className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                            malesuada ex vel vehicula varius. Nam egestas nisi ac ipsum
                                            commodo, a congue odio efficitur.</td>

                                    </tr>
                                    <tr>
                                        <span className='w-1/5 text-right pr-10 space-y-3 align-top'>Skills</span>
                                        <td>
                                            <div className='flex-items-center'>
                                                <li>ReactJS</li>
                                                <li>NodeJS</li>
                                                <li>Tailwind CSS</li>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <span className='w-1/5 text-right pr-10 space-y-3 align-top mb-2'>Email</span>
                                        <td>
                                            <div className="flex items-center">
                                                <span className="flex-1">johanna.stevens@gmail.com</span>
                                                <button className="bg-gray-100 border border-gray-200 py-1 px-3 rounded-md text-xs font-normal">
                                                    Pimary
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </div>

                            </p>
                            <div>
                                <div className='mt-8'>
                                    <h2 className='pb-1 border-b-4 border-tranparent text-sm text-gray-500 mb-2'>My Activity</h2>
                                    <span className='text-md text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div >
    )
}

export default Profile