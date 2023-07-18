import { Request, Response } from "express";
export default class userController {
    static getAllUsers(): (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    static onCreateUser(): (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    static onLogin(): (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    static onDeleteUser(): (req: any, res: any) => Promise<any>;
    static onGetHistoryOfOrders(): (req: any, res: any) => Promise<any>;
    static onCreateOrder(): (req: any, res: any) => Promise<any>;
}
//# sourceMappingURL=UserController.d.ts.map