const express = require("express");
const webRouter = require("./routes/webRouter");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/", webRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App is listening at port ${PORT}!`);
});
