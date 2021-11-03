import { buildSchema } from 'graphql'
import { data } from './jsonData/data.js'

const dataJSON = data

const schema = buildSchema(`
	type Item {
		id: String!
		name: String
		category: String
		instructions: String
	}

  type Query {
		item(id: String!): Item
		items: [Item]
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
	item: (args) => {
		return dataJSON.find(x => x.id === args.id)
	},
	items: () => {
		return dataJSON
	}
};

export { schema, root }