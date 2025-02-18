import { Search } from 'lucide-react'
import React, { useState } from 'react'
import UserList from './UserList';
import ChatModal from './ChatModal';

const Messages = () => {

    const [selectedTab, setSelectedTab] = useState('Primary');

    const [chatUser, setChatUser] = useState(null);

    const handleUserClick = (user) => {
        setChatUser(user);
        console.log('Hello')
    };

    return (
        <div className='md:w-72 lg:w-86 2xl:w-86 text-sm p-3 bg-white rounded-2xl h-full'>
            <div className='mb-3'>
                <h2 className='font-semibold'>Messages</h2>

            </div>

            <div className="flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1 mb-4">
                <Search className="text-gray-500" width={20} />
                <input type="text" placeholder="Search" className="w-full h-full bg-gray-100 outline-none px-2 py-1" />
            </div>

            <div className="flex items-center justify-between border-b border-gray-300 ">

                <div className="flex gap-4">
                    <div onClick={() => setSelectedTab('Primary')}
                        className={`cursor-pointer pb-1 ${selectedTab === 'Primary' ? 'border-b-2 font-semibold' : 'text-gray-500'
                            }`}
                    >
                        Primary
                    </div>

                    <div onClick={() => setSelectedTab('General')}
                        className={`cursor-pointer pb-1 ${selectedTab === 'General' ? 'border-b-2 font-semibold' : 'text-gray-500'
                            }`}
                    >
                        General
                    </div>
                </div>

                <div className="font-medium cursor-pointer text-blue-500">
                    Requests <span className="">(4)</span>
                </div>

            </div>
            
            <UserList
                src="https://wallpapers.com/images/high/weird-profile-pictures-eetnpw9ya9ipjrka.webp"
                name="Kanye West"
                active={true}
                onClick={() =>
                handleUserClick({
                    name: 'Kanye West',
                    profile:
                    'https://wallpapers.com/images/high/weird-profile-pictures-eetnpw9ya9ipjrka.webp',
                })
                }
            />
            <UserList 
                src="https://preview.redd.it/drake-the-type-of-guy-to-post-a-selfie-with-him-in-a-beauty-v0-571py2j45vcb1.jpg?width=640&crop=smart&auto=webp&s=36d64deac92996c78ddd6fcc6b496b8dfa2704d5"
                name="Drake"
                active={false}
                onClick={() =>
                handleUserClick({
                    name: 'Drake',
                    profile:
                    'https://preview.redd.it/drake-the-type-of-guy-to-post-a-selfie-with-him-in-a-beauty-v0-571py2j45vcb1.jpg?width=640&crop=smart&auto=webp&s=36d64deac92996c78ddd6fcc6b496b8dfa2704d5',
                })
                }
            />
            <UserList
                src="https://i.redd.it/qzlmkz0tgi811.jpg"
                name="Slim Shady"
                active={true}
                onClick={() =>
                handleUserClick({
                    name: 'Slim Shady',
                    profile:
                    'https://i.redd.it/qzlmkz0tgi811.jpg',
                })
                }
            />

            {/* <h2 className='mt-3 font-medium'>View All</h2> */}

            {chatUser && <ChatModal user={chatUser} onClose={() => setChatUser(null)} />}
            {/* <ChatModal user={chatUser} onClose={() => setChatUser(null)} /> */}
        </div>
    )
}

export default Messages