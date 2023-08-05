const express = require('express');
const data = express();
const dataController = require('../controllers/dataController');

const multer = require('multer');
const path = require('path');
const bodyparser = require('body-parser');

data.use(bodyparser.urlencoded({extended: true}));
data.use(express.static(path.resolve(__dirname,'public')));

var storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,'./public/uploads')
    },
    filename:(req,file,cb) => {
        cb(null,file.originalname)
    }
})

var upload = multer({storage:storage});

data.post('/importdata',upload.single('file'),dataController.importData);

module.exports = data; 