import mongoose from 'mongoose';

const { Schema } = mongoose;

const commentSchema = new Schema({
    ad: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    comment: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    }
);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;

