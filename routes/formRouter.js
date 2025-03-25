import Router, { request, response } from "express";
import { messages } from "./indexRouter.js";

const formRouter = Router();

formRouter.get("/", (request, response) => {
    response.render("../views/form");
});

formRouter.post("/", (request, response) => {
    messages.push({
        text: request.body.messageText,
        user: request.body.messageAuthor,
        added: new Date(),
    });
    response.redirect("/");
});

export default formRouter;
