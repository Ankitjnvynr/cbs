// pages/api/alumni.js
import pool from '../../lib/db'; // Ensure the pool is correctly imported and configured

export default async function handler(req, res) {
  if (req.method === 'POST') {
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

    try {
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

      const [result] = await pool.query(query, values);

      res.status(201).json({
        message: 'Data inserted successfully!',
        id: result.insertId,
      });
    } catch (error) {
      console.error('Database error:', error); // Log the actual error message
      res.status(500).json({
        message: 'Database insertion failed',
        error: error.message, // Send the error message for debugging
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
