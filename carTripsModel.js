const mongoose = require('mongoose')

const carMakeSchema = new mongoose.Schema({
  name: {
      type: String
    },
  seenCount: Number
})

const carTripSchema = new mongoose.Schema({
    createdAt: Date,
    carMakes: [carMakeSchema],
})

const CarTrips = mongoose.model('CarTrips', carTripSchema, 'car_trips');

module.exports = CarTrips
