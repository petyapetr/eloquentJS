import {ROADS_GRAPH} from "./graph.js";
import {randomParcels} from "./random.js";
import {randomPick} from "./random.js";

class VillageState {
	constructor(place, parcels) {
		this.place = place;
		this.parcels = parcels;
	}

	move(destination) {
		if (!ROADS_GRAPH[this.place].includes(destination)) {
			return globalThis;
		};
		let parcels = this.parcels.map((p) => {
			if (p.place !== this.place) return p;
			return {place: destination, adress: p.adress}
		}).filter((p) => p.place !== p.adress);
		return new VillageState(destination, parcels)
	}

	static randomState(attractions, multiplier = 1) {
    const parcels = randomParcels(attractions, multiplier)
    const place = randomPick(attractions)
    return new VillageState(place, parcels)
  }
}

export {VillageState};