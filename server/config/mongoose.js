const mongoose = require('mongoose');
const fs = require('fs');


mongoose.connect('mongodb://localhost/capitol_royale', {
    useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false
});

// create a variable that points to the models folder
const models_path = __dirname + '/../models';
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
        // require the file (this runs the model file which registers the schema)
        require(models_path + '/' + file);
    }
});