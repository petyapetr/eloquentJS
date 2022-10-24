function randomPick(map) {
  let choice = Math.floor(Math.random() * map.length);
  return array[choice];
};

function randomParcels(attractions, multiplier = 1) {
	const parcelCount = Math.ceil(Math.random() * attractions.length) * multiplier;

	const parcels =[];
	for (let i = 0; i < parcelCount; i++) {
		let address = randomPick(attractions);
		let place;
		do {
			place = randomPick(attractions);
		} while (place === address);
		parcels.push({place, address});
	};
	return parcels;
};

export {randomParcels, randomPick}