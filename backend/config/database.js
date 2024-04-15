const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost/inventory-control')
    .then(() => console.log('========================\nConectado ao MongoDB\n========================'))
    .catch((error) => console.log(error))