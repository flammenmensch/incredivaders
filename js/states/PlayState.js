import weaponFactory, { WeaponType } from '../weapons/weaponFactory';
import Player from '../sprites/Player';
import StarField from '../sprites/StarField';
import mix from '../mixins/mix';
import armedEntityMixinFactory from '../mixins/armedEntityMixin';
import manualFireMixinFactory from '../mixins/manualFireMixin';
import arrowMovementMixinFactory from '../mixins/arrowMovementMixin';
import EnemyGroup from '../groups/EnemyGroup';

export default class PlayState extends Phaser.State {
  create() {
    const PlayerClass = mix(Player).with(
      armedEntityMixinFactory(0, 0, weaponFactory(WeaponType.LASER, false)),
      arrowMovementMixinFactory(),
      manualFireMixinFactory()
    );

    this.game.add.existing(new StarField(this.game));
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    const player = this.game.add.existing(new PlayerClass(this.game, this.game.width * .5, this.game.height - 44));

    this.game.add.existing(new EnemyGroup(this.game, player));
  }
}
