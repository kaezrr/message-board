const db = require("./pool");

async function getMessages() {
    const { rows } = await db.query("SELECT * FROM messages");
    return rows;
}

async function insertMessage(username, message) {
    await db.query(
        `INSERT INTO messages (username, message)
         VALUES ($1, $2)`,
        [username, message],
    );
}

async function getMessage(id) {
    const { rows } = await db.query(
        `SELECT * FROM messages
         WHERE id = $1`,
        [id],
    );
    return rows[0];
}

module.exports = {
    getMessage,
    getMessages,
    insertMessage,
};
