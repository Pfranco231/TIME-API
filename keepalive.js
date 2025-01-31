import https from "https";

function keepAlive() {
    https.get('https://humble-robot-5gq5v6v955492vxvv-8080.app.github.dev/', (res) => {
        res.on('data', () => {});
        res.on('end', () => {
            // console.log(`Solicitud GET realizada correctamente a las: ${new Date().toLocaleString()}`)
        });
    }).on('error', (e) => {
        console.error(`Error: ${e.message}`);
    });
}

setInterval(keepAlive, 5 * 60 * 1000); // 5 minutos
