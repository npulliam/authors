const mongoose = require('mongoose');

module.exports = (dbName) => {

    mongoose.connect(`mongodb://localhost/${dbName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        
    })
    .then(() => console.log(`Established connection with database: ${dbName}`))
    .catch(err => console.log(`Something went wrong connecting to database: ${dbName}`, err));
};