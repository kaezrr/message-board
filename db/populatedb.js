#! /usr/bin/env node

require("dotenv").config();
const { Client } = require("pg");

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const SQL = `
CREATE TABLE IF NOT EXISTS messages(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  date TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO messages(username, message)
VALUES
  ('Amando', 'Hi there!'),
  ('Charles', 'Hello World!');
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        host: PGHOST,
        database: PGDATABASE,
        username: PGUSER,
        password: PGPASSWORD,
        port: 5432,
        ssl: {
            require: true,
        },
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();
