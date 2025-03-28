const { format } = require("date-fns");
const db = require("../db/queries");

async function showPost(req, res) {
    const id = req.query.id;
    if (!id) {
        res.status(404).send("Message not found.");
        return;
    }
    const message = await db.getMessage(id);
    res.render("post", { format, message });
}

async function createPostGet(req, res) {
    res.render("form");
}

async function createPostPost(req, res) {
    await db.insertMessage(req.body.messageAuthor, req.body.messageText);
    res.redirect("/");
}

async function showPosts(req, res) {
    const messages = await db.getMessages();
    res.render("index", {
        title: "Mini Messageboard",
        messages,
        format,
    });
}

module.exports = {
    showPosts,
    createPostGet,
    createPostPost,
    showPost,
};
