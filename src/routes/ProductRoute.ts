import { Router, Request, Response } from "express";
import { IProductM } from "../../types/Model.js";
import ProductController from "../controller/ProductController.js";


const productRoutes = Router();

productRoutes.get('/painting-supplies', async (req: Request, res: Response) => {
    const products: IProductM[] = await ProductController.getAllProductsForFilter();

    const paintingSupplies = products.filter(product => product.categories === 'Малярные товары');
    res.send(paintingSupplies);
});

productRoutes.get('/overalls', async (req: Request, res: Response) => {
    const products: IProductM[] = await ProductController.getAllProductsForFilter();
    const overalls = products.filter(product => product.categories === 'Спецодежда');
    res.send(overalls);
});

productRoutes.get('/electrical', async (req: Request, res: Response) => {
    const products: IProductM[] = await ProductController.getAllProductsForFilter();
    const electrical = products.filter(product => product.categories === 'Электрооборудование');
    res.send(electrical);
});

productRoutes.get('/for-home-and-cottage', async (req: Request, res: Response) => {
    const products: IProductM[] = await ProductController.getAllProductsForFilter();

    const homeAndCottage = products.filter(product => product.categories === 'Для дома и дачи');
    res.send(homeAndCottage);
});

productRoutes.get('/products', ProductController.getAllProducts());


productRoutes.get('/products/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const products: IProductM[] = await ProductController.getAllProductsForFilter();
        const findProduct: IProductM | undefined = products.find((product: IProductM) => product.id === id);
        if (findProduct) {
            res.send(findProduct);
        } else {
            res.status(404).send('Product not found');
        }
    } catch (error) {
        res.status(500).send('Error retrieving products');
    }
});



productRoutes.get('/stocks-products', async (req: Request, res: Response) => {
    const products: IProductM[] = await ProductController.getAllProductsForFilter();
    const filterProduct = products.filter(product => !product.isNew);
    res.send(filterProduct);
});

productRoutes.get('/new-products', async (req: Request, res: Response) => {
    const products: IProductM[] = await ProductController.getAllProductsForFilter();
    const filterProduct = products.filter(product => product.isNew);
    res.send(filterProduct);
});

productRoutes.post('/create-product', ProductController.onCreateProduct());

productRoutes.put('/edit-product/:id', ProductController.onEditProduct());

productRoutes.delete('/delete-product/:id', ProductController.onDeleteProduct());

export default productRoutes;
