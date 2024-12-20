const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const xlsx = require('xlsx');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const fs = require('fs');

// Load environment variables
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const SECRET_KEY = process.env.SECRET_KEY || 'xt3lYKNjKw9sDhGCPcbXMkf_0GIQ93z3Dt9C1tnxvSFkFE14yIZD7fdVUUlyuC_SoZvn1ifU01dAl_ji0Oosgw';

// MySQL database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'jamshedpur_2023',
  database: process.env.DB_NAME || 'voting_app'
});

// Connect to the database
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to database');
});

// Fixed username and password for login
const fixedUsername = 'teacher1';
const fixedPassword = 'password123';

// Login route with fixed username and password
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === fixedUsername && password === fixedPassword) {
    const token = jwt.sign({ username }, SECRET_KEY);
    res.json({ token });
  } else {
    res.status(401).send('Invalid login');
  }
});

// Route to fetch results and generate an Excel file
app.get('/results', (req, res) => {
  const token = req.headers.authorization;

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).send('Unauthorized');

    // Fetch actual results from the database
    db.query(
      'SELECT category, candidate, COUNT(*) AS votes FROM votes GROUP BY category, candidate',
      (err, results) => {
        if (err) {
          console.error('Error fetching results:', err);
          return res.status(500).send('Error fetching results');
        }

        // Organize results into an array suitable for Excel
        const data = [['Category', 'Candidate', 'Votes']];

// ... (other code to fetch or calculate results)

// Add fixed data
data.push(['President', 'Can 1', 2]);
data.push(['President', 'Can 2', 1]);
data.push(['President', 'Can 3', 1]);
data.push(['VicePresident', 'Can 1', 1]);
data.push(['VicePresident', 'Can 2', 2]);
data.push(['VicePresident', 'Can 3', 1]);

// Add dynamic data based on results
results.forEach(row => {
    data.push([row.category, row.candidate, row.votes]);
});

        // Create a worksheet from the results data
        const ws = xlsx.utils.aoa_to_sheet(data);
        const wb = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(wb, ws, 'Voting Results');

        // Write the Excel file to a temporary location
        const filePath = './voting_results.xlsx';
        xlsx.writeFile(wb, filePath);

        // Send the file as a downloadable response
        res.download(filePath, 'voting_results.xlsx', (err) => {
          if (err) {
            console.error('Error while downloading the file:', err);
            res.status(500).send('Error while downloading the file');
          }

          // Clean up the file after sending it
          fs.unlink(filePath, (err) => {
            if (err) console.error('Error deleting the temporary file:', err);
          });
        });
      }
    );
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
