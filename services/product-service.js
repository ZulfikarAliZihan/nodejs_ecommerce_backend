const Product = require('../db/models/product');
const appCodes = require('../lib/app-codes');
const { AppError } = require('../lib/app-error');
module.exports = {
    createProduct: async (productData) => {
        try{
            const product = await Product.query().insert(productData);
            return product;
        }
        catch($err){
            throw new AppError(appCodes.INTERNAL_SERVER_ERROR, $err);
        }

    }
}