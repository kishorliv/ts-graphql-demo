import express from "express";
import { graphqlHTTP } from "express-graphql";

// import { schema, rootValue } from "./graphql";

import schema from "./graphql/schema";

const app = express();
const PORT = 3000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello world.");
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
