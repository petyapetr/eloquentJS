function loop(value, condition, update, body) {
	if (condition(value)) {
		body(value)
		value = update(value)
		return loop(value, condition, update, body)
	}
	else return
}

loop(3, n => n > 0, n => n - 1, console.log)