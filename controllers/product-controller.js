const appCodes = require('../lib/app-codes');
const { AppError } = require('../lib/app-error');
const productService = require('../services/product-service');
module.exports ={
    createProduct: async (product) => {
        try{
        const createProductRes =  await productService.createProduct(product);
        return createProductRes;
        }
        catch(err){
            throw new AppError(appCodes.INTERNAL_SERVER_ERROR, err);
        }
    }
}