const express = require('express');
const cors = require('cors');
const mongoose = require('./db');
const CarMake = require('./carMakeModel');
// const CarTrip = require('./carTripModel')
const CarTrips = require('./carTripsModel');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:4200' }));

//const { MongoClient, ServerApiVersion } = require('mongodb');
/* const mongoose = require('mongoose');
const uri =
  'mongodb+srv://narendran4871:utP1jEu0AaPhDtmY@cluster0.6y9iwzt.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(uri)
  .then(() => {
    console.log('Connected to MongoDB ...');
    app.listen(port, () =>
      console.log(`Server listening at http://localhost:${port}`)
    );
  })
  .catch((err) => console.log(err)); */

// app.use(cors())

const carMakes_ = [
  'Abarth',
  'Alfa Romeo',
  'Aston Martin',
  'Audi',
  'Bentley',
  'BMW',
  'Bugatti',
  'Cadillac',
  'Chevrolet',
  'Chrysler',
  'Citroën',
  'Dacia',
  'Daewoo',
  'Daihatsu',
  'Dodge',
  'Donkervoort',
  'DS',
  'Ferrari',
  'Fiat',
  'Fisker',
  'Ford',
  'Honda',
  'Hummer',
  'Hyundai',
  'Infiniti',
  'Iveco',
  'Jaguar',
  'Jeep',
  'Kia',
  'KTM',
  'Lada',
  'Lamborghini',
  'Lancia',
  'Land Rover',
  'Landwind',
  'Lexus',
  'Lotus',
  'Maserati',
  'Maybach',
  'Mazda',
  'McLaren',
  'Mercedes-Benz',
  'MG',
  'Mini',
  'Mitsubishi',
  'Morgan',
  'Nissan',
  'Opel',
  'Peugeot',
  'Porsche',
  'Renault',
  'Rolls-Royce',
  'Rover',
  'Saab',
  'Seat',
  'Skoda',
  'Smart',
  'SsangYong',
  'Subaru',
  'Suzuki',
  'Tesla',
  'Toyota',
  'Volkswagen',
  'Volvo',
];

// Example of fetching all car makes
app.get('/carmakes', async (req, res) => {
  try {
    const carMakes = await CarMake.find();
    console.log(carMakes);
    res.json(carMakes);
  } catch (error) {
    console.error('Error fetching car makes:', error);
    res.status(500).send('Error retrieving car makes');
  }
});

app.get('/', (req, res) => res.send('Hello Node'));

app.get('/search', async (req, res) => {
  const carMakes = await CarMake.find();
  const searchQuery = req.query.q.toLowerCase();
  console.log(searchQuery);
  const carMakeMatches = carMakes.filter((carmake) =>
    carmake.name.toLowerCase().includes(searchQuery)
  );
  res.json(carMakeMatches);
});

app.get('/search', (req, res) => {
  const searchQuery = req.query.q.toLowerCase();
  const carMakeMatches = carMakes_.filter((carmake) =>
    carmake.toLowerCase().includes(searchQuery)
  );
  res.json(carMakeMatches);
});

app.post('/saveTrips', async (req, res) => {
  try {
    // Use insertMany for efficient bulk insertion
    const savedTrips = await CarTrips.create(req.body);

    res
      .status(201)
      .json({ message: 'Trips saved successfully!', data: savedTrips });
  } catch (error) {
    console.error('Error saving trips:', error);
    res.status(500).json({ message: 'Error saving trips' });
  }
});

app.get('/getAllTrips', async (req, res) => {
  const carTrips = await CarTrips.find();
  res.json(carTrips);
});

app.post('/deleteTrip', async (req, res) => {
  console.log(req.body);
  try {
    const deletedTRip = await CarTrips.deleteOne({ _id: req.body._id });
    res
      .status(201)
      .json({ message: 'Trip deleted successfully!', data: deletedTRip });
  } catch (error) {
    console.log('Error deleting trip', error);
    res.status(500).json({ message: 'Error deleting trip' });
  }
});

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
