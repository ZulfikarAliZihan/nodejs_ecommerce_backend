'use strict';

const httpCodes = require('./http-codes');

module.exports = {
  SUCCESS: {
    httpCode: httpCodes.OK.code,
    code: 0,
    title: 'Success',
    details: 'Success'
  },
  DUPLICATE_GENERAL_LEDGER_ACCOUNT_NAME: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 1,
    title: 'Bad Request',
    details: 'Duplicate General Ledger Account name'
  },
  GENERAL_LEDGER_ACCOUNT_UPDATE_FAILED: {
    httpCode: httpCodes.PRECONDITION_FAILED.code,
    code: 2,
    title: 'Precondition Failed',
    details: 'General Ledger Account update failed'
  },
  INVALID_GENERAL_LEDGER_ACCOUNT_ID: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 3,
    title: 'Bad Request',
    details: 'Invalid General Ledger Account-Id'
  },
  DUPLICATE_ACCOUNT_NAME: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 4,
    title: 'Bad Request',
    details: 'Duplicate Account name'
  },
  ACCOUNT_UPDATE_FAILED: {
    httpCode: httpCodes.PRECONDITION_FAILED.code,
    code: 5,
    title: 'Precondition Failed',
    details: 'Account update failed'
  },
  INVALID_ACCOUNT_ID: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 6,
    title: 'Bad Request',
    details: 'Invalid Account-Id'
  },
  INVALID_PARENT_ACCOUNT_ID: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 7,
    title: 'Bad Request',
    details: 'Invalid Parent Account-Id'
  },
  INACTIVE_ACCOUNT_ID: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 8,
    title: 'Bad Request',
    details: 'Account is inactive'
  },
  ACCOUNT_BALANCE_UPDATE_FAILED: {
    httpCode: httpCodes.PRECONDITION_FAILED.code,
    code: 9,
    title: 'Precondition Failed',
    details: 'Account balance update failed'
  },
  INVALID_ACCOUNTING_TRANSACTION_FOR_DEBIT: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 10,
    title: 'Bad Request',
    details: 'Invalid Associated Accounting-Transaction for Debit'
  },
  INVALID_ACCOUNTING_TRANSACTION_FOR_CREDIT: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 11,
    title: 'Bad Request',
    details: 'Invalid Associated Accounting-Transaction for Credit'
  },
  DUPLICATE_SOURCE_ID_FOR_TRANSACTION_TYPE: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 12,
    title: 'Bad Request',
    details: 'Duplicate Source-Id for Transaction-Type: %s'
  },
  SAME_ACCOUNT_ID_INVOLVED_IN_BOTH: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 13,
    title: 'Bad Request',
    details: 'Same Account-Id involved in both Debit and Credit'
  },
  INVALID_ACCOUNT_NAME: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 14,
    title: 'Bad Request',
    details: 'Invalid Account-Name'
  },
  NOT_FOUND: {
    httpCode: httpCodes.NOT_FOUND.code,
    code: 253,
    title: httpCodes.NOT_FOUND.msg,
    details: httpCodes.NOT_FOUND.msg
  },
  BAD_REQUEST: {
    httpCode: httpCodes.BAD_REQUEST.code,
    code: 254,
    title: httpCodes.BAD_REQUEST.msg,
    details: httpCodes.BAD_REQUEST.msg
  },
  INTERNAL_SERVER_ERROR: {
    httpCode: httpCodes.INTERNAL_SERVER_ERROR.code,
    code: 255,
    title: httpCodes.INTERNAL_SERVER_ERROR.msg,
    details: httpCodes.INTERNAL_SERVER_ERROR.msg
  }
};