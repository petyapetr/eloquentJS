async function activityTable(day) {
	return textFile("camera_logs.txt")
		.then((fileList) => {
			const names = fileList.split("\n");
			const logs = names.map((name) => textFile(name));
			return Promise.all(logs);
		})
		.then((logs) => {
			const table = []
			const timeStamps = logs.map((log) => log.split("\n"))
			timeStamps.forEach((stamp) => {
			const date = new Date(stamp - 0);

			if (date.getDay() === day) {
				const hour = date.getHours();

				if (!table[hour]) {
					table[hour] = [];
				}

				table[hour].push(stamp);
			}
		});
}

activityTable(1).then((table) => console.log(activityGraph(table)));
