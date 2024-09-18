async function activityTable(day) {
	const table = [];

	return textFile("camera_logs.txt").then((fileList) => {
		const promises = fileList.split("\n").map((name) =>
			textFile(name).then((file) => {
				return file.split("\n").map((stamp) => {
					const date = new Date(stamp - 0);

					if (date.getDay() === day) {
						const hour = date.getHours();

						if (!table[hour]) {
							table[hour] = [];
						}

						table[hour].push(stamp);
					}
				});
			})
		);

		return Promise.all(promises).then(() => table.map((arr) => arr.length));
	});
}

activityTable(1).then((table) => console.log(activityGraph(table)));
