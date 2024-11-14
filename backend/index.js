const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',          // replace with your MySQL username
    password: '',           // replace with your MySQL password
    database: 'ulam_ni_marie' // replace with your database name
});

db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Connected to the MySQL database.');
    }
});

// API endpoint to get viands
app.get('/api/viands', (req, res) => {
    const sql = 'SELECT * FROM viands';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
