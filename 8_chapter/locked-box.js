const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

// my clumsy solution with an exeption for an opened box
function withBoxUnlocked(body) {
  if (!box.locked) {
  	try {
    	body();
    } catch (err) {
    	console.log('1: ' + err);
    }
  } else {
  	try {
    	box.unlock();
    	body();
  	} catch (err) {
  		console.log('2: ' + err)
  	} finally {
    	box.lock();
  	}
  }
}

// suggested solution
/* function withBoxUnlocked(body) {
  let locked = box.locked;
  if (!locked) {
    return body();
  }

  box.unlock();
  try {
    return body();
  } finally {
    box.lock();
  }
} */

withBoxUnlocked(function() {
  box.content.push("gold piece");
  console.log(box.content);
});


try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);
// → true