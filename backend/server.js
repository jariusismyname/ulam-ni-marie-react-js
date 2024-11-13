// backend/server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Create MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.error('MySQL connection error:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Sample route to get all items (e.g., viands)
app.get('/api/viands', (req, res) => {
    const query = 'SELECT * FROM viands';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Sample route to add an item
app.post('/api/viands', (req, res) => {
    const { name, price } = req.body;
    const query = 'INSERT INTO viands (name, price) VALUES (?, ?)';
    db.query(query, [name, price], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ id: result.insertId, name, price });
    });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
