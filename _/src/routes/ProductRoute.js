import { Router } from "express";
import ProductController from "../controller/ProductController.js";
const productRoutes = Router();
productRoutes.get('/painting-supplies', async (req, res) => {
    const products = await ProductController.getAllProductsForFilter();
    const paintingSupplies = products.filter(product => product.categories === 'Малярные товары');
    res.send(paintingSupplies);
});
productRoutes.get('/overalls', async (req, res) => {
    const products = await ProductController.getAllProductsForFilter();
    const overalls = products.filter(product => product.categories === 'Спецодежда');
    res.send(overalls);
});
productRoutes.get('/electrical', async (req, res) => {
    const products = await ProductController.getAllProductsForFilter();
    const electrical = products.filter(product => product.categories === 'Электрооборудование');
    res.send(electrical);
});
productRoutes.get('/for-home-and-cottage', async (req, res) => {
    const products = await ProductController.getAllProductsForFilter();
    const homeAndCottage = products.filter(product => product.categories === 'Для дома и дачи');
    res.send(homeAndCottage);
});
productRoutes.get('/products', ProductController.getAllProducts());
productRoutes.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const products = await ProductController.getAllProductsForFilter();
        const findProduct = products.find((product) => product.id === id);
        if (findProduct) {
            res.send(findProduct);
        }
        else {
            res.status(404).send('Product not found');
        }
    }
    catch (error) {
        res.status(500).send('Error retrieving products');
    }
});
productRoutes.get('/stocks-products', async (req, res) => {
    const products = await ProductController.getAllProductsForFilter();
    const filterProduct = products.filter(product => !product.isNew);
    res.send(filterProduct);
});
productRoutes.get('/new-products', async (req, res) => {
    const products = await ProductController.getAllProductsForFilter();
    const filterProduct = products.filter(product => product.isNew);
    res.send(filterProduct);
});
productRoutes.post('/create-product', ProductController.onCreateProduct());
productRoutes.put('/edit-product/:id', ProductController.onEditProduct());
productRoutes.delete('/delete-product/:id', ProductController.onDeleteProduct());
export default productRoutes;
//# sourceMappingURL=ProductRoute.js.map