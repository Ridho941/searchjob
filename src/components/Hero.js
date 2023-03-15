import React from 'react'

export default function Hero() {
    return (
        <section>
            <div className=" mt-8 relative h-[600px]   w-full bg-red-500/20 sm:h-[55vh] md:h-[440px]">
                {/*<img src="https://verihubs.com/wp-content/uploads/2022/12/corporate-identity-2.jpg" layout="fill" objectFit="cover" />*/}

                <div className='absolute inset-0 bg-neutral-900/70 py-10 '>
                    <diV className='mx-4 mt-16 text-center flex flex-col items-center'>
                        <h1 className='text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl'>Cari Lowongan <span className='text-green-600'>kerja</span>?</h1>
                        <span className='text-xl text-white sm:text-2xl'>Temukan pekerjaanmu selanjutnya </span>
                        <div className='mt-8'></div>
                        <div className='flex items-center overflow-hidden rounded-xl bg-white shadow-md group-focus-within:ring-2 group-focus-within:ring-green-400 group-focus-within:ring-offset-2 group-focus-within:ring-offset-transparent'>
                            <span className="pointer-events-none block px-2 text-slate-400 group-focus-within:text-indigo-800">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </span>
                            <input
                                className="w-full appearance-none border-transparent p-2 text-xl leading-6 text-slate-900 placeholder-slate-400 focus:border-transparent focus:ring-0"
                                type="text"
                                aria-label="Search input"
                                placeholder="Nama Pekerjaan..." />
                            <button
                                type="submit"
                                className="hidden h-11 shrink-0 bg-green-600 px-2 font-semibold text-white transition-colors duration-500 ease-in-out hover:bg-green-700 sm:block"
                            >
                                Cari Sekarang
                            </button>
                        </div>
                    </diV>

                </div>

            </div >
            
        </section >

    )
}
