/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var router = express.Router();
  var upload = require("multer")({dest: "uploads/"});

  router.post('/', upload.single("file"), function(req, res) {
    console.log(req.file);
    res.redirect(201, "http://localhost:4200/api/attachments/12");
  });

  app.use('/api/attachments/upload', require('body-parser').json());
  app.use('/api/attachments/upload', router);
};
