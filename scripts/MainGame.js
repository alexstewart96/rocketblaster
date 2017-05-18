BasicGame.Game = function (game) {};

//Graphical objects
var ship;
var ufos; //Group of Enemy UFOs which drop from the top of the screen
 var lives; //Group of Lives which are collected
 var bullets; //Bullets which your spaceship fires
 var fireRate = 100; // Rate at which bullets are fired
 var nextFire = 0;
 var cursors;
BasicGame.Game.prototype = {

	create: function () {
       //Specify the physics of the game to ARCADE
			 this.physics.startsystem(Phaser.Physics.ARCADE);
			 //Add the starfield and logo on screen
			 this.starfield = this.add.tileSprite(0, 0, 800, 600, 'starfield');
			 //Add the ship onto the screen, set physics and the boundaries
			 ship = this.add.sprite((this.world.width / 2), this.world.height - 50, 'ship');
			 ship.anchor.setTo(0.5,0);
			 this.Physics.enable(ship, Phaser.Physics.ARCADE);
			 ship.body.collideWorldBounds = true;
			 ufos = this.add.group();
			  this.physics.enable(ufos, Phaser.Physics.ARCADE);
			  ufos.setAll('outOfBoundsKill', true);
			  ufos.setAll('checkWorldBounds', true);
			  ufos.setAll('anchor.x', 0.5);
			  ufos.setAll('anchor.y', 0.5);

				lives = this.add.group();
				 this.physics.enable(lives, Phaser.Physics.ARCADE);
				 lives.setAll('outOfBoundsKill', true);
				 lives.setAll('checkWorldBounds', true);
				 lives.setAll('anchor.x', 0.5);
				 lives.setAll('anchor.y', 0.5);

			 bullets = this.add.group();
			 bullets.enableBody = true;
			 bullets.physicsBodyType = Phaser.Physics.ARCADE;
			 bullets.createMultiple(30, 'bullet', 0, false);
			 bullets.setAll('anchor.x', 0.5);
			 bullets.setAll('anchor.y', 0.5);
			 bullets.setAll('outOfBoundsKill', true);
			 bullets.setAll('checkWorldBounds', true);
			 this.input.keyboard.addKeyCapture([Phaser.Keyboard.LEFT, Phaser.Key

board.RIGHT, Phaser.Keyboard.SPACEBAR]);

cursors = this.input.keyboard.createCursorKeys();
	},

	update: function () {
		//execute 'createUfo','createLife','moveShip','collisionDetection' function
		this.createUfo();
 this.createLife();
this.moveShip();
	},
	moveShip: function () {
	if (cursors.left.isDown) {
	ship.body.velocity.x = -200;
}
else {
ship.body.velocity.x = 0;
}
if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
this.fireBullet();

}

},
createUfo: function () {
	//Generate random number between 0 and 20
	 var random = this.rnd.integerInRange(0, 20);
	 //if random number equals 0 then create a ufo in a random x position and random y position/velocity
	 if (random === 0) {
	 //Generating random position in the X Axis
	 var randomX = this.rnd.integerInRange(0, this.world.width - 15
	0);
	 //Creating a ufo from the the ufos group and setting physics
	 var ufo = ufos.create(randomX, -50, 'ufo');
  this.physics.enable(ufo, Phaser.Physics.ARCADE);
	 //Generating a random velocity
	 ufo.body.velocity.y = this.rnd.integerInRange(100, 600);
	 }
	 },

	 createLife: function () {
	  //Generate random number between 0 and 500
	  var random = this.rnd.integerInRange(0, 500);
	  //if random number equals 0 then create a life in a random x position
	  if (random === 0) {
	  //Generating random position in the X Axis
	  var randomX = this.rnd.integerInRange(0, this.world.width - 15
	 0);
	  //Creating a ufo from the the ufos group and setting physics
	  var life = lives.create(randomX, -50, 'life');
	  this.physics.enable(life, Phaser.Physics.ARCADE);
	  //Generating a random velocity
	  life.body.velocity.y = 150;
	  }
	  },

fireBullet: function () {
if (this.time.now > nextFire && bullets.countDead() > 0) {
nextFire = this.time.now + fireRate;
var bullet = bullets.getFirstExists(false);
bullet.reset(ship.x, ship.y);
bullet.body.velocity.y = -400;
}
}
};
