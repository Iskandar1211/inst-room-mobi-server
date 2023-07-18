import * as Joi from 'joi';
import { Request, Response } from "express";
import { IHistoryOfOrder, IRegistrationM, ILogin } from "../../types/Model.js";
import db from '../db.js'
import crypto from 'crypto'

export class UserModel {
    static async getUsers(): Promise<IRegistrationM[]> {
        const result = await db.query('SELECT * FROM users');
        return result.rows;
    }
    static async createUser(req: Request): Promise<IRegistrationM[]> {
        const id = crypto.randomUUID()
        const { name, city, email, password, phone, role } = req.body;
        const user = await db.query('INSERT INTO users (id, name, city, email, password, phone, role) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [id, name, city, email, password, phone, role]);
        return user.rows;
    }
    static async login(req: Request): Promise<ILogin[]> {
        const { email, password } = req.body;
        const result = await db.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);
        return result.rows;
    }
    static async deleteUser(req: any): Promise<any> {
        const { id } = req.body;
        const result = await db.query('DELETE FROM users WHERE id = $1', [id]);
        return result.rows;
    }
    static async createOrder(req: Request): Promise<IHistoryOfOrder[]> {
        const { id, orderNumber, created, received, purchases, deliveryInfo, payments } = req.body;
        const purchasesJson = JSON.stringify(purchases);
        const deliveryInfoJson = JSON.stringify(deliveryInfo);
        const paymentsJson = JSON.stringify(payments);

        const result = await db.query('INSERT INTO history_of_order (id, "orderNumber", created, received, purchases, "deliveryInfo", payments) VALUES ($1, $2, $3, $4, $5::jsonb, $6::jsonb, $7::jsonb)', [id, orderNumber, created, received, purchasesJson, deliveryInfoJson, paymentsJson]);
        return result.rows;
    }
    static async getHistoryOrders(): Promise<IHistoryOfOrder[]> {
        const result = await db.query('SELECT * FROM history_of_order');
        return result.rows;
    }
}