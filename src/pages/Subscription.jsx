import React from 'react'
import Navbar from './Navbar'
import joseph from '../icon/joseph.jpg'
import add from '../icon/add.svg'
import search from '../icon/search.svg'
import { BarChart } from '../components/BarChart'
import PercentageChart from '../components/PercentageChart'

const Subscription = () => {

    const data = [
        { name: 'Declined', value: 50 },
        { name: 'Pending', value: 50, fill: 'rgba(240, 103, 3, 1)' },
        { name: 'Successful', value: 40, fill: 'rgba(151, 71, 255, 1)' },
      ];

  return (
    <div className='flex text-primary'>
      <Navbar />

      <div className='w-full lg:w-3/5 ml-16 lg:ml-64'>
        <section className='inline-flex shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] py-8 p-6 w-full justify-between'>
                <h1 className='self-center'>Subscription</h1>
                <div className='flex gap-6'>
                <div className="bg-primary rounded-lg flex mt-2 text-[#fff] h-9 p-2 text-sm">
                    Add New Transaction
                    <img src={add} alt='add' className='w-4 h-4 ml-2 text-xs'/>
                </div>
                <img src={joseph} alt="joseph" className='w-12 h-12 xl:hidden rounded-full' />
                <div/>
            </div>
        </section>

        <div className='w-[calc(100vw-74px)] lg:w-full mt-6 overflow-auto whitespace-nowrap'>
         <table className="w-full text-left text-sm font-light">
          <thead className="text-sm">
            <tr>
              <th scope="col" className="px-6 py-4 font-normal">Name</th>
              <th scope="col" className="px-6 py-4 font-normal">Email</th>
              <th scope="col" className="px-6 py-4 font-normal">Date</th>
              <th scope="col" className="px-6 py-4 font-normal">Transaction ID</th>
              <th scope="col" className="px-6 py-4 font-normal">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
            </tr>
          </tbody>
        </table>
        </div>
        </div>

        <div className="hidden xl:flex xl:flex-col xl:w-2/12 xl:p-6">
            <div className='ml-auto relative hidden sm:flex'>
                <input type="text" className='border-[1px] border-[rgba(0,0,0,0.30)] rounded-[32px] h-[40px] pl-14 '/>
                <img src={search} alt='search' className='absolute left-[27px] top-[10px]'/>
                <p className='absolute right-[17px] top-[9px] font-sm font-medium'>Search</p>
              </div>
              <div className='w-72 mt-6 ml-auto relative overflow-auto whitespace-nowrap'>
                <table className="w-full text-left text-sm font-light">
                <thead className="text-sm">
                    <tr>
                    <th scope="col" className="px-3 py-3 font-normal">Name</th>
                    <th scope="col" className="px-3 py-3 font-normal">Transaction ID</th>
                    <th scope="col" className="px-3 py-3 font-normal">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="whitespace-nowrap px-3 py-3">Adventure</td>
                    <td className="whitespace-nowrap px-3 py-3">1122334455</td>
                    <td className="whitespace-nowrap px-3 py-3"><div className='w-4 h-4 bg-[rgba(181,18,18,1)]'></div></td>
                    </tr>
                    <tr>
                    <td className="whitespace-nowrap px-3 py-3">Adventure</td>
                    <td className="whitespace-nowrap px-3 py-3">1122334455</td>
                    <td className="whitespace-nowrap px-3 py-3"><div className='w-4 h-4 bg-[rgba(181,18,18,1)]'></div></td>
                    </tr>
                    <tr>
                    <td className="whitespace-nowrap px-3 py-3">Adventure</td>
                    <td className="whitespace-nowrap px-3 py-3">1122334455</td>
                    <td className="whitespace-nowrap px-3 py-3"><div className='w-4 h-4 bg-[rgba(181,18,18,1)]'></div></td>
                    </tr>
                    <tr>
                    <td className="whitespace-nowrap px-3 py-3">Adventure</td>
                    <td className="whitespace-nowrap px-3 py-3">1122334455</td>
                    <td className="whitespace-nowrap px-3 py-3"><div className='w-4 h-4 bg-[rgba(181,18,18,1)]'></div></td>
                    </tr>
                </tbody>
                </table>
            </div>
            <div className='w-72 flex flex-col mt-4'>
                <div className="flex justify-between ml-5">
                    <h1 className="text-primary text-lg font-medium">Monthly Performance</h1>
                </div>
                <BarChart/>
            </div>


            <div className='w-full h-40 mt-5'>
                <div className="flex justify-between ml-5 w-72">
                    <h1 className='text-xl font-medium'>Statistics</h1>
                    <p>2023</p>
                </div>
                <div className='w-72 flex h-48'>
                <PercentageChart className='items-center' fill='rgba(181, 18, 18, 1)' text='' data={data} innerRadius={70} outerRadius={80}/>
                <div className="flex flex-col justify-center">
                    <div className="flex items-center">
                        <span className="w-5 h-2.5 rounded-lg bg-[rgba(161,18,18,1)]"></span>
                        <h1 className='text-xs ml-2'>Declined</h1>
                    </div>
                    <div className="flex items-center mt-4">
                        <span className="w-5 h-2.5 rounded-lg bg-[#F06703]"></span>
                        <h1 className='text-xs ml-2'>Pending</h1>
                    </div>
                    <div className="flex items-center mt-4">
                        <span className="w-5 h-2.5 rounded-lg bg-[#9747FF]"></span>
                        <h1 className='text-xs ml-2'>Successful</h1>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscription