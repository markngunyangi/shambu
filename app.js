const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const errorController = require('./controller/error');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

mongoose.connect("mongodb://localhost:27017/jereDB", {useNewUrlParser: true});

const paramRoutes = require('./route/param');
const projectRoutes = require('./route/project');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(paramRoutes);
app.use(projectRoutes)



app.listen(3000, function () {
    console.log("Hey Mark,am running");
});
app.use(errorController.get404);