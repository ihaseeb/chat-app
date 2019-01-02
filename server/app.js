const firebase = require('firebase')
require('firebase/firestore')
const express = require('express')
const app = express()

firebase.initializeApp({
  apiKey: 'AIzaSyAvcWcNs9fWo_ocaQ0MVGuHveTmNQdlTig',
  authDomain: 'muskeeters-group.firebaseapp.com',
  databaseURL: 'https://muskeeters-group.firebaseio.com',
  projectId: 'muskeeters-group',
  messagingSenderId: '395376972000'
})

var db = firebase.firestore()

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
})

const server = app.listen(3001, function () {
  console.log('server running on port 3001')
})
const io = require('socket.io')(server)

io.on('connection', function (socket) {
  console.log(socket.id)
  socket.on('SEND_MESSAGE', function (data) {
    console.log('message is ', data)
    db.collection('mainChat').doc().set(data).then(() => {
      io.emit('MESSAGE', data)
    })
  })
})
