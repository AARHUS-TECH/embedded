import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

const Usermodel = mongoose.model('UserSchema', UserSchema);
