import React, { useState } from 'react';
import { X } from 'lucide-react';

const CommentModal = ({ onClose, initialComments = [] }) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);

  // Send comment either as a new top-level comment or as a reply
  const handleSendComment = () => {
    if (!newComment.trim()) return;
    const comment = {
      id: Date.now(), // for simplicity
      user: {
        name: 'Current User',
        profile: 'https://via.placeholder.com/40',
      },
      text: newComment,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      replies: [],
    };

    if (replyingTo) {
      // Add as a nested reply
      const updatedComments = comments.map((c) => {
        if (c.id === replyingTo.id) {
          return { ...c, replies: [...c.replies, comment] };
        }
        return c;
      });
      setComments(updatedComments);
      setReplyingTo(null);
    } else {
      // Add as a top-level comment
      setComments([...comments, comment]);
    }
    setNewComment('');
  };

  // Set the comment being replied to
  const handleReply = (comment) => {
    setReplyingTo(comment);
  };

  // Recursive function to render comments and nested replies
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
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-2">{renderComments(comment.replies, indentLevel + 1)}</div>
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
