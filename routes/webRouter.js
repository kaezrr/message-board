const { Router } = require("express");
const masterController = require("../controllers/masterController");

const masterRouter = Router();

masterRouter.get("/view", masterController.showPost);
masterRouter.get("/new", masterController.createPostGet);
masterRouter.post("/new", masterController.createPostPost);
masterRouter.get("/", masterController.showPosts);

module.exports = masterRouter;
