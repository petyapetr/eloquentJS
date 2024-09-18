async function activityTable(day) {
	const table = [];
	const logFileList = await textFile("camera_logs.txt");
	const logs = logFileList.split("\n");
	for (let i = 0; i < logs.length; ++i) {
		const fileName = logs[i];
		const log = await textFile(fileName);
		const timeStamps = log.split("\n");
		timeStamps.forEach((stamp) => {
			const date = new Date(Number(stamp));

			if (date.getDay() === day) {
				const hour = date.getHours();

				if (!table[hour]) {
					table[hour] = [];
				}

				table[hour].push(stamp);
			}
		});
	}

	return table.map((arr) => arr.length);
}

activityTable(1).then((table) => console.log(activityGraph(table)));
