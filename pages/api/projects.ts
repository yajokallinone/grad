import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../lib/db';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const [rows] = await pool.query(
            'SELECT thesis_t1 as project_name, subjproject as advisor FROM project where substr(id,5,1) = 3  ORDER BY id'
        );
        
        res.status(200).json(rows);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูล', error: (error as Error).message });
    }
}
