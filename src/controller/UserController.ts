import { Request, Response } from "express";
import { UserModel } from "../models/UserModel.js";

export default class userController {
    static getAllUsers() {
        return async (req: Request, res: Response) => {
            try {
                const users = await UserModel.getUsers()
                return res.json(users)
            } catch (error) {
                return res.status(401).json(error)
            }
        }
    }
    static onCreateUser() {
        return async (req: Request, res: Response) => {
            try {
                if (!req.body) {
                    throw new Error("No user Information")
                } else {
                    const result = await UserModel.createUser(req)
                    return res.json(result)
                }
            } catch (error) {
                res.status(500).json({ error: 'Внутренняя ошибка сервера' });
            }
        }
    }
    static onLogin() {
        return async (req: Request, res: Response) => {
            try {
                if (!req.body)
                    throw new Error("No user Information")
                const result = await UserModel.login(req)
                return res.json(result)
            }
            catch (error) {
                res.status(500).json({ error: 'Внутренняя ошибка сервера' });
            }
        }
    }
    static onDeleteUser() {
        return async (req: any, res: any) => {
            try {
                if (!req.body)
                    throw new Error("No user Information")
                const result = await UserModel.deleteUser(req)
                return res.json(result)
            }
            catch (error) {
                res.status(500).json({ error: 'Внутренняя ошибка сервера' });
            }
        }
    }
    static onGetHistoryOfOrders() {
        return async (req: any, res: any) => {
            try {
                if (!req.body)
                    throw new Error("No user Information")
                const result = await UserModel.getHistoryOrders()
                return res.json(result)
            }
            catch (error) {
                res.status(500).json({ error: 'Внутренняя ошибка сервера' });
            }
        }
    }
    static onCreateOrder() {
        return async (req: any, res: any) => {
            try {
                if (!req.body)
                    throw new Error("No user Information")
                const result = await UserModel.createOrder(req)
                return res.json(result)
            }
            catch (error) {
                res.status(500).json({ error: 'Внутренняя ошибка сервера' });
            }
        }
    }


}
