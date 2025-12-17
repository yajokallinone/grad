import mysql from 'mysql2/promise';

// สร้าง connection pool สำหรับเชื่อมต่อฐานข้อมูล
const pool = mysql.createPool({
    host: process.env.DB_HOST || '10.10.12.77',
    user: process.env.DB_USER || 'reg',
    password: process.env.DB_PASSWORD || 'ed06engr',
    database: process.env.DB_NAME || 'reg',
    charset: 'utf8',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;
