/**
 * File: requestHandlers.js
 * User: joshuaellinger
 * Date: 2/23/13
 */
function start() {
  console.log("Request handler 'start' was called.");
}

function upload() {
  console.log("Request handler 'upload' was called.");
}

exports.start = start;
exports.upload = upload;
