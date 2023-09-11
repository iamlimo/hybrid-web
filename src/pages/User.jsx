import React from 'react'
import Navbar from './Navbar'
import joseph from '../icon/joseph.jpg'
import add from '../icon/add.svg'
import message from '../icon/Message.svg'
import location from '../icon/Location.svg'
import call from '../icon/Call.svg'
import { BarChart } from '../components/BarChart'
import PercentageChart from '../components/PercentageChart'

const User = () => {
  return (
    <div className='flex text-primary'>
      <Navbar />

      <div className='w-full lg:w-3/5 ml-16 lg:ml-64'>
        <section className='inline-flex shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] py-8 p-6 w-full justify-between'>
                <h1 className='self-center'>Reader / Author</h1>
                <div className='flex gap-6'>
                <div className="bg-primary flex mt-2 text-[#fff] h-9 p-2 text-sm">
                    Add New Reader
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
              <th scope="col" className="px-6 py-4 font-normal">Phone</th>
              <th scope="col" className="px-6 py-4 font-normal">Gender</th>
            </tr>
          </thead>
          <tbody>
            <tr>
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
            </tr>
            <tr>
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
            </tr>
            <tr>
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
            </tr>
          </tbody>
        </table>
        </div>
    </div>

        <div className="hidden xl:flex xl:flex-col xl:w-2/12 xl:ml-20">
            <div className="flex flex-col items-center p-12 pb-6 w-full border-b-[0.5px] border-[rgba(19,56,190,0.1)]">
                <img src={joseph} alt="joseph" className='w-14 h-14
                 rounded-full'/>
                <h1 className='font-bold text-xl'>John Doe</h1>
                <p>UI/IX Designer</p>
            </div>
            <div className="flex flex-col w-full p-6 pb-2">
                <h1 className='text-lg font-medium'>Contact Info</h1>
                <div className="flex border-b-[0.5px] border-[rgba(19,56,190,0.1)] py-4">
                    <img src={message} alt="message" className='mr-2'/>
                    <p>blueprint@gmail.com</p>
                </div>
                <div className="flex border-b-[0.5px] border-[rgba(19,56,190,0.1)] py-4">
                    <img src={call} alt="call" className='mr-2' />
                    <p>+23433757005</p>
                </div>
                <div className="flex py-4">
                    <img src={location} alt="location" className='mr-2' />
                    <p>1b, akinyemi avenue<br/>Lekki</p>
                </div>
            </div>
            <div>
                <BarChart/>
            </div>
            <div className='flex w-full h-40'>
              <PercentageChart fill='rgba(181, 18, 18, 1)' text='70%'/>
              <PercentageChart fill='rgba(255, 214, 114, 1)' text='60%' />
            </div>

        </div>



    </div>
  )
}

export default User