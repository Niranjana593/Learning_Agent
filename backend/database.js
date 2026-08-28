import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure .env is loaded whether running from project root or backend directory
dotenv.config({ path: path.join(__dirname, '.env') });
dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432', 10),
});

// Handle pool background errors
pool.on('error', (err) => {
  console.error('Unexpected error on idle PostgreSQL client:', err.message);
});

// Helper function to query the database
export const query = (text, params) => {
  return pool.query(text, params);
};

// Initialize database schema
export const initDatabase = async () => {
  const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      clerk_id VARCHAR(255),
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      gender VARCHAR(50) NOT NULL,
      standard_class VARCHAR(50) NOT NULL,
      age INT NOT NULL,
      preferred_language VARCHAR(100) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  const createDashboardTableQuery = `
    CREATE TABLE IF NOT EXISTS dashboard (
      id SERIAL PRIMARY KEY,
      user_email VARCHAR(255) NOT NULL UNIQUE,
      n_back_test BOOLEAN DEFAULT FALSE,
      hopfield_test BOOLEAN DEFAULT FALSE,
      hebbian_test BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(createUsersTableQuery);
    console.log('✅ PostgreSQL "users" table initialized successfully.');
    await pool.query(createDashboardTableQuery);
    console.log('✅ PostgreSQL "dashboard" table initialized successfully.');
  } catch (err) {
    console.error('❌ Failed to initialize database tables:', err.message);
  }
};

// Export the pool connection
export default pool;
