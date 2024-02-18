const mongoose = require('mongoose');

const uri =
  'mongodb+srv://narendran4871:utP1jEu0AaPhDtmY@cluster0.6y9iwzt.mongodb.net/CarsDB?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(error => console.error("Error connecting to MongoDB:", error));

module.exports = mongoose;
