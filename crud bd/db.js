const Poll = require('pg').Pool;
const pool = new Poll({
    user: "postgres",
    password: "emokid",
    host: "localhost",
    port: 5432,
    database: "firstdb"
});


module.exports = pool;