import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import multer from 'multer';
import path from "path";
import productRoutes from './routes/ProductRoute.js';
import userRouter from './routes/UserRoutes.js';
const app = express();
const port = 3009;
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const fileExtension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
    },
});
const upload = multer({ storage: storage });
app.use('/uploads', express.static('uploads'));
app.use('/', productRoutes);
app.use('/', userRouter);
// app.get('/get-painting', (req: Request, res: Response) => {
//   const paintingSupplies = productsInServer.filter(product => product.categories === 'Малярные товары');
//   res.send(paintingSupplies);
// })
// app.get('/get-overalls', (req: Request, res: Response) => {
//   const overalls = productsInServer.filter(product => product.categories === 'Спецодежда');
//   res.send(overalls);
// })
// app.get('/get-electrical', (req: Request, res: Response) => {
//   const electrical = productsInServer.filter(product => product.categories === 'Электрооборудование');
//   res.send(electrical);
// })
// app.get('/get-from-home', (req: Request, res: Response) => {
//   const homeAndCottage = productsInServer.filter(product => product.categories === 'Для дома и дачи');
//   res.send(homeAndCottage);
// })
// app.get('/get-all-products', (req: Request, res: Response) => {
//   res.send(productsInServer);
// })
// app.get('/get-products/:id', (req: Request, res: Response) => {
//   const { id } = req.params
//   const findProduct: IProductM | undefined = productsInServer.find((product) => product.id === id);
//   if (findProduct) {
//     res.send(findProduct);
//   } else {
//     res.status(404).send('Product not found');
//   }
// })
// app.get('/get-stocks-products', (req: Request, res: Response) => {
//   const filterProduct = productsInServer.filter(product => !product.isNew);
//   res.send(filterProduct);
// });
// app.get('/get-stocks-products', (req: Request, res: Response) => {
//   const filterProduct = productsInServer.filter(product => product.isNew);
//   res.send(filterProduct);
// });
// app.post('/on-create-product', (req: Request, res: Response) => {
//   const newProduct = req.body;
//   productsInServer.push(newProduct);
//   res.send(productsInServer);
// });
// app.put('/on-edit.product', (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { name, img, price, inStock, detailed, isNew, categories } = req.body;
//   const index = productsInServer.findIndex(product => product.id === id);
//   if (index !== -1) {
//     productsInServer[index].name = name;
//     productsInServer[index].img = img;
//     productsInServer[index].price = price;
//     productsInServer[index].inStock = inStock;
//     productsInServer[index].detailed = detailed;
//     productsInServer[index].isNew = isNew;
//     productsInServer[index].categories = categories;
//     return productsInServer[index];
//   }
//   throw new Error('Product not found');
// })
// app.delete('on-delete', (req: Request, res: Response) => {
//   const { id } = req.params;
//   productsInServer.filter(product => product.id !== id);
//   res.send(productsInServer)
// })
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
//# sourceMappingURL=index.js.map