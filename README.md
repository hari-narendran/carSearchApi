Node.js Car Management API

This repository contains a Node.js API for managing car makes and trips using Express and MongoDB.

Features

	•	Car Makes Management
	•	Fetch all car makes
	•	Search car makes
	•	Car Trips Management
	•	Save car trips
	•	Retrieve all trips
	•	Delete a trip

Technologies

	•	Node.js
	•	Express.js
	•	MongoDB (Mongoose)
	•	Firebase
	•	Body-parser
	•	CORS

Installation

	1.	Clone the repository
	2.	Install dependencies: npm install
	3.	Set up MongoDB connection in db.js
	4.	Start the server: npm start

Endpoints

	•	GET /carmakes - Fetch all car makes
	•	GET /search?q={query} - Search car makes
	•	POST /saveTrips - Save car trips
	•	GET /getAllTrips - Retrieve all trips
	•	POST /deleteTrip - Delete a trip

Usage

Run the server and access the API at http://localhost:3000. Ensure MongoDB is running and configured.

License

This project is licensed under the MIT License.
