import {response} from "express";
import UserModel from "../model/UserModel.js";

/**
 * View user profile
 * @param req
 * @param res
 * @returns {Promise<*>}
 * @constructor
 */
export const ProfileDetails = async function (req, res) {
    try{
        let user_id = req.headers["user_id"];
        let data = await UserModel.findById({"_id": user_id})
        return res.status(200).json({message: "User profile", data:data});
    }

    catch (e) {
        return res.status(401).json({message: "Can not get user profile", "Error":e.toString()});
    }
}

/**
 * Update Profile
 * @param req
 * @param res
 * @returns {Promise<*>}
 * @constructor
 */
export const UpdateProfile = async function (req, res) {
    return res.json({status: 200});
}

