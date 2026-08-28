import express from 'express'
import cors from 'cors'
import { clerkMiddleware, getAuth } from '@clerk/express';
import pool, { query, initDatabase } from './database.js';

const app = express()
app.use(cors())
app.use(express.json())

app.use(clerkMiddleware());
const port = process.env.PORT || 3000

// Test PostgreSQL connection and initialize database tables on startup
pool.query('SELECT NOW()')
  .then(async (res) => {
    console.log('✅ PostgreSQL connected successfully. Database time:', res.rows[0].now);
    await initDatabase();
  })
  .catch((err) => {
    console.error('❌ PostgreSQL connection error:', err.message);
  });

// Simple endpoint to check database status
app.get('/api/db-health', async (req, res) => {
  try {
    const result = await query('SELECT NOW()');
    res.json({ success: true, message: 'Database connected', time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Check if user profile exists by email
app.get('/api/users/profile', async (req, res) => {
  const { email } = req.query;
  if (!email) {
    return res.status(400).json({ success: false, message: 'Email query parameter is required' });
  }

  try {
    const result = await query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length > 0) {
      return res.json({ exists: true, user: result.rows[0] });
    } else {
      return res.json({ exists: false, user: null });
    }
  } catch (err) {
    console.error('Error fetching user profile:', err);
    return res.status(500).json({ success: false, message: 'Failed to fetch user profile', error: err.message });
  }
});

// Create or update user profile
app.post('/api/users/profile', async (req, res) => {
  const { clerk_id, name, email, gender, standard_class, age, preferred_language } = req.body;

  if (!name || !email || !gender || !standard_class || !age || !preferred_language) {
    return res.status(400).json({
      success: false,
      message: 'All fields (name, email, gender, standard_class, age, preferred_language) are required.'
    });
  }

  const upsertQuery = `
    INSERT INTO users (clerk_id, name, email, gender, standard_class, age, preferred_language, updated_at)
    VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
    ON CONFLICT (email) DO UPDATE SET
      clerk_id = EXCLUDED.clerk_id,
      name = EXCLUDED.name,
      gender = EXCLUDED.gender,
      standard_class = EXCLUDED.standard_class,
      age = EXCLUDED.age,
      preferred_language = EXCLUDED.preferred_language,
      updated_at = NOW()
    RETURNING *;
  `;

  try {
    const result = await query(upsertQuery, [
      clerk_id || null,
      name,
      email,
      gender,
      standard_class,
      parseInt(age, 10),
      preferred_language
    ]);

    console.log('✅ User profile saved/updated:', result.rows[0]);
    return res.status(201).json({
      success: true,
      message: 'User profile saved successfully',
      user: result.rows[0]
    });
  } catch (err) {
    console.error('❌ Error saving user profile:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to save user profile',
      error: err.message
    });
  }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})