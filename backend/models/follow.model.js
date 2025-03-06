import mongoose from "mongoose";

const FollowSchema = new mongoose.Schema({
    followerId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    followeeId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const Follow = mongoose.Schema('Follow',FollowSchema);
export default Follow;