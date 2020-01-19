const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    launches: [Launch]!
    launch(id: ID!): Launch
    me: User
  }

  type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: rocket
    isBooked: Boolean!
  }
`;

module.exports = typeDefs;
