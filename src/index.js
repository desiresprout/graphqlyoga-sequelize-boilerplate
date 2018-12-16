import { GraphQLServer } from "graphql-yoga";
import { mergeTypes, fileLoader, mergeResolvers } from 'merge-graphql-schemas';
import path from 'path';
const { sequelize  } = require('./models');

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const server = new GraphQLServer({
  typeDefs, resolvers
});

const options = {
  port: 8000,
  endpoint: '/graphql',
  playground: '/playground',
}

sequelize.sync().then(function() {
  server.start(options, ({ port }) =>
  console.log(`Server started, listening on port ${port} for incoming requests.`),
  )
})


