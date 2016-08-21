import weaponFactory, { WeaponType } from '../weapons/weaponFactory';
import Player from '../sprites/Player';
import Enemy from '../sprites/Enemy';
import ArmedEntityMixin from '../mixins/ArmedEntityMixin';
import AutoFireMixin from '../mixins/AutoFireMixin';
import ManualFireMixin from '../mixins/ManualFireMixin';
import LookAtMixin from '../mixins/LookAtMixin';
import ArrowMovementMixin from '../mixins/ArrowMovementMixin';

export default class PlayState extends Phaser.State {
  create() {
    const PlayerClass = AutoFireMixin(ArrowMovementMixin(
      ArmedEntityMixin(
        Player, { x: 0, y: 0 }, weaponFactory(WeaponType.LASER, false)
      )
    ));

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.add.sprite(0, 0, 'space');

    const player = this.game.add.existing(new PlayerClass(this.game, this.game.width * .5, this.game.height - 144));

    const EnemyClass = LookAtMixin(AutoFireMixin(
      ArmedEntityMixin(
        Enemy, { x: 0, y: 0 }, weaponFactory(WeaponType.LASER, true), player
      )
    ), player);
    this.game.add.existing(new EnemyClass(this.game, this.game.width * .5, 44));
  }
}
