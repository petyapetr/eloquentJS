const fs = require("fs");
const path = require("path");

// Function to rename folders in a directory
const renameFolders = (directoryPath) => {
	// Read the directory contents
	fs.readdir(directoryPath, (err, files) => {
		if (err) {
			console.error(`Error reading directory: ${err.message}`);
			return;
		}

		// Process each file/folder
		files.forEach((file) => {
			const oldPath = path.join(directoryPath, file);

			// Check if the item is a directory
			fs.stat(oldPath, (err, stats) => {
				if (err) {
					console.error(`Error stating file: ${err.message}`);
					return;
				}

				if (stats.isDirectory()) {
					const newName = file.split("_")[0] + "ch";
					const newPath = path.join(directoryPath, newName);

					// Rename the folder
					fs.rename(oldPath, newPath, (err) => {
						if (err) {
							console.error(`Error renaming folder ${file}: ${err.message}`);
						} else {
							console.log(`Renamed folder ${file} to ${newName}`);
						}
					});
				}
			});
		});
	});
};

// Usage example
const directoryPath = "./"; // Replace with your directory path
renameFolders(directoryPath);
