/* global Blob, FileReader */
// Code exacted from https://github.com/feross/blob-to-buffer.
// Because it have not import Buffer module for browser usage.

const Buffer = require('buffer').Buffer;

module.exports = function blobToBuffer(blob, cb) {
  if (typeof Blob === 'undefined' || !(blob instanceof Blob)) {
    throw new Error('first argument must be a Blob')
  }
  if (typeof cb !== 'function') {
    throw new Error('second argument must be a function')
  }

  const reader = new FileReader()

  function onLoadEnd(e) {
    reader.removeEventListener('loadend', onLoadEnd, false);
    if (e.error) cb(e.error);
    else cb(null, new Buffer(reader.result));
  }

  reader.addEventListener('loadend', onLoadEnd, false);
  reader.readAsArrayBuffer(blob);
};
