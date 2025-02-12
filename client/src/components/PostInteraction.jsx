import { Camera, Heart, MessageCircle, Repeat, SmilePlus } from 'lucide-react';
import React, { useRef, useState } from 'react'

const PostInteraction = () => {

    const [react,setReact] = useState(false);
    const commentInputReft = useRef(null);

    const handleCommentClick = () => {
        if(commentInputReft.current){
            commentInputReft.current.focus();
        }
    }

    return (
        <div className="mt-2 flex pt-2 gap-5">
            <div className='flex gap-4 justify-between items-center text-sm'>
                <div className="flex items-center gap-1 cursor-pointer">
                    <Heart className={`w-4 h-4 hover:text-red-500 ${react ? 'fill-red-500 text-red-500' : ''}`} onClick={() => setReact((prev) => !prev)}/>
                    <span>1.2k</span>
                </div>
                <div className="flex items-center gap-1 cursor-pointer ">
                    <MessageCircle className="w-4 h-4 hover:text-blue-500" onClick={handleCommentClick} />
                    <span>20</span>
                </div>
                <div className="flex items-center gap-1 cursor-pointer ">
                    <Repeat className="w-4 h-4 text-blue-500 hover:text-black" />
                </div>
            </div>
            <div className="border-2 rounded-3xl w-full flex items-center px-3 py-1">
                <input ref={commentInputReft} type="text" placeholder="Write your comment" className="w-full outline-none"/>
                <Camera className="w-5 h-5 cursor-pointer hover:text-blue-500 ml-3" />
                <SmilePlus className="w-5 h-5 cursor-pointer hover:text-blue-500 ml-2" />
            </div>
    </div>
    );
}

export default PostInteraction