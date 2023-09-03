import React, { useState } from 'react'
import bookshelf from '../icon/bookshelf.svg'
import calendar from '../icon/calendar.svg'
import dashboard from '../icon/dashboard.svg'
import logout from '../icon/logout.svg'
import messages from '../icon/messages.svg'
import settings from '../icon/settings.svg'
import subscription from '../icon/subscription.svg'
import users from '../icon/users.svg'
import search from '../icon/search.svg'
import notification from '../icon/notification.svg'
import flag from '../icon/flag.svg'
import joseph from '../icon/joseph.jpg'
import user from '../icon/user.svg'
import author from '../icon/author.svg'
import book from '../icon/book.svg'
import user_check from '../icon/user_check.svg'
import cross from '../icon/cross.svg'
import hambuger from '../icon/hambuger.svg'

const HomePage = () => {
  const [open, setOpen] = useState(true)

  const Navbar = [
    {name: 'Dashboard', src: dashboard,},
    {name: 'Users', src: users,},
    {name: 'Subscription', src: subscription,},
    {name: 'Bookshelf', src: bookshelf,},
    {name: 'Messages', src: messages,},
    {name: 'Calendar', src: calendar,},
    {name: 'Settings', src: settings,},
    {name: 'Logout', src: logout,},
]

  const Stats = [
    {name: 'Users', src: user, num: 300},
    {name: 'Subscribers', src: user_check, num: 250},
    {name: 'Authors', src: author, num: 80},
    {name: 'Books', src: book, num: 1000+''},
  ]


  return (
    <div className='flex'>
      <div className={`min-h-screen fixed bg-hybrid ${open ? 'w-64' : 'w-16'} min-w-16 z-10`}>
        <div className='flex justify-end'>
          <img className='cursor-pointer md:hidden' src={hambuger} alt='hambuger' onClick={() => setOpen(!open)}/>
         </div>
        <ul className='pt-6'>
          {Navbar.map((icon, index) => (
            <li key={index} className='list-none flex gap-x-2 p-4 justify-start md:justify-normal'>
              <img className='w-5 justify-center items-center' src={`${icon.src}`} alt={icon.name}/>
              <span className={`text-xl font-normal ${open ? 'block' : 'hidden'}`}>{icon.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`w-full ${open ? 'ml-64' : 'ml-16' }`}>
        <section className='inline-flex shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] py-8 p-6 w-full justify-between'>
            <h1 className='self-center'>Dashboard</h1>
            <div className='flex gap-6'>
              <div className='flex ml-auto relative'>
                <input type="text" className='border-[1px] border-[rgba(0,0,0,0.30)] rounded-[32px] h-[40px] pl-14'/>
                <img src={search} alt='search' className='absolute left-[27px] top-[10px]'/>
                <p className='absolute right-[17px] top-[9px] font-sm font-medium'>Search</p>
              </div>
              <img src={flag} alt="flag" className='hidden md:block'/>
              <img src={notification} alt="notification"  className='hidden md:block'/>
              <img src={joseph} alt="joseph" className='w-12 h-12 rounded-full' />
            <div/>
          </div>
        </section>

        <section className='flex flex-wrap gap-8 md:gap-[67px] mt-[32px] pl-6'>
          {Stats.map((stat, index) =>(
            <div key={index} className="flex justify-between w-48 md:w-[251px] pl-[22px] pr-[18px] pb-[18px] pt-[22px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">
              <div className="flex flex-col">
                <span>{stat.num}</span>
                <span>{stat.name}</span>
              </div>
              <img src={stat.src} alt='user'/>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default HomePage