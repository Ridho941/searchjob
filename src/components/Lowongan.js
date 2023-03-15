import React from 'react'

function Lowongan() {
  return (
    <section>
      <div className="mb-4 px-10 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Lowongan terdekat</h2>
        <button className="border border-green-600  hover:scale-110  rounded-full py-2 px-6">
          See All
        </button>
      </div>

      <div className='py-10 px-10  ml-8 grid grid-cols-4  gap-5 lg:gap-12 sm:grid-cols-2 lg:grid-cols-4'>

        <div className='relative overflow-hidden w-72 rounded-2xl bg-white shadow-md hover:shadow-lg dark:border-slate-800 dark:bg-slate-700'>
          <img src="https://verihubs.com/wp-content/uploads/2022/12/corporate-identity-2.jpg" className=' w-72 h-48' />
          <div className="flex flex-col border-t p-4 dark:border-slate-600">
            <h5 className="block truncate text-xl font-semibold capitalize">uermweur</h5>
            <span className="block truncate text-slate-500 dark:text-slate-400">
              apa
            </span>
          </div>
        </div>

        <div className='relative overflow-hidden w-72 rounded-2xl bg-white shadow-md hover:shadow-lg dark:border-slate-800 dark:bg-slate-700'>
          <img src="https://verihubs.com/wp-content/uploads/2022/12/corporate-identity-2.jpg" className=' w-72 h-48' />
          <div className="flex flex-col border-t p-4 dark:border-slate-600">
            <h5 className="block truncate text-xl font-semibold capitalize">uermweur</h5>
            <span className="block truncate text-slate-500 dark:text-slate-400">
              apa
            </span>
          </div>
        </div>

        <div className='relative overflow-hidden w-72 rounded-2xl bg-white shadow-md hover:shadow-lg dark:border-slate-800 dark:bg-slate-700'>
          <img src="https://verihubs.com/wp-content/uploads/2022/12/corporate-identity-2.jpg" className=' w-72 h-48' />
          <div className="flex flex-col border-t p-4 dark:border-slate-600">
            <h5 className="block truncate text-xl font-semibold capitalize">uermweur</h5>
            <span className="block truncate text-slate-500 dark:text-slate-400">
              apa
            </span>
          </div>
        </div>

        <div className='relative overflow-hidden w-72 rounded-2xl bg-white shadow-md hover:shadow-lg dark:border-slate-800 dark:bg-slate-700'>
          <img src="https://verihubs.com/wp-content/uploads/2022/12/corporate-identity-2.jpg" className=' w-72 h-48' />
          <div className="flex flex-col border-t p-4 dark:border-slate-600">
            <h5 className="block truncate text-xl font-semibold capitalize">uermweur</h5>
            <span className="block truncate text-slate-500 dark:text-slate-400">
              apa
            </span>
          </div>
        </div>

      </div>



    </section >
  )
}

export default Lowongan