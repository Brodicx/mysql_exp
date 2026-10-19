import mysql from 'mysql2/promise'

console.log('Menghubungkan ke database...')
const db = await mysql.createConnection({
    host: '187.77.125.214',
    user: 'hadi',
    password: '@Brodicx123',
    port: 3306,
    database: 'sekolah_db',
    waitForConnections : true,
    connectionLimit: 10
})

console.log('Database connected successfully.')

export default db;