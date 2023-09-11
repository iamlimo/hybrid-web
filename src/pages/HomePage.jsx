import React from 'react'
import search from '../icon/search.svg'
import notification from '../icon/notification.svg'
import flag from '../icon/flag.svg'
import joseph from '../icon/joseph.jpg'
import user from '../icon/user.svg'
import author from '../icon/author.svg'
import book from '../icon/book.svg'
import user_check from '../icon/user_check.svg'
import Chart from '../components/Chart'
import Table from '../components/Table'
import Navbar from './Navbar'

const HomePage = () => {

  const Stats = [
    {name: 'Users', src: user, num: 300},
    {name: 'Subscribers', src: user_check, num: 250},
    {name: 'Authors', src: author, num: 80},
    {name: 'Books', src: book, num: '1000+'},
  ]


  return (
    <div className='flex text-primary'>
      <Navbar/>

      <div className='w-full ml-16 lg:ml-64'>
        <section className='inline-flex shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] py-8 p-6 w-full justify-between'>
            <h1 className='self-center'>Dashboard</h1>
            <div className='flex gap-6'>
              <div className='ml-auto relative hidden sm:flex'>
                <input type="text" className='border-[1px] border-[rgba(0,0,0,0.30)] rounded-[32px] h-[40px] pl-14 '/>
                <img src={search} alt='search' className='absolute left-[27px] top-[10px]'/>
                <p className='absolute right-[17px] top-[9px] font-sm font-medium'>Search</p>
              </div>
              <img src={flag} alt="flag" className='hidden md:block'/>
              <img src={notification} alt="notification"  className='hidden md:block'/>
              <img src={joseph} alt="joseph" className='w-12 h-12 rounded-full' />
            <div/>
          </div>
        </section>

        <section className='flex flex-wrap gap-8 md:gap-[67px] mt-[32px] pl-[20px]'>
          {Stats.map((stat, index) =>(
            <div key={index} className="flex justify-between w-96 md:w-[251px] pl-[22px] pr-[18px] pb-[18px] pt-[22px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">
              <div className="flex flex-col">
                <span>{stat.num}</span>
                <span>{stat.name}</span>
              </div>
              <img src={stat.src} alt='user'/>
            </div>
          ))}
        </section>

        <Chart/>
        <Table/>

      </div>
    </div>
  )
}

export default HomePage