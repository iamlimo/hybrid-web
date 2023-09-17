import React from 'react'
import Navbar from './Navbar'
import joseph from '../icon/joseph.jpg'
import add from '../icon/add.svg'
import search from '../icon/search.svg'
import Table from '../components/Table'
import PercentageChart from '../components/PercentageChart'

const BookShelf = () => {

    const data = [
        { name: 'Red', value: 50 },
        { name: 'Transparent', value: 50, fill: 'rgba(240, 103, 3, 1)' },
      ];
  return (
    <div className='flex text-primary'>
        <Navbar />
    <div className='flex flex-col w-full'>
    <div className='flex'>
        <div className='w-full lg:w-3/5 ml-16 lg:ml-64'>
            <section className='inline-flex shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] py-8 p-6 w-full justify-between'>
            <h1 className='self-center'>Bookshelf</h1>
            <div className='flex gap-6'>
                <button className="bg-primary rounded-lg flex mt-2 text-[#fff] h-9 p-2 text-sm">
                    Add New Book
                    <img src={add} alt='add' className='w-4 h-4 ml-2 text-xs'/>
                </button>
                <img src={joseph} alt="joseph" className='w-12 h-12 xl:hidden rounded-full' />
            <div/>
            </div>
            </section>

            <div className='ml-5 w-11/12 lg:w-auto relative flex mt-12 justify-center'>
            <input type="text" className='border-[1px] w-full border-[rgba(0,0,0,0.30)] rounded-[32px] h-[40px] pl-14 '/>
            <img src={search} alt='search' className='absolute left-[27px] top-[10px]'/>
            <p className='absolute right-[17px] top-[9px] font-sm font-medium'>Search</p>
            </div>

            <div className="flex justify-center text-sm items-center mt-12">
                <button className="bg-primary text-white px-12 py-2 rounded-lg">E-book</button>
                <button className="text-primary px-8 py-2 ml-5 border border-primary rounded-lg">Audio Book</button>
            </div>
        </div>

    <div className='hidden xl:flex xl:flex-col xl:w-1/5 ml-6 xl:p-6 xl:pr-0 shadow-[-2px_2px_4px_0px_rgba(0,0,0,0.25)]'>
        <div className="flex justify-between w-full">
            <h1>Statistics</h1>
            <p>2023</p>
        </div>
        <div className='w-full h-48'>
            <PercentageChart className='items-center' fill='rgba(181, 18, 18, 1)' text='' data={data} innerRadius={70} outerRadius={80}/>
        </div>
        <div className="flex justify-center">
            <div className="flex items-center">
                <span className="w-5 h-2.5 rounded-lg bg-[rgba(161,18,18,1)]"></span>
                <h1 className='text-xs ml-2'>Audio Book</h1>
            </div>
            <div className="flex items-center ml-4">
                <span className="w-5 h-2.5 rounded-lg bg-[#F06703]"></span>
                <h1 className='text-xs ml-2'>E-Book</h1>
            </div>
        </div>
    </div>
    </div>

    <div className='ml-16 lg:ml-64'>
       <Table/>
    </div>


  </div>


    </div>
  )
}

export default BookShelf