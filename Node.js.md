# Node.js

`npm init -y` will generate a new package.json in your file.

* It always helps to give your project an author in your package.json.

### Helpful package.json
```json
 "scripts": {
    "start": "nodemon server.js"
  },
```
* You don't need nodemon as a global dependency, and you don't need it when you publish the project.

`npm i (name of package) -D` - this installs the package as a dev dependency.

* package.lock.json will gaurentee that your installs will look exactly the same across every computer. Same as yarn.lock.

---

## HTTP (Theory)
  * Methods
    * POST, GET, PUT, DELETE
  * Status Codes
    * 200 (OK), 201 (CREATED), 400 (BAD REQUEST), 404 (NOT FOUND), 500 (SERVER ERROR)
    * 200 - 299: SUCCESS
    * 300 - 399: REDIRECTS
    * 400 - 499: USER/CLIENT ERROR
      * 401: Wrong Password, you can fix it. INVALID
      * 403: Right Password, but you cannot see it. FORBIDDEN
      * 418: (Look Up)
        * *If you return something within the 200's while working with Angular, it won't return error code. However in the 400's, it will.*
    * 500 - 599: SERVER ERROR
      * 503: Too much coming in. SERVER OVERLOAD

## REST (Theory)
  * REpresentational State Transfer
    * *Restful API*
    * *API* = *Application Programming Interface*
  * Resource Thinking
    * *A `resource` is any piece of data that your server is handeling.*
    * *Users can be considered resources.*
  * Endpoint Design
    * `/api/user` - single endpoint per resource.

## Node (Theory and Practice)
  * Advantages
    * Node is a way to run JavaScript outside of the browser.
    * Node is a JavaScript run-time environment (like a compiler).
    * No context switching.
    * Same paradigm as JavaScript.
  * Disadvantages
    * Single Threaded - an advantage, but still a disadvantage.

## Express (Theory and Practice)
  * Advantages
    * minimalistic
    * extendible
  * Disadvantages
    * minimlaistic
  * Core Parts
    * Routing - A way to handle requests and execute code.
    * Middleware - Extends the functionality of Express applications.
    * Sub-Applications - Assembles components.