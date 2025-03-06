import mongoose, { Schema } from "mongoose";

const groupMemberSchema = new mongoose.Schema({
    groupId: {
        type: Schema.Types.ObjectId,
        ref: 'Group',
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const GroupMember = mongoose.model('GroupMember',groupMemberSchema);

export default GroupMember;