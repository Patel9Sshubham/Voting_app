const mongoose = require('mongoose');
require('dotenv').config();

// Define the MongoDB connection URL

const mongoURL = "mongodb+srv://shubhampatel98937:Adroit%40123@cluster0.cyu11.mongodb.net/voting?retryWrites=true&w=majority&appName=Cluster0";
// const mongoURL = process.env.MONGODB_URL;

// Set up MongoDB connection
// mongoose.connect(mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
mongoose.connect(mongoURL);
// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

// Define event listeners for database connection

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export the database connection
module.exports = db;

