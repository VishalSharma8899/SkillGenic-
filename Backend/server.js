const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Student = require('./model'); 
const connectDB = require('./db');    

const PORT = 5000;
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to database
connectDB();


 

// POST route to create a new user
app.post('/',  async (req, res) => {
    try {
        console.log('Request Body:', req.body); // Log the request body
        const studentData = new Student({
            Education: req.body.Education,
            Experience: req.body.Experience,
            Responsibility: req.body.Responsibility,
            Skills: req.body.Skills,
            WorkSample: req.body.WorkSample,
            Additional: req.body.Additional
        });
        const result = await studentData.save();
        res.status(201).send(result);
    } catch (error) {
        console.error('Error saving student data:', error); 
        res.status(500).send({ error: 'Error saving student data' });
    }
});

 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
