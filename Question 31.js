// Use your actual MongoDB Atlas database
use('mern-auth'); // this will auto-create if not exists

// Insert a document into the testUsers collection
db.getCollection('testUsers').insertOne({
  name: 'Kartik',
  email: 'Kartik148.p@gmail.com',
  role: 'student',
  registeredAt: new Date()
});

// Return all users from testUsers
db.getCollection('testUsers').find();
