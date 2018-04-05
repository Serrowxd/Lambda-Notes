# Node.js / Express - Preclass

## Client-Side JavaScript

* Code that runs on the client's machine.
* Aka front-end code.

## Client-Side Code

### _Runs in browser process_

* Sends HTTP Requests.
* Renders Response Data.
* Has window, document objects.
* Interfaces with HTML and DOM.
* Use AJAX to make HTTP requests.
* Use script tags to split code into files.

## Server-Side Code

### _Runs in node.js process_

* Handles HTTP Requests.
* Generates/Sends Responses.
* No window, document objects.
* No HTML, no DOM, no selectors, etc.
* Can directly open connections.
* Use modules to split code into files.

## Server-Side JavaScript

* Server-side code is code that runs on the server.
* Aka back-end code.
* Handles requests from a client and sends response data.
* Often interacts with a database to store and read data.

## Node.js

* Node.js is a server-side JavaScript platform for "easily building fast, scalable network applications" (http://nodejs.org)

* Website: http://nodejs.org
* Download: https://nodejs.org/dist/v4.3.0/node-v4.3.0.pkg
* Documentation: https://nodejs.org/dist/latest-v4.x/docs/api

* Server-side JavaScript doesn't render anything.

---

## Server Code

```js
const express = require("express"); // Imports express

const server = express(); // When you require express, it gives back a function. This is where you call it. It gives you a server object that you can use to start handeling requests.

server.get("/", (req, res) => {
  // when the server recieves a HTTP `GET` request to '/', execute callback function. REQ = Request, RES = Response.
  res.send("Hello!");
});

server.listen(3000);
```

## Notes

* Request(`req`) contains information about the request. Essentially all the `metadata`.

* Response(`res`) gives us ways to manipulate and send data back to the client. We use it to send a `response` to the `client`.

* Listen(`server.listen(#);`) calls a the `listen` function and passes in a `port` number. A `port` is a way to allow a single computer to run many different servers. It's just an identifier that tells you where the server is running on the computer.

* Local Host(`localhost:#`) defines a local port on your computer.

### To end a server, `ctrl-c` `enter` and then whatever you used to start the server - like `npm start`.
