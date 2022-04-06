const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dbSetup = require('./db/db-setup');
const { AppError } = require('./lib/app-error');
const appCodes = require('./lib/app-codes');
try{
    dbSetup();
}catch(err){
    throw new AppError(appCodes.INTERNAL_SERVER_ERROR, err);
}
app.use(express.json());
app.use('/api',require('./routes/product'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});