import React from 'react'
import bookshelf from '../icon/bookshelf.svg'
import calendar from '../icon/calendar.svg'
import dashboard from '../icon/dashboard.svg'
import logout from '../icon/logout.svg'
import messages from '../icon/messages.svg'
import settings from '../icon/settings.svg'
import subscription from '../icon/subscription.svg'
import users from '../icon/users.svg'

const SideNav = () => {
  return (
    <div className='flex flex-col justify-center p-28 bg-hybrid gap-4 mt-12'>
        <img src={dashboard} alt='dashboard'/>
        <img src={users} alt='users'/>
        <img src={subscription} alt='subscription'/>
        <img src={bookshelf} alt='bookshelf'/>
        <img src={messages} alt='messages'/>
        <img src={calendar} alt='calendar'/>
        <img src={settings} alt='settings'/>
        <img src={logout} alt='logout'/>
    </div>
  )
}

export default SideNav