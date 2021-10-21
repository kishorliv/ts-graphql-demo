import { GraphQLSchema } from "graphql";

import { RootQuery, RootMutation } from "./typeDefs";

export default new GraphQLSchema({
  query: RootQuery,
  // mutation: RootMutation,
});
