const MAIL_ROUTE = [
	"Alice's House",
	"Cabin",
	"Alice's House",
	"Bob's House",
	"Town Hall",
	"Daria's House",
	"Ernie's House",
	"Grete's House",
	"Shop",
	"Grete's House",
	"Farm",
	"Marketplace",
	"Post Office",
];

export function mailRobot(params) {
	let {memory} = params;

	if (memory?.length === 0 || !memory) {
		memory = MAIL_ROUTE;
	}

	return [memory[0], memory.slice(1)];
}
