const PADDING = 32;

export default class Player extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'player');

    this.game.physics.enable(this, Phaser.Physics.ARCADE);

    this.anchor.setTo(.5, .5);
    this.body.drag.set(70);
    this.body.maxVelocity.set(200);

    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.fireButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.laser = this.__createDefaultWeapon();
  }
  update() {
    super.update();

    if (this.alive) {
      this.body.velocity.setTo(0, 0);

      if (this.cursors.left.isDown && this.x > PADDING) {
        this.body.velocity.x = -200;
      } else if (this.cursors.right.isDown && this.x < (this.game.width - PADDING)) {
        this.body.velocity.x =  200;
      }

      if (this.fireButton.isDown) {
        this.fire();
      }
    }
  }
  fire() {
    this.laser.fire();
  }
  __createDefaultWeapon() {
    const weapon = this.game.add.weapon(30, 'laser');
    weapon.bulletSpeed = 300;
    weapon.bulletAngleOffset = 90;
    weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    weapon.fireRate = 150;
    weapon.trackSprite(this, 0, -24);
    return weapon;
  }
}
