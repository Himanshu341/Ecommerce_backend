import express from "express";
import {LoginUser, UserRegister, VerifyOtp} from "../controllers/UserController.js";
var router = express.Router();

router.post("/register", UserRegister);
router.post("/verify-otp", VerifyOtp);
router.post("/login", LoginUser);

export default router;
