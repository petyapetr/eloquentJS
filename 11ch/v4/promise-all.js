function Promise_all(promises) {
	return new Promise((doRes, doRej) => {
		if (!Array.isArray(promises)) return doRej({err: "Input isn't an Array"});
		const resolvedValues = [];

		if (promises.length === 0) return doRes(resolvedValues);

		let pending = promises.length;

		for (let i = 0; i < promises.length; ++i) {
			promises[i]
				.then((res) => {
					resolvedValues[i] = res;
					--pending;

					if (pending === 0) doRes(resolvedValues);
				})
				.catch((err) => doRej({err}));
		}

		// const iterator = (i) => {
		// 	if (i === promises.length) return doRes(resolvedValues);

		// 	const toExecute = promises[i];
		// 	toExecute
		// 		.then((res) => {
		// 			resolvedValues.push(res);
		// 			return iterator(++i);
		// 		})
		// 		.catch((err) => doRej({err}));
		// };

		// iterator(0);
	});
}

// Test code.
Promise_all([]).then((array) => {
	console.log("This should be []:", array);
});
function soon(val) {
	return new Promise((doRes) => {
		setTimeout(() => doRes(val), Math.random() * 500);
	});
}
Promise_all([soon(1), soon(2), soon(3)]).then((array) => {
	console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)])
	.then((array) => {
		console.log("We should not get here");
	})
	.catch((error) => {
		if (error != "X") {
			console.log("Unexpected failure:", error);
		}
	});
