import { GraphQLObjectType } from "graphql";

import RestaurantField from "../resolvers/Query/Restaurant";
import UserField from "../resolvers/Query/User";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    ...UserField,
    ...RestaurantField,
  },
});

const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {},
});

export { RootQuery, RootMutation };
