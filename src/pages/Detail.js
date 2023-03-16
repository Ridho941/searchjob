import React from 'react'
import Navbar from '../components/Navbar'

function Detail() {
  return (
    <div>
      <Navbar />

      <div className='p-10'>
        <div class="flex flex-col items-center justify-center min-h-screen">
          <div class="w-full max-w-3xl p-8 bg-white rounded-lg shadow-md">
            <img src="https://verihubs.com/wp-content/uploads/2022/12/corporate-identity-2.jpg" alt="Ini gambar" class="mb-4 rounded-xl " />
            <p class="text-gray-700 font-bold text-[25px]">Judul Lowongan</p>
            <div className='pb-4'>
              <span className='text-gray-500'>Jl.Landasan Ulin Nomor 90</span>
            </div>
            <div class="items-center mb-10">
              <p className='font-bold text-[20px] space-y-5'>Deskripsi</p>
              <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non tincidunt dui, vel hendrerit magna. Nulla condimentum aliquet dolor, a egestas metus lacinia fringilla. Phasellus eu nisl lectus. Phasellus at sapien id nunc scelerisque tristique. Donec hendrerit ipsum at cursus fringilla. Suspendisse potenti.</p>
            </div>
            <div class="flex justify-center space-x-7">
              <button class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
                Lamar
              </button>
              <button class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
                Hubungi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail