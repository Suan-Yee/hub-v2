import { Camera, Heart, MessageCircle, Repeat, SmilePlus } from 'lucide-react';
import React, { useRef, useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const PostInteraction = () => {
  const [react, setReact] = useState(false);
  const commentInputReft = useRef(null);
  const [comment, setComment] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleCommentClick = () => {
    if (commentInputReft.current) {
      commentInputReft.current.focus();
    }
  };

  const onEmojiClick = (emojiData, event) => {
    setComment((prev) => prev + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  return (

    <div className="mt-2 flex pt-2 gap-5 relative">
      <div className="flex gap-4 justify-between items-center text-sm">
        <div className="flex items-center gap-1 cursor-pointer">
          <Heart
            className={`w-4 h-4 2xl:w-5 2xl:h-5 hover:text-red-500 ${
              react ? 'fill-red-500 text-red-500' : ''
            }`}
            onClick={() => setReact((prev) => !prev)}
          />
          <span>1.2k</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <MessageCircle
            className="w-4 h-4 2xl:w-5 2xl:h-5 hover:text-blue-500"
            onClick={handleCommentClick}
          />
          <span>20</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <Repeat className="w-4 h-4 2xl:w-5 2xl:h-5 text-blue-500 hover:text-black" />
        </div>
      </div>
      <div className="border-2 rounded-3xl w-full flex items-center px-3 py-1 relative">
        <input
          ref={commentInputReft}
          type="text"
          placeholder="Write your comment"
          className="w-full outline-none"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Camera className="w-5 h-5 2xl:w-5 2xl:h-5 cursor-pointer hover:text-blue-500 ml-3" />
        {/* SmilePlus now toggles the emoji picker */}
        <SmilePlus
          onClick={() => setShowEmojiPicker((prev) => !prev)}
          className="w-5 h-5 2xl:w-5 2xl:h-5 cursor-pointer hover:text-blue-500 ml-2 text-yellow-400"
        />
        {/* Emoji Picker Dropdown */}
        {showEmojiPicker && (
          <div className="absolute bottom-full mb-2 right-0 z-50">
            <EmojiPicker className="custom-emoji-picker"
            onEmojiClick={onEmojiClick} 
            skinTonesDisabled={true}
            allowExpandReactions={false}
            previewConfig={{ showPreview: false }}    
            width={300} height={400}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostInteraction;
