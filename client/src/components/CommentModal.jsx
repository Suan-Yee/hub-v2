import React, { useRef, useState } from 'react';
import { X } from 'lucide-react';

const CommentModal = ({ onClose, initialComments = [] }) => {

  const [comments, setComments] = useState(
    // Ensure top-level comments have parentId = null
    initialComments.map((c) => ({ ...c, parentId: c.parentId || null }))
  );
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);

  const handleSendComment = () => {
    if (!newComment.trim()) return;

    // Determine if we are replying to a nested comment.
    // If replyingTo exists and is already nested (i.e. its parentId is not null),
    // then we will add the reply to the parent comment's replies,
    // and prepend the text with @username.
    let replyText = newComment;
    let targetParentId = null;

    if (replyingTo) {
      if (replyingTo.parentId === null) {
        // replying to a top-level comment – nest the reply normally.
        targetParentId = replyingTo.id;
      } else {
        // replying to a nested comment – do not nest further.
        // Instead, add the reply to the same parent (i.e. replyingTo.parentId)
        // and prepend the text with @replyingUser.
        targetParentId = replyingTo.parentId;
        replyText = `@${replyingTo.user.name} ${newComment}`;
      }
    }

    const comment = {
      id: Date.now(),
      user: {
        name: 'Current User',
        profile: 'https://via.placeholder.com/40',
      },
      text: replyText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      replies: [],
      parentId: targetParentId, // null if top-level, or parent's id if reply
    };

    if (replyingTo) {
      // We need to update the top-level comment that will hold the reply.
      const updatedComments = comments.map((c) => {
        if (c.id === targetParentId) {
          return { ...c, replies: [...c.replies, comment] };
        }
        return c;
      });
      setComments(updatedComments);
      setReplyingTo(null);
    } else {
      // top-level comment
      setComments([...comments, { ...comment, parentId: null }]);
    }
    setNewComment('');
  };

  // Set the comment being replied to
  const handleReply = (comment) => {
    setReplyingTo(comment);
  };

  // Recursive function to render comments with only one level of nesting.
  const renderComments = (commentsList, indentLevel = 0) => {
    return commentsList.map((comment) => (
      <div key={comment.id} style={{ marginLeft: indentLevel * 20 }} className="mb-4">
        <div className="flex items-center gap-2">
          <img
            src={comment.user.profile}
            alt={comment.user.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center gap-1">
              <span className="font-semibold">{comment.user.name}</span>
              <span className="text-xs text-gray-500">{comment.time}</span>
            </div>
          </div>
        </div>
        <p className="ml-10">{comment.text}</p>
        <div className="ml-10 mt-1">
          <button
            onClick={() => handleReply(comment)}
            className="text-xs text-blue-500 focus:underline"
          >
            Reply
          </button>
        </div>
        {/* Only allow one level of nested replies */}
        {indentLevel === 0 && comment.replies && comment.replies.length > 0 && (
          <div className="mt-2">
            {renderComments(comment.replies, 1)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-lg p-4 rounded-lg shadow-xl">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Comments</h3>
          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        {/* Comments List */}
        <div className="max-h-96 overflow-y-auto mb-4 hide-scrollbar scroll-smooth">
          {comments.length > 0 ? (
            renderComments(comments)
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}
        </div>
        {/* Input & Send */}
        <div className="flex items-center gap-2">
          {replyingTo && (
            <span className="text-sm text-gray-600">
              Replying to {replyingTo.user.name}
            </span>
          )}
          <input
            type="text"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-1 border border-gray-300 rounded p-2 outline-none"
          />
          <button
            onClick={handleSendComment}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
