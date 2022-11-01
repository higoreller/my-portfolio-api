import { Router, Request, Response } from "express";
import multer from "multer";

import uploadConfig from "./config/multer";
import { ListHeadingController } from "./controllers/heading/ListHeadingController";
import { ListInformationController } from "./controllers/information/ListInformationController";
import { ListLibController } from "./controllers/lib/ListLibController";
import { CreateMessageController } from "./controllers/message/CreateMessageController";
import { ListMessageController } from "./controllers/message/ListMessageController";
import { ListProjectBoxController } from "./controllers/projectBox/ListProjectBoxController";
import { ListSkillController } from "./controllers/skill/ListSkillController";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

// Heading routes
router.get("/heading", new ListHeadingController().handle);
router.get("/information", new ListInformationController().handle);
router.get("/lib", new ListLibController().handle);
router.post("/message", new CreateMessageController().handle);
router.get("/messages", new ListMessageController().handle);
router.get("/project", new ListProjectBoxController().handle);
router.get("/skill", new ListSkillController().handle);

export { router };
