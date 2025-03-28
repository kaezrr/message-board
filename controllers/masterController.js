const { format } = require("date-fns");

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

async function showPost(req, res) {
    const id = req.query.id;
    if (id < 0 || id >= messages.length) {
        res.status(404).send("Message not found.");
        return;
    }

    res.render("post", { format, message: messages[id] });
}

async function createPostGet(req, res) {
    res.render("form");
}

async function createPostPost(req, res) {
    messages.push({
        text: req.body.messageText,
        user: req.body.messageAuthor,
        added: new Date(),
    });
    res.redirect("/");
}

async function showPosts(req, res) {
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
