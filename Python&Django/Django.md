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

`user = models.ForeignKey(User, on_delete=models.CASCADE)` is saying that on delete, it will delete not only the user but all the information attached to them.

`from django.contrib.auth.models import User` will import the user for above code.

```PY
class PersonalNote(Note):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
```

Can also be very danergous when you want to ARCHIVE the user and their information, rather than completely deleting them. This will delete them and all their information.

`python manage.py dbshell` opens the sqlite3 shell.

---

**The Django REST Framework**

[REST Link](http://www.django-rest-framework.org/)

`pipenv install` --

`djangorestframework`

`markdown`

`django-filter`

`"rest_framework",` added to `INSTALLED_APPS` in `settings.py`

A good order to go for `INSTALLED_APPS` is "My Stuff", "3rd Party Stuff", "Included Stuff"

`url(r"^api-auth/", include("rest_framework.urls")),` added to `urls.py` under `urlpatterns`

```PY
REST_FRAMEWORK = {
    # Use Django's standard 'django.contrib.auth' permissions,
    # or allow read-only access for unathenticated users.
    "DEFAULT_PERMISSIONS_CLASSES": [
        "rest_framework.permissions.DjangoModelPemissionsOrAnonReadOnly"
    ]
}
```

Added to `settings.py` at the bottom

`from django.conf.urls import url, include` in `urls.py` imports url and include

`from rest_framework import serializers` imports serializers, which turns data from complex structures that we use to 1's and 0's so that they can be moved efficiently. It's usually best to name a serializer after what it's serializing.

```PY
from rest_framework import serializers, viewsets
from .models import Note


class NoteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Note
        fields = ("title", "content")


class NoteViewset(viewsets.ModelViewSet):
    serializer_class = NoteSerializer
    queryset = Note.objects.all()
```

This is all included in `api.py`

```PY
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from notes.api import NoteViewset, PersonalNoteViewset

# from django.conf.urls import url, include ## this is not needed because of routers.


router = routers.DefaultRouter()
router.register(r"notes", NoteViewset)
router.register(r"personal_notes", PersonalNoteViewset)
# you can continue to add more by just adding `router.register` to the line below and swapping out the imports.

urlpatterns = [
    path("admin/", admin.site.urls),
    path(r"api/", include(router.urls)),
    # url(r"^api-auth/", include("rest_framework.urls")), ## this is overwritten by the above path(r"api/") code.
]
```

`urls.py` updated with above code.

```PY
from rest_framework import serializers, viewsets
from .models import Note, PersonalNote


class NoteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Note
        fields = ("title", "content")


class NoteViewset(viewsets.ModelViewSet):
    serializer_class = NoteSerializer
    queryset = Note.objects.all()


class PersonalNoteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PersonalNote
        fields = ("title", "content")

    def create(self, validated_data):
        # import pdb; pdb.set_trace
        user = self.context["request"].user
        personal_note = PersonalNote.objects.create(user=user, **validated_data)
        return personal_note


class PersonalNoteViewset(viewsets.ModelViewSet):
    serializer_class = PersonalNoteSerializer
    queryset = PersonalNote.objects.all()
```

`api.py` update

```PY
    def create(self, validated_data):
        # import pdb; pdb.set_trace
        user = self.context["request"].user
        personal_note = PersonalNote.objects.create(user=user, **validated_data)
        return personal_note
```

`**` means "this is a list of keyword arguments"

---

**Fullstack**

When connecting a React front-end to a Django back-end, you need to send a post request. This can be done with Axios as well. As long as it passes the authentication tests, it will work!

```PY
from rest_framework import serializers, viewsets
from .models import Note, PersonalNote


class NoteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Note
        fields = ("title", "content")


class NoteViewset(viewsets.ModelViewSet):
    serializer_class = NoteSerializer
    queryset = Note.objects.all()


class PersonalNoteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PersonalNote
        fields = ("title", "content")

    def create(self, validated_data):
        # import pdb; pdb.set_trace
        user = self.context["request"].user
        personal_note = PersonalNote.objects.create(user=user, **validated_data)
        return personal_note


class PersonalNoteViewset(viewsets.ModelViewSet):
    serializer_class = PersonalNoteSerializer
    queryset = PersonalNote.objects.none()

    def get_queryset(self):
        user = self.request.user

        if user.is_anonymouse:
            return queryset

        else:
            return PersonalNote.objects.filter(user=user)
```

`queryset = PersonalNote.objects.none()` sets an empty list rather than a full one.

With the above code, when you query for a personal note, it will only search for that user.

---

Relational Databases ~ **ask about this**
