import React from 'react'

export default function Footer() {
    return (
        <div className="p-10 mt-10 bg-gray-800 text-gray-200">
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-2'>
                    <div className='mb-5'>
                        <h4 className='text-2xl pb-4'>Company</h4>
                        <p className='text-gray-500'>
                            Jl. Panglima Btur No.24,
                            Kecamatan Utara, Kota Banjarbaru,
                            kalimantan selatan
                            <br />
                            <strong>Phone:</strong><a href="https://api.whatsapp.com/send?phone=+6281254617551&text=Hallo%20Neumedira!" className="text-center hover:text-blue-500 duration-300">0812-5461-7551</a>
                            <br /><strong>whatsapp:</strong><a href="https://neumedira.com/tel:+6281254617551" className="text-center hover:text-blue-500 duration-300">0812-5461-7551</a>
                            <br /><strong>Email:</strong><a href="mailto:halo@neumedira.com" className="text-center hover:text-blue-500 duration-300">halo@proximity.com</a>
                        </p>
                    </div>
                    <div className='mb-5'>
                        <h4 className='pb-4'>Useful Links</h4>
                        <ul className='text-gray-500'>
                            <li className='pb-4'><a href="" className="text-center hover:text-blue-500 duration-300">Home</a></li>
                            <li className='pb-4'><a href="" className="text-center hover:text-blue-500 duration-300">About</a></li>
                            <li className='pb-4'><a href="" className="text-center hover:text-blue-500 duration-300">Services</a></li>
                            <li className='pb-4'><a href="" className="text-center hover:text-blue-500 duration-300">Terms Of Services</a></li>
                            <li className='pb-4'><a href="" className="text-center hover:text-blue-500 duration-300">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className='mb-5'>
                        <h4 className='pb-4'>Ous Service</h4>
                        <ul className='text-gray-500'>
                            <li className='pb-4'><a href="" className="text-center hover:text-blue-500 duration-300">Web design</a></li>
                            <li className='pb-4'><a href="" className="text-center hover:text-blue-500 duration-300">Web Development</a></li>
                            <li className='pb-4'><a href="" className="text-center hover:text-blue-500 duration-300">Product Management</a></li>
                            <li className='pb-4'><a href="" className="text-center hover:text-blue-500 duration-300">Marketing</a></li>
                            <li className='pb-4'><a href="" className="text-center hover:text-blue-500 duration-300">Grafic</a></li>
                        </ul>
                    </div>
                    <div className='mb-5'>
                        <h4 className='pb-4'>Sosial Media</h4>
                        <ul className='text-gray-500'>
                            <li className='pb-4'><a href="" className="text-center hover:text-blue-500 duration-300">Instagram</a></li>
                            <li className='pb-4'><a href="https://github.com/Ridho941/searchjob" className="text-center hover:text-blue-500 duration-300">Github</a></li>
                            <li className='pb-4'><a href="" className="text-center hover:text-blue-500 duration-300">Facebook</a></li>

                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}
