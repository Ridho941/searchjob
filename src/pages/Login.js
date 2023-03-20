import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Login() {

    const [phone_number, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const loginHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
    
        // formData.append('phone_number', phone_number);
        // formData.append('password', password);
    
        await axios.post('http://103.179.86.77:3030/login', {
                "phone_number": phone_number,
                "password": password
        })
          .then((response) => {
            sessionStorage.setItem('token', response.data.token);
            if (response.data.verifikasi == false) {
                history.push('/verif');
            } else {
                history.push('/');
            }
            console.log(response);
          }).catch((error) => {
            console.log(error.response.data)
          })
      }

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100 rounded-lg'>
            <div className="px-8 py-6 mx-4 mt-4 text-left bg-white rounded-lg shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
                <h3 className="text-2xl font-bold text-center">Masuk ke akun anda</h3>
                <form action=""  onSubmit={loginHandler}>
                    <div className="mt-4">
                        <div>
                            <label className="block" htmlFor="email">Nomer Handphone</label>
                            <input type="text" placeholder="Nomer Handphone"
                                value={phone_number} onChange={(e) => setPhone(e.target.value)}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            {/* <span className="text-xs tracking-wide text-red-600">Email field is required </span> */}
                        </div>
                    </div>
                    <div className="mt-4">
                        <div>
                            <label className="block">Password</label>
                            <input type="password" placeholder="Password"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />

                        </div>
                    </div>
                    <div className="items-end mt-4">
                      <a href="#" className="text-sm text-green-600 hover:underline">Forgot password?</a>
                  </div>
                  <button type="submit" className=" w-full px-6 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-900">Masuk</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
                      Apakah anda belum punya akun? <a href="/register" className="font-medium text-primary-600 text-green-600 hover:underline dark:text-primary-500">Daftar</a>
                  </p>
                
                </form>
            </div>
        </div>
    )
}

export default Login