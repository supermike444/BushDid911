var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]);
  var ayyRegex = /^ayy$/;
  var wewRegex = /^wew$/;
  var oogaRegex = /^ooga$/;
  

  if(request.text && ayyRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage("lmao");
    this.res.end();
  }
  else if (request.text && wewRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage("lad");
    this.res.end();
  }
  else if (request.text && oogaRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage("booga");
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(input) {
  var botResponse, options, body, botReq;

  botResponse = input;

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}


exports.respond = respond;
