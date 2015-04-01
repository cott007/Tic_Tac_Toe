angular.
	module('ticTacApp')
	.controller('UmbrellaController', UmbrellaController);

	UmbrellaController.$inject = ['$firebaseObject'];

	function UmbrellaController($firebaseObject){
		var self = this;
		var currentPlayer = "a";
		var scoreP1 = 0;
		var scoreP2 = 0;
		var gameOver = "no";
		var moves = 0;
		var name = "Curtis"
		var name2 = "Nancy"

		self.boxes = syncGameWithFirebase();
		self.addMove = addMove;
		self.getWinner = getWinner;
		self.scoreP1 = scoreP1;
		self.scoreP2 = scoreP2;
		self.newGame = newGame;
		self.name = name;
		self.name2 = name2;

		function syncGameWithFirebase(){
			var ref = new Firebase('https://ubcs-vs-stars.firebaseio.com/');
			var gameObject = $firebaseObject(ref);

			//initialize values in the gameObject once its loaded
			gameObject.$loaded(function(){
				gameObject.gameOver = "no";
				gameObject.currentPlayer = "a";
				gameObject.scoreP1 = 0;
				gameObject.scoreP2 = 0;
				gameObject.listOfBoxes = [];

				for (var i = 0; i < 9; i++) {
					gameObject.listOfBoxes.push({image:"img/blank.gif", player: ""});
				}

				gameObject.$save();
			});

			return gameObject;
		} 


		function addMove($index){
			if (gameOver == "yes") {
				alert("Please start a new game!");
			} else {
				if (self.boxes.listOfBoxes[$index].image == "img/UBCS.png" || self.boxes.listOfBoxes[$index].image == "img/raccoon_city_stars.png"){
					alert("Invalid Move");
				} else {
					if (self.boxes.currentPlayer == "a"){
						self.boxes.listOfBoxes[$index].image = "img/UBCS.png";
						self.boxes.listOfBoxes[$index].player = "a";
						self.boxes.currentPlayer = "b";
						moves ++;
						self.boxes.$save();
					} else {
						self.boxes.listOfBoxes[$index].image = "img/raccoon_city_stars.png";
						self.boxes.listOfBoxes[$index].player = "b";
						self.boxes.currentPlayer = "a";
						moves ++;
						self.boxes.$save();
					};
				};
			};
		};


		function getWinner(){
			
			if((self.boxes.listOfBoxes[0].player === "a" && self.boxes.listOfBoxes[1].player === "a" && self.boxes.listOfBoxes[2].player === "a")||
				(self.boxes.listOfBoxes[3].player === "a" && self.boxes.listOfBoxes[4].player === "a" && self.boxes.listOfBoxes[5].player === "a")||
				(self.boxes.listOfBoxes[6].player === "a" && self.boxes.listOfBoxes[7].player === "a" && self.boxes.listOfBoxes[8].player === "a")||
				(self.boxes.listOfBoxes[0].player === "a" && self.boxes.listOfBoxes[3].player === "a" && self.boxes.listOfBoxes[6].player === "a")||
				(self.boxes.listOfBoxes[1].player === "a" && self.boxes.listOfBoxes[4].player === "a" && self.boxes.listOfBoxes[7].player === "a")||
				(self.boxes.listOfBoxes[2].player === "a" && self.boxes.listOfBoxes[5].player === "a" && self.boxes.listOfBoxes[8].player === "a")||
				(self.boxes.listOfBoxes[0].player === "a" && self.boxes.listOfBoxes[4].player === "a" && self.boxes.listOfBoxes[8].player === "a")||
				(self.boxes.listOfBoxes[2].player === "a" && self.boxes.listOfBoxes[4].player === "a" && self.boxes.listOfBoxes[6].player === "a")) {
					self.boxes.scoreP1 ++;
					alert(self.name + " wins!");
					self.boxes.currentPlayer = "a";
					self.boxes.gameOver = "yes";
					self.boxes.$save();
			} else if((self.boxes.listOfBoxes[0].player === "b" && self.boxes.listOfBoxes[1].player === "b" && self.boxes.listOfBoxes[2].player === "b")||
				(self.boxes.listOfBoxes[3].player === "b" && self.boxes.listOfBoxes[4].player === "b" && self.boxes.listOfBoxes[5].player === "b")||
				(self.boxes.listOfBoxes[6].player === "b" && self.boxes.listOfBoxes[7].player === "b" && self.boxes.listOfBoxes[8].player === "b")||
				(self.boxes.listOfBoxes[0].player === "b" && self.boxes.listOfBoxes[3].player === "b" && self.boxes.listOfBoxes[6].player === "b")||
				(self.boxes.listOfBoxes[1].player === "b" && self.boxes.listOfBoxes[4].player === "b" && self.boxes.listOfBoxes[7].player === "b")||
				(self.boxes.listOfBoxes[2].player === "b" && self.boxes.listOfBoxes[5].player === "b" && self.boxes.listOfBoxes[8].player === "b")||
				(self.boxes.listOfBoxes[0].player === "b" && self.boxes.listOfBoxes[4].player === "b" && self.boxes.listOfBoxes[8].player === "b")||
				(self.boxes.listOfBoxes[2].player === "b" && self.boxes.listOfBoxes[4].player === "b" && self.boxes.listOfBoxes[6].player === "b")) {
					self.boxes.scoreP2 ++;
					alert(self.name2 + " wins!");
					self.boxes.currentPlayer = "a";
					self.boxes.gameOver = "yes";
					self.boxes.$save();
			} else {
				if (moves == 9) {
					alert("This has ended in a Tie!");
					self.boxes.gameOver = "yes";
				} else {
					null;
				};
			};			
		};

		function newGame(){
			if (self.boxes.gameOver == "yes"){
				self.boxes.gameOver = "no";
				self.boxes.currentPlayer = "a"
				moves = 0;	
			
				for (i = 0; i < 9; i++){
					self.boxes.listOfBoxes[i].image = "img/blank.gif";
					self.boxes.listOfBoxes[i].player = "";
				}
				self.boxes.$save();

			} else {
				null;
			}; 
		};
	};









