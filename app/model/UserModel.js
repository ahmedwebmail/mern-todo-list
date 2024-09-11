import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
        first_name: {type: String,required: true},
        last_name: {type: String, required: true},
        email: {type: String, unique: true},
        password: {type: String, required: true},
        OTP: {type: String, default: 0},
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Users = mongoose.model('users', UserSchema)

export default Users;