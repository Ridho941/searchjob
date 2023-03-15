import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Register() {

  const [nama, setNama] = useState("");
  const [phone_number, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [file, setPhoto] = useState("");

  const history = useHistory()

  const registerHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('nama', nama);
    formData.append('phone_number', phone_number);
    formData.append('password', password);
    formData.append('email', email);
    formData.append('photo', file);

    await axios.post('http://103.179.86.77:4567/api/registermitra', formData)
      .then((response) => {
        sessionStorage.setItem('token', response.data.token);
        history.push('/verif');
        console.log(response);
      }).catch((error) => {
        console.log(error.response.data)
      })
  }

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setPhoto(file)
}


  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='px-8 py-6 mx-4 mt-4 text-left bg-white rounded-lg shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3'>
        <h3 className="text-2xl font-bold text-center">Buat Akun</h3>
        <form action="" onSubmit={registerHandler}>
          <div className='mt-4'>
            <label className="block">No Telepon</label>
            <input type="text" placeholder="No telepon" value={phone_number} onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
          </div>
          <div className='mt-4'>
            <label className="block">Username</label>
            <input type="text" placeholder="Username" value={nama} onChange={(e) => setNama(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
          </div>

          <div className="mt-4">
            <label className="block">Password</label>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
          </div>
          {/* <div className="mt-4">
            <label className="block">Konfirmasi Password</label>
            <input type="password" placeholder="Password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
          </div> */}

          {/* <span className="text-xs text-red-400">Password must be same!</span> */}
          <div className="mt-4">
            <label className="block" >Email</label>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
          </div>

          <div className="mt-4">
            <label className="block" >Masukkan Photo</label>
            <input type="file" placeholder="Email" onChange={(e) => onImageUpload(e)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex ">
              <div className="flex items-center h-5">
                <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
              </div>
              <div className="ml-3 text-sm">
                <label className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-blue-600 text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
              </div>
            </div>

          </div>
          <button type='submit' className="w-full px-6 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-blue-900">Buat Akun</button>
          <p className="text-sm mt-4 font-light text-gray-500 dark:text-gray-400">
            Telah mempunyai akun? <a href="/login" className="font-medium text-primary-600 hover:underline text-blue-600 dark:text-primary-500">Masuk disini</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register