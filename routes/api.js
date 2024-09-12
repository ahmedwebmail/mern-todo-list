import express from 'express';
const router = express.Router();

import * as UserController from '../app/controller/UserController.js';
import * as TaskController from "../app/controller/TaskController.js";
import * as SignupController from "../app/controller/SignupController.js";
import * as LoginController from "../app/controller/LoginController.js";
import * as ForgetPasswordController from "../app/controller/ForgetPasswordController.js";
import AuthMiddleware from "../app/middleware/AuthMiddleware.js";

//Task routes
router.post("/create-task", TaskController.CreateTask);
router.post("/update-task", TaskController.UpdateTaskStatus);
router.get("/task-list-by-status", TaskController.TaskListByStatus);
router.get("/count-task", TaskController.CountTask);
router.delete("/delete-task", TaskController.DeleteTask);

//Signup route
router.post("/registration", SignupController.Registration);

//Login routes
router.post("/login", LoginController.Signin);

//User routes
router.get("/profile-details", AuthMiddleware, UserController.ProfileDetails)
router.put("/update-profile", AuthMiddleware, UserController.UpdateProfile)

//Forget Password
router.post("/email-verify", ForgetPasswordController.VerifyEmail)
router.post("/code-verify", ForgetPasswordController.CodeVerify)
router.post("/reset-password", ForgetPasswordController.ResetPassword)

export default router;