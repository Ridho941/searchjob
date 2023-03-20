import React , { useState }  from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Flash from '../'

function Verif() {
    const [code, setCode] = useState("");

    const history = useHistory();

    console.log(sessionStorage.getItem("token"));

    const verifHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        await axios.post('http://103.179.86.77:3030/wa-code', 
            {
                    "code": code,
            },
            {
                'headers': {
                  'Authorization': 'Bearer ' + sessionStorage.getItem("token")
                }
            }
        )
        .then((response) => {
            console.log(response);
            // sessionStorage.setItem('token', response.data.token);
            // if (response.data.verifikasi == false) {
            //     history.push('/verif');
            // } else {
            //     history.push('/');
            // }
            // console.log(response);
        }).catch((error) => {
            console.log(error.response.data)
        })
    }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Verifikasi Whatsapp
                            <p className='text-lg font-light'>Konfirmasi Kode</p>
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={verifHandler}>
                            <div>
                                <input 
                                className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Masukan Kode" 
                                required="" 
                                value={code} onChange={(e) => setCode(e.target.value)}
                                />
                                <a href='/resend' className='underline text-green-600'>Resend Kode</a>
                            </div>
                            <button type="submit" className="text-white bg-green-400 hover:scale-105 duration-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 text-center">Verifikasi</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Verif