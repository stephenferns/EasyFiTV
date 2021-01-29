var express = require('express');
var router = express.Router();
const navigator = require('navigator')

router.get("/", function (req, res, next) {
  let ua = navigator.userAgent;
  let chromeAgent = ua.indexOf("Chrome") > -1;
  let safariAgent = ua.indexOf("Safari") > -1;

  if (safariAgent) {
    res.render('safari', { title: 'EasyFi TV' });
  }
  else {
    console.log('this is not safari')
    res.render('chrome', { title: 'EasyFi TV' });
  }
});

module.exports = router;
