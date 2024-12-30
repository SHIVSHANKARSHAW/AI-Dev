import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import { body } from "express-validator";

const router = Router();

router.post("/register",
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").isLength({ min: 3 }).withMessage("Password must be at least 3 characters long"),
    userController.createUserController);

export default router;