express = require('express');
var request = require('request');
app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json({
  type: 'application/*+json'
}));
app.use(bodyParser.json());
var jsonParser = bodyParser.json()
var info
var event

const fs = require("fs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

const api = require('./server/api')

app.use(express.static(__dirname + '/public/dist/public'));

app.use(express.urlencoded({
  extended: true
}));


require('./server/config/mongoose');
require('./server/config/routes')(app);


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({
  extended: false
}));


var options = {
  url: 'https://hackathon.umusic.com/prod/v1/search/tracks?q=hello',
  headers: {
    'x-api-key': 'xmN6Ijjcxy1GzOGsOcu1a6EpbSden1c64P3r5bQh',
    'Accept': 'text/html, application/xhtml+xml, */*',
    'Content-Type': 'application/x-www-form-urlencoded',
    responseType: 'text'
  },
};

var bands = {
  url: 'https://rest.bandsintown.com/artists/katyperry/events?app_id=capitol201939ad4ebef3caf1ac2914b0eb8203c030',
  headers: {
    'x-api-key': 'nTG4tbSXpIaniCHlJ62q06GzIpROk6qh56EiK7N1',
    'app_id': 'capitol201939ad4ebef3caf1ac2914b0eb8203c030'
  }
};

// BANDS IN TOWN DATA

function callback2(error, response, body) {
  event = body;
}

request(bands, callback2);

app.get("/artist/events", async (req, res) => {
  try {
    res.json(event)
  } catch (e) {
    console.error(e);
    res.json({
      error: e
    });
  }
});
// END BANDS


// UMG DATA
function callback(error, response, body) {
  options.url += request
  info = body;
}

request(options, callback);

app.get("/artist/search", async (req, res) => {
  try {
    res.json(info)
  } catch (e) {
    console.error(e);
    res.json({
      error: e
    });
  }
});

// END OF UMG DATA

app.all('*', (_, res) => res.sendFile(__dirname + '/public/dist/public/index.html'));


const server = app.listen(3333, () => console.log('songs sung on 3333'));
const io = require('socket.io')(server);

// Socket Events
io.on("connection", function(socket) {
    
    //Get Socket ID
    socket.on("getId", function(){
        ID = socket.id;
        socket.emit("hereBro", socket.id);
        socket.join(socket.id);
    });

    
}); 

io.on("connection", function (socket) {

});

