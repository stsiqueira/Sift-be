const locations = [
	{
		"geo": {
			"lat": "49.26555020",
			"long": "-123.11434570"
		},
		"location": {
			"id": "0019268-2220CambieStreet",
			"company": "Best Buy Cambie & 6th",
			"address_1": "2220 Cambie Street",
			"phone_1": "(604) 638-4966",
			"categories": ["Electronics"]
		},
		"label": "a"
	},
	{
		"geo": {
			"lat": "49.28139470",
			"long": "-123.11953740"
		},
		"location": {
			"id": "0019269-798GranvilleStreet",
			"company": "Best Buy Robson & Granville",
			"address_1": "798 Granville Street",
			"phone_1": "(604) 683-2502",
			"categories": ["Electronics"]
		},
		"label": "b"
	},
	{
		"geo": {
			"lat": "49.21133990",
			"long": "-123.10743630"
		},
		"location": {
			"id": "0019270-8133OntarioStreet",
			"company": "Best Buy South Vancouver",
			"address_1": "8133 Ontario Street",
			"phone_1": "(604) 326-3350",
			"categories": ["Electronics"]
		},
		"label": "c"
	},
	{
		"geo": {
			"lat": "49.26108450",
			"long": "-123.04754300"
		},
		"location": {
			"id": "0018156-2605KasloStreet",
			"company": "East Van Bottle Depot (Temp. Closed)",
			"address_1": "2605 Kaslo Street",
			"phone_1": "(604) 255-4243",
			"categories": ["Electronics"]
		},
		"label": "d"
	},
	{
		"geo": {
			"lat": "49.26490450",
			"long": "-123.10448810"
		},
		"location": {
			"id": "0018184-2286OntarioStreet",
			"company": "Go Green Bottle & Recycling Depot",
			"address_1": "2286 Ontario Street",
			"phone_1": "(604) 874-0367",
			"categories": ["Electronics", "Plastics", "Glass"]
		},
		"label": "e"
	},
	{
		"geo": {
			"lat": "49.28219290",
			"long": "-123.11815510"
		},
		"location": {
			"id": "0017869-710GranvilleStreet",
			"company": "London Drugs #02",
			"address_1": "710 Granville Street",
			"phone_1": "(604) 448-4802",
			"categories": ["Plastics"]
		},
		"label": "f"
	},
	{
		"geo": {
			"lat": "49.26346560",
			"long": "-123.11599530"
		},
		"location": {
			"id": "0017208-525WestBroadway",
			"company": "London Drugs #04",
			"address_1": "525 West Broadway",
			"phone_1": "(604) 448-4804",
			"categories": ["Plastics"]
		},
		"label": "g"
	},
	{
		"geo": {
			"lat": "49.28147640",
			"long": "-123.05248090"
		},
		"location": {
			"id": "0017891-2585EastHastingsStreet",
			"company": "London Drugs #07",
			"address_1": "2585 East Hastings Street",
			"phone_1": "(604) 251-1977",
			"categories": ["Plastics"]
		},
		"label": "h"
	},
	{
		"geo": {
			"lat": "49.23375250",
			"long": "-123.15429700"
		},
		"location": {
			"id": "0017207-2091W.42ndAvenue",
			"company": "London Drugs #10",
			"address_1": "2091 W. 42nd Avenue",
			"phone_1": "(604) 448-4810",
			"categories": ["Plastics"]
		},
		"label": "i"
	},
	{
		"geo": {
			"lat": "49.28591490",
			"long": "-123.12640060"
		},
		"location": {
			"id": "0017901-1187RobsonStreet",
			"company": "London Drugs #19",
			"address_1": "1187 Robson Street",
			"phone_1": "(604) 448-4819",
			"categories": ["Plastics"]
		},
		"label": "j"
	},
	{
		"geo": {
			"lat": "49.23288000",
			"long": "-123.03505000"
		},
		"location": {
			"id": "0017903-3328KingswayAvenue",
			"company": "London Drugs #28",
			"address_1": "3328 Kingsway Avenue",
			"phone_1": "(604) 448-4828",
			"categories": ["Plastics"]
		},
		"label": "k"
	},
	{
		"geo": {
			"lat": "49.28549620",
			"long": "-123.13934420"
		},
		"location": {
			"id": "0017873-1650DavieStreet",
			"company": "London Drugs #50",
			"address_1": "1650 Davie Street",
			"phone_1": "(604) 448-4850",
			"categories": ["Plastics"]
		},
		"label": "l"
	},
	{
		"geo": {
			"lat": "49.23348370",
			"long": "-123.06677500"
		},
		"location": {
			"id": "0017876-5639VictoriaDrive",
			"company": "London Drugs #53",
			"address_1": "5639 Victoria Drive",
			"phone_1": "(604) 448-4853",
			"categories": ["Plastics"]
		},
		"label": "m"
	},
	{
		"geo": {
			"lat": "49.26370480",
			"long": "-123.15625470"
		},
		"location": {
			"id": "0017882-2230WestBroadway",
			"company": "London Drugs #74",
			"address_1": "2230 West Broadway",
			"phone_1": "(604) 448-4874",
			"categories": ["Plastics"]
		},
		"label": "n"
	},
	{
		"geo": {
			"lat": "49.28254600",
			"long": "-123.10757900"
		},
		"location": {
			"id": "0017886-351AbbottStreet",
			"company": "London Drugs #78",
			"address_1": "351 Abbott Street",
			"phone_1": "(604) 448-4878",
			"categories": ["Plastics"]
		},
		"label": "o"
	},
	{
		"geo": {
			"lat": "49.27124940",
			"long": "-123.10574200"
		},
		"location": {
			"id": "0017906-1622SaltStreet",
			"company": "London Drugs #82",
			"address_1": "1622 Salt Street",
			"phone_1": "(604) 448-4882",
			"categories": ["Plastics"]
		},
		"label": "p"
	},
	{
		"geo": {
			"lat": "49.28428110",
			"long": "-123.06667550"
		},
		"location": {
			"id": "0018236-1856PowellStreet",
			"company": "Powell Street Return-It Bottle Depot",
			"address_1": "1856 Powell Street",
			"phone_1": "(604) 253-4987",
			"categories": ["Plastics", "Electronics", "Glass"]
		},
		"label": "q"
	},
	{
		"geo": {
			"lat": "49.27069890",
			"long": "-123.08264860"
		},
		"location": {
			"id": "0016559-960EvansAvenue",
			"company": "Regional Recycling - Vancouver",
			"address_1": "960 Evans Avenue",
			"phone_1": "(855) 701-7171",
			"categories": ["Plastics", "Electronics", "Glass"]
		},
		"label": "r"
	},
	{
		"geo": {
			"lat": "49.26048750",
			"long": "-123.09859610"
		},
		"location": {
			"id": "0016831-261East12thAve.",
			"company": "Salvation Army -  Vancouver (Mount Pleasant)",
			"address_1": "261 East 12th Ave.",
			"phone_1": "(604) 874-4721",
			"categories": ["Electronics"]
		},
		"label": "s"
	},
	{
		"geo": {
			"lat": "49.20882100",
			"long": "-123.10636500"
		},
		"location": {
			"id": "0017135-34E69thAve",
			"company": "South Van Bottle Depot",
			"address_1": "34 E 69th Ave",
			"phone_1": "(604) 325-3370",
			"categories": ["Plastics", "Glass", "Electronics"]
		},
		"label": "t"
	},
	{
		"geo": {
			"lat": "49.23917180",
			"long": "-123.05143920"
		},
		"location": {
			"id": "0016801-2639Kingsway",
			"company": "Vancouver Central Return-It Depot",
			"address_1": "2639 Kingsway",
			"phone_1": "(604) 434-0707",
			"categories": ["Plastics", "Electronics", "Glass"]
		},
		"label": "u"
	},
	{
		"geo": {
			"lat": "49.20242380",
			"long": "-123.13323450"
		},
		"location": {
			"id": "0014800-1253West75thAve.",
			"company": "Vancouver West Return-It Depot",
			"address_1": "1253 West 75th Ave.",
			"phone_1": "(604) 263-8809",
			"categories": ["Plastics", "Electronics", "Glass"]
		},
		"label": "v"
	}
]

export { locations }