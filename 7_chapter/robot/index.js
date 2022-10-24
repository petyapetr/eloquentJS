import {randomRobot} from './robots.js';
import {runRobot as run} from './run.js';
import {ATTRACTIONS} from './graph.js';
import {VillageState} from './state.js';

console.log(ATTRACTIONS)
const testState = VillageState.randomState(ATTRACTIONS);
console.log(testState)
run(testState, randomRobot());
