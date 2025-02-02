import { BarChart3, BookmarkCheck, CalendarSearch, ChevronFirst, Cog, House, LogOut, NotebookText, User } from 'lucide-react'
import React from 'react'
import SidebarItem from './SidebarItem'

const Sidebar = () => {
  return (
    <div className='h-screen w-52'>
        <div className='h-full flex flex-col bg-white border-r-0 shadow-sm'>
            <div className='p-4 pb-2 flex justify-end items-center'>
                <button className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
                    <ChevronFirst />
                </button>
            </div>
            <SidebarItem icon={<House size={20}/>} text='Home' active />
            <SidebarItem icon={<User size={20}/>} text='Profile'/>
            <SidebarItem icon={<BookmarkCheck size={20}/>} text='Bookmarks'/>
            <SidebarItem icon={<CalendarSearch size={20}/>} text='Event'/>
            <SidebarItem icon={<Cog size={20}/>} text='Setting'/>
            <SidebarItem icon={<NotebookText size={20}/>} text='Term & Policy'/>
            <SidebarItem icon={<LogOut size={20}/>} text='Log out'/>
        </div>
    </div>
  )
}

export default Sidebar