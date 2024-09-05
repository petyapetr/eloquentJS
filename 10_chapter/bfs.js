function findRoute(graph, start, end) {
	const queue = [];
	queue.push(start);

	const prev = solve();
	const path = reconstructPath(prev, end);

	return path;

	function solve() {
		const visited = new Set();
		visited.add(start);

		const prev = new Map(Array.from(graph.keys()).map((key) => [key, null]));

		while (queue.length !== 0) {
			const node = queue.splice(0, 1)[0];
			const neighbors = graph.get(node);

			if (neighbors) {
				const arr = Array.from(neighbors);
				arr.forEach((next) => {
					if (!visited.has(next)) {
						queue.push(next);
						visited.add(next);
						prev.set(next, node);
					}
				});
			}
		}

		return prev;
	}

	function reconstructPath(prev, end) {
		const path = [];

		for (let at = end; at !== null; at = prev.get(at)) {
			path.push(at);
		}

		path.reverse();

		if (path[0] === start) return path;

		return [];
	}
}

function bfsRobot(params) {
	let {state, memory, graph} = params;
	const {place, parcels} = state;
	memory ??= [];

	if (memory.length === 0) {
		let {from, to} = parcels[0];

		if (from !== place) {
			memory = findRoute(graph, place, from);
		} else {
			memory = findRoute(graph, place, to);
		}
	}

	return [memory[0], memory.slice(1)];
}

function improvedBfsRobot(params) {
	let {state, memory, graph} = params;
	const {place, parcels} = state;
	// memory ??= [];

	const routes = parcels.map((p) => {
		let {from, to} = p;
		let route = undefined;

		if (from !== place) {
			route = findRoute(graph, place, from);
		} else {
			route = findRoute(graph, place, to);
		}

		return route;
	});

	routes.sort((a, b) => a.length - b.length);
	const shortest = routes[0].length;
	const shortRoutes = routes.filter((r) => r.length === shortest);
	let route = shortRoutes.find((r) => {
		const last = r[r.length - 1];
		return parcels.map((p) => p.from).includes(last);
	});
	route ??= shortRoutes[0];

	return [route[1], route.slice(1)];
}

export {bfsRobot, improvedBfsRobot};
