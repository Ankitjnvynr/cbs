// pages/api/alumni.js
import pool from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      studentName,
      dob,
      placeOfBirth,
      guardianName,
      nationality,
      occupation,
      state,
      city,
      pinCode,
      email,
      mobile,
      otherContact,
      rollNo,
      session,
      currentOrgDesignation,
      pastOrgDesignation,
      contactNo,
      course,
      branch,
    } = req.body;

    try {
      const [result] = await pool.query(
        `INSERT INTO alumni_registration 
        (studentName, dob, placeOfBirth, guardianName, nationality, occupation, state, city, pinCode, email, mobile, otherContact, rollNo, session, currentOrgDesignation, pastOrgDesignation, contactNo, course, branch) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          studentName,
          dob,
          placeOfBirth,
          guardianName,
          nationality,
          occupation,
          state,
          city,
          pinCode,
          email,
          mobile,
          otherContact,
          rollNo,
          session,
          currentOrgDesignation,
          pastOrgDesignation,
          contactNo,
          course,
          branch,
        ]
      );

      res.status(201).json({ message: 'Data inserted successfully!', id: result.insertId });
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ message: 'Database insertion failed', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
