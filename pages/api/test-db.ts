import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../lib/db';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        // ทดสอบการเชื่อมต่อ
        const connection = await pool.getConnection();
        
        // ทดสอบ query ง่ายๆ
        const [result] = await connection.query('SELECT 1 + 1 as result');
        
        // ดึงข้อมูลฐานข้อมูลและตาราง
        const [databases] = await connection.query('SHOW DATABASES');
        const [tables] = await connection.query('SHOW TABLES');
        
        // คืนการเชื่อมต่อกลับ pool
        connection.release();
        
        res.status(200).json({
            success: true,
            message: 'เชื่อมต่อฐานข้อมูลสำเร็จ! ✅',
            connectionInfo: {
                host: process.env.DB_HOST,
                database: process.env.DB_NAME,
                user: process.env.DB_USER,
            },
            testQuery: result,
            databases: databases,
            tables: tables,
        });
    } catch (error) {
        console.error('Database connection error:', error);
        res.status(500).json({
            success: false,
            message: 'ไม่สามารถเชื่อมต่อฐานข้อมูลได้ ❌',
            error: (error as Error).message,
            connectionInfo: {
                host: process.env.DB_HOST,
                database: process.env.DB_NAME,
                user: process.env.DB_USER,
            },
        });
    }
}
