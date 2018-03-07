'use strict';

const Hapi = require('hapi');
const GeolocationController =  require('./geolocation');

const server = new Hapi.Server({
  port: 3000,
  host: 'localhost'
});

server.route({
  method: 'POST',
  path: '/geolocation',
  handler: GeolocationController.create
});

(async () => {
  try {  
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
  }
  catch (err) {  
    console.log(err)
  }
})();