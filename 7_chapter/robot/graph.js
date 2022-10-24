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
  let graph = new Map();

  function addEdge(from, to) {
    if (graph.has(from)) {
      let value = graph.get(from);
      graph.set(from, [... value, to]);
    } else {
      graph.set(from, [to]);
    };
  };

  for (let [from, to] of edges.map((e) => e.split('-'))) {
    addEdge(from, to);
    addEdge(to, from);
  };
  return graph;
};

const ROADS_GRAPH = buildGraph(ROADS);
const ATTRACTIONS = ROADS_GRAPH.keys();

export {ROADS_GRAPH, ATTRACTIONS};