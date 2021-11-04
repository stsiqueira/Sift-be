import { buildSchema } from 'graphql'
import { data } from './jsonData/data.js'
import { profiles } from './jsonData/profiles.js'

const dataJSON = data
const profilesJSON = profiles

const schema = buildSchema(`
	type Item {
		id: String!
		name: String
		category: String
		instructions: String
	}

	type Profile {
		email: String!
		name: String
		badges: [Badge]
		history: [ImageScanHistoryObject]
	}

	type Badge {
		id: String
		name: String
	}

	type ImageScanHistoryObject {
		id: String
		image: String
		itemID: String
	}

  type Query {
		item(id: String!): Item
		items: [Item]
		profile(email: String!): Profile
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
	item: (args) => {
		return dataJSON.find(x => x.id === args.id)
	},
	items: () => {
		return dataJSON
	},
	profile: (args) => {
		return profilesJSON.find(x => x.email === args.email)
	}
};

export { schema, root }