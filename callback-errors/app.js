'use strict';
const http = require('http');

const getLatestNodeInfo = (callback) =>
  http.get('http://nodejs.org/dist/index.json', (resp) => {
    //resp = respuesta de la peticion
    const statusCode = resp.statusCode;
    const headers = resp.headers;
    const contentType = headers['content-type'];

    // Revisamos si la respuesta pudo o no ser satsfactoria.
    // Los estados 200 son exitosos
    if (statusCode !== 200) {
        //El protocolo no fallo, pero el servidor encontro un problema 
      return callback(new Error(`Request Failed. Status Code: ${statusCode}`));
    } else if (!/^application\/json/.test(contentType)) {
        //El protocolo no fallo, pero la respuesta no es un JSON 
      return callback(new Error(`Bad content-type. Expected application/json but got ${contentType}`));
    }

    let rawData = '';
    resp.setEncoding('utf8');
    /*
     response.on('data',callback);
     Evento que captura pedacitos de la respuesta y permite que los manipules
     a través de su parametro callback
     En este caso estamos uniendo cada captura al string rawData.
     */
    resp.on('data', (chunk) => { rawData += chunk; });
    /*
     response.on('end',callback);
     Cuando se lea toda la respuesta se ejecutara un evento end
     convierte el string rawData en este caso en  un arreglo 
     contiene todas las versiones de node
     http://nodejs.org/dist/index.json
     */
    resp.on('end', () => {
        /*
            Este bloque try catch solo se encarga de revisar que el JSON.parse funcionara
            si hubiera algun problema con la transformacion del rawData entonces se arrojaria
            el error a traves del catch y la llamada al callback con el mismo error. 
        */ 
    let parsedData = [];
    try {
        parsedData = JSON.parse(rawData);
      } catch (err) {
        callback(err);
        return;
      }
      callback(null, parsedData.shift());
    });
  }).on('error', callback);
  //Si la peticion falla se ejecuta este callback de error. 


getLatestNodeInfo((error,data)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log(data);
  })