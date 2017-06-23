var BasicGame {};

BasicGame.MainMenu = function (game) { };

var startButton;
var starfield;
var logo;

BasicGame.MainMenu.prototype = {

	create: function () {
//we've already loaded the assets so we'll move straight into the MainMenu
//here all we are doing is playing music adding a picture and a button
//I willmodify the MainMenu to suit your game

//output sky ship score lives total and start time to the screen
//the scrolling starfield background
starfield = this.add.tileSprite(0, 0, 800, 600, 'starfield');
logo = this.add.sprite((this.world.width / 2), (this.world.height / 2) - 150, 'logo');
logo.anchor.setTo(0.5,0.5);
startButton = this.add.button((this.world.width / 2), (this.world.height / 2) + 50, 'startButton', this.startGame);
startButton.anchor.setTo(0.5,0.5);
	},

	update: function () {
		//	Do some nice funky main menu effect here
	},

	startGame: function () {
		//and start the actual game
		this.game.state.start('Game');
     }

};
