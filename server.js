const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

mongoose.connect('mongodb://localhost:27017/staticdb', {
  useUnifiedTopology: true
})
const userSchema = new mongoose.Schema({
  search: String
});

const Search = mongoose.model('Search', userSchema);

app.get('/', (req, res) => {
  res.send('Hello')
})
app.get('/StaticWebPage/api/search', (req, res) => {
  Search.find()
    .then(data => {
      console.log(data[0].id, 'dd')
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({ error: 'Internal Server Error' });
      console.log(err, 'err')
    })
})
app.post('/StaticWebPage/api/search', (req, res) => {
  const newData = new Search(req.body);
  newData.save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({ error: 'Internal Server Error' });
      console.log(err, 'err')
    })
})


// app.use(express.static(path.join(__dirname, 'build')));
// app.use(express.static('public'))

// Catch-all route for React app
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log('SERVER is running on port: ' + port);
})