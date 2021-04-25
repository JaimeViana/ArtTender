// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080; // Step 1


// const routes = require('./routes/api');

// Step 2
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/art_tender', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Step 3

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// Schema
const Schema = mongoose.Schema
const PrintSchema = new Schema({
    url: String,
    title: String,
    artist: String,
    ig: String
});

//Model
const Print = mongoose.model('Print', PrintSchema);

//Saving data to our mongo database
const data = {

}

// HTTP request logger
app.use(morgan('tiny'));
// app.use('/api', routes);




app.listen(PORT, console.log(`Server is starting at ${PORT}`));