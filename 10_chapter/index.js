import {roadGraph} from "./road.js";
import {createRandomState} from "./state.js";
import {randomRobot} from "./randomRobot.js";
import {mailRobot} from "./mailRobot.js";

function move(state, destination) {
	const {place, parcels} = state;
	const legalMoves = roadGraph.get(place);

	if (!legalMoves.has(destination)) return state;

	let updatedParcels = parcels
		.map((p) => {
			if (p.from !== place) return p;

			return {from: destination, to: p.to};
		})
		.filter((p) => p.from !== p.to);

	return {place: destination, parcels: updatedParcels};
}

function run(state, func, memory) {
	for (let i = 0; ; ++i) {
		if (state.parcels.length === 0) {
			console.log(`Done in ${i} turns`);
			break;
		}

		const action = func({state, memory, graph: roadGraph});
		const [direction, updatedMemory] = action;
		let newState = move(state, direction);
		state = newState;
		memory = updatedMemory;
		// console.log(`Moves to direction ${direction}`);
	}
}

const state = createRandomState(roadGraph);

// Execution

run(state, randomRobot);
run(state, mailRobot);
