
goog.provide('demo.fileinfo');

goog.require('goog.debug');

// Import the fs package from the node core libs.  Using the 'node.js'
// goog.require rather than the node 'require' allows this code to be
// compile checked.
goog.require('node.fs');


/**
 * @constructor
 * @param {string} path The path that this instance of demo.fileinfo will
 *    operate on.
 */
demo.fileinfo = function(path) {
  this.path_ = path;
};


/**
 * @return {string} A descriptive message with all the relevant information on
 *    the specified path.
 */
demo.fileinfo.prototype.getFileInfo = function() {
  var details = node.fs.statSync(this.path_);
  return goog.debug.expose(details);
};
