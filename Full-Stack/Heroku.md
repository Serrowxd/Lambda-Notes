`heroku create` - creates the heroku app.

`git add .` - adds your changes to the local hub, same as git add --all

`git push heroku master` - pushes changes to the server.

`heroku ps:scale web=1` - sets the server to run on 1 dyno. Can also be set to 0 to turn the server off and put it to sleep.

`heroku open` - will open the server heroku is currently open on.

`heroku local web` - will run the app locally, similar to npm start in react.

`herokuk addons:create papertrail` - adds 'papertrail' to the 'addons'.

`heroku addons` - shows a list of apps

`heroku addons:open papertrail` - opens 'papertrail' from 'addons'.
[https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-a-database](Heroku Databases)

`heroku addons:create heroku-postgresql:hobby-dev` - will add an sql database and sets a 'DATABASE_URL' envrionment which can be checked with `heroku config`

`npm install pg` installs the [https://npmjs.org/package/pg](pg module) to your database.

[https://devcenter.heroku.com/categories/nodejs](Node.js Reference)

[https://devcenter.heroku.com/articles/deploying-nodejs](Deploying an existing Node.js App Reference)
