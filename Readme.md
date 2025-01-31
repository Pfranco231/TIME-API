# API de Tiempo

Esta es una API que obtiene la hora actual basada en la dirección IP del usuario.

## Descripción

La API utiliza el servicio [ipgeolocation.io](https://ipgeolocation.io/) para obtener la hora actual basada en la dirección IP del usuario.

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/api-de-tiempo.git
    cd api-de-tiempo
    ```

2. Instala las dependencias:
    ```sh
    npm install
    ```

## Uso

Para iniciar la aplicación en modo desarrollo con `nodemon`, ejecuta:
```sh
npm run dev
```
Para iniciar la aplicación en modo producción, ejecuta:
```sh
npm start
```
La API estará disponible en http://localhost:8080 | o la ip al servidor que se le subio

## Respuesta a la hora de usat GET /
```sh
{
  "time": "YYYY-MM-DDTHH:MM:SSZ"
}
```

## Recuerda si se va a usar en un servidor privado no es necesario el devcontainer, gitignore y instalar su propio node_modules

#### Las dependecias por ahora son: Express, Axios, Moment-timezone(para ver la hora en argentina)