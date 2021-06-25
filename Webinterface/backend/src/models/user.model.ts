import * as mongoose from 'mongoose';

export const Usermodel = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
    }
})

const usermodel = mongoose.model('UserSchema', Usermodel);
