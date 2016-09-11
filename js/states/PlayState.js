import weaponFactory, { WeaponType } from '../weapons/weaponFactory';
import Player from '../sprites/Player';
import StarField from '../sprites/StarField';
import mix from '../mixins/mix';
import armedEntityMixinFactory from '../mixins/armedEntityMixin';
import manualFireMixinFactory from '../mixins/manualFireMixin';
import arrowMovementMixinFactory from '../mixins/arrowMovementMixin';
import bankMixinFactory from '../mixins/bankMixin';
import EnemyGroup from '../groups/EnemyGroup';

export default class PlayState extends Phaser.State {
  create() {
    const PlayerClass = mix(Player).with(
      armedEntityMixinFactory(0, 0, weaponFactory(WeaponType.LASER, false)),
      bankMixinFactory(),
      arrowMovementMixinFactory(),
      manualFireMixinFactory()
    );

    this.game.add.existing(new StarField(this.game));
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.player = this.game.add.existing(new PlayerClass(this.game, this.game.width * .5, this.game.height - 44));
    this.enemies = this.game.add.existing(new EnemyGroup(this.game, this.player));

    this.playerBullets = this.player.weapon.bullets;
    this.enemyBullets = this.enemies.children.map(enemy => enemy.weapon.bullets);
  }
  update() {
    this.game.physics.arcade.overlap(this.player, this.enemies, this.collideShips, null, this);
    this.game.physics.arcade.overlap(this.enemies, this.playerBullets, this.hitEnemy, null, this);
    this.game.physics.arcade.overlap(this.player, this.enemyBullets, this.hitPlayer, null, this);
  }
  collideShips(player, enemy) {
    // TODO Add explosion
    enemy.kill();
  }
  hitEnemy(enemy, bullet) {
    bullet.kill();
    enemy.kill();
  }
  hitPlayer(player, bullet) {
    player.kill();
    bullet.kill();
  }
}
