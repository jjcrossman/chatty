const express = require( "express" );
const { json } = require( "body-parser" );

const app = express();
const port = 8899;

app.use( json() );


//database
const messages = [];

//REST methods
app.get( "/api/messages", ( req, res ) => {
  messages.push( req.body.message );
} );

//listen


app.listen( port, () => console.log( `Chatty is listening on port: ${ port }` ) );
