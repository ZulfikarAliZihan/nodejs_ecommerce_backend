const Joi = require('joi');
module.exports = {
    productCreateSchema : Joi.object().keys({
        name: Joi.string().required(),
        price: Joi.number().required(),
        category_id: Joi.number().required(),
        product_type_id: Joi.number().required(),
        price: Joi.number().required(),
        status: Joi.string().valid('publish', 'unpublish').required()    
    })
}