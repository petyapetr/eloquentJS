// code from the book

const ROADS = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

const ROAD_GRAPH = buildGraph(ROADS);
const VILLAGE_ATTRACTIONS = Object.keys(ROAD_GRAPH)

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!ROAD_GRAPH[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) return p;
        return {place: destination, address: p.address};
      }).filter(p => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }

  static randomState(attractions, multiplier = 1) {
    const parcelCount = Math.ceil(Math.random() * attractions.length) * multiplier

    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
      let address = randomPick(attractions);
      let place;
      do {
        place = randomPick(attractions);
      } while (place === address);
      parcels.push({place, address});
    }

    const start = randomPick(attractions)
    return new VillageState(start, parcels)
  }
}

function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return {direction: randomPick(ROAD_GRAPH[state.place])};
}

const MAIL_ROUTE = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = MAIL_ROUTE;
  }
  return {direction: memory[0], memory: memory.slice(1)};
}

function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}

function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(ROAD_GRAPH, place, parcel.place);
    } else {
      route = findRoute(ROAD_GRAPH, place, parcel.address);
    }
  }

  return {direction: route[0], memory: route.slice(1)};
}

// 1 task «compare robots»

// run function
function actionRobot(state, robot, memory) {
	for (turn = 0; ; turn++) {
		if (state.parcels.length === 0) {
			return turn
		}
		let action = robot(state, memory)
		state = state.move(action.direction)
		memory = action.memory
	}
}

function compareRobots(robot1, memory1, robot2, memory2, amount) {
	// task generator
  const tasks = []
	for (let i = 0; i < amount; i++) {
    let state = VillageState.randomState(VILLAGE_ATTRACTIONS)
		tasks.push({index: i, state})
	}

	// robots perform tasks
	const results1 = []
	const results2 = []

	for (let t of tasks) {
		const result1 = actionRobot(t.state, robot1, memory1)
		const result2 = actionRobot(t.state, robot2, memory2)
		results1.push(result1)
		results2.push(result2)
	}

	// results comparassion
	function findAverage(acc, item, index, arr) {
		acc += item
		if (index === arr.length - 1) {
			return acc / arr.length
		}
		return acc
	}
	const average1 = results1.reduce(findAverage, 0)
	const average2 = results2.reduce(findAverage, 0)
	let verdict = average1 < average2

	// final verdict
	console.log(`Results are: 1 = ${average1}, 2 = ${average2}`)
	if (average1 === average2) {return console.log('Robots are equal')}
	if (verdict) {
    return console.log(
        `First robot is more efficient, with average steps rate: ${average1}`
    )
  } else {
		return console.log(
        `Second robot is more efficient, with average steps rate: ${average2}`
    )
	}
}


// 2 task «robot efficiency»
	// additional observation func
	function runRobotAnimation() {
		
	}

function improvedRobot() {}

// tests
compareRobots(routeRobot, [], goalOrientedRobot, [], 100)

/* const testParcelCount = randomParcelCount(VILLAGE_ATTRACTIONS)
const testState = VillageState.random(testParcelCount)

actionRobot(testState, goalOrientedRobot, []) */

// compareRobots(goalOrientedRobot, [], improvedRobot, [], 100)