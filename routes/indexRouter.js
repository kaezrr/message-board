import Router from "express";
import { format } from "date-fns";

const indexRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];

indexRouter.get("/", (request, response) => {
    response.render("../views/index.ejs", {
        title: "Mini Messageboard",
        messages,
        format,
    });
});

export default indexRouter;
