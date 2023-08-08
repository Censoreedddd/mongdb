Warning: Found ~/.mongorc.js, but not ~/.mongoshrc.js. ~/.mongorc.js will not be loaded.
  You may want to copy or rename ~/.mongorc.js to ~/.mongoshrc.js.
test> use contact
switched to db contact


had a problm with the print 
contact> db.createCollection("contactlist")
{ ok: 1 }
contact> db.contactlist.insertMany([
...   {
...     "lastName": "Ben Lahmer",
...     "firstName": "Fares",
...     "email": "fares@gmail.com",
...     "age": 26
...   },
...   {
...     "lastName": "Kefi",
...     "firstName": "Seif",
...     "email": "kefi@gmail.com",
...     "age": 15
...   },
...   {
...     "lastName": "Fatnassi",
...     "firstName": "Sarra",
...     "email": "sarra.f@gmail.com",
...     "age": 40
...   },
...   {
...     "lastName": "Ben Yahia",
...     "firstName": "Rym",
...     "age": 4
...   },
...   {
...     "lastName": "Cherif",
...     "firstName": "Sami",
...     "age": 3
...   }
... ])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("64b2c78dec4c3f5e931248ff"),
    '1': ObjectId("64b2c78dec4c3f5e93124900"),
    '2': ObjectId("64b2c78dec4c3f5e93124901"),
    '3': ObjectId("64b2c78dec4c3f5e93124902"),
    '4': ObjectId("64b2c78dec4c3f5e93124903")
  }
}
contact> db.contactlist.find({})
[
  {
    _id: ObjectId("64b2c78dec4c3f5e931248ff"),
    lastName: 'Ben Lahmer',
    firstName: 'Fares',
    email: 'fares@gmail.com',
    age: 26
  },
  {
    _id: ObjectId("64b2c78dec4c3f5e93124900"),
    lastName: 'Kefi',
    firstName: 'Seif',
    email: 'kefi@gmail.com',
    age: 15
  },
  {
    _id: ObjectId("64b2c78dec4c3f5e93124901"),
    lastName: 'Fatnassi',
    firstName: 'Sarra',
    email: 'sarra.f@gmail.com',
    age: 40
  },
  {
    _id: ObjectId("64b2c78dec4c3f5e93124902"),
    lastName: 'Ben Yahia',
    firstName: 'Rym',
    age: 4
  },
  {
    _id: ObjectId("64b2c78dec4c3f5e93124903"),
    lastName: 'Cherif',
    firstName: 'Sami',
    age: 3
  }
]
contact> db.contactlist.findOne({ _id: ObjectId("<contactId>") })
BSONError: Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer
contact> db.contactlist.findOne({    _id: ObjectId("64b2c78dec4c3f5e93124903"),
... db.contactlist.findOne({    _id: ObjectId("64b2c78dec4c3f5e93124903"), 
Uncaught:
SyntaxError: Unexpected token, expected "," (2:2)

  1 | db.contactlist.findOne({    _id: ObjectId("64b2c78dec4c3f5e93124903"),
> 2 | db.contactlist.findOne({    _id: ObjectId("64b2c78dec4c3f5e93124903"),
    |   ^
  3 |

contact> db.contactlist.find({ age: { $gt: 18 } })
[
  {
    _id: ObjectId("64b2c78dec4c3f5e931248ff"),
    lastName: 'Ben Lahmer',
    firstName: 'Fares',
    email: 'fares@gmail.com',
    age: 26
  },
  {
    _id: ObjectId("64b2c78dec4c3f5e93124901"),
    lastName: 'Fatnassi',
    firstName: 'Sarra',
    email: 'sarra.f@gmail.com',
    age: 40
  }
]
contact> db.contactlist.find({ age: { $gt: 18 }, lastName: { $regex: /ah/i } })
[
  {
    _id: ObjectId("64b2c78dec4c3f5e931248ff"),
    lastName: 'Ben Lahmer',
    firstName: 'Fares',
    email: 'fares@gmail.com',
    age: 26
  }
]
contact> db.contactlist.find({ age: { $gt: 18 }, lastName: { $regex: /ah/i } })
[
  {
    _id: ObjectId("64b2c78dec4c3f5e931248ff"),
    lastName: 'Ben Lahmer',
    firstName: 'Fares',
    email: 'fares@gmail.com',
    age: 26
  }
]
contact> db.contactlist.deleteMany({ age: { $lt: 5 } })
{ acknowledged: true, deletedCount: 2 }
contact> db.contactlist.find({})
[
  {
    _id: ObjectId("64b2c78dec4c3f5e931248ff"),
    lastName: 'Ben Lahmer',
    firstName: 'Fares',
    email: 'fares@gmail.com',
    age: 26
  },
  {
    _id: ObjectId("64b2c78dec4c3f5e93124900"),
    lastName: 'Kefi',
    firstName: 'Seif',
    email: 'kefi@gmail.com',
    age: 15
  },
  {
    _id: ObjectId("64b2c78dec4c3f5e93124901"),
    lastName: 'Fatnassi',
    firstName: 'Sarra',
    email: 'sarra.f@gmail.com',
    age: 40
  }
]
contact> db.contactlist.updateOne({ _id: ObjectId("64b2c78dec4c3f5e93124900") }, { $set: { firstName: "Kefi Anis" } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
contact> db.contactlist.find({})
[
  {
    _id: ObjectId("64b2c78dec4c3f5e931248ff"),
    lastName: 'Ben Lahmer',
    firstName: 'Fares',
    email: 'fares@gmail.com',
    age: 26
  },
  {
    _id: ObjectId("64b2c78dec4c3f5e93124900"),
    lastName: 'Kefi',
    firstName: 'Kefi Anis',
    email: 'kefi@gmail.com',
    age: 15
  },
  {
    _id: ObjectId("64b2c78dec4c3f5e93124901"),
    lastName: 'Fatnassi',
    firstName: 'Sarra',
    email: 'sarra.f@gmail.com',
    age: 40
  }
]
contact> db.contactlist.updateOne({ _id: ObjectId("64b2c78dec4c3f5e93124900") }, { $set: { firstName: "Anis" } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
contact> db.contactlist.find({})
[
  {
    _id: ObjectId("64b2c78dec4c3f5e931248ff"),
    lastName: 'Ben Lahmer',
    firstName: 'Fares',
    email: 'fares@gmail.com',
    age: 26
  },
  {
    _id: ObjectId("64b2c78dec4c3f5e93124900"),
    lastName: 'Kefi',
    firstName: 'Anis',
    email: 'kefi@gmail.com',
    age: 15
  },
  {
    _id: ObjectId("64b2c78dec4c3f5e93124901"),
    lastName: 'Fatnassi',
    firstName: 'Sarra',
    email: 'sarra.f@gmail.com',
    age: 40
  }
]