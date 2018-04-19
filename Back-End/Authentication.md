# Authentication

* `lowercase: true,` // will normalize it to be stored in lowercase. kEvIn JoLlEy comes back as "kevin jolley".

```JS
server.get('/greet', greeter, (req, res) => {
  // greeter takes the global middleware and runs it, but when it's not being used above (// out) then it's considered local middleware. This allows you to pick and choose where you put it.
  res.status(200).json({ api: 'running!', greeting: req.hello });
});
```

`const User = require('./auth/UserModel');` will grab the User schema and return it with

```JS
server.post('/register', (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then((savedUser = res.status(200).json(savedUser)))
    .catch(err => res.status(500).json(err));
});
```

### HOWEVER, this still gives back the password as a string.

```JS
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    index: true,
    lowercase: true, // will normalize it to be stored in lowercase. kEvIn JoLlEy comes back as "kevin jolley".
  },
  password: {
    type: String,
    required: true,
  },
});

// Middleware
UserSchema.pre('save', function(next) {
  console.log('pre save hook');

  next();
});

module.exports = mongoose.model('User', userSchema);
```

## Hashing vs Encryption

### Encrytption is a two-way process.

* Plane text password + private key = encrypted passowrd.
* Private key + encrypted password = plain text password.

**Hashing Code is a one way process. There is no way to get the original pass from the hash.**

* paramaters + password => hash
* A hash is like a "pure function". Given the same input, always returns the same output.
* Algorythms - MD5, SHA1-n - they alone are no good, because they are optimized for speed.
* We need a way to slow down the production of hashes => cost or rounds.
  * cost = the number of rounds that the result will be hashed recusively.
  * Adding rounds, the attacker needs to know the inputs, the hashing function, and the # of rounds.

[hash] + [time] = [Key Derivation Function] = bcrypt.

`npm install bcrypt`

**Schema - compiles -> model - instantiate -> mongoose document -> db document**

A `Model` is defined as what you're exporting in the Schema.
**It is essentially a constructor function.**

`Client <- request.response -> api <- query/results -> mongo`

```JS
function User (info) {
this.name = info.name;
this.password = info.password;
}

const user = new User({ name: 'Kevin', password: 'long' })
```

# Sessions

`npm i --save express-session`

```JS
const sessions = require('express-session');
server.use(
  session({
    secret: 'nobody tosses a dwarf!',
    cookie: { maxAge: 1 * 24 * 60 * 60 * 1000 }, // 1 day in milliseconds
    httpOnly: true,
    secure: true,
  })
);
```

# Misc

`https://jwt.io/` - JSON Web Tokens / Use "Node.js" `npm install jsonwebtoken` for personal projects.
`https://firebase.google.com/` - Firebase Deployment / Key-Value storage
`https://howtofirebase.com/` - How to use Firebase

```js
function UserForm(props) {}

// const ConnectedUserForm = connect(UserForm)
// connect comes from react-redux
// Connect is a function that takes a component and then returns another component that I can use.
// export default Connected

export default connect(m)(UserForm); // same as above.
```

# Code Holder

### Server.js

```JS
const express = require('express');
const mongoose = require('mongoose');
const session = require('session');

const User = require('./auth/UserModel');

// Mongoose
mongoose
  .connect('mongodb://localhost/authdb')
  .then(() => {
    console.log('\n=== connected to MongoDB ===\n');
  })
  .catch(err => console.log('database connection failed', err));

// Server
const server = express();

// Global Middleware
// const greeter = (req, res, next) => {
//   req.hello = `Hello Kevin!`;
// this is the same as what is shown below with Authenticate, just less-specific.
//   next();
// };

const authenticate = function(name) {
  return function(req, res, next) {
    req.hello = `hello ${name}!`;

    next();
  };
};

// Middleware
server.use(express.json());
// server.use(greeter);

// server.get('/', (req, res) => {
//   res.status(200).json({ api: 'running!', greeting: req.hello });
// });

server.get('/', (req, res) => {
  // res.send('have a cookie');
  // local middleware
  user.find().then(users => {
    req.session.name = users[0].username;
    res.json(users);
  });
});

// server.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   User.findOne({ username })
//     .then(user => {
//       if (user) {
//         user.isPasswordValid(password, cb); // maybe a promise
//       }
//     })
//     .catch(err => res.status(500).json(err));
// });

server.post('/login', (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username }).then(user => {
    if (user) {
      user.isPasswordValid(password).then(isValid => { // expects a passwordGuess
        if (isvalid) { // You can log in
          req.session.name = user.username;
          res.status(200).json({ response: 'Have a cookie' });
        } else { // You cannot log in
          res.status(401).json({ msg: 'You shall not pass!!!' });
        }
      });
    }
  });

// server.get('/greet', greeter, (req, res) => {
//   // greeter takes the global middleware and runs it, but when it's not being used above (// out) then it's considered local middleware. This allows you to pick and choose where you put it.
//   res.status(200).json({ api: 'running!', greeting: req.hello });
// });

server.get('/greet', (req, res) => {
  const { name } = req.session;
  res.send(`hello ${name}`);
}); // will return the users name based off the session, from a cookie

server.post('/register', (req, res) => {
  const user = new User(req.body); // filling up the document

  user // mongoose document that is mapped to db document
    .save()
    .then((savedUser = res.status(200).json(savedUser)))
    .catch(err => res.status(500).json(err));
});

server.listen(5000, () => console.log('\n=== api on port 5000 ===\n'));
```

### UserModel.js

```JS
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    index: true,
    lowercase: true, // will normalize it to be stored in lowercase. kEvIn JoLlEy comes back as "kevin jolley".
  },
  password: {
    type: String,
    required: true,
  },
});

// Middleware
UserSchema.pre('save', function(next) {
  // cannot be an arrow function
  console.log('pre save hook');
  bcrypt.hash(this.password, 16.5, (err, hash) => {
    // 2 ^ 16.5 ~ 92k rounds of hashing
    if (err) {
      return next(err);
    }

    this.password = hash; // sets password to hash results.

    return next();
  }); // this.password, rounds
});

// are executed on a mongoose document = instance of model
UserSchema.methods.isPasswordValid = function(passwordGuess) {
  // cannot be an arrow function
  return bcrypt.compare(passwordGuess, this.password);
};

module.exports = mongoose.model('User', userSchema);
```
