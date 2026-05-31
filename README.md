# npm-security-aggregator
<img src=https://centerkey.com/graphics/center-key-logo.svg align=right width=200 alt=logo>

_View audit reports for a published npm package_

[![License:MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/center-key/npm-security-aggregator/blob/main/LICENSE.txt)
[![Build](https://github.com/center-key/npm-security-aggregator/actions/workflows/run-spec-on-push.yaml/badge.svg)](https://github.com/center-key/npm-security-aggregator/actions/workflows/run-spec-on-push.yaml)
[![Publish Website](https://github.com/center-key/npm-security-aggregator/actions/workflows/publish-website.yaml/badge.svg)](https://github.com/center-key/npm-security-aggregator/actions/workflows/publish-website.yaml)

## A) Check It Out
Interactive online tool:<br>
https://center-key.github.io/npm-security-aggregator

## B) Automatically Look Up Package
Append the `package` query string parameter to the URL to specify an initial npm package name.

For example:<br>
https://center-key.github.io/npm-security-aggregator/?package=fetch-json

## C) Build Environment
Check out the `runScriptsConfig` section in [package.json](package.json) for an
interesting approach to organizing build tasks.

**CLI Build Tools for package.json**
   - 🎋 [add-dist-header](https://github.com/center-key/add-dist-header):&nbsp; _Prepend a one-line banner comment (with license notice) to distribution files_
   - 📄 [copy-file-util](https://github.com/center-key/copy-file-util):&nbsp; _Copy or rename a file with optional package version number_
   - 📂 [copy-folder-util](https://github.com/center-key/copy-folder-util):&nbsp; _Recursively copy files from one folder to another folder_
   - 🪺 [recursive-exec](https://github.com/center-key/recursive-exec):&nbsp; _Run a command on each file in a folder and its subfolders_
   - 🔍 [replacer-util](https://github.com/center-key/replacer-util):&nbsp; _Find and replace strings or template outputs in text files_
   - 🔢 [rev-web-assets](https://github.com/center-key/rev-web-assets):&nbsp; _Revision web asset filenames with cache busting content hash fingerprints_
   - 🚆 [run-scripts-util](https://github.com/center-key/run-scripts-util):&nbsp; _Organize npm package.json scripts into groups of easy to manage commands_
   - 🚦 [w3c-html-validator](https://github.com/center-key/w3c-html-validator):&nbsp; _Check the markup validity of HTML files using the W3C validator_

<br>

---
[MIT License](LICENSE.txt)
