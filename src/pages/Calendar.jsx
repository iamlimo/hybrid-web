import React from 'react'
import Navbar from './Navbar'
import add from '../icon/add.svg'
import search from '../icon/search.svg'

const Calendar = () => {

  return (
    <div className='flex text-primary'>
        <Navbar />
    <div className='flex flex-col w-full'>
    <div className='flex'>
        <div className='w-full lg:w-3/5 ml-16 lg:ml-64'>
            <section className='inline-flex shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] py-8 p-6 w-full justify-between'>
            <h1 className='self-center'>Event & Calendar</h1>
            <div>
                <button className="bg-primary rounded-lg flex mt-2 text-[#fff] h-9 p-2 text-sm">
                    Add New Event
                    <img src={add} alt='add' className='w-4 h-4 ml-2 text-xs'/>
                </button>
            <div/>
            </div>
            </section>

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

export default Calendar