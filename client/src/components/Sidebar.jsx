import { BookmarkCheck, CalendarSearch, ChevronFirst, ChevronLast, Cog, House, LogOut, NotebookText, User } from 'lucide-react'
import React, { useState } from 'react'
import SidebarItem from './SidebarItem'

const Sidebar = () => {

  const [clickChevron,setClickChevron] = useState(false);

  return (
    <div className={`h-screen ${clickChevron ? 'w-15' : 'w-52'}`}>
        <div className='h-full flex flex-col border-r-0 shadow-sm'>
            <div className='p-3 pb-2 flex justify-end items-center'>            
              {!clickChevron ? <span className='mr-10 font-semibold'>Collapse</span> : ''}
                <button className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'
                 onClick={() => setClickChevron((prev) => !prev)}>
                  { clickChevron ? <ChevronLast /> : <ChevronFirst />}    
                </button>
            </div>

            <ul className="">
              <SidebarItem icon={<House size={20}/>} text='Home' active collapsed={clickChevron}/>
              <SidebarItem icon={<User size={20}/>} text='Profile' collapsed={clickChevron}/>
              <SidebarItem icon={<BookmarkCheck size={20}/>} text='Bookmarks' collapsed={clickChevron}/>
              <SidebarItem icon={<CalendarSearch size={20}/>} text='Event' collapsed={clickChevron}/>
              <SidebarItem icon={<Cog size={20}/>} text='Setting' collapsed={clickChevron}/>
              <SidebarItem icon={<NotebookText size={20}/>} text='Term & Policy' collapsed={clickChevron}/>
              <SidebarItem icon={<LogOut size={20}/>} text='Log out' collapsed={clickChevron}/>
            </ul>          
        </div>
    </div>
  )
}

export default Sidebar