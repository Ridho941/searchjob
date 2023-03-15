import React from 'react'

function Login() {
    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100 rounded-lg'>
            <div class="px-8 py-6 mt-4 rounded-lg text-left bg-white shadow-lg">
                <h3 class="text-2xl font-bold text-center">Login to your account</h3>
                <form action="">
                    <div class="mt-4">
                        <div>
                            <label class="block" for="email">Email</label>
                            <input type="text" placeholder="Email"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            <span class="text-xs tracking-wide text-red-600">Email field is required </span>
                        </div>
                    </div>
                    <div class="mt-4">
                        <div>
                            <label class="block">Password</label>
                            <input type="password" placeholder="Password"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />

                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-4">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-600 dark:text-gray-400">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm text-blue-600 hover:underline">Forgot password?</a>

                  </div>
                  <button type="submit" class=" w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Sign in</button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
                      Don’t have an account yet? <a href="#" class="font-medium text-primary-600 text-blue-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
                
                </form>
            </div>
        </div>
    )
}

export default Login