// robot is a function which receives a state 
// and returns a direction 
// and memory (value that will be given back to it the next time it is called)

import { randomPick, randomState, roadGraph, } from "./state.js";

function run(state, robot, memory = []) {
	for (let turn = 0; ; turn++) {
		// exit from cycle
		if (state.parcels.length === 0) {
			return turn
		}

		// iterate to form memory
		const action = robot(state, memory);
		state = state.move(action.direction);
		memory = action.memory;
		console.log(action.direction, state.parcels);
	}
}


// TODO fix infinite loop of undefined
// My gues is that the problem is with Map structure
function random(state) {
	return {direction: randomPick(roadGraph.get(state.place))};
}

const runRandom = run(randomState, random);
console.log(runRandom);