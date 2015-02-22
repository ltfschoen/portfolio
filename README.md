MEAN Portfolio Test
-------

References chapters of the following from Lynda.com:
 - "Node.js Essential Training with Joseph LeBlanc" 
 - "Up and Running with AngularJS(2013) with Joseph LeBlanc"

Uses MEAN stack (MongoDB, Express, AngularJS, Node.js)

Technologies Used
-------
* View Engine - Jade
* Web Server
  - Server - NodeJS Express Module Server App
  - Session Storage - Express Cookie Parser for Session Storage using ConnectMongo
  - Logins (using Express Middleware for User Session Storage) - Passport
* Testing
  - Custom HTTP GET and PUT Requests - Chrome Postman, Supertest
  - Unit Tests - Mocha, Should
  - Code Coverage - Istabul
  - Techniques - Helper Method for Unit Testing of Endpoints with Decoupled Data
* Data
  - Seed Data - JSON
  - NoSQL - Mongoose Model Schema with Event Emitters and Listeners to handle asyncronous data recording across a connection to Mongo Lab DB
* Object-Oriented Design
  - Technique - Factory Design Pattern with Module Exports (consistent creation and retrieval of new object instances)
* Secret Keys
  - DotEnv
* File System
  - File System Piping in Chunks of Data from Readable JSON to Writable Stream File with cycle of applying Timeout and Pausing the Stream before Event Listeners respond to each subsequent Incoming Chunk of Data and output the Chunk length and beginning and end demarcations to the terminal
* Telnet
  - Telnet Module to connect to Server with TCP Connection Duplex Stream that involved the creation of a Write Stream to Pipe to a Log File with a completion Event Listener triggering a Read Stream logging stored information to the terminal
* REPL
  - Optimist Module custom REPL outputs Data Modifications to the command line terminal in real-time without requiring HTTP GET and PUT requests (using Postman)
* Normalize.css
  - Reset CSS
* Responsive Framework - Bootstrap
* AngularJS
  - Boilerplate with ngApp, ngModel (to bind Jade), ngRoute, ngViews (route and load views without updating whole page), ngResource, ngControllers, ngRepeat, $scope (pass in scope dependency injection), Filters (of data displayed), ngShow, ngInclude (Partials), Nested AngularJS Scopes (Outer and Inner Controller and Variables and Links for Single Page App), $routeProvider (build front-end Single Page App SPA for routing with convenience of all URLs that are bound to markups or partials being interpretted by AngularJS rather than server). Controllers used to change the Navigation State by highlighting Active link buttons bound to URL loaded or link clicked (instead of just being bound to ngClick event) with Bootstraps Active and to show possible Views, 

Project Status
-------
Experimental only. No longer active. Attempted to Deploy to Heroku and Nodejitsu with Foreman unsuccessfully

Play with the App
-------
Run server: 
```
node server
```
Open app in browser:
 - localhost:3000
 - localhost:300/stacks (List of Stacks for Completed Projects)
 - localhost:300/list (List All Projects)
 - localhost:300/list/json (List All Projects in JSON view)
 - localhost:300/login

Action List
-------
 - App currently runs on local server only
 - Deploying to Heroku gives the following Mongo errors in the heroku logs:
 ```
 2014-09-29T08:54:10.153595+00:00 heroku[web.1]: Starting process with command `node server.js`
2014-09-29T08:54:11.604470+00:00 heroku[web.1]: State changed from starting to up
2014-09-29T08:54:11.511189+00:00 app[web.1]: Mon, 29 Sep 2014 08:54:11 GMT connect deprecated methodOverride: use method-override npm module instead at app.js:76:18
2014-09-29T08:54:11.538129+00:00 app[web.1]: [ 'node', '/app/server.js' ]
2014-09-29T08:54:11.632150+00:00 app[web.1]: 
2014-09-29T08:54:11.632239+00:00 app[web.1]: /app/node_modules/mongoose/node_modules/mongodb/lib/mongodb/connection/base.js:245
2014-09-29T08:54:11.632462+00:00 app[web.1]:         throw message;      
2014-09-29T08:54:11.632476+00:00 app[web.1]:               ^
2014-09-29T08:54:11.635631+00:00 app[web.1]: MongoError: auth fails
2014-09-29T08:54:11.635636+00:00 app[web.1]:     at Object.toError (/app/node_modules/mongoose/node_modules/mongodb/lib/mongodb/utils.js:114:11)
2014-09-29T08:54:11.635638+00:00 app[web.1]:     at /app/node_modules/mongoose/node_modules/mongodb/lib/mongodb/db.js:1130:31
2014-09-29T08:54:11.635640+00:00 app[web.1]:     at /app/node_modules/mongoose/node_modules/mongodb/lib/mongodb/db.js:1847:9
2014-09-29T08:54:11.635641+00:00 app[web.1]:     at Server.Base._callHandler (/app/node_modules/mongoose/node_modules/mongodb/lib/mongodb/connection/base.js:445:41)
2014-09-29T08:54:11.635643+00:00 app[web.1]:     at /app/node_modules/mongoose/node_modules/mongodb/lib/mongodb/connection/server.js:478:18
2014-09-29T08:54:11.635645+00:00 app[web.1]:     at MongoReply.parseBody (/app/node_modules/mongoose/node_modules/mongodb/lib/mongodb/responses/mongo_reply.js:68:5)
2014-09-29T08:54:11.635646+00:00 app[web.1]:     at null.<anonymous> (/app/node_modules/mongoose/node_modules/mongodb/lib/mongodb/connection/server.js:436:20)
2014-09-29T08:54:11.635648+00:00 app[web.1]:     at EventEmitter.emit (events.js:95:17)
2014-09-29T08:54:11.635650+00:00 app[web.1]:     at null.<anonymous> (/app/node_modules/mongoose/node_modules/mongodb/lib/mongodb/connection/connection_pool.js:201:13)
2014-09-29T08:54:11.635663+00:00 app[web.1]:     at EventEmitter.emit (events.js:98:17)
2014-09-29T08:54:11.447870+00:00 app[web.1]: Project count: 3
2014-09-29T08:54:11.447872+00:00 app[web.1]: 
2014-09-29T08:54:11.538708+00:00 app[web.1]: Express server listening on port 34737
2014-09-29T08:54:11.537727+00:00 app[web.1]: projects> { _: [], '$0': 'node ./server.js' }
2014-09-29T08:54:11.447851+00:00 app[web.1]: 
2014-09-29T08:54:11.478305+00:00 app[web.1]: Mon, 29 Sep 2014 08:54:11 GMT express-session deprecated req.secret; provide secret option at node_modules/express/node_modules/connect/lib/middleware/session.js:33:10
2014-09-29T08:54:12.492443+00:00 heroku[web.1]: State changed from up to crashed
2014-09-29T08:54:12.463554+00:00 heroku[web.1]: Process exited with status 8
```
