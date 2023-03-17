import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Llowongan() {
  return (
    <div className='bg-green-100'>
      <Navbar />

      <div className='p-10 mt-8 '>

        <div>
          <form>
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
              <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
          </form>
        </div>

        <div>
          <h1 className='font-bold text-3xl text-center p-10'>Daftar Lowongan</h1>

          <div className='py-4 px-4  ml-8 grid grid-cols-4  gap-5 lg:gap-12 sm:grid-cols-2 lg:grid-cols-4'>

            <div className='relative overflow-hidden w-72 rounded-2xl bg-white shadow-md hover:shadow-lg dark:border-slate-800 dark:bg-slate-700'>
              <Link to='/detail'>
                <img src="https://verihubs.com/wp-content/uploads/2022/12/corporate-identity-2.jpg" className=' w-72 h-48' />
                <div className="flex flex-col border-t p-4 dark:border-slate-600">
                  <h5 className="block truncate text-xl font-semibold capitalize">Nama Lowongan</h5>
                  <span className="block truncate text-slate-500 dark:text-slate-400">
                    apa
                  </span>
                </div>
              </Link>
            </div>

            <div className='relative overflow-hidden w-72 rounded-2xl bg-white shadow-md hover:shadow-lg dark:border-slate-800 dark:bg-slate-700'>
              <img src="https://verihubs.com/wp-content/uploads/2022/12/corporate-identity-2.jpg" className=' w-72 h-48' />
              <div className="flex flex-col border-t p-4 dark:border-slate-600">
                <h5 className="block truncate text-xl font-semibold capitalize">Nama Lowongan</h5>
                <span className="block truncate text-slate-500 dark:text-slate-400">
                  apa
                </span>
              </div>
            </div>

            <div className='relative overflow-hidden w-72 rounded-2xl bg-white shadow-md hover:shadow-lg dark:border-slate-800 dark:bg-slate-700'>
              <img src="https://verihubs.com/wp-content/uploads/2022/12/corporate-identity-2.jpg" className=' w-72 h-48' />
              <div className="flex flex-col border-t p-4 dark:border-slate-600">
                <h5 className="block truncate text-xl font-semibold capitalize">Nama Lowongan</h5>
                <span className="block truncate text-slate-500 dark:text-slate-400">
                  apa
                </span>
              </div>
            </div>

            <div className='relative overflow-hidden w-72 rounded-2xl bg-white shadow-md hover:shadow-lg dark:border-slate-800 dark:bg-slate-700'>
              <img src="https://verihubs.com/wp-content/uploads/2022/12/corporate-identity-2.jpg" className=' w-72 h-48' />
              <div className="flex flex-col border-t p-4 dark:border-slate-600">
                <h5 className="block truncate text-xl font-semibold capitalize">Nama Lowongan</h5>
                <span className="block truncate text-slate-500 dark:text-slate-400">
                  apa
                </span>
              </div>
            </div>

            <div className='relative overflow-hidden w-72 rounded-2xl bg-white shadow-md hover:shadow-lg dark:border-slate-800 dark:bg-slate-700'>
              <img src="https://verihubs.com/wp-content/uploads/2022/12/corporate-identity-2.jpg" className=' w-72 h-48' />
              <div className="flex flex-col border-t p-4 dark:border-slate-600">
                <h5 className="block truncate text-xl font-semibold capitalize">Nama Lowongan</h5>
                <span className="block truncate text-slate-500 dark:text-slate-400">
                  apa
                </span>
              </div>
            </div>

            <div className='relative overflow-hidden w-72 rounded-2xl bg-white shadow-md hover:shadow-lg dark:border-slate-800 dark:bg-slate-700'>
              <img src="https://verihubs.com/wp-content/uploads/2022/12/corporate-identity-2.jpg" className=' w-72 h-48' />
              <div className="flex flex-col border-t p-4 dark:border-slate-600">
                <h5 className="block truncate text-xl font-semibold capitalize">Nama Lowongan</h5>
                <span className="block truncate text-slate-500 dark:text-slate-400">
                  apa
                </span>
              </div>
            </div>

            <div className='relative overflow-hidden w-72 rounded-2xl bg-white shadow-md hover:shadow-lg dark:border-slate-800 dark:bg-slate-700'>
              <img src="https://verihubs.com/wp-content/uploads/2022/12/corporate-identity-2.jpg" className=' w-72 h-48' />
              <div className="flex flex-col border-t p-4 dark:border-slate-600">
                <h5 className="block truncate text-xl font-semibold capitalize">Nama Lowongan</h5>
                <span className="block truncate text-slate-500 dark:text-slate-400">
                  apa
                </span>
              </div>
            </div>

            <div className='relative overflow-hidden w-72 rounded-2xl bg-white shadow-md hover:shadow-lg dark:border-slate-800 dark:bg-slate-700'>
              <img src="https://verihubs.com/wp-content/uploads/2022/12/corporate-identity-2.jpg" className=' w-72 h-48' />
              <div className="flex flex-col border-t p-4 dark:border-slate-600">
                <h5 className="block truncate text-xl font-semibold capitalize">Nama Lowongan</h5>
                <span className="block truncate text-slate-500 dark:text-slate-400">
                  apa
                </span>
              </div>
            </div>

            <div className='relative overflow-hidden w-72 rounded-2xl bg-white shadow-md hover:shadow-lg dark:border-slate-800 dark:bg-slate-700'>
              <img src="https://verihubs.com/wp-content/uploads/2022/12/corporate-identity-2.jpg" className=' w-72 h-48' />
              <div className="flex flex-col border-t p-4 dark:border-slate-600">
                <h5 className="block truncate text-xl font-semibold capitalize">Nama Lowongan</h5>
                <span className="block truncate text-slate-500 dark:text-slate-400">
                  apa
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Llowongan