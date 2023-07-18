import { Pool } from 'pg';
export const pool = new Pool({
    user: 'postgres',
    password: 'mehrona',
    host: 'localhost',
    port: 5432,
    database: 'inst-room-mobile'
});
//# sourceMappingURL=db.js.map