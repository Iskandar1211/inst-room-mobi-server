import db from '../db.js';
export class ProductModel {
    static async getProducts() {
        const result = await db.query('SELECT * FROM products');
        return result.rows;
    }
    static async createProduct(req) {
        const { id, name, img, price, inStock, detailed, isNew, total, quantity, categories } = req.body;
        const result = await db.query('INSERT INTO products (id, name, img, price, "inStock", detailed, "isNew", total, quantity, categories) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *', [id, name, img, price, inStock, detailed, isNew, total, quantity, categories]);
        return result.rows;
    }
    static async deleteProduct(req) {
        const { id } = req.params;
        await db.query('DELETE FROM products WHERE id = $1', [id]);
        return { message: 'Продукт успешно удалено' };
    }
    static async editProduct(req) {
        const { id } = req.params;
        const { name, img, price, inStock, detailed, isNew, categories } = req.body;
        const result = await db.query('UPDATE products SET name=$1, img=$2, price=$3, inStock=$4, detailed=$5, isNew=$6, categories=$7 WHERE id=$8 RETURNING *', [name, img, price, inStock, detailed, isNew, categories, id]);
        return result.rows[0];
    }
}
//# sourceMappingURL=ProductModel.js.map