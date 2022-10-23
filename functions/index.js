/*
* functions/index.js
*/

// 'firebase-functions' 4.0.x brings a new way [3] to get also "built in parameters". Only, it remains unusable for
// a project using `"type": "module"`.
//
//  - "Built-in parameters" (Firebase docs) [3]
//    -> https://firebase.google.com/docs/functions/beta/config-env#built-in_parameters
//

//  Fails with:
//  <<
//    ⬢  functions: Failed to load function definition from source: FirebaseError: Failed to load function definition from source: Failed to generate manifest from function source: SyntaxError: Named export 'databaseUrl' not found. The requested module 'firebase-functions/params' is a CommonJS module, which may not support all module.exports as named exports.
// CommonJS modules can always be imported via the default export, for example using:
//
// import pkg from 'firebase-functions/params';
// const { projectId, databaseUrl } = pkg;
//  <<
//
import { projectId, databaseUrl } from 'firebase-functions/params'    // does NOT WORK
console.error("!!!", { projectId, databaseUrl } );

// Lists something else than strings (which are expected):
//  <<
//    {
//   projectID: InternalExpression {
//     name: 'PROJECT_ID',
//     options: {},
//     getter: [Function (anonymous)]
//   },
//   databaseURL: InternalExpression {
//     name: 'DATABASE_URL',
//     options: {},
//     getter: [Function (anonymous)]
//   }
// }
//  <<
//import { projectID, databaseURL } from 'firebase-functions/params'    // does NOT WORK
//console.error("", { projectID, databaseURL } );

// Same as above ("InternalExpression" instead of string)
//const { projectID, databaseURL } = await import('firebase-functions/params').then( mod => mod.default );
//console.error("!!!", { projectID, databaseURL });   // prints getters

// Using 'require' (as docs say), with modified keys:
//
//  <<
//    ReferenceError: require is not defined in ES module scope, you can use import instead
//  <<
//const { projectID, databaseURL } = require('firebase-functions/params');
//console.error("!!!", { projectID, databaseURL });
