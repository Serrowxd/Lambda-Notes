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
  * 500 - 599: SERVER ERROR
    * 503: Too much coming in. SERVER OVERLOAD

  `If you return something within the 200's while working with Angular, it won't return error code. However in the 400's, it will.`

## REST (Theory)

* REpresentational State Transfer
  * _Restful API_
  * _API_ = _Application Programming Interface_
* Resource Thinking
  * _A `resource` is any piece of data that your server is handeling._
  * _Users can be considered resources._
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

## Code

### This is placed within a server.js file.

* `npm install express`
* `npm install nodemon`

```js
const express = require('express'); // brings in the express package, similar to import react.
const db = require('./data/db.js'); // same as import. This in react would look like import db from './data/db.js';

const server = express(); // calls express as a function

server.get('/', function(req, res) {
  // object that represents a request, then a response (req, res).
  // res.send('Api Running.......'); // sends the server what you have here.
  // res.send({ api: 'Running...' });
  res.json({ api: 'Running...' }); // sends it as a .json
});

server.get('/api/users', (req, res) => {
  // can also use arrow functions here instead of saying function.
  // get the data.
  db // this can all be done in-line as well.
    .find()
    .then(users => {
      // send the data.
      res.json(users); // by default sends a status code of 200, or OK.
    })
    .catch(error => {
      // send the error if there is one.
      // handle it.
      res.status(500).json(error); // sends an error if it exists.
    });
});

server.get('/api/users/:id', (req, res) => {
  const { id } = req.params;

  db
    .findById(id) // finds it by the ID, aka the paramater defined in db.js - `findById`
    .then(users => {
      res.json(users[0]); // grabs the first user in the array, rather than the whole array.
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

const port = 5000; // defines port the server will listen to
server.listen(port, () => console.log('API Running on port 5000')); // listens for traffic on the port defined. () defines a callback function that you can use to put something in the console or other things.
```

## API

* An API in this context is a server software that publishes a set of _endpoints_ that clients can use to manage _resources_.

# Day 2

## Middelware:

### [Client] - _makes_ - (request) - [Middleware Stack] - [Request Handler Functions]

`Middleware sits in the middle and checks every request that comes though.`

* Express - `npm install express` - Server Utility
* Morgan - `npm install morgan` - Server Information
* Helmet - `npm install helmet` - Server Protection

```JS
const express = require('express'); // brings in the express package, similar to import react.
const morgan = require('morgan'); // brings in the morgan package, npm install morgan.
const helmet = require('helmet'); // brings in the helmet package, npm install helmet.

const db = require('./data/db.js'); // same as import. This in react would look like import db from './data/db.js';

const server = express(); // calls express as a function

// middelware
server.use(morgan('dev')); // uses the string to format something.
server.use(helmet()); // uses Helmet to protect the server.
server.use(express.json()); // exact same thing as bodyParser.

server.get('/', function (req, res) { // object that represents a request, then a response (req, res).
  // res.send('Api Running.......'); // sends the server what you have here.
  // res.send({ api: 'Running...' });
  res.json({ api: 'Running...' }); // sends it as a .json
});

server.get('/api/users', (req, res) => { // can also use arrow functions here instead of saying function.
  // get the data.
  db // this can all be done in-line as well.
    .find()
    .then(users => { // send the data.
      res.json(users); // by default sends a status code of 200, or OK.
    })
    .catch(error => { // send the error if there is one.
      // handle it.
      res.status(500).json(error); // sends an error if it exists.
    });
});

// localhost:5000/api/users/search?userid=2 // how you pass things to the query string
server.get('/api/users/search', (req, res) => {
  const { userid } = req.query; // how to read the query string

  db
    .findById(userid)
    .then(users => {
      res.json(users[0]);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.get('/api/users/:id', (req, res) => {
  const { id } = req.params;

  db
    .findById(id) // finds it by the ID, aka the paramater defined in db.js - `findById`
    .then(users => {
      res.json(users[0]); // grabs the first user in the array, rather than the whole array.
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post('/api/users', (req, res) => {
  const user = req.body;
  db
    .insert(user)
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: 'There was an error while saving the user to the database',
        });
    });
});

server.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  let user;

  db.findById(id)
    .then(response => {
      user = { ...response[0] };

  db
    .remove(id)
    .then(response => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json(error)
    });
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

server.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const update = req.body;

  db
    .update(id, update)
    .then (count => {
      if (count > 0) {
        db.findById(id).then(updateUser => {
          res.status(200).json(updatedUser);
        });
      } else {
        res
          .status(404)
          .json({ message: 'The user with the specified ID does not exist' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

const port = 5000; // defines port the server will listen to
server.listen(port, () => console.log('API Running on port 5000')); // listens for traffic on the port defined. () defines a callback function that you can use to put something in the console or other things.
```

## Rest

_Principles and constraints. `Recommendations`, not `law`._

### Constraints

* Client-server architecture.
* Stateless Architecture: Requests are not related to each other, they stand on their own.
* Cacheable
  * GET, PUT, DELETE should be _idempotent_.
* Layered System.
* Code on Demand.
* Uniform Interfaces.

## Misc Notes

* `cors` is used to connect your databases.
* `server.use(cors());`
* Connected with `Axios`.

```JS
  getPosts()
    axios.get(localhost:500/api/posts)
    .then(response => this.setState({ posts: response.data }))
    .catch(error => console.error( 'Server Error: Error' ))
```

* Prestyled Components? Styled Components.
* `npm install styled-components`
* `injectGlobal` Styles the entire page.

# Day 3

* "I want to see all the orders for a user"
  * `/api/users/orders`
* "I want to see all the orders for a specific user"
  * `/api/users/:id/orders`
  * `/api/orders?userid=123`
* "I want to see all payments for an order"
  * `/api/orders/:id/payments`
  * `/api/orders/id/payments?year=2018&month=april` = "I want to see them from `?` specified year `&` specified month."

### Go from specific to generic when building endpoints. `Order of Specificity`

```js
// /api/users/orders
router.get('/orders', (req, res) => {
  res.send('inside /api/users/orders');
});
```

### This would go over

```js
router.get('/:id', (req, res) => {
  const { id } = req.params;

  db
    .findById(id)
    // .findBy(userid)
    .then(users => {
      res.json(users[0]);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
```

### Because the second bit of code is more generic. _Waterfall code._

### If placed in the opposite order, it will read the `:id` and then pass it to `/orders` and the code will break.

## Fullstack

* `const cors = require('cors'); // brings in the cors package, npm install cors.`
* `server.use(cors()); // allows you to connect back-end to front-end.`

### React `index.js`

```JS
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import axios from 'axios';

class List extends React.Component {
  state = {
    users: [],
  };

  render() {
    return(
      <ul>
        {this.state.users.map(user =><li key={user.id}>{user.name}</li>)}
      </ul>
    );
  }

      componentDidMount() {
        axios
        .get('http://localhost:5000/api/users')
        .then(response => {
          this.setState({ users: response.data });
        })
        .catch(error => console.log(error));
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
```

### Node.js `server.js`

```JS
const express = require('express'); // brings in the express package, similar to import react.
// const morgan = require('morgan'); // brings in the morgan package, npm install morgan.
const helmet = require('helmet'); // brings in the helmet package, npm install helmet.
const cors = require('cors'); // brings in the cors package, npm install cors.

const db = require('./data/db.js'); // same as import. This in react would look like import db from './data/db.js';

const userRouter = require('./users/userRouter.js'); // userRouter?

const server = express(); // calls express as a function

// custom middleware [m1, m2, mn] -> [request handlers]
function logger (req, res, next) {
  // next points to the middleware
  console.log('body: ', req.body);
  // req.url = `${req.url}/1`;
  // res.send('done');

  next();
}

// middelware
// server.use(morgan('dev')); // uses the string to format something.
server.use(helmet()); // uses Helmet to protect the server.
server.use(express.json()); // exact same thing as bodyParser.
server.use(logger);
server.use(cors()); // allows you to connect back-end to front-end.

server.use('/api/users', userRouter);

server.get('/', function (req, res) { // object that represents a request, then a response (req, res).
  // res.send('Api Running.......'); // sends the server what you have here.
  // res.send({ api: 'Running...' });
  res.json({ api: 'Running...' }); // sends it as a .json
});

server.get('/api/users', (req, res) => { // can also use arrow functions here instead of saying function.
  // get the data.
  db // this can all be done in-line as well.
    .find()
    .then(users => { // send the data.
      res.json(users); // by default sends a status code of 200, or OK.
    })
    .catch(error => { // send the error if there is one.
      // handle it.
      res.status(500).json(error); // sends an error if it exists.
    });
});

const port = 5000; // defines port the server will listen to
server.listen(port, () => console.log('API Running on port 5000')); // listens for traffic on the port defined. () defines a callback function that you can use to put something in the console or other things.
```

### Node.js `userRouter.js`

```JS
const express = require('express');

const router = express.Router();

const db = require('../data/db.js');

// handles routes that start with: /api/users

router.get

router.get('/:id/orders/:orderId', (req, res) => {
  res.send(`viewing orders with id ${req.params.orderId} for users with id ${req.params.id}`);
});

// /api/users/orders
router.get('/orders', (req, res) => {
  res.send('inside /api/users/orders');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db
    .findById(id)
    // .findBy(userid)
    .then(users => {
      res.json(users[0]);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/', (req, res) => {

});

router.delete('/', (req, res) => {

});

router.put('/', (req, res) => {

});

module.exports = router;
```

## Misc Notes

### Luis's Terminal

```shell
export PS1="[\w] > "
alias brewup="brew update && brew upgrade -y && brew doctor"
alias commit="git add . && git commit -a -m "
alias crapp="create-react-app "
alias ll="ls -lG"
alias push="git push"
alias reload="source ~/.bash_profile"
alias remind="cat ~/.bash_profile"
alias startmc="~/Minecraft/spigot/start.command"
alias ya="yarn add "
```

# Day 4
