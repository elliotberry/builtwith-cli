'use strict';

const got = require('got');
const config = require('api.js');

let reqURL = config.url + "?KEY=" + config.key + "&LOOKUP=";

const getUrl = function (url) {
  return new Promise(function (resolve, reject) {
    got(reqURL +  url)
      .then(response => {
        resolve(parseHtml(response.body));
      })
      .catch(error => {
        reject(error);
      });
  });
}

module.exports = getUrl;