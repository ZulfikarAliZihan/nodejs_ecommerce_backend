const router = require('express').Router();
const productController = require('../controllers/product-controller');
const productValidator = require('../validators/product');
const validationHandler = require('../middlewares/validation-handler');
const Joi = require('joi');
const responseHandler = require('../lib/response-handler');

router.post('/product',validationHandler(productValidator.productCreateSchema),
async (req, res, next) => {
    try{
        res.data = await productController.createProduct(req.body);
        responseHandler(null, req, res);
    }catch(err){
        responseHandler(err, req, res);
    }
} );


module.exports = router;
