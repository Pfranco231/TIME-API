import express from 'express';
import axios from 'axios';
import moment from 'moment-timezone';
import cors from 'cors';

const app = express();
app.use(cors());
const port = process.env.PORT || 8080;
const apiKey = '44978937c54b41b880e40b30a23b963c'; // Reemplaza con tu API key de ipgeolocation.io

app.get('/', async (req, res) => {
    try {
        // Obtener la dirección IP del cliente
        const ipResponse = await axios.get('https://api.ipify.org?format=json');
        const ipAddress = ipResponse.data.ip;

        // Obtener la hora basada en la dirección IP
        const response = await axios.get(`https://api.ipgeolocation.io/timezone?apiKey=${apiKey}&ip=${ipAddress}`);
        const { date_time_txt: datetime } = response.data;

        // Obtener la hora actual de Argentina
        const argentinaTime = moment().tz('America/Argentina/Buenos_Aires').format('YYYY-MM-DD HH:mm:ss');

        const today = moment().format('MMMM DD');
        res.json({
            ipTime: datetime,
            argentinaTime: argentinaTime,
            today: today
        });
    } catch (error) {
        if (error.code === 'ECONNRESET') {
            res.status(502).json({ error: 'Error de conexión, por favor intente nuevamente. Error: 502' });
        } else if (error.response) {
            res.status(error.response.status).json({ error: error.response.data });
        } else {
            res.status(500).json({ error: `Error al obtener datos: ${error.message}` });
        }
    }
});

app.listen(port, () => {
    console.log(`API corriendo en puerto ${port}`);
});