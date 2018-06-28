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
