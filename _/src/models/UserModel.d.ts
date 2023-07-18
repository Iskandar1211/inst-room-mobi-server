import { Request } from "express";
import { IHistoryOfOrder, IRegistrationM, ILogin } from "../../types/Model.js";
export declare class UserModel {
    static getUsers(): Promise<IRegistrationM[]>;
    static createUser(req: Request): Promise<IRegistrationM[]>;
    static login(req: Request): Promise<ILogin[]>;
    static deleteUser(req: any): Promise<any>;
    static createOrder(req: Request): Promise<IHistoryOfOrder[]>;
    static getHistoryOrders(): Promise<IHistoryOfOrder[]>;
}
//# sourceMappingURL=UserModel.d.ts.map