angular.
	module('ticTacApp')
	.controller('UmbrellaController', UmbrellaController);

	UmbrellaController.$inject = ['$firebaseObject'];

	function UmbrellaController($firebaseObject){
		var self = this;


		self.fire = syncGameWithFirebase(); 
		
		self.playerCount = 0;

		self.page;
		self.nextPage = nextPage;
		
		self.addMove = addMove;
		self.getWinner = getWinner;
		self.newGame = newGame;
		
		self.playerOneName;
		self.addPlayer1Name = addPlayer1Name;
		self.playerTwoName;
		self.addPlayer2Name = addPlayer2Name;

		
		//Syncing with Firebase start
		function syncGameWithFirebase(){
			var ref = new Firebase('https://ubcs-vs-stars.firebaseio.com/');
			var gameObject = $firebaseObject(ref);

			//initialize values in the gameObject once its loaded
			gameObject.$loaded(function(){
				gameObject.gameOver = "no";
				gameObject.currentPlayer = "a";
				
				gameObject.player1Chooses = false;

				gameObject.slots = [];
				for (var i = 0; i < 9; i++) {
						gameObject.slots.push({image:"img/blank.gif", player: ""});
					};
			
				
				gameObject.$save();
			});

			return gameObject;
		} 
		//Syncing with Firebase start end

		//Intro page to Gameboard Page. start
		function nextPage(){
			self.page = true;
		}
		//Intro page to Gameboard. Page end

		//Adding the Player Move. Called every mousedown. start
		function addMove($index){
			if (self.fire.gameOver == "yes") {
				alert("Please start a new game!");
			} else {
				if (self.fire.slots[$index].image == "img/UBCS.png" || self.fire.slots[$index].image == "img/raccoon_city_stars.png"){
					alert("Invalid Move");
				} else {
					if (self.fire.currentPlayer == "a" && self.playerCount == 0){
						self.fire.slots[$index].image = "img/UBCS.png";
						self.fire.slots[$index].player = "a";
						self.fire.currentPlayer = "b";
						self.fire.moves ++;
						self.fire.$save();
					} else if (self.fire.currentPlayer == "b" && self.playerCount == 1){
						self.fire.slots[$index].image = "img/raccoon_city_stars.png";
						self.fire.slots[$index].player = "b";
						self.fire.currentPlayer = "a";
						self.fire.moves ++;
						self.fire.$save();
					};
				};
			};
		};
		//Adding the Player Move. Called every mousedown. end

		//Getting the Winner. Called every mouseup. start
		function getWinner(){
			
			if( (self.fire.slots[0].player === "a" && self.fire.slots[1].player === "a" && self.fire.slots[2].player === "a")||
				(self.fire.slots[3].player === "a" && self.fire.slots[4].player === "a" && self.fire.slots[5].player === "a")||
				(self.fire.slots[6].player === "a" && self.fire.slots[7].player === "a" && self.fire.slots[8].player === "a")||
				(self.fire.slots[0].player === "a" && self.fire.slots[3].player === "a" && self.fire.slots[6].player === "a")||
				(self.fire.slots[1].player === "a" && self.fire.slots[4].player === "a" && self.fire.slots[7].player === "a")||
				(self.fire.slots[2].player === "a" && self.fire.slots[5].player === "a" && self.fire.slots[8].player === "a")||
				(self.fire.slots[0].player === "a" && self.fire.slots[4].player === "a" && self.fire.slots[8].player === "a")||
				(self.fire.slots[2].player === "a" && self.fire.slots[4].player === "a" && self.fire.slots[6].player === "a")){
					self.fire.scoreP1 ++;
					alert(self.fire.nameP1 + " wins!");
					self.fire.currentPlayer = "a";
					self.fire.gameOver = "yes";
					self.fire.$save();
			} else if((self.fire.slots[0].player === "b" && self.fire.slots[1].player === "b" && self.fire.slots[2].player === "b")||
				(self.fire.slots[3].player === "b" && self.fire.slots[4].player === "b" && self.fire.slots[5].player === "b")||
				(self.fire.slots[6].player === "b" && self.fire.slots[7].player === "b" && self.fire.slots[8].player === "b")||
				(self.fire.slots[0].player === "b" && self.fire.slots[3].player === "b" && self.fire.slots[6].player === "b")||
				(self.fire.slots[1].player === "b" && self.fire.slots[4].player === "b" && self.fire.slots[7].player === "b")||
				(self.fire.slots[2].player === "b" && self.fire.slots[5].player === "b" && self.fire.slots[8].player === "b")||
				(self.fire.slots[0].player === "b" && self.fire.slots[4].player === "b" && self.fire.slots[8].player === "b")||
				(self.fire.slots[2].player === "b" && self.fire.slots[4].player === "b" && self.fire.slots[6].player === "b")) {
					self.fire.scoreP2 ++;
					alert(self.fire.nameP2 + " wins!");
					self.fire.currentPlayer = "a";
					self.fire.gameOver = "yes";
					self.fire.$save();
			} else {
				if (self.fire.moves == 9) {
					alert("This has ended in a Tie!");
					self.fire.gameOver = "yes";
				} else {
					null;
				};
			};			
		};
		//Getting the Winner. Called every mouseup. end
		

		//Resets the game when a player has won or when the game has tied. start
		function newGame(){
			if (self.fire.gameOver == "yes"){
				self.fire.gameOver = "no";
				self.fire.currentPlayer = "a"
				self.fire.moves = 0;	
			
				for (i = 0; i < 9; i++){
					self.fire.slots[i].image = "img/blank.gif";
					self.fire.slots[i].player = "";
				}
				self.fire.$save();
			} else {
				null;
			}; 
		};
		//Resets the game when a player has won or when the game has tied. end

		//Adding player names start
		function addPlayer1Name(){
			self.fire.nameP1 = self.playerOneName;
			self.fire.scoreP1 = 0;
			self.fire.moves = 0;
			self.fire.player1Chooses = true;
			newGame();
			self.fire.$save();
		};
		
		function addPlayer2Name(){
			self.fire.nameP2 = self.playerTwoName;
			self.fire.scoreP2 = 0;
			self.fire.moves = 0;
			self.playerCount = 1;
			newGame();
			self.fire.$save();
		};
		//Adding player names end
	};









