const express = require('express');
const connectDB = require('./config/db');
const router = require('./routes/api/users');

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

//Init middleware

app.use(express.json({ extended: false }));

//Defining Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

app.get('/', (req, res) => res.send('API Running'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
