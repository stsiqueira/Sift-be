let profiles = [
	{
		email: 'johntitor@cern.com', // dont need "id" cause email is going to be unique
		name: 'John Titor',
		badges: [
			{
				id: "1",
				name: '1st Scan' // images can be saved in frontend and served like all other images
			}
		],
		history: [
			{
				id: '1',
				image: 'https://picsum.photos/1080/1920', //image from our storage for that email id
				itemID: 'organic' // we only need the id of the item as it is recognized in our json
			}
		]
	}
]

export { profiles }