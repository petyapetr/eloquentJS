function runRobot(state, robot, memory) {
	for (let turn = 0; ; turn++) {
		if (state.parcells.length === 0) {
			console.log(`Done in ${turn} turns`);
			return turn
		}

		let action = robot(state, memory);

		const place = state.place;
		state = state.move(action.direction);
		console.log(`Robot went from ${place} to ${state.place}`);
		
		const oldMemory = memory;
		memory = action.memory;
		console.log(`Old memory: ${oldMemory}, current current: ${memory}`);
	}
};

export {runRobot};