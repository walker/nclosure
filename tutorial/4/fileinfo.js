
goog.provide('demo.fileinfo');

goog.require('goog.debug');

// Import the fs package from the node core libs.  Using the 'node.js'
// goog.require rather than the node 'require' allows this code to be
// compile checked.
goog.require('node.fs');

/**
 * @fileoverview This file is used to gather all the specified details for a
 * specific path.
 * @see <a href='http://gatapia.github.com/nclosure/'
 *    target='brank'>nclosure ducumentation.</a>
 * @author guido@tapia.com.au (Guido Tapia)
 */

/**
 * This constructor gathers all the details available for the specified path.
 * To use just:
 * <pre>
 *  goog.require('demo.fileinfo');
 *  ...
 *  var path = ...; // A reference to an absolute path
 *  var fi = new demo.fileinfo(path);
 *  var info = fi.getFileInfo();
 * </pre>
 *
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
