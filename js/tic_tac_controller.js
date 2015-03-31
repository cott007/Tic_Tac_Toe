angular.
	module('ticTacApp')
	.controller('UmbrellaController', UmbrellaController);

	function UmbrellaController(){
		var self = this;
		var currentPlayer = "a";
		var scoreP1 = 0;
		var scoreP2 = 0;
		var gameOver = "no";
		var moves = 0;
		
		self.addMove = addMove;
		self.getWinner = getWinner;
		self.scoreP1 = scoreP1;
		self.scoreP2 = scoreP2;
		self.newGame = newGame;
		
		self.listOfBoxes = [
		{image:"img/blank.gif", player: ""}, {image:"img/blank.gif", player: ""}, {image:"img/blank.gif", player: ""}, 
		{image:"img/blank.gif", player: ""}, {image:"img/blank.gif", player: ""}, {image:"img/blank.gif", player: ""}, 
		{image:"img/blank.gif", player: ""}, {image:"img/blank.gif", player: ""}, {image:"img/blank.gif", player: ""}
		];
		

		function addMove($index){
			if (gameOver == "yes") {
				alert("Please start a new game!");
			} else {
				if (self.listOfBoxes[$index].image == "img/UBCS.png" || self.listOfBoxes[$index].image == "img/raccoon_city_stars.png"){
					alert("Invalid Move");
				} else {
					if (currentPlayer == "a"){
						self.listOfBoxes[$index].image = "img/UBCS.png";
						self.listOfBoxes[$index].player = "a";
						currentPlayer = "b";
						moves ++;
					} else {
						self.listOfBoxes[$index].image = "img/raccoon_city_stars.png";
						self.listOfBoxes[$index].player = "b";
						currentPlayer = "a";
						moves ++;
					};
				};
			};
		};

		function getWinner(){
			if (self.listOfBoxes[0].player === "a" && self.listOfBoxes[1].player === "a" && self.listOfBoxes[2].player === "a"){
				self.scoreP1 ++;
				alert("A wins!");
				currentPlayer = "a";
				gameOver = "yes";
			} else if (self.listOfBoxes[3].player === "a" && self.listOfBoxes[4].player === "a" && self.listOfBoxes[5].player === "a") {
				self.scoreP1 ++;
				alert("A wins!");
				currentPlayer = "a";
				gameOver = "yes";
			} else if (self.listOfBoxes[6].player === "a" && self.listOfBoxes[7].player === "a" && self.listOfBoxes[8].player === "a") {
				self.scoreP1 ++;
				alert("A wins!");
				currentPlayer = "a";
				gameOver = "yes";
			} else if (self.listOfBoxes[0].player === "a" && self.listOfBoxes[4].player === "a" && self.listOfBoxes[8].player === "a") {
				self.scoreP1 ++;
				alert("A wins!");
				currentPlayer = "a";
				gameOver = "yes";
			} else if (self.listOfBoxes[2].player === "a" && self.listOfBoxes[5].player === "a" && self.listOfBoxes[8].player === "a") {
				self.scoreP1 ++;
				alert("A wins!");
				currentPlayer = "a";
				gameOver = "yes";
			} else if (self.listOfBoxes[0].player === "a" && self.listOfBoxes[3].player === "a" && self.listOfBoxes[6].player === "a") {
				self.scoreP1 ++;
				alert("A wins!");
				currentPlayer = "a";
				gameOver = "yes";
			} else if (self.listOfBoxes[1].player === "a" && self.listOfBoxes[4].player === "a" && self.listOfBoxes[7].player === "a") {
				self.scoreP1 ++;
				alert("A wins!");
				currentPlayer = "a";
				gameOver = "yes";
			} else if (self.listOfBoxes[2].player === "a" && self.listOfBoxes[5].player === "a" && self.listOfBoxes[8].player === "a") {
				self.scoreP1 ++;
				alert("A wins!");
				currentPlayer = "a";
				gameOver = "yes";
			} else if (self.listOfBoxes[0].player === "b" && self.listOfBoxes[1].player === "b" && self.listOfBoxes[2].player === "b"){
				self.scoreP2 ++;
				alert("B wins!");
				currentPlayer = "a";
				gameOver = "yes";
			} else if (self.listOfBoxes[3].player === "b" && self.listOfBoxes[4].player === "b" && self.listOfBoxes[5].player === "b") {
				self.scoreP2 ++;
				alert("B wins!");
				currentPlayer = "a";
				gameOver = "yes";
			} else if (self.listOfBoxes[6].player === "b" && self.listOfBoxes[7].player === "b" && self.listOfBoxes[8].player === "b") {
				self.scoreP2 ++;
				alert("B wins!");
				currentPlayer = "a";
				gameOver = "yes";
			} else if (self.listOfBoxes[0].player === "b" && self.listOfBoxes[4].player === "b" && self.listOfBoxes[8].player === "b") {
				self.scoreP2 ++;
				alert("B wins!");
				currentPlayer = "a";
				gameOver = "yes";
			} else if (self.listOfBoxes[2].player === "b" && self.listOfBoxes[5].player === "b" && self.listOfBoxes[8].player === "b") {
				self.scoreP2 ++;
				alert("B wins!");
				currentPlayer = "a";
				gameOver = "yes";
			} else if (self.listOfBoxes[0].player === "b" && self.listOfBoxes[3].player === "b" && self.listOfBoxes[6].player === "b") {
				self.scoreP2 ++;
				alert("B wins!");
				currentPlayer = "a";
				gameOver = "yes";
			} else if (self.listOfBoxes[1].player === "b" && self.listOfBoxes[4].player === "b" && self.listOfBoxes[7].player === "b") {
				self.scoreP2 ++;
				alert("B wins!");
				currentPlayer = "a";
				gameOver = "yes";
			} else if (self.listOfBoxes[2].player === "b" && self.listOfBoxes[5].player === "b" && self.listOfBoxes[8].player === "b") {
				self.scoreP2 ++;
				alert("B wins!");
				currentPlayer = "a";
				gameOver = "yes";
			} else {
				if (moves == 9) {
					alert("This has ended in a Tie!");
					gameOver = "yes";
				} else {
					null;
				};
			};			
		};

		function newGame(){
			if (gameOver == "yes"){
				self.listOfBoxes = [
					{image:"img/blank.gif", player: ""}, {image:"img/blank.gif", player: ""}, {image:"img/blank.gif", player: ""}, 
					{image:"img/blank.gif", player: ""}, {image:"img/blank.gif", player: ""}, {image:"img/blank.gif", player: ""}, 
					{image:"img/blank.gif", player: ""}, {image:"img/blank.gif", player: ""}, {image:"img/blank.gif", player: ""}
					];
				gameOver = "no";
				currentPlayer = "a"
				moves = 0;	
			} else {
				null;
			}; 
		};


	}