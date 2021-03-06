# reiko-parser

[![NPM version](https://img.shields.io/npm/v/reiko-parser.svg?style=flat)](https://www.npmjs.com/package/reiko-parser) [![NPM downloads](http://img.shields.io/npm/dm/reiko-parser.svg?style=flat)](https://www.npmjs.com/package/reiko-parser)

Read iOS/Android package's (.apk/.ipa ) manifest info, for NodeJS.

## Introduction
For `.apk`, parse the `AndroidManifest.xml` and `resources.arsc` files, read all values listed in AndroidManifest.xml(both primitive and reference type), also you can get and show the icon of the apk file directly from the parsed result.

For `.ipa`, parse the `info.plist` and `embedded.mobileprovision` files, read all basic information in info.plist file, including the icon of the ipa file(already handled the crushed pngs).

## Acknowledgements
This project is based on [plist.js](https://github.com/TooTallNate/plist.js), [isomorphic-pkg-reader](https://github.com/TencentWSRD/isomorphic-pkg-reader/) & [adbkit-apkreader](https://github.com/openstf/adbkit-apkreader). 

## Install
```
npm install --save reiko-parser
```

## Usage
```js
const PkgReader = require('reiko-parser');

// for apk
const reader = new PkgReader(filePath, 'apk', { withIcon: true });
reader.parse((err, pkgInfo) => {
  if (err) {
    console.error(err);
  } else {
    console.log(pkgInfo); // pkgInfo.icon is encoded to base64
  }
});

 // for ipa
const reader = new PkgReader(filePath, 'ipa', { withIcon: false });
reader.parse((err, pkgInfo) => {
  if (err) {
    console.error(err);
  } else {
    console.log(pkgInfo);
  }
});
```


