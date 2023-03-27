/* Big image display */
function getImage(choice) {
	if (choice == 1) {
		document.getElementById("big-image").src = "1.png";
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Avanh G50</h1><br>The new Avanh G50 rear, 160mm front—is longer and slacker than its previous generation, but it’s also a bit taller and steeper than much of its competition. That gives this bike impressive balance. Stable at speed, but also agile and lively, and it offers top-of-its-class climbing performance too. It’s gravity friendly, but not gravity focused; a big bike that climbs really well, but still descends like a big bike. This is the bike for a rider who loves the climb as much as the shred.";

	} else if (choice == 2) {
		document.getElementById("big-image").src = "2.png";
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>BMX AR</h1><br> The updated and redesigned Beargrease is a stable, dependable snow-riding machine that comes with rack, pannier, and bag mounts for bikepacking and long-haul racing. The Beargrease is equipped with 4-inch tires but can handle 4.6-, 4.8-, and 5-inch models depending on which fork you choose. Internal sleeved cable routing keeps cables away from the weather and makes maintenance easier. And dropper-post routing lets you set this bike up for technical trails. The drivetrain is 1x specific, which will be familiar to many mountain bikers.";

	} else if (choice == 3) {
		document.getElementById("big-image").src = "3.png";
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Tripo W1</h1><br> TheTripo W1 is an exciting, responsive, and springy ride that, for the price, is one of the best women’s mountain bikes we’ve tried. It has 120mm of good suspension and feels stable and predictable in the rough stuff. The wide, super-knobby, 2.6-inch wide Maxxis Forekaster tires help here. The aluminum frame has a RockShox Deluxe R shock, and the 130mm-travel RockShox Sektor RL fork gives you a bit more give and bounce in the front to pop up and over bigger rocks and logs. You also get a a nice SRAM NX 1x11 drivetrain, dropper post, and SRAM Level T hydraulic brakes—capable parts that help you build skills or get rowdy.";
	} else if (choice == 4) {
		document.getElementById("big-image").src = "4.png";
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Bolt E</h1><br>Full suspension bikes are great, but they’re heavier, more expensive, and more maintenance intensive than a bike without rear suspension. Salsa’s Timberjack is a trail bike for riders who prefer the simplicity and durability of a hardtail. With a 130mm fork, dropper post, and 67-degree head angle, the Timberjack is stable and capable,—this bike is ready to get rowdy. It’s also very versatile, with swinger dropouts (420–437mm chainstay length) that let you tune the Timberjack’s handling, or set it up as a singlespeed. It also has clearance plus-size tires up to 3 inches wide (up to 2.6 in 29er) if you prefer traction and float. And if you want to get away, it has mounts for three bottles and a rear rack. This is the bike for the rider who wants trail manners with the low fuss ownership of a hardtail.";
	} else if (choice == 5) {
		document.getElementById("big-image").src = "5.png";
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Ranger R55</h1><br>The Ranger R55 fills the space between a pure XC race bike, and a trail bike. It is light (our sample weighed 24.5 pounds), shorter travel (115mm rear and 120mm front), and quick handling; Spot’s Living Link suspension offers efficient pedaling performance and a super-lively feel. It’s a super zippy bike that’s a bit more planted on the downhill than a pure race bike. It’s for the rider who wants the efficiency of an XC bike with a bit more capability.";
	} else {

	}
}


/* destinations */
function CheckDestination(form) {
	var selected = destinations[destinations.selectedIndex].value;
	if (selected == "option1") {
		getImage(1);
	} else if (selected == "option2") {
		getImage(2);
	} else if (selected == "option3") {
		getImage(3);
	} else if (selected == "option4") {
		getImage(4);
	} else if (selected == "option5") {
		getImage(5);
	} else {

	}
}


function bgcolor(radio) {
	var selected = radio.value;

	if (selected == "color1") {
		document.body.style.backgroundColor = "#74e89b";
	} else if (selected == "color2") {
		document.body.style.backgroundColor = "#39bbdb";
	} else if (selected == "color3") {
		document.body.style.backgroundColor = "#ede379";
	} else {

	}

}


function changeColor(colour) {
	var elements = document.getElementsByClassName('container');
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.color = colour;
	}
}


function fontcolor(form) {
	var selected = fontColor[fontColor.selectedIndex].value;

	if (selected == "color1") {
		changeColor("#ab5454");
	} else if (selected == "color2") {
		changeColor("#3865e0");
	} else if (selected == "color3") {
		changeColor("#77188c");
	} else if (selected == "color4") {
		changeColor("#ff0000");
	} else if (selected == "color5") {
		changeColor("#18758c");
	} else {

	}
}


function reset1() {
	var elements = document.getElementsByClassName('container');
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.color = "black";
	}
	document.body.style.backgroundColor = "white";
	document.getElementById("gallery-display").style.display = "none";
}