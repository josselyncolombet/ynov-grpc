installation de nvm : curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

installation de node 14 : nvm install 14.7.0
downgrade en node 14 : nvm use 14.7.0

npm i -g grpc
npm i google-protobuf

grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./generated --grpc_out=grpc_js:./generated -I ./ client_management.proto 

