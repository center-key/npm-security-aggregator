# npm-security-aggregator
<img src=https://centerkey.com/graphics/center-key-logo.svg align=right width=200 alt=logo>

_View audit reports for a published npm package_

[![License:MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/center-key/npm-security-aggregator/blob/main/LICENSE.txt)
[![Build](https://github.com/center-key/npm-security-aggregator/actions/workflows/run-spec-on-push.yaml/badge.svg)](https://github.com/center-key/npm-security-aggregator/actions/workflows/run-spec-on-push.yaml)
[![Publish Website](https://github.com/center-key/npm-security-aggregator/actions/workflows/publish-website.yaml/badge.svg)](https://github.com/center-key/npm-security-aggregator/actions/workflows/publish-website.yaml)

**npm Security Aggregator** looks up a package's repository metadata and presents buttons to open
audit reports from various third-party security vendors.

## A) Online Tool
#### Webpage:
https://center-key.github.io/npm-security-aggregator

## B) Automatically Look Up Package
Append the query string parameter `package` to the URL in order to specify an initial package name.

#### Example URL:
```
https://center-key.github.io/npm-security-aggregator/?package=fetch-json
```

## C) Markdown
#### Example Markdown (`.md`):
```markdown
[🛡️ npm Security Aggregator](https://center-key.github.io/npm-security-aggregator/?package=fetch-json)
```
#### Above link renders as:
[🛡️ npm Security Aggregator](https://center-key.github.io/npm-security-aggregator/?package=fetch-json)


<br>

---
[MIT License](LICENSE.txt)

See the `runScriptsConfig` section of [`package.json`](package.json) for a clean way to organize build tasks:
   - 🎋 [`add-dist-header`](https://github.com/center-key/add-dist-header) &mdash;&nbsp; _Prepend a one-line banner comment (with license notice) to distribution files_
   - 📄 [`copy-file-util`](https://github.com/center-key/copy-file-util) &mdash;&nbsp; _Copy or rename a file with optional package version number_
   - 📂 [`copy-folder-util`](https://github.com/center-key/copy-folder-util) &mdash;&nbsp; _Recursively copy files from one folder to another folder_
   - 🪺 [`recursive-exec`](https://github.com/center-key/recursive-exec) &mdash;&nbsp; _Run a command on each file in a folder and its subfolders_
   - 🔍 [`replacer-util`](https://github.com/center-key/replacer-util) &mdash;&nbsp; _Find and replace strings or template outputs in text files_
   - 🔢 [`rev-web-assets`](https://github.com/center-key/rev-web-assets) &mdash;&nbsp; _Revision web asset filenames with cache busting content hash fingerprints_
   - 🚆 [`run-scripts-util`](https://github.com/center-key/run-scripts-util) &mdash;&nbsp; _Organize npm package.json scripts into groups of easy-to-manage commands_
   - 🚦 [`w3c-html-validator`](https://github.com/center-key/w3c-html-validator) &mdash;&nbsp; _Check the markup validity of HTML files using the W3C validator_
