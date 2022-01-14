console.log("Wow! I exist!"); // verify the script loads
pos = 0; // current slide; in programming, counting starts at 0

// this is the actual presentation data, as a constant (meaning it can't be changed)
// it's a list of dictionaries, (in technical-speak it's an array of objects)
const presentation = [ // the array
	{ // the object
		title: "title_hidden", // each key of the object is the id of the item being replaced
		// the key of each object is the class that will be added
		"variable": "nothiddenlol",
	}, {
		"variable": "otherhidden",
		"firstconditionalset": "nothiddenlol",
	}, {
		"conditional-init": "conditional-nosel",
		"agreyyyyyyy": "greyyyyyyy",
		"conditional-one": "greeeeeeen",
		"conditional-one-into": "greeeeeeen",
		"conditional-gogrey": "greyyyyyyy",
	}, {
		"conditional-altinit": "nothiddenlol",
		"agreyyyyyyy": "whiiiiiite",
		"conditional-altinitt": "conditional-sel",
		"conditional-init": "otherhidden",
		"conditional-one": "whiiiiiite",
		"conditional-one-into": "whiiiiiite",
		"conditional-gogrey": "whiiiiiite",
	}, {
		"conditional-altinit": "conditional-nosel",
		"agreyyyyyyy": "othergrey",
		"conditional-one": "othergrey",
		"conditional-one-into": "othergrey",
		"conditional-gogrey": "othergreen",
	}, {
		"functions": "nothiddenlol",
		"firstconditionalset": "otherhidden",
		"conditional-altinitt": "otherhidden",
	}, {
		"functions": "otherhidden",
		"objects": "nothiddenlol",
	}, {
		"objects": "otherhidden",
		"loop": "nothiddenlol",
	}, {
		"loop": "otherhidden",
		"BUTWAITT": "BUTWAIT",
		"BUTWAIT": "nothiddenlol",
	}
];
end = false; // this way we can ignore keypresses after the presentation is done
function advancePresentation() {
	console.log("Advancing presentation.");
	var d = presentation[pos]; // if pos is 0, this gets the first item from the presentation variable
	// if it's 1 it gets the second item; etc
	if (typeof(d) == "undefined") { // if this happens, we reached a nonexistent slide
		document.body.innerHTML = "<h1>La fin !"; // replace the html with Thats the end
			end = true; // so this doesnt keep being called on keypress
			console.log("end = true;");
			return [false, false];
		}
	pos++; // increment pos by 1
	console.log(d);
	var keys = Object.keys(d); // gets all keys from the current slide's object
	keys.forEach(key => {
		console.log(`updating ${key}`);
		obj = d[key]; // gets the object from the key
		if (document.getElementById(key) === null) {
			elements = document.getElementsByClassName(key)
			for (var i=0; i < elements.length; i++) {
				elements[i].classList.add(obj);
			}
			return [true, "class"]
		}
		document.getElementById(key).classList.add(obj); // add the class
	});
	return [true, "id"];
}
function keyPress(e) {
	if (end) {
		console.log("Restarting page...");
		window.location.href = window.location.href;
	}
	console.log("Pressed key.");
	var e=advancePresentation();
	console.log(e);
	return e[0]
}
document.addEventListener("keypress", keyPress); // on keypress, the keyPress function will run, trigerring advancePresentation
