import { Request, Response } from "express";
import { IProductM } from "../../types/Model.js";
export default class ProductController {
    static getAllProducts(): (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    static getAllProductsForFilter(): Promise<IProductM[]>;
    static onCreateProduct(): (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    static onEditProduct(): (req: any, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    static onDeleteProduct(): (req: any, res: Response) => Promise<void>;
}
//# sourceMappingURL=ProductController.d.ts.map