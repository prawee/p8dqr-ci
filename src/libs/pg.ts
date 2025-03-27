import pg from "pg";

const pool = new pg.Pool({
    host: "localhost",
    user: "postgres",
    database: "postgres",
    password: "postgres",
    port: 5432,
});