import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://estebandido:3385723Junker@cluster0.sbpqp.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('Db is connected'))
  .catch(err => console.log(err));