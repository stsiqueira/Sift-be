import { buildSchema } from 'graphql'
import { data } from './jsonData/data.js'
import { profiles } from './jsonData/profiles.js'
import { locations } from './jsonData/locations.js'

const dataJSON = data
const profilesJSON = profiles
const locationsJSON = locations

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

	type Geo {
		lat: String
		long: String
	}

	type Location {
		id: String
		company: String
		address_1: String
		phone_1: String
		categories: [String]
	}

	type LocationData {
		geo: Geo
		location: Location
	}

  type Query {
		item(id: String!): Item
		items: [Item]
		profile(email: String!): Profile
		locations: [LocationData]
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
	},
	locations: () => {
		return locationsJSON
	}
};

export { schema, root }