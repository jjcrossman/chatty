//init
const express = require( "express" );
const { json } = require( "body-parser" );

const app = express();
const port = 8899;

app.use( json() );


//database

const timeObj = new Date();
const messages = [
  {
      "author": "Bobby"
      , "content": "Hey idiots, ya dead!"
      , "time": new Date()
  }
  , {
    "author": "Howard"
    , "content": "Sometimes I'm here and that's about it."
    , "time": new Date()
  }
];

//REST methods
app.get( '/api/messages', function( req, res ) {

  res.status(200).set( {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  } ).send(JSON.stringify( messages ));

} );

app.post( "/api/messages", ( req, res ) => {

  let newMessage = {
    "author": `${ req.body.user }`
    , "content": `${ req.body.message }`
    , "time": new Date()
  }
  messages.push( newMessage );
  res.status( 200 ).set( {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  } ).send( JSON.stringify( messages ) );
} );

//Options
app.options( "/api/messages", ( req, res ) => {
  res.set( { 'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' } ).send();
} );

//listen


app.listen( port, () => console.log( `Chatty is listening on port: ${ port }` ) );
