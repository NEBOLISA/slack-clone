import mong0ose from 'mongoose';


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true,
    },
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);