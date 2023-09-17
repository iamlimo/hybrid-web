import React from 'react'
import Navbar from './Navbar'
import search from '../icon/search.svg'

const Message = () => {


  return (
    <div className='flex text-primary'>
      <Navbar/>

      <div className='w-full ml-16 lg:ml-64'>
        <section className='inline-flex shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] py-8 p-6 w-full'>
            <h1 className='self-center'>Inbox</h1>
        </section>

        <div className='ml-5 w-11/12 lg:w-4/6 relative flex mt-12 justify-center'>
            <input type="text" className='border-[1px] w-full border-[rgba(0,0,0,0.30)] rounded-[32px] h-[40px] pl-14 '/>
            <img src={search} alt='search' className='absolute left-[27px] top-[10px]'/>
            <p className='absolute right-[17px] top-[9px] font-sm font-medium'>Search</p>
            </div>
      </div>
    </div>
  )
}

export default Message