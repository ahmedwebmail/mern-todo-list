import UserModel from "../model/UserModel.js";
import {TokenEncode} from "../utility/TokenUtility.js";
import userModel from "../model/UserModel.js";

/**
 * User Login
 * @param req
 * @param res
 * @returns json
 */
export const Signin = async (req, res) => {
    try{
        let request_body = req.body;
        let data =  await userModel.findOne(request_body);

        if(data === null ){
            return res.json("This user does not exist!");
        }
        else {
            let token = TokenEncode(data["email"], data["_id"]);
            return res.json({status:200, "User login successful": "Token", data: {token: token}});
        }
    }
    catch(err){
        return res.json({status:"There is a problem", error: err.toString()});
    }
}
