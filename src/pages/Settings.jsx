import React from 'react'
import Navbar from './Navbar'
import search from '../icon/search.svg'

const Settings = () => {

  return (
    <div className='flex text-primary'>
        <Navbar />
    <div className='flex flex-col w-full'>
    <div className='flex'>
        <div className='w-full lg:w-3/5 ml-16 lg:ml-64'>
            <div className='ml-5 w-11/12 lg:w-auto relative flex mt-12 justify-center'>
            <input type="text" className='border-[1px] w-full border-[rgba(0,0,0,0.30)] rounded-[32px] h-[40px] pl-14 '/>
            <img src={search} alt='search' className='absolute left-[27px] top-[10px]'/>
            <p className='absolute right-[17px] top-[9px] font-sm font-medium'>Search</p>
            </div>
        </div>
  </div>
    </div>
    </div>
  )
}

export default Settings