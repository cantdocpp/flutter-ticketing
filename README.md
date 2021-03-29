# flutter-ticketing
A movie ticketing mobile app built using flutter

## Running the backend
How to run the backend locally:

### Using Docker
Go inside the ```backend``` folder and run:

```
docker-compose up -d
```

This will run the backend service on ```localhost:3000```

### Manual installation
1. Install [NodeJs](https://nodejs.org/en/).
2. Install [MongoDB](https://docs.mongodb.com/manual/installation/)
3. Go to ```backend``` directory.
4. Run ```npm install```.
5. Add ```.env``` file in the root of backend directory.
6. Copy ```.env.example``` content and paste it to the ```.env``` file.
7. Add port number (if leave blank, then the default is port 3001).
8. Run ```npm start```.

## Running the mobile emulator
