export function buildGraph(arr) {
	let graph = new Map();

	const addEdge = (from, to) => {
		if (!graph.has(from)) {
			graph.set(from, new Set());
		}

		graph.get(from).add(to);
	};

	arr.forEach((el) => {
		const [from, to] = el;
		addEdge(from, to);
		addEdge(to, from);
	});

	return graph;
}
