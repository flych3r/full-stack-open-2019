const mongoose = require('mongoose')
require('dotenv').config()

// if (process.argv.length < 3) {
//   console.log('give password as argument')
//   process.exit(1)
// }

const password = process.env.CLUSTER_0_PASSWORD

const url = `mongodb+srv://fullstack-open:${password}@cluster0-fathe.mongodb.net/note-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean
})

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//   content: 'HTML is Easy',
//   date: new Date(),
//   important: true
// })

// note.save().then(response => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })

Note.find({ important: true }).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})
