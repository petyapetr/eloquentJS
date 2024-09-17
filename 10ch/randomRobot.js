import {getRandomItem} from "./state.js";

export function randomRobot(params) {
	const {state, graph} = params;

	const {place} = state;
	const legalMoves = graph.get(place);
	const arr = Array.from(legalMoves);
	const choice = getRandomItem(arr);

	return [choice];
}
