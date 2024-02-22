const mongoose = require('mongoose')

const carTripSchema = new mongoose.Schema({
    name: {
        type: String,
        //required: true,
        unique: true,
      },
      _id: {
        type: String
      },
      seenCount: {
        type: Number
      }
})

const CarTrip = mongoose.model('CarTrip', carTripSchema, 'car_trips');

module.exports = CarTrip
