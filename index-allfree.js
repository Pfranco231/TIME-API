import express from 'express';
import axios from 'axios';

const app = express();
const port = 8080;

let ipAddress; function getIPAddress(){ fetch('https://api.ipify.org?format=json') .then(response => response.json()) .then(data => { ipAddress = data.ip; console.log(ipAddress); }); } getIPAddress();
app.get('/', async (req, res) => {
    try {
        const response = await axios.get(`https://worldtimeapi.org/api/ip/${ipAddress}`);
        const { date_time_txt: datetime } = response.data;

        res.json({
            time: datetime
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
    console.log(`API corriendo en http://localhost:${port}`);
});