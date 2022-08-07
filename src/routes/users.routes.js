import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listProfileUserController from "../controllers/listProfileUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import updatedUserController from "../controllers/updateUser.controller";
import userLoginController from "../controllers/userLogin.controller";

import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";

const router = Router();

router.post("/users", verifyEmailAvailabilityMiddleware, createUserController);
router.get(
  "/users",
  verifyAuthTokenMiddleware,
  verifyIsAdmMiddleware,
  listUsersController
);
router.get(
  "/users/profile",
  verifyAuthTokenMiddleware,
  listProfileUserController
);
router.patch("/users/:id", verifyAuthTokenMiddleware, updatedUserController);
router.delete("/users/:id", verifyAuthTokenMiddleware, deleteUserController);
router.post("/login", userLoginController);

export default router;
