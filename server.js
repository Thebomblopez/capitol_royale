express = require('express');
var request = require('request');
app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.json());
var jsonParser = bodyParser.json()
var info

const fs = require("fs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())

const api = require('./server/api')

app.use(express.static(__dirname + '/public/dist/public'));

app.use(express.urlencoded({
    extended: true
}));
  

require('./server/config/mongoose');
require('./server/config/routes')(app);


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
  });
app.use(bodyParser.urlencoded({ extended: false }));


var options = {
    url: 'https://hackathon.umusic.com/prod/v1/search/tracks?q=elvis',
    headers: {
      'x-api-key': 'xmN6Ijjcxy1GzOGsOcu1a6EpbSden1c64P3r5bQh'
    }
  };

  // UMG DATA
  function callback(error, response, body) {
      options.url += request
      info = body;
  }

  request(options, callback);


  // test routes
  app.get("/artist/search", async (req, res) => {
    try {
      res.json(info)
    } catch (e) {
      console.error(e);
      res.json({ error: e });
    }
  });

  // END OF UMG DATA

app.all('*', (_, res) => res.sendFile(__dirname + '/public/dist/public/index.html'));


const server = app.listen(3333, () => console.log('songs sung on 3333'));
const io = require('socket.io')(server);

// Socket Events
io.on("connection", function(socket) {

}); 



