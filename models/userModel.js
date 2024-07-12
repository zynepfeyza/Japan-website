import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    isim: {
        type: String,
        required: true,
    },
    soyisim: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
},
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

export default User;

