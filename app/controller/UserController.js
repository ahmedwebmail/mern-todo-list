import {response} from "express";

/**
 * View user profile
 * @param req
 * @param res
 * @returns {Promise<*>}
 * @constructor
 */
export const ProfileDetails = async function (req, res) {
    return res.json({status: 200});
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

