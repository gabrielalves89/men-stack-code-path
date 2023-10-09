import express from "express";
const router = express.Router();

import controllers from "../controllers/usersControllers.js";

router.get("/", controllers.getAll);
//router.patch();
//router.post();
//router.delete();

export default router;