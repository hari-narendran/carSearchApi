const mongoose = require('mongoose')

const carMakeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
      },
})

const CarMake = mongoose.model('CarMake', carMakeSchema, 'car_makes');

//module.exports = mongoose.model('car_makes', carMakeSchema)
module.exports = CarMake
