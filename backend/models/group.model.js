import mongoose, { Schema } from "mongoose";

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Group name required'],
        trim: true,
        minLength: 2,
        maxLength: 30
    },
    description: {
        type: String,
    },
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const Group = mongoose.model('Group',groupSchema);
export default Group;