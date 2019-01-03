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

module.exports.putMovie = (event, context, callback) => {
    let {oldMovie,newMovie} = event.body;
    const putSomeMovie = `UPDATE ${movies} SET Somevalue = $1 WHERE Somevalue = $2;`; //commands postgres to get data from table

    pool.connect()
    .then(client => {
        client.release();
        return client.query(putSomeMovie,[oldMovie,newMovie]);
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

/*
{
    "table": "movies",
    "host": "jrdevleague.cb9co1xxtizk.us-west-2.rds.amazonaws.com",
    "database": "whs_tim_kunta_kinte_jameson",
    "user": "jrdevleague",
    "password": "jrD3vLeague!",
    "port": 5432
  }
  YOU FUCKIN SUCK !!!
*/