import * as mongoose from 'mongoose';
import {model} from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    verified: {type: Boolean, required: true, default: false},
    verification_token: {type: Number, required: true},
    verification_token_time: {type: Date, required: true},
    username: {type: String, required: true},
});

export default model('users', userSchema);
