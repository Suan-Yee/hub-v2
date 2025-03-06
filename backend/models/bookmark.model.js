import mongoose, { Schema } from "mongoose";

const bookmarkSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
})

const Bookmark = mongoose.model('bookmark',bookmarkSchema);
export default Bookmark;
