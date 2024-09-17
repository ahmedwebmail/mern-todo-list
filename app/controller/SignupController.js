import Users from "../model/UserModel.js";
import UserModel from "../model/UserModel.js";

/**
 * User registration
 * @param req
 * @param res
 * @returns json
 */
export const Registration = async (req, res) => {
    try{
        let request_body = req.body;
        await UserModel.create(request_body);
        return res.json(201, "Registration successfully complete");
    }
    catch(err){
        return res.json({status:"There is a problem", error: err.toString()});
    }
}
