#!/usr/local/bin/node

// We are now in closure mode
require('nclosure').nclosure();

/**
 * @name demo
 * @namespace The demo namespace holds the API to the listfiles command
 * which lists details of all files (Recursively) in the current directory.
 * <em>Note:</em> This is part of the
 * <a href='http://gatapia.github.com/nclosure/'
 *    target='brank'>nclosure ducumentation.</a>.
 * @see <a href='http://gatapia.github.com/nclosure/'
 *    target='brank'>nclosure ducumentation.</a>
 * @author guido@tapia.com.au (Guido Tapia)
 */

// Lets declare our namespace 'demo.listfiles'.  Its always a good idea
// to declare namespaces as polluting the global scope whilst not as
// critical in the server is still a bad practice.
goog.provide('demo.listfiles');

// Import some utilities from the closure libs
goog.require('demo.fileinfo');

// We need to 'include' our new class
goog.require('goog.array');



/**
 * This constructor intiates the process of listing the details of all files
 * in the specified directory.
 *
 * <em>Note: </em> This constructor is not meant to be used programatically.
 * Rather it is ment to be executed using a node shell.  Example:
 * <pre>
 *   ./listfiles
 * </pre>
 * That will list all the files in the current directory.
 *
 * @constructor
 * @param {string} dir The directory to list.
 */
demo.listfiles = function(dir) {
  // Import some node utils
  this.fs_ = require('fs');
  this.path_ = require('path');
  var files = [];
  this.getFilesInDir_(files, dir);
  // Lets turn all of those file names into a useful information list
  files = goog.array.map(files, function(f) {
    return '\n' + f + '\n' + new demo.fileinfo(f).getFileInfo();
  });
  files.sort();
  console.log(files.join('\n'));
};


/**
 * By default nclosure does not document any private member.  However this can
 * be easily changed by changing the closure.json file in the nclosure/bin
 * directory.  Add a <code>-p</code> argument to the
 * additionalJSDocToolkitOptions array and docs for private memebers will be
 * automatically generated.
 *
 * @private
 * @param {Array.<string>} files The files array that will be augmented
 *     recursively.
 * @param {string} dir The directory to list files in.
 */
demo.listfiles.prototype.getFilesInDir_ = function(files, dir) {
  var filesInDir = this.fs_.readdirSync(dir);
  goog.array.forEach(filesInDir, function(f) {
    var path = this.path_.resolve(dir, f);
    if (this.fs_.statSync(path).isDirectory()) {
      this.getFilesInDir_(files, path);
    } else {
      files.push(path);
    }
  }, this);
};

// List the files in the current directory
new demo.listfiles(__dirname);
