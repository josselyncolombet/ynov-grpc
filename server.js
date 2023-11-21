const grpc = require('@grpc/grpc-js');
const services = require('./generated/client_management_grpc_pb.js');
const messages = require('./generated/client_management_pb.js');

const clients = {}; // Stockage simple des clients

function createClient(call, callback) {
  const client = call.request;
  clients[client.getId()] = client;
  const response = new messages.ClientResponse()
  response.setMessage('Client créé')
  callback(null, response);
}

function getClient(call, callback) {
  callback(null, clients[call.request.getId()]);
}

function updateClient(call, callback) {
  const client = call.request;
  clients[client.getId()] = client;
  callback(null, new messages.ClientResponse({ message: 'Client mis à jour' }));
}

function deleteClient(call, callback) {
  delete clients[call.request.getId()];
  callback(null, new messages.ClientResponse({ message: 'Client supprimé' }));
}

const server = new grpc.Server();
server.addService(services.ClientManagerService, {
  createClient: createClient,
  getClient: getClient,
  updateClient: updateClient,
  deleteClient: deleteClient
});

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
  server.start();
  console.log('Server running on port 50051');
});
