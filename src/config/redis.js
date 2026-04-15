const { createClient } = require( 'redis');

const redisclient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-10664.c212.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 10664
    }
});



module.exports= redisclient;