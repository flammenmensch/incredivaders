import simpleMovementFactory from '../mixins/simpleMovementMixin';
import mix from '../mixins/mix';
import SoundGroup from '../utils/SoundGroup';

export default class PowerUps extends Phaser.Group {
  constructor(game, sprites=[]) {
    super(game);
    this.enableBody = true;
    this.classType = mix(PowerUp).with(simpleMovementFactory(200));
    this.physicsBodyType = Phaser.Physics.ARCADE;

    sprites.forEach(sprite => {
      this.createMultiple(sprite.quantity, sprite.key);
    });
  }
  addPowerup(x, y) {
    const powerUp = this.getRandomNotExists();
    if (powerUp && Math.random() > 0.75) {
      powerUp.reset(x, y);
    }
  }
  getRandomNotExists(startIndex, endIndex) {
    const list = this.getAll('exists', false, startIndex, endIndex);
    return this.game.rnd.pick(list);
  }
}

class PowerUp extends Phaser.Sprite {
  constructor() {
    super(...arguments);
    this.__sfx = new SoundGroup(this.game, ['pickup1', 'pickup2', 'pickup3'], false);
  }
  applyTo(entity) {
    this.__sfx.play();
    switch (this.key) {
      case 'powerUpShield':
        entity.health = this.game.math.min((entity.health || 0) + 25, 100);
        break;
      case 'powerUpBolt':
        entity.power = (entity.power || 0) + 25;
        break;
      case 'powerUpStar':
        entity.score = (entity.score || 0) + 100;
        break;
      default:
    }
  }
}
