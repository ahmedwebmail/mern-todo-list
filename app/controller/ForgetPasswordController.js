/**
 * Verify email
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const VerifyEmail = async (req, res) => {
    return res.json({status: "success"});
}

/**
 * Verify OTP code
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const CodeVerify = async (req, res) => {
    return res.json({status: "success"});
}

/**
 * Reset password
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const ResetPassword = async (req, res) => {
    return res.json({status: "success"});
}