var express = require('express');
var router = express.Router();
const Window = require('window');

const window = new Window();
const Bowser = require("bowser");
const { detect } = require('detect-browser');
const browser = detect();
const browserd = Bowser.getParser(window.navigator.userAgent);




/* GET home page. */
router.get('/', function (req, res, next) {
  // let ua = navigator.userAgent;
  // let chromeAgent = ua.indexOf("Chrome") > -1;
  // let safariAgent = ua.indexOf("Safari") > -1;
  // if ((chromeAgent) && (safariAgent))
  //   safariAgent = false;

  if (browserd.getBrowserName() != 'Safari') {
    res.render('safari', { title: 'EasyFi TV' });
    console.log('true')
  }
  else {
    res.render('chrome', { title: 'EasyFi TV' });
    console.log('false')
    // var s = document.createElement("script");
    // s.type = "text/javascript";
    // s.src = "https://github.com/videojs/mux.js/releases/latest/download/mux.js";
    // $("head").append(s);
  }
  // console.log(browser);
  // console.log(browser.name);
  // console.log(browser.version);
  // console.log(browser.os);
  // console.log(browserd.getBrowser());
  // console.log(`The current browser name is "${browserd.getBrowserName()}"`);
  // res.render('chrome', { title: 'EasyFi TV' });

});

module.exports = router;
