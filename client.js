const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDef = protoLoader.loadSync('client_management.proto');
const grpcObject = grpc.loadPackageDefinition(packageDef);
const clientManagementPackage = grpcObject.clientmanagement;

const client = new clientManagementPackage.ClientManager('localhost:50051', grpc.credentials.createInsecure());

// Exemple de création d'un client
client.CreateClient({ id: '1', name: 'John Doe', email: 'john@example.com' }, (error, response) => {
  console.log('Création:', response.message);
});

// Exemple de récupération d'un client
client.GetClient({ id: '1' }, (error, response) => {
  console.log('Client:', response);
});
