import express from "express";
import UserController from "./controllers/UserController";

const router = express.Router();

router.post("/users/", UserController.create);
router.get("/users/", UserController.findAll);
router.get("/users/:userid", UserController.findOne);
router.put("/users/:userid", UserController.update);
router.delete("/users/:userid", UserController.destroy);

export { router };
