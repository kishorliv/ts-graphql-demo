import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";

import MenuItem from "./MenuItemType";

const RestaurantType = new GraphQLObjectType({
  name: "RestaurantType",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    location: { type: GraphQLString },
    menu: { type: GraphQLList(MenuItem) },
  }),
});

export default RestaurantType;
