import { pool as db } from '../db.js';
// import crypto from 'crypto'
export class UserModel {
    static async getUsers() {
        const result = await db.query('SELECT * FROM users');
        return result.rows;
    }
    static async createUser(req) {
        const id = crypto.randomUUID();
        const { name, city, email, password, phone, role } = req.body;
        const user = await db.query('INSERT INTO users (id, name, city, email, password, phone, role) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [id, name, city, email, password, phone, role]);
        return user.rows;
    }
    static async login(req) {
        const { phone, password } = req.body;
        const result = await db.query('SELECT * FROM users WHERE phone = $1 AND password = $2', [phone, password]);
        return result.rows;
    }
    static async deleteUser(req) {
        const { id } = req.body;
        const result = await db.query('DELETE FROM users WHERE id = $1', [id]);
        return result.rows;
    }
    static async createOrder(req) {
        const { id, orderNumber, created, received, purchases, orders, deliveryInfo, payments } = req.body;
        const purchasesJson = JSON.stringify(purchases);
        const ordersJson = JSON.stringify(orders);
        const deliveryInfoJson = JSON.stringify(deliveryInfo);
        const paymentsJson = JSON.stringify(payments);
        const result = await db.query('INSERT INTO history_of_order (id, "orderNumber", created, received, purchases, orders, "deliveryInfo", payments) VALUES ($1, $2, $3, $4, $5::jsonb, $6::jsonb, $7::jsonb, $8::jsonb)', [id, orderNumber, created, received, purchasesJson, ordersJson, deliveryInfoJson, paymentsJson]);
        return result.rows;
    }
    static async getHistoryOrders() {
        const result = await db.query('SELECT * FROM history_of_order');
        return result.rows;
    }
}
//# sourceMappingURL=UserModel.js.map