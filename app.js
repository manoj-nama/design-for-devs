'use strict';

var express = require("express"),
   compression = require("compression"),
   path = require("path"),
   app = express();

app.use(compression({threshold: 0}));
app.use(express.static(path.join(process.cwd(), "public")));

app.listen(8888, "0.0.0.0", function () {
   console.log("Server running on port 8888");
});