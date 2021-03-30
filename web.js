
var HashtagCount = require('hashtag-count');

var hc = new HashtagCount({
  consumer_key: 'p2rnIpNPoQfqcVzJkEOT7EMbr',
  consumer_secret: '6mkAYYPMws0V79JvieF2x1iDeau0qWlZrmnwVcspPfeNoGZM7J',
  access_token: '30478033-4C5voiVEDJ8NQZGFRfx70Hb3oiznl708k9CDXFziJ',
  access_token_secret: 'SLD5YxJ46daA7ARgVgCOpaMDOEX7WBctn1Uug15ZpMgpc'
});

// Array of hashtags to tally. Do not include # prefix.
var hashtags = ['trump', 'biden'];

// Hashtag tallies for each time interval will be added to the results object.
var interval = '5 seconds';


// Delete data older than this.
var history = '5 seconds';
// Called at the end of each time interval. The results object contains
// start-of-interval time stamps with each interval's hashtag tallies.
// For example:
// {
//   '2017-01-16T00:00:10.606Z': { 'superbowl': 6, 'pizza': 1, 'beer': 8 },
//   '2017-01-16T00:01:10.610Z': { 'superbowl': 7, 'pizza': 1, 'beer': 4 },
//   '2017-01-16T00:02:10.612Z': { 'superbowl': 3, 'pizza': 1, 'beer': 0 }
// }
var intervalCb = function (err, results) {
  if (err) {
    console.error(err);
  } else {
    console.log(results); 
  }
};








// Called when connecting to Twitter Streaming API for the first time.
var connectingCb = function () {
  var dateString = new Date().toISOString();
  console.log(dateString + ' Connecting to Twitter Streaming API...');
};

// Called when reconnecting to Twitter Streaming API after a failed connection.
// For example, if Twitter rate limits the connection or the stream experiences
// a timeout.
var reconnectingCb = function () {
  var dateString = new Date().toISOString();
  console.log(dateString + ' Twitter Streaming API connection failed. Reconnecting...');
};

// Called when a Twitter Streaming API connection is established, either on the
// first connection attempt or a later reconnection attempt.
var connectedCb = function () {
  var dateString = new Date().toISOString();
  console.log(dateString + ' Connected.');
};

// Open a connection to Twitter's Streaming API and start capturing tweets!
hc.start({
  hashtags: hashtags,               // required
  interval: interval,               // required
  history: history,                 // optional
  intervalCb: intervalCb,           // optional
  connectingCb: connectingCb,       // optional
  reconnectingCb: reconnectingCb,   // optional
  connectedCb: connectedCb,         // optional
});

