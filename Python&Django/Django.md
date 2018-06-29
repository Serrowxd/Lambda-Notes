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

`class Note(models.Model):` Django has a built in models class, so we are just pulling from it with this.

[Some reading on Models](https://docs.djangoproject.com/en/2.0/ref/models/class/)

```PY
from django.db import models
from uuid import uuid4


class Note(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    # TODO: Add user/author who created it.
    title = models.CharField(max_length=200)
    content = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    # TODO: Tagging Sytem or Categories
```

`auto_now_add=True` will only create the time when it's first added to the database

`auto_now=True` will add it every time it is updated in the database.

`GUID` or `UUID` is a Globally or Universally Unique Identifier - a randomly generated string of characters that's big enough to not generate two random ones that are the same. This can be used as a KEY for notes.

`from uuid import uuid4` - uuid is already built into Python, so we can simply import it by using this.

`id = models.UUIDField(primary_key=True, default=uuid4, editable=False)` generates a primary key, and then makes it unmodifiable.

After doing this, tell Python that the new app is installed. Go back to `Settings.py`, then under `INSTALLED_APPS`

In this case, we just put `"notes",`

**When modifiying your database code, always remember to run a migration, as seen below**

`python manage.py makemigrations` - will check for migrations.

`python manage.py migrate` - will migrate anything that is not done.

**You can test your models like so**

`python manage.py shell`

`from notes.models import Note` - imports from the specified area

`n = Note(title='example', content='this is a test')` - creates a new object with contents based on the model

`n` - calls

`n.title` - will give you the title of the object `n`

`n.id` - will give you the UUID

`n.content` - will give you the content of the object `n`

`print(n.__dict__)` - gives you all the information regarding the `n` object

`n.content = 'this is a test part 2'` - allows you to edit the contents of `n`

`n.save()` - saves it to the database.

`Note.objects.all` gives you a query set, you can also set it to an object by saing `b=Note.objects.all`

---

`python manage.py createsuperuser` - creates a username, email, and password.

Generic - `admin` // `adminPassword`

This allows you to log-in via localhost:8000/admin

`from .models import Note` is a way of importing information from 'Note'

```PY
from django.contrib import admin
from .models import Note

# Register your models here.
admin.site.register(Note)
```

This goes inside `admin.py` and shows in the `admin` pannel all your notes.

```PY
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": os.path.join(BASE_DIR, "db.sqlite3"),
    }
}
```

Under `settings.py` you can modify this to change where the information is stored from your notes. In this case it's stored locally in the `db.sqlite3`.

```PY
from django.db import models
from uuid import uuid4


class Note(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    # TODO: Add user/author who created it.
    title = models.CharField(max_length=200)
    content = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    category = models.CharField(max_length=20)
```

`category` in this case will populate with a prompt when doing it with `python manage.py makemigrations`, this will ask you to implement a default. For this, you can just put a string of `default` with Option 1.

---
