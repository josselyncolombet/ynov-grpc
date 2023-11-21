const grpc = require('@grpc/grpc-js');
const services = require('./clientmanagement_grpc_pb.js');
const messages = require('./clientmanagement_pb.js');

const client = new services.ClientManagerClient(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

// Exemple de création d'un client
let newClient = new messages.Client();
newClient.setId('1');
newClient.setName('John Doe');
newClient.setEmail('johndoe@example.com');

client.createClient(newClient, (error, response) => {
  if (error) console.error(error);
  console.log(response.getMessage());
});

// Exemple de récupération d'un client
let clientRequest = new messages.ClientRequest();
clientRequest.setId('1');

client.getClient(clientRequest, (error, response) => {
  if (error) console.error(error);
  console.log('Client:', response.toObject());
});

// Ajoutez ici des exemples pour updateClient et deleteClient si nécessaire
