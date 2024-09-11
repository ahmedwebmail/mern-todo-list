import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
        first_name: {type: String},
        last_name: {type: String},
        email: {type: String, unique: true},
        password: {type: String}
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Users = mongoose.model('users', UserSchema)

export default Users;