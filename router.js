/**
 * File: router.js
 * User: joshuaellinger
 * Date: 2/22/13
 */
function route(handle, pathname) {
  console.log("About to route a request for " + pathname + ".");
  if (typeof handle[pathname] === 'function') {
    handle[pathname]();
  }
  else {
    console.log('No request handler found for ' + pathname + '.');
  }
}

exports.route = route;
