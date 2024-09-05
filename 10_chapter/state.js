function createRandomState(roadGraph, multiplier = 2) {
	const attractions = Array.from(roadGraph.keys());
	const parcelCount =
		Math.ceil(Math.random() * attractions.length) * multiplier;
	const place = getRandomItem(attractions);
	let parcels = [];
	for (let i = 0; i < parcelCount; i++) {
		const place = getRandomItem(attractions);
		let address;

		do {
			address = getRandomItem(attractions);
		} while (place === address);

		parcels.push({from: place, to: address});
	}

	return {place, parcels};
}

function getRandomItem(arr) {
	const i = Math.floor(Math.random() * arr.length);

	return arr[i];
}

export {createRandomState, getRandomItem};
