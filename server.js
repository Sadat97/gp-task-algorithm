const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const algorithm = require('./algorithm');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/", function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    array = req.body.i;
    n = req.body.n;
    t = req.body.t;
    ans = algorithm.RUN(array, n, t);
    res.end(JSON.stringify({ result: ans }));
});

app.listen(process.env.PORT || 8001, function() {
  console.log("Your node js server is running on port", process.env.PORT);
});
