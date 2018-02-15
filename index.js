const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const {create,getOne,getAll,update,remove} = require('./products_controller.js')
require('dotenv').config();

const app = express();
massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance);
});

app.use( bodyParser.json() );
app.use( cors() );

app.get('/api/products/',getAll);
app.get('/api/product/:id',getOne);
app.put('/api/product/:id',update);
app.post('/api/product/',create);
app.delete('/api/product/:id',remove);

const port = process.env.PORT || 3000
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );
