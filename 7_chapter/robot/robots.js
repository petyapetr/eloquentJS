import {ROADS_GRAPH} from './graph.js';
import {randomPick} from './random.js';

/*	robots return {direction, memory}
		direction is for a `state.move(direction)`
		what's the purpouse of returning memory?
*/

function randomRobot(state) {
	return {direction: randomPick(ROADS_GRAPH[state.place])}
}

export {randomRobot};