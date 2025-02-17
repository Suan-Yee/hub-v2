import React from 'react'

const UserList = ({src,name,active,onClick }) => {
    return (
        <div onClick={onClick} className="flex items-center mt-4 hover:bg-gray-100 rounded-md cursor-pointer">

            <div className="relative">
                <img src={src} alt="Kanye West" className="w-10 h-10 rounded-full" />
                <span className={`absolute bottom-0 right-0 w-3 h-3 ${active ? 'bg-green-600' : 'bg-gray-500'}  border-2 border-white rounded-full`}></span>             
            </div>
            <div className="ml-3">
                <p className="font-medium">{name}</p>
            </div>
        </div>
    )
}

export default UserList