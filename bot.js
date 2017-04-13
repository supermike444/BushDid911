var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]);
  var ayyRegex = /^ayy$/;
  var wewRegex = /^wew$/;
  var oogaRegex = /^ooga$/;
  var kysRegex = /^kys$/;
  var thankRegex = /^thank$/;
  var dootRegex = /^doot$/;
  var heheRegex = /^hehe$/;
  var imageRegex = /^image$/;
  var ImageRegex = /^Image$/;
  var rouletteRegex = /^end me$/;
  var ggRegex = /^gg$/;
  var reportedRegex = /^reported$/;
  var coolRegex = /^cls2$/;
  var succRegex = /^Succ\?$/;
  
  
if (request.name != "wew ayy ooga kys thank doot hehe image") {
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
  else if (request.text && kysRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage("brb kms");
    this.res.end();
  }
  else if (request.text && thankRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage("welc");
    this.res.end();
  }
  else if (request.text && dootRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage("doot");
    this.res.end();
  }
  else if (request.text && heheRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage("xd");
    this.res.end();
  }
  else if (request.text && succRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessageSucc();
    this.res.end();
  }
  else if (request.text && imageRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage2();
    this.res.end();
  }
  else if (request.text && ImageRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage2();
    this.res.end();
  }
  else if (request.text && rouletteRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage3();
    this.res.end();
  }
  else if (request.text && ggRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage("end your life faggot");
    this.res.end();
  }
  else if (request.text && reportedRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Ihre Berichtseinreichung wurde an die Valve-Unterstützung gesendet. Vielen Dank für die Gemeinschaft der bessere Ort!");
    this.res.end();
  }
  else if (request.text && coolRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage4();
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  
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

//========================================================================================================

function postMessage2() {
  var botResponse, options, body, botReq;

  var textuals = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        textuals += possible.charAt(Math.floor(Math.random() * possible.length));
  
  var stringerino = "http://i.imgur.com/";
  var string2 = ".png";
  var penultimate = stringerino.concat(textuals);
  var ultimate = penultimate.concat(string2);
  
  botResponse = ultimate;

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

//==========================================================================================================

function postMessage3() {
  var botResponse, options, body, botReq;

  var textuals = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        textuals += possible.charAt(Math.floor(Math.random() * possible.length));
  
  var randomnum = Math.floor((Math.random() * 60) + 1);
  if (randomnum > 59)
    {
        botResponse = "DUMPSTERED";
    }
    else if (randomnum > 58)
    {
        botResponse = "BANOODLED";
    }
  else if (randomnum > 57)
    {
        botResponse = "CUCKED";
    }
  else if (randomnum > 56)
    {
        botResponse = "PUT IN THE GROUND";
    }
  else if (randomnum > 55)
    {
        botResponse = "RIP IN RESTERONI";
    }
  else if (randomnum > 54)
    {
        botResponse = "DOOTED";
    }
  else if (randomnum > 53)
    {
        botResponse = "WEWLAD'D";
    }
  else if (randomnum > 52)
    {
        botResponse = "OOGA BOOGA'D";
    }
  else if (randomnum > 51)
    {
        botResponse = "ENDED";
    }
  else if (randomnum > 50)
    {
        botResponse = "REST IN RIPPERONI";
    }
  else botResponse = "Miss!"
  

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

//=======================================================================================

function postMessage4() {
  var botResponse, options, body, botReq;

  var textuals = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        textuals += possible.charAt(Math.floor(Math.random() * possible.length));
  
  var stringerino = "http://i.imgur.com/";
  var string2 = ".png";
  var penultimate = stringerino.concat(textuals);
  var ultimate = penultimate.concat(string2);
  
  
  var poopy;
  var dingus = [];
  for (poopy =  0; poopy < 50; poopy++)
  {
  dingus[poopy] = cool();
  }

  botResponse = (dingus.toString()).replace(/,/g, '\n');
  
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

function postMessageSucc() {
  var botResponse, options, body, botReq;

  var randomnum = Math.floor((Math.random() * 50) + 1);

  if (randomnum > 25)
    {
        botResponse = "Succ.";
    }
    else
    {
        botResponse = "No succ.";
    }
  
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
