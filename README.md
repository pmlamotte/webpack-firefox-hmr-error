# Description #
This repo is a simple hot reload example to reproduce firefox/chrome error
message differences.

# Reproduction Steps #
Install dependencies with yarn or npm, ex:

```
yarn install
```

Run the application, ex:

```
yarn start
```

This will start a dev server on localhost:8080, with a simple html file. Two js
files exist, `src/accepted.js` and `src/unaccepted.js`. Updating `accepted.js`
causes a hot reload, updating `unaccepted.js` causes a full refresh.

Firefox and Chrome will display the error differently. In the case of Firefox,
no explanation is given as to why a full refresh was needed.
