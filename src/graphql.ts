import { buildSchema } from "graphql";

// or new GraphQLSchema();
const schema = buildSchema(`
  type Product{
    name: String,
    id: Int
  },
  type Query{
    hello: String,
    products: [Product]
  }
`);

const rootValue = {
  hello: () => {
    return "hello";
  },
  products: () => {
    return [
      { id: 1, name: "iphone" },
      { id: 2, name: "laferrari" },
    ];
  },
};

export { schema, rootValue };
