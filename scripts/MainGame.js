BasicGame.Game = function (game) {};

//Graphical objects
var ship;

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
fireBullet: function () {

if (this.time.now > nextFire && bullets.countDead() > 0) {

nextFire = this.time.now + fireRate;

var bullet = bullets.getFirstExists(false);

bullet.reset(ship.x, ship.y);

bullet.body.velocity.y = -400;

}

}
};
