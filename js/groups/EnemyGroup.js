import weaponFactory, { WeaponType } from '../weapons/weaponFactory';
import Enemy from '../sprites/Enemy';
import randomRotationMixinFactory from '../mixins/randomRotationMixin';
import randomMovementMixinFactory from '../mixins/randomMovementMixin';
import armedEntityMixinFactory from '../mixins/armedEntityMixin';
import autoFireMixinFactory from '../mixins/autoFireMixin';
import lookAtMixinFactory from '../mixins/lookAtMixin';
import mix from '../mixins/mix';

const MIN_SPACING = 300;
const MAX_SPACING = 3000;

export default class EnemyGroup extends Phaser.Group {
  constructor(game, player) {
    super(game);

    this.classType = mix(Enemy).with(
      randomMovementMixinFactory(),
      randomRotationMixinFactory(),
      lookAtMixinFactory(player),
      armedEntityMixinFactory(0, 0, weaponFactory(WeaponType.LASER, true)),
      autoFireMixinFactory()
    );
    this.enableBody = true;
    this.physicsBodyType = Phaser.Physics.ARCADE;
    this.setAll('outOfBoundsKill', true);
    this.setAll('checkWorldBounds', true);

    this.createMultiple(20);

    this.launchEnemy();
  }
  launchEnemy() {
    const enemy = this.getFirstExists(false);
    if (enemy) {
      enemy.reset(this.game.rnd.integerInRange(0, this.game.width), -20);
    }
    this.game.time.events.add(
      this.game.rnd.integerInRange(MIN_SPACING, MAX_SPACING),
      this.launchEnemy.bind(this)
    );
  }
}
