import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react';

const ChatModal = ({ user, onClose }) => {
  // Sample messages. In a real app these would come from a server.
  const [messages, setMessages] = useState([
    { id: 1, sender: 'them', text: 'Hello, how are you?' },
    { id: 2, sender: 'me', text: 'I am good, thanks! How about you?' },
    { id: 3, sender: 'them', text: 'Doing well. Let’s catch up later.' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: 'me', text: newMessage }]);
      setNewMessage('');
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50 ">
      <div className="bg-white w-full max-w-lg max-h-full flex flex-col rounded-lg">
        {/* Header: Receiver Info */}
        <div className="flex items-center p-4 border-b">
          <img
            src={user.profile}
            alt={user.name}
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <div>
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-xs text-green-500">Active now</p>
          </div>
          <button className="ml-auto" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Chat Conversation */}
        <div className="flex-1 p-4 overflow-y-auto space-y-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === 'me' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`p-2 rounded-lg max-w-xs ${
                  msg.sender === 'me'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-black'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 border rounded-lg p-2 outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;