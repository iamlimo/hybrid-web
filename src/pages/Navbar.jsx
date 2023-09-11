import React, { useState } from 'react'
import bookshelf from '../icon/bookshelf.svg'
import calendar from '../icon/calendar.svg'
import dashboard from '../icon/dashboard.svg'
import logout from '../icon/logout.svg'
import messages from '../icon/messages.svg'
import settings from '../icon/settings.svg'
import subscription from '../icon/subscription.svg'
import users from '../icon/users.svg'
import hambuger from '../icon/hambuger.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)

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

  return (
    <>
    <div className={`min-h-screen fixed block lg:hidden bg-hybrid ${open ? 'w-64' : 'w-16'} min-w-16 z-10`}>
        <div className='flex justify-end'>
          <img className='cursor-pointer lg:hidden' src={hambuger} alt='hambuger' onClick={() => setOpen(!open)}/>
         </div>
        <ul className='pt-6'>
          {Navbar.map((icon, index) => (
              <Link key={index}  to={`/${icon.name}`}>
              <li className='list-none flex gap-x-2 p-4 justify-start md:justify-normal'>
                <img className='w-5 justify-center items-center' src={`${icon.src}`} alt={icon.name}/>
                <span className={`text-xl font-normal ${open  ? 'block' : 'hidden'}`}>{icon.name}</span>
              </li>
              </Link>
            )
          )}
          </ul>
      </div>

      <div className={`min-h-screen fixed hidden lg:block bg-hybrid w-64`}>
        <ul className='pt-24'>
          {Navbar.map((icon, index) => (
            <Link key={index}  to={`/${icon.name}`}>
            <li key={index} className='list-none flex gap-x-2 p-4 justify-start md:justify-normal'>
              <img className='w-5 justify-center items-center' src={`${icon.src}`} alt={icon.name}/>
              <span className={`text-xl font-normal`}>{icon.name}</span>
            </li>
            </Link>
          ))}
        </ul>
      </div>
      </>
      )}

export default Navbar