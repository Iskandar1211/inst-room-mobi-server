import pkg from 'pg';
const { Pool } = pkg;
const db = new Pool({
    user: 'postgres',
    password: 'mehrona',
    host: 'localhost',
    port: 5432,
    database: 'inst-room-mobile'
});
export default db;
//# sourceMappingURL=db.js.map