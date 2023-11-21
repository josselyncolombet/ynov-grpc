// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var client_management_pb = require('./client_management_pb.js');

function serialize_clientmanagement_Client(arg) {
  if (!(arg instanceof client_management_pb.Client)) {
    throw new Error('Expected argument of type clientmanagement.Client');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientmanagement_Client(buffer_arg) {
  return client_management_pb.Client.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientmanagement_ClientRequest(arg) {
  if (!(arg instanceof client_management_pb.ClientRequest)) {
    throw new Error('Expected argument of type clientmanagement.ClientRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientmanagement_ClientRequest(buffer_arg) {
  return client_management_pb.ClientRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_clientmanagement_ClientResponse(arg) {
  if (!(arg instanceof client_management_pb.ClientResponse)) {
    throw new Error('Expected argument of type clientmanagement.ClientResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_clientmanagement_ClientResponse(buffer_arg) {
  return client_management_pb.ClientResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Le service de gestion des clients
var ClientManagerService = exports.ClientManagerService = {
  // CRUD Operations
createClient: {
    path: '/clientmanagement.ClientManager/CreateClient',
    requestStream: false,
    responseStream: false,
    requestType: client_management_pb.Client,
    responseType: client_management_pb.ClientResponse,
    requestSerialize: serialize_clientmanagement_Client,
    requestDeserialize: deserialize_clientmanagement_Client,
    responseSerialize: serialize_clientmanagement_ClientResponse,
    responseDeserialize: deserialize_clientmanagement_ClientResponse,
  },
  getClient: {
    path: '/clientmanagement.ClientManager/GetClient',
    requestStream: false,
    responseStream: false,
    requestType: client_management_pb.ClientRequest,
    responseType: client_management_pb.Client,
    requestSerialize: serialize_clientmanagement_ClientRequest,
    requestDeserialize: deserialize_clientmanagement_ClientRequest,
    responseSerialize: serialize_clientmanagement_Client,
    responseDeserialize: deserialize_clientmanagement_Client,
  },
  updateClient: {
    path: '/clientmanagement.ClientManager/UpdateClient',
    requestStream: false,
    responseStream: false,
    requestType: client_management_pb.Client,
    responseType: client_management_pb.ClientResponse,
    requestSerialize: serialize_clientmanagement_Client,
    requestDeserialize: deserialize_clientmanagement_Client,
    responseSerialize: serialize_clientmanagement_ClientResponse,
    responseDeserialize: deserialize_clientmanagement_ClientResponse,
  },
  deleteClient: {
    path: '/clientmanagement.ClientManager/DeleteClient',
    requestStream: false,
    responseStream: false,
    requestType: client_management_pb.ClientRequest,
    responseType: client_management_pb.ClientResponse,
    requestSerialize: serialize_clientmanagement_ClientRequest,
    requestDeserialize: deserialize_clientmanagement_ClientRequest,
    responseSerialize: serialize_clientmanagement_ClientResponse,
    responseDeserialize: deserialize_clientmanagement_ClientResponse,
  },
};

exports.ClientManagerClient = grpc.makeGenericClientConstructor(ClientManagerService);
