import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { schema, root } from './src/schema.js'

const app = express();
const port = 4000;

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(port);

console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`);