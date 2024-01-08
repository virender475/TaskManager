const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000; // Choose your preferred port

// MongoDB connection setup
const DB_URI = 'mongodb+srv://virender:qwerty1234@taskmanager.2pfkbkq.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB connection string
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use(cors());
app.use(express.json());

// Define your routes here...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const taskRouter = require('./routes/tasks');
app.use('/tasks', taskRouter);