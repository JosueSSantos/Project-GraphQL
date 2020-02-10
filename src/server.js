const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers');
const mongoose = require('mongoose')

const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect('mongodb://localhost:27017/graphql', options)

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),

  resolvers

});

server.start();