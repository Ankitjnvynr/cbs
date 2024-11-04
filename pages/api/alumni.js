// pages/api/alumni.js
import pool from '../../lib/db'; // Ensure the pool is correctly configured

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  try {
    const {
      studentName,
      nationality,
      occupation,
      city,
      email,
      mobile,
      course,
      branch,
      rollNo,
      session,
      currentOrgDesignation,
      pastOrgDesignation,
    } = req.body;

    // Validate required fields
    if (
      !studentName || !nationality || !city || !email ||
      !mobile || !course || !branch || !rollNo || !session
    ) {
      return res.status(400).json({ message: 'All required fields must be filled.' });
    }

    // Optional: Log received data to debug issues
    console.log('Received data:', req.body);

    // SQL query to insert data
    const query = `
      INSERT INTO alumni_registration 
      (studentName, nationality, occupation, city, email, mobile, course, branch, rollNo, session, currentOrgDesignation, pastOrgDesignation) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      studentName,
      nationality,
      occupation || null,
      city,
      email,
      mobile,
      course,
      branch,
      rollNo,
      session,
      currentOrgDesignation || null,
      pastOrgDesignation || null,
    ];

    // Execute the query
    const [result] = await pool.query(query, values);

    // Respond with success message
    res.status(201).json({
      message: 'Data inserted successfully!',
      id: result.insertId,
    });

  } catch (error) {
    console.error('Database error:', error); // Log the actual error
    res.status(500).json({
      message: 'Database insertion failed',
      error: error.message, // Send error message for debugging
    });
  }
}
