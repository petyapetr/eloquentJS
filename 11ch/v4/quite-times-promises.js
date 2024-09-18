async function activityTable(day) {
	return textFile("camera_logs.txt").then((fileList) => {
		const promises = fileList.split("\n").map((name) =>
			textFile(name).then((file) => {
				return file
					.split("\n")
					.filter((stamp) => new Date(Number(stamp)).getDay() === day)
					.map((stamp) => new Date(Number(stamp)).getHours());
			})
		);

		return Promise.all(promises).then((res) => {
			const hours = res.flat();
			const table = [];
			hours.map((el) => {
				table[el] = table[el] ? ++table[el] : 1;
			});
			return table;
		});
	});
}

activityTable(1).then((table) => console.log(activityGraph(table)));
