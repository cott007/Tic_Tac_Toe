angular.
	module('ticTacApp')
	.controller('UmbrellaController', UmbrellaController);

	function UmbrellaController(){
		var self = this;
		var currentPlayer = "a";
		var scoreP1 = 0;
		var scoreP2 = 0;
		self.addMove = addMove;
		self.getWinner = getWinner;
		
		
		self.listOfBoxes = [
		{image:"img/blank.gif", player: ""}, {image:"img/blank.gif", player: ""}, {image:"img/blank.gif", player: ""}, 
		{image:"img/blank.gif", player: ""}, {image:"img/blank.gif", player: ""}, {image:"img/blank.gif", player: ""}, 
		{image:"img/blank.gif", player: ""}, {image:"img/blank.gif", player: ""}, {image:"img/blank.gif", player: ""}
		]
		

		function addMove($index){
			if (currentPlayer == "a"){
				self.listOfBoxes[$index].image = "img/UBCS.png";
				self.listOfBoxes[$index].player = "a";
				currentPlayer = "b";
			} else {
				self.listOfBoxes[$index].image = "img/raccoon_city_stars.png";
				self.listOfBoxes[$index].player = "b";
				currentPlayer = "a";
			};
		};

		function getWinner(){
			if (self.listOfBoxes[0].player === "a" && self.listOfBoxes[1].player === "a" && self.listOfBoxes[2].player === "a"){
				scoreP1 ++;
				alert("A wins!");
			} else if (self.listOfBoxes[3].player === "a" && self.listOfBoxes[4].player === "a" && self.listOfBoxes[5].player === "a") {
				scoreP1 ++;
				alert("A wins!");
			} else if (self.listOfBoxes[6].player === "a" && self.listOfBoxes[7].player === "a" && self.listOfBoxes[8].player === "a") {
				scoreP1 ++;
				alert("A wins!");
			} else if (self.listOfBoxes[0].player === "a" && self.listOfBoxes[4].player === "a" && self.listOfBoxes[8].player === "a") {
				scoreP1 ++;
				alert("A wins!");
			} else if (self.listOfBoxes[2].player === "a" && self.listOfBoxes[5].player === "a" && self.listOfBoxes[8].player === "a") {
				scoreP1 ++;
				alert("A wins!");
			} else if (self.listOfBoxes[0].player === "a" && self.listOfBoxes[3].player === "a" && self.listOfBoxes[6].player === "a") {
				scoreP1 ++;
				alert("A wins!");
			} else if (self.listOfBoxes[1].player === "a" && self.listOfBoxes[4].player === "a" && self.listOfBoxes[7].player === "a") {
				scoreP1 ++;
				alert("A wins!");
			} else if (self.listOfBoxes[2].player === "a" && self.listOfBoxes[5].player === "a" && self.listOfBoxes[8].player === "a") {
				scoreP1 ++;
				alert("A wins!");
			} else if (self.listOfBoxes[0].player === "b" && self.listOfBoxes[1].player === "b" && self.listOfBoxes[2].player === "b"){
				scoreP2 ++;
				alert("B wins!");
			} else if (self.listOfBoxes[3].player === "b" && self.listOfBoxes[4].player === "b" && self.listOfBoxes[5].player === "b") {
				scoreP2 ++;
				alert("B wins!");
			} else if (self.listOfBoxes[6].player === "b" && self.listOfBoxes[7].player === "b" && self.listOfBoxes[8].player === "b") {
				scoreP2 ++;
				alert("B wins!");
			} else if (self.listOfBoxes[0].player === "b" && self.listOfBoxes[4].player === "b" && self.listOfBoxes[8].player === "b") {
				scoreP2 ++;
				alert("B wins!");
			} else if (self.listOfBoxes[2].player === "b" && self.listOfBoxes[5].player === "b" && self.listOfBoxes[8].player === "b") {
				scoreP2 ++;
				alert("B wins!");
			} else if (self.listOfBoxes[0].player === "b" && self.listOfBoxes[3].player === "b" && self.listOfBoxes[6].player === "b") {
				scoreP2 ++;
				alert("B wins!");
			} else if (self.listOfBoxes[1].player === "b" && self.listOfBoxes[4].player === "b" && self.listOfBoxes[7].player === "b") {
				scoreP2 ++;
				alert("B wins!");
			} else if (self.listOfBoxes[2].player === "b" && self.listOfBoxes[5].player === "b" && self.listOfBoxes[8].player === "b") {
				scoreP2 ++;
				alert("B wins!");
			} else {
				null;
			}
			
		}


	}