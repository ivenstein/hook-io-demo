module.exports = function helloWorld (req, res) {
  // req is a Node.js http.IncomingMessage
  var host = req.host;
  // res is a Node.js httpServer.ServerResponse
  // Respond to the request with a simple string
  console.log('sent to the /logs endpoint');
  res.json(req.params);
};