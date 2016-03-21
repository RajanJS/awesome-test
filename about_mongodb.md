# List All Databases
$ show databases

# Show Current Database
$ db

# Select a Database
$ use db_name

# CRUD Commands
 // save one user
 $ db.users.save({ name: 'Chris' });

 // save multiple users
 $ db.users.save([{ name: 'Chris'}, { name: 'Holly' }]);

# Read
 // show all users
 $ db.users.find();
 // find a specific user
 $ db.users.find({ name: 'Holly' });

# Update
 db.users.update({ name: 'Holly' }, { name: 'Holly Lloyd' });

# Delete
 // remove all
 db.users.remove({});
 // remove one
 db.users.remove({ name: 'Holly' });

# Connecting to a MongoDB Database Using Mongoose

  // grab the packages we need
 var mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost/db_name');

