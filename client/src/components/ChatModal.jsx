import React, { useEffect, useRef, useState } from 'react'
import { SmilePlus, X } from 'lucide-react';

const ChatModal = ({ user, onClose }) => {

  const [messages, setMessages] = useState([
    { id: 1, sender: 'them', text: 'Hello, how are you?', time: '10:00 AM' },
    { id: 2, sender: 'me', text: 'I am good, thanks! How about you?', time: '10:01 AM' },
    { id: 3, sender: 'them', text: 'Doing well. Let’s catch up later.', time: '10:02 AM' },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (newMessage.trim()) {
      const time = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      setMessages([
        ...messages,
        { id: messages.length + 1, sender: 'me', text: newMessage, time },
      ]);
      setNewMessage('');
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (messages.length && messages[messages.length - 1].sender === 'me') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50 ">
      <div className="bg-white w-full max-w-lg lg:h-120 lg:mt-20 2xl:h-150 flex flex-col rounded-2xl shadow-2xl scrollbar-hide">
        {/* Header: Receiver Info */}
        <div className="flex items-center px-3 py-1.5 bg-[#F3F4F6] rounded-t-2xl">
          <img src={user.profile} alt={user.name} className="w-10 h-10 rounded-full object-cover mr-3" />
          <div>
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-xs text-green-500">Active now</p>
          </div>

          <button className="ml-auto" onClick={onClose}>
            <X size={24} className='cursor-pointer' />
          </button>

        </div>

        {/* Chat Conversation */}
        <div className="flex-1 p-4 overflow-y-auto space-y-2 scroll-smooth hide-scrollbar">
          {messages.map((msg) => (
            <div key={msg.id} className="space-y-1">
              {/* Timestamp above the message bubble */}
              <div className={`text-xs ${msg.sender === 'me' ? 'text-right' : 'text-left'}`}>
                {msg.time}
              </div>
              <div className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`p-2 rounded-lg max-w-xs ${msg.sender === 'me'
                      ? 'bg-[#60A5FA] text-gray-50'
                      : 'bg-gray-300 text-black'
                    }`}>
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-300 ">
          <div className="flex items-center gap-2">
            <div className="flex-1 flex items-center justify-center border-2 border-gray-400 rounded-lg">
              <SmilePlus className='ml-2 text-amber-400 cursor-pointer' />
              <input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="w-full p-2 outline-none"
              />
            </div>

            <button onClick={handleSend} className="bg-gray-400 text-white px-4 py-2 rounded-lg cursor-pointer">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;