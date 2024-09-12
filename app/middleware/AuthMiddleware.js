import {DecodeToken} from "../utility/TokenUtility.js";

export default (req, res, next) => {
    let token = req.headers['token'];
    let decode_token = DecodeToken(token)

    if(decode_token === null){
        res.status(401).json({status: "Fail", message: 'Invalid token provided.'});
    }
    else{
        let email = decode_token.email;
        let user_id = decode_token.user_id;
        req.headers.email = email;
        req.headers.user_id = user_id;
        next();
    }
}