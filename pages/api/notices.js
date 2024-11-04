// This file defines an API route at '/api/hello'
import pool from "../../lib/db";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        // Handle GET request
        try {
            const [rows] = await pool.query(`
                SELECT * FROM notice_board
            `);
            const noticeData = rows.map((notice) => ({
                ...notice,
                createdAt: notice.createdAt ? notice.createdAt.toISOString() : null,
            }));
            res.status(200).json({ message: 'Data retrieved successfully', data: noticeData });
        } catch (error) {
            console.error("Database Error:", error);
            res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
    } else if (req.method === 'POST') {
        // Handle POST request (Create)
        try {
            const { title, content, author, expiration_date, priority } = req.body;
            const [result] = await pool.query(`
                INSERT INTO notice_board (title, content, author, expiration_date, priority) 
                VALUES (?, ?, ?, ?, ?)
            `, [title, content, author, expiration_date, priority]);

            res.status(201).json({ message: 'Notice created successfully', noticeId: result.insertId });
        } catch (error) {
            console.error("Database Error:", error);
            res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
    } else if (req.method === 'PUT') {
        // Handle PUT request (Update)
        try {
            const { id, title, content, author, expiration_date, priority } = req.body;
            const [result] = await pool.query(`
                UPDATE notice_board 
                SET title = ?, content = ?, author = ?, expiration_date = ?, priority = ? 
                WHERE notice_id = ?
            `, [title, content, author, expiration_date, priority, id]);

            if (result.affectedRows > 0) {
                res.status(200).json({ message: 'Notice updated successfully' });
            } else {
                res.status(404).json({ message: 'Notice not found' });
            }
        } catch (error) {
            console.error("Database Error:", error);
            res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
    } else if (req.method === 'DELETE') {
        // Handle DELETE request
        try {
            const { id } = req.body;
            const [result] = await pool.query(`
                DELETE FROM notice_board 
                WHERE notice_id = ?
            `, [id]);

            if (result.affectedRows > 0) {
                res.status(200).json({ message: 'Notice deleted successfully' });
            } else {
                res.status(404).json({ message: 'Notice not found' });
            }
        } catch (error) {
            console.error("Database Error:", error);
            res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
    } else {
        // Handle unsupported HTTP methods
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
