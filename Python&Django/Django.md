# Django

Updating Pip via Windows is as easy as `python -m pip install --upgrade pip`

Install Django in the shell `pipenv shell`

`pipenv install django`

Doing this keeps it from messing up the other projects we are working on.

`django-admin startproject djorg .` - the . is INCREDIBLY important, it puts it in the base folder rather than nesting it. This is basically the same thing as `npx create-react-app`

**IMPORTANT**

```PY
# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'v#w43r()t@+yq#v@c2ac9w!406!jrn9zwqfw+zwqpepa$1+x7r'
```

This is located in `settings.py` by default, we will need to adjust this.

---

The entry point of a python project is `wsgi.py` - this would be what you use if you're deploying a web server, or uwsgi if you're doing your own thing.

`INSTALLED_APPS` is like your `package.json`

`urls.py` is kinda like your routes.

`models.py` is your schema from Node or Mongo

**Django is literally just NodeJS and Mongo**

`api.py` is your "bread and butter" basically - you'll be using it the most to work with the API.

EJS Templates - good for templating

`Flask` is another way of doing Python frameworks and websites. Linkedin and Pintrest use Flask.

---

**Everything below needs to be run from within `pipenv shell`**

`django-admin startapp notes` will create a new APP within your PROJECT folder.

`python manage.py runserver` - then go to the server and it will run it.

**if you go to the server/admin, it will give you the ability to do an admin log-in**

`python manage.py showmigrations` shows your migrations

`python manage.py sqlmigrate admin migration-name` tells us the sql commands that it is building for us to set up the database and move all of the data over.

`python manage.py migrate` will run all your SQL, then you won't get issues with unapplied migrations.

`python manage.py shell` opens a terminal window that you can use for imports. We can run whatever Python commands we want here.

**Django is built around models**

`from notes.models import Note`

`pipenv install python-decouple` is a python decoupler that allows us to hide modules.

`from decouple import config` gives you access to the library in your `settings.py`

[Python Decouple](https://github.com/henriquebastos/python-decouple)

```PY
# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = config("SECRET_KEY")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = config("DEBUG", default=False, cast=bool)
```

The information from these is stored in a baseline .env file - like so

```
DEBUG=True
SECRET_KEY=v#w43r()t@+yq#v@c2ac9w!406!jrn9zwqfw+zwqpepa$1+x7r
```
