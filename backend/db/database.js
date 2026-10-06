const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const db = new Pool({
  connectionString: process.env.DATABASE_URL
});

db.query('SELECT 1')
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch((err) => console.error('DB connection failed:', err.message));

module.exports = db;