
import pg from "pg";

export function dbConnect(props: { host: any; port: any; user: any; database: any; password: any; }) {
    const pool = new pg.Pool({
        host: props.host || "localhost",
        port: props.port || 5432,
        user: props.user || "postgres",
        database: props.database || "postgres",
        password: props.password || "postgres",
    });

    return pool;
}