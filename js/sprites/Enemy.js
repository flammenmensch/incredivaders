

const OFFSET = 5;
const MoveDirection = {
  LEFT: 0,
  RIGHT: 1
};

export default class Enemy extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'enemy');

    this.position = { x, y };
    this.direction = Math.round(Math.random());

    this.game.physics.arcade.enable(this);
    this.anchor.setTo(.5, .5);
  }
  update() {
    super.update();

    /*if (this.direction === MoveDirection.LEFT) {
      if (this.__hasReachedBorder()) {
        this.direction = MoveDirection.RIGHT;
      } else {
        this.body.velocity.x = 10;
      }
    } else {
      if (this.__hasReachedBorder()) {
        this.direction = MoveDirection.LEFT;
      } else {
        this.body.velocity.x = -10;
      }
    }*/

    //this.y += 1;
  }
  __hasReachedBorder() {
    return (Math.abs(this.position.x - this.x) >= OFFSET);
  }
}
