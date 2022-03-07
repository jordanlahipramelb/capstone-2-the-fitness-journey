"use strict";

/** Database setup for fitness journey. */

const { Client } = require("pg");

// Get database name
const { getDatabaseUri } = require("./config");

let db = new Client({
  connectionString: getDatabaseUri(),
});

// if (process.env.NODE_ENV === "production") {
//   db = new Client({
//     connectionString: getDatabaseUri(),
//     ssl: {
//       rejectUnauthorized: false,
//     },
//   });
// } else {
//   db = new Client({
//     connectionString: getDatabaseUri(),
//   });
// }

db.connect();

module.exports = db;
