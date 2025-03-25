import Router, { request, response } from "express";
import { format } from "date-fns";
import { messages } from "./indexRouter.js";

const postRouter = Router();

postRouter.get("/", (request, response) => {
    const id = request.query.id;
    if (id < 0 || id >= messages.length) {
        response.status(404).send("Message not found.");
        return;
    }

    response.render("../views/post", { format, message: messages[id] });
});

export default postRouter;
