const ROADS = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

const roadGraph = buildGraph(ROADS);
const attractions = [];
roadGraph.forEach((value, key) => attractions.push(key));

function buildGraph(arr) {
	let graph = new Map();
	for (let a of arr) {
		a = a.split('-');
		if (!graph.has(a[0])) {
			graph.set(a[0], []);
		}
		graph.get(a[0]).push(a[1]);
		if (!graph.has(a[1])) {
			graph.set(a[1], [])
		}
		graph.get(a[1]).push(a[0])
	}

	return graph;
}

class VillageState {
	constructor(place, parcels) {
		this.place = place;
		this.parcels = parcels;
	}

	move(destination) {
		if (roadGraph.has(roadGraph.get(this.place).includes(destination))) {
			return this
		} else {
			const parcels = this.parcels.map((p) => {
				if (!p.plaсe === this.place) return p;
				return {place: destination, adress: p.adress};
			}).filter((p) => p.adress !== destination);
			return new VillageState(destination, parcels);
		}
	}

	static randomState(attractions, multiplier = 2) {
		const parcelCount = Math.ceil(Math.random() * attractions.length) * multiplier;
		let parcels = [];
		for (let i = 0; i < parcelCount; i++) {
			const place = randomPick(attractions);
			let address;
			do {
				address = randomPick(attractions);
			} while (place === address);
			parcels.push({place, address});
		}

		const start = randomPick(attractions); 
		return {place: start, parcels: parcels};
	}
}

function randomPick(arr) {
	const j = Math.floor(Math.random() * arr.length);
	// TODO спроси у кого-нибудь почему это так или разберись сам
	/* return place = arr[j]; // работает, но не явно объявляется, 
												// хотя глобально она не доступна
 */
	// return const place = arr[j]; // не работает
	// return let place = arr[j]; // не работает

	/* const place = arr[j]; 
	return place; // работает */

	return arr[j]; // наверное, это лучший вариант
}

export {VillageState, randomPick, attractions};