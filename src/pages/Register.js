import React from 'react'

function Register() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='px-8 py-6 mx-4 mt-4 text-left bg-white rounded-lg shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3'>
        <h3 class="text-2xl font-bold text-center">Buat Akun</h3>
        <form action="">
        <div className='mt-4'>
            <label className="block" for="Name">No Telpon</label>
            <input type="text" placeholder="No telpon"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
          </div>
          <div className='mt-4'>
            <label className="block" for="Name">Username</label>
            <input type="text" placeholder="Username"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
          </div>
          
          <div class="mt-4">
            <label class="block">Password</label>
            <input type="password" placeholder="Password"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
          </div>
          <div class="mt-4">
            <label class="block">Confirm Password</label>
            <input type="password" placeholder="Password"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
          </div>
          
          <span class="text-xs text-red-400">Password must be same!</span>
          <div class="mt-4">
            <label class="block" for="email">Email</label>
            <input type="text" placeholder="Email"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
          </div>
          <div class="flex items-center justify-between mt-4">
          <div class="flex ">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-blue-600 text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
            
          </div>
          <button class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Create
              Account</button>
              <p class="text-sm mt-4 font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline text-blue-600 dark:text-primary-500">Login here</a>
                  </p>
        </form>
      </div>
    </div>
  )
}

export default Register