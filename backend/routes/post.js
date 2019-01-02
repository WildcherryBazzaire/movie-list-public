'use strict' //do not know what this does
const Pool = require('pg-pool'); //get PG pool for pool
const config = require('../config.json');

const { //gets variables from config.json 
    table,
    host,
    database,
    user,
    password,
    port
} = config;

const pool = new Pool({ //makes a new Postgres instance
    host,
    database,
    user,
    password,
    port,
    idleTimeoutMillis: 1000
});

module.exports.postMovie = (event, context, callback) => {
    let {name, genre, release_date, rating} = event.body;
    const postSomeMovie = `INSERT INTO ${table} VALUES(DEFAULT,$1,$2,$3,$4);`; //commands postgres to get data from table

    pool.connect()
    .then(client => {
        client.release();
        return client.query(postSomeMovie,[name,genre,release_date,rating]);
    })
    .then(data => {
        const response = {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
          },
          body: JSON.stringify({
            message: data,
            input: event,
          }),
        };
        callback(null, response);
    });
};