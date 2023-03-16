import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Formlowongan() {
  return (
<>
      <Navbar />
      <div className="container mx-auto py-14 px-80" >
        <div class="mt-10 sm:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-6">

            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">

                <div class="overflow-hidden shadow sm:rounded-md">
                  <div class="bg-ehite px-10 p-10 sm:p-10">
                    <h3 class="font-bold text-[25px] pb-10 text-center leading-6 text-gray-900">Form Lowongan</h3>
                    <div class="grid grid-cols-3 gap-4 px-6">

                      <div class="col-span-6 sm:col-span-3">
                        <label class="block text-sm font-medium leading-6 text-gray-900">Nama Perusahaan</label>
                        <input type="text" name="nama lengkap" class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 bg-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
                      </div>
                      <div class="col-span-6 sm:col-span-3">
                        <label class="block text-sm font-medium leading-6 text-gray-900">Nomor Telphone</label>
                        <input name="No Telphone" class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 bg-gray-50 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
                      </div>
                      <div class="col-span-6 sm:col-span-4">
                        <label class="block text-sm font-medium leading-6 text-gray-900">Lokasi</label>
                        <input type="text" name="lokasi" class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm bg-gray-50 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
                      </div>
                      <div class="col-span-6 sm:col-span-4">
                        <label class="block text-sm font-medium leading-6 text-gray-900">Pendidikan terkahir</label>
                        <input type="text" name="pendidikan terkahir" class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm bg-gray-50 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
                      </div>
                      <div class="col-span-6 sm:col-span-4">
                        <label class="block text-sm font-medium leading-6 text-gray-900">Keahlian Khusus</label>
                        <input type="text" name="keahlian Khusus" class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm bg-gray-50 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
                      </div>
                      <div class="col-span-6 sm:col-span-4">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload file</label>
                        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                      </div>
                      <div class="col-span-6 sm:col-span-4">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Keterangan</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-600 focus:border-green-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-600 dark:focus:border-green-600" placeholder="keterangan..."></textarea>
                      </div>
                      {/* <div class="col-span-6">
                  <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                  <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
  
                <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                  <input type="text" name="city" id="city" autocomplete="address-level2" class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
  
                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                  <input type="text" name="region" id="region" autocomplete="address-level1" class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
  
                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                  <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
  </div>*/}
                    </div>
                  </div>
                  <div class="bg-green-100 px-4 py-3 text-right sm:px-8 space-x-6">
                    <Link to='/profile' className="bg-red-500 rounded-md text-white py-2 px-6  hover:scale-105 duration-300">Back</Link>
                    <button type="submit" class="inline-flex justify-center rounded-md bg-green-600 py-2 px-6 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Save</button>


                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>  )
}

export default Formlowongan