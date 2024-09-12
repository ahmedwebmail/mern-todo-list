import {JWT_EXPIRE_TIME, JWT_KEY} from "../config/config.js";
import jwt from "jsonwebtoken";
import userModel from "../model/UserModel.js";

/**
 * Token Encode
 * @param  email
 * @param  user_id
 */
export const TokenEncode = (email, user_id) => {
    const LOGIN_KEY = JWT_KEY
    const LOGIN_EXPIRE = {expiresIn: JWT_EXPIRE_TIME};
    const LOGIN_PAYLOAD = {email: email, user_id: user_id}
    return jwt.sign(LOGIN_PAYLOAD,LOGIN_KEY, LOGIN_EXPIRE)
}

/**
 * Token Encode
 * @param  req
 * @param  res
 */
export const DecodeToken = (token, res) => {
    try{
        const KEY = JWT_KEY;
        return jwt.verify(token,KEY)
    }
    catch (e){
        return res.json({status:"Error", error: e});
    }
}