import { IProductM } from "../../types/Model.js";
export declare class ProductModel {
    static getProducts(): Promise<IProductM[]>;
    static createProduct(req: any): Promise<any>;
    static deleteProduct(req: any): Promise<{
        message: string;
    }>;
    static editProduct(req: any): Promise<any>;
}
//# sourceMappingURL=ProductModel.d.ts.map