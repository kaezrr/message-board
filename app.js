import express from "express";
import path from "node:path";
import indexRouter from "./routes/indexRouter.js";
import formRouter from "./routes/formRouter.js";

const app = express();
const assetsPath = path.join(path.resolve(), "public");

app.set("views", path.join(path.resolve(), "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));

app.use("/", indexRouter);
app.use("/new", formRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App is listening at port ${PORT}!`);
});
