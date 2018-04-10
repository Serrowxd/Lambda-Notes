# MongoDB

#### Terminal

* brew services start mongo - starts the MongDB Database.
* show dbs - lists current db's.

#### Windows

* mongod - starts your mongo server, but you have to keep terminal open for the duration of your project.

---

* Client <--> {APi (Driver = Translate from JS objects to BSON)} <--> Database Server
* **DBMS === Management System**
* Database = Pile of information, organized, easy to retrieve.
* **RDBMS === Relational DB** - Uses a query language called Structured Query Language (SQL) spoken as (SEQUEL).
* RDBMS thinks in sets.
* Applications work with objects (or classes).
* NoSQL - Not Only SQL (key-value pairs, documents, graph).
  * More natural way of structuring the data.
* Document Databases
  * Data stored as BSON (Binary JSON).
  * inside the application it's POJO (Plain Old JS Object).

**Why Mongo?**

* Popular.
* Mature over 10 years.
* JS end to end.
* Dynamic shemas - the shape of our data.

**Why Mongoose?**

* _We'll use Mongoose to connect_
* Schemas
* Query Builder.
* Middleware (Lifecycle Hooks).
* Schema Validation.

**How**

* Define schema (template).
* Create a model by compiling a schema.
* An instance of a model is a Mongoose document.
* A mongoose document represents a db document.
* We use mongoose documents to act on data on the db.

### MongoDB Server

* Databases
  * Collections
    * Documents
      * Fields

# Day 2

* `One to One`: Person has one spouse, user has only one profile, the profile belongs to only one user.
* `One to Many`: User has many posts, a post belongs to only one user.
* `Many to Many`: Post has many tags, a tag can appear on many posts.

* `One to Few`: A book has a few authors, order has a few items,
