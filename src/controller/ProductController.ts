import { Request, Response } from "express";
import { IProductM } from "../../types/Model.js";
import { ProductModel } from '../models/ProductModel.js';


export default class ProductController {
    static getAllProducts() {
        return async (req: Request, res: Response) => {
            try {
                const products = await ProductModel.getProducts()
                return res.json(products)
            } catch (error) {
                return res.status(401).json(error)
            }
        }
    }
    static async getAllProductsForFilter(): Promise<IProductM[]> {
        try {
            const products: IProductM[] = await ProductModel.getProducts();
            return products;
        } catch (error) {
            throw new Error('Failed to retrieve products');
        }
    }
    static onCreateProduct() {
        return async (req: Request, res: Response) => {
            try {
                if (!req.body) {
                    throw new Error("No message Information");
                } else {
                    // // Используйте мультер для загрузки изображения перед вызовом createProduct
                    // upload.single('image')(req, res, async (err) => {
                    //     if (err) {
                    //         console.error('Ошибка при загрузке изображения:', err);
                    //         throw new Error("Failed to upload image");
                    //     }

                    // Выполните ваш код createProduct после успешной загрузки изображения
                    const result = await ProductModel.createProduct(req);
                    return res.send(result);
                    // });
                }
            } catch (error) {
                console.error('Ошибка при выполнении запроса:', error);
                res.status(500).json({ error: 'Внутренняя ошибка сервера' });
            }
        };
    }
    static onEditProduct() {
        return async (req: any, res: Response) => {
            try {
                const result = ProductModel.editProduct(req)
                return res.json(result);
            } catch (error) {
                console.error('Ошибка при выполнении запроса:', error);
                res.status(500).json({ error: 'Внутренняя ошибка сервера' });
            }
        }

    }
    static onDeleteProduct() {
        return async (req: any, res: Response) => {
            try {
                await ProductModel.deleteProduct(req)
                res.json({ message: 'Сообщение успешно удалено' });
            } catch (error) {
                console.error('Ошибка при выполнении запроса:', error);
                res.status(500).json({ error: 'Внутренняя ошибка сервера' });
            }
        }
    }
}