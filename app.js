import express from "express";
import path from "node:path";
import indexRouter from "./routes/indexRouter.js";

const app = express();

app.set("views", path.join(path.resolve(), "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App is listening at port ${PORT}!`);
});
