# Bug reproduction

## Requirements

- `firebase` CLI installed

   ```
   $ npm install -g firebase-tools
   ```

## Steps

```
$ npm --prefix functions install
```

```
$ firebase emulators:start --project demo-1
```

### Expected

Emulators start, without errors.

### Actual

```
⬢  functions: Failed to load function definition from source: FirebaseError: Failed to load function definition from source: Failed to generate manifest from function source: SyntaxError: Named export 'databaseUrl' not found. The requested module 'firebase-functions/params' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from 'firebase-functions/params';
const { projectId, databaseUrl } = pkg;
```

This means the emulated functions did not actually start.

`Ctrl-C` the execution (since Firebase Emulators don't fail if function loading does, which is strange).

