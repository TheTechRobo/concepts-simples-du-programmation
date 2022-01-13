console.log("Wow! I exist!"); // verify the script loads
pos = 0; // current slide; in programming, counting starts at 0

// this is the actual presentation data, as a constant (meaning it can't be changed)
// it's a list of dictionaries, (in technical-speak it's an array of objects)
const presentation = [ // the array
		{ // the object
				title: "title_hidden", // each key of the object is the id of the item being replaced
				// the key of each object is the class that will be added
				"conditional-one": "nothiddenlol",
				"conditional-init": "nothiddenlol",
			},
		];
end = false; // this way we can ignore keypresses after the presentation is done
function advancePresentation() {
	console.log("Advancing presentation.");
	var d = presentation[pos]; // if pos is 0, this gets the first item from the presentation variable
	// if it's 1 it gets the second item; etc
	if (typeof(d) == "undefined") { // if this happens, we reached a nonexistent slide
		document.body.innerHTML = "<h1>That's the end!"; // replace the html with Thats the end
			end = true; // so this doesnt keep being called on keypress
			console.log("end = true;");
			return false;
		}
	pos++; // increment pos by 1
	console.log(d);
	var keys = Object.keys(d); // gets all keys from the current slide's object
	keys.forEach(key => {
			console.log(`updating ${key}`);
			obj = d[key] // gets the object from the key
			document.getElementById(key).classList.add(obj); // add the class
		});
	return true;
}
function keyPress(e) {
	if (end) {
			return false;
		}
	console.log("Pressed key.");
	return advancePresentation();
}
document.addEventListener("keypress", keyPress); // on keypress, the keyPress function will run, trigerring advancePresentation
