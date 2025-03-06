import mongoose, { Schema } from "mongoose";

const likeSchema = new mongoose.Schema({
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const Like = mongoose.model('Like',likeSchema);
export default Like;
