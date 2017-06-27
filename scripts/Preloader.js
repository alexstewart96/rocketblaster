var BasicGame = {};
//vsriable basicgame declared
BasicGame.Preloader = function (game) {
	this.ready = false;
};

BasicGame.Preloader.prototype = {

	preload: function () {
      //Displays a loading screen message while the assets are koaded into memory
			this.preloaderText = this.add.text(this.world.centerX, this.world.centerY, 'Loading...',
		{
			fontSize: '96px',
			fill: '#fff',
			align: 'center'
		});
		this.preloaderText.anchor.setTo(0.5,0.5);

	//preload the images, sprites and audio assets into memory
	this.load.image('logo', 'assets/logo.png');
	this.load.image('starfield', 'assets/starfield.png');
	this.load.image('startButton', 'assets/startButton.png');
	this.load.image('ship', 'assets/ship.png');
	this.load.image('bullet', 'assets/bullet.png');
	this.load.image('ufo', 'assets/ufo.png');
  this.load.image('life', 'assets/lives.png');
  this.load.image('bullet', 'assets/bullet.png');
  this.load.spritesheet('kaboom', 'assets/explode.png', 128, 128, 16);
this.load.spritesheet('lifeAnimation', 'assets/lifeAnimation.png',100, 100, 4);
		//audio for sound effects and maingame music
 this.load.audio('music', ['assets/music.m4a', 'assets/music.mp3']);
 this.load.audio('bullet', ['assets/SoundEffectLaser.mp3']);
 this.load.audio('explosion', ['assets/explosion.mp3']);
	var str = "game manual/guide";
var result = str.link("https://drive.google.com/file/d/0B6sG2hs1pWJiREJtMUJKYUt3RGM/view");	
	},

	create: function () {

	},

	update: function () {
		//Wait for audio to decode before MainMenu
		if (this.cache.isSoundDecoded('music') && this.ready == false) {
			this.ready = true;
			this.game.state.start('MainMenu');
		}
	}

};
