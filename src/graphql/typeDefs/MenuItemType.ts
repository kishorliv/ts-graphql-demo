import { GraphQLObjectType, GraphQLString } from "graphql";

const MenuItemType = new GraphQLObjectType({
  name: "MenuItemType",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    price: { type: GraphQLString },
  }),
});

export default MenuItemType;
