import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true,'required User']
    },
    content: {
        type: String
    },
    media: [{
        type: {
            String,
            enum: ['image','video'],
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    groupId: {
        type: Schema.Types.ObjectId,
        ref: 'Group'
    },
    sharedPostId: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    likesCount: {
        type: Number,
        default: 0
    },
    commentCount: {
        type: Number,
        default: 0
    },
    sharesCount:{
        type: Number,
        default: 0
    }
},{ validate: [v => v.media.length <= 16,'Media limit exceeded'] });

const Post = mongoose.model('Post',postSchema);
export default Post;