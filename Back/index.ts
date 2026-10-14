import express from "express";
import cors from "cors";
import { Pool } from "pg";

const app = express();

const PORT = 3000;


app.use(cors());
app.use(express.json());


const pool = new Pool({
    user: 'postgres',
    host: '192.168.125.159',
    database: 'postgres',
    password: '1234',
    port: 5432,
});

app.get('/main', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM house ORDER BY id');

        res.json(result.rows);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Ошибка',
        });
    }
});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});


