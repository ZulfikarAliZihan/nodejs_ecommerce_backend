"use strict";
const Joi = require("joi");
const sendResponse = require("../lib/response-handler");
const AppError = require("../lib/app-error").AppError;
const appCodes = require("../lib/app-codes");
// console.log(Joi);
module.exports = (objectSchema) => {
  return function validationHandler(req, res, next) {
    const validationResult = objectSchema
      .validateAsync(req.body)
      .then(() => {
        next();
      })
      .catch((error) => {
        // console.log(err);
        const err = new AppError(appCodes.BAD_REQUEST, {
          details: error.details.pop().message,
        });
        sendResponse(err, req, res);
      });
  };
};
