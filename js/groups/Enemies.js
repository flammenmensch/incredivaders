import weaponFactory, { WeaponType } from '../weapons/weaponFactory';
import Enemy from '../sprites/Enemy';
import randomRotationMixinFactory from '../mixins/randomRotationMixin';
import randomMovementMixinFactory from '../mixins/randomMovementMixin';
import armedEntityMixinFactory from '../mixins/armedEntityMixin';
import autoFireMixinFactory from '../mixins/autoFireMixin';
import bankMixinFactory from '../mixins/bankMixin';
import mix from '../mixins/mix';

const MIN_SPACING = 300;
const MAX_SPACING = 3000;

export default class Enemies extends Phaser.Group {
  constructor(game, player) {
    super(game);

    this.classType = mix(Enemy).with(
      randomMovementMixinFactory(),
      randomRotationMixinFactory(),
      bankMixinFactory(),
      armedEntityMixinFactory(0, 0, weaponFactory(WeaponType.LASER, true)),
      autoFireMixinFactory()
    );
    this.enableBody = true;
    this.physicsBodyType = Phaser.Physics.ARCADE;
    this.createMultiple(5);

    this.launchEnemy();
  }
  launchEnemy() {
    const enemy = this.getFirstExists(false);
    if (enemy) {
      enemy.reset(this.game.rnd.integerInRange(0, this.game.width), -10);
    }
    this.game.time.events.add(
      this.game.rnd.integerInRange(MIN_SPACING, MAX_SPACING),
      this.launchEnemy.bind(this)
    );
  }
}
