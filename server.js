const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDef = protoLoader.loadSync('client_management.proto');
const grpcObject = grpc.loadPackageDefinition(packageDef);
const clientManagementPackage = grpcObject.clientmanagement;

const server = new grpc.Server();
const clients = {}; // Simuler une base de données

server.addService(clientManagementPackage.ClientManager.service, {
  CreateClient: (call, callback) => {
    const client = call.request;
    clients[client.id] = client;
    callback(null, { message: 'Client créé avec succès' });
  },
  GetClient: (call, callback) => {
    callback(null, clients[call.request.id]);
  },
  UpdateClient: (call, callback) => {
    const client = call.request;
    clients[client.id] = client;
    callback(null, { message: 'Client mis à jour avec succès' });
  },
  DeleteClient: (call, callback) => {
    delete clients[call.request.id];
    callback(null, { message: 'Client supprimé avec succès' });
  }
});

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
console.log('Server running at http://0.0.0.0:50051');
server.start();
