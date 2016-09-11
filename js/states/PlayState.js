import weaponFactory, { WeaponType } from '../weapons/weaponFactory';
import Player from '../sprites/Player';
import StarField from '../sprites/StarField';
import mix from '../mixins/mix';
import armedEntityMixinFactory from '../mixins/armedEntityMixin';
import manualFireMixinFactory from '../mixins/manualFireMixin';
import arrowMovementMixinFactory from '../mixins/arrowMovementMixin';
import bankMixinFactory from '../mixins/bankMixin';
import Enemies from '../groups/Enemies';
import Explosions from '../groups/Explosions';

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
    this.enemies = this.game.add.existing(new Enemies(this.game, this.player));
    this.explosions = this.game.add.existing(new Explosions(this.game));

    this.playerBullets = this.player.weapon.bullets;
    this.enemyBullets = this.enemies.children.map(enemy => enemy.weapon.bullets);
  }
  update() {
    this.game.physics.arcade.overlap(this.player, this.enemies, this.collideShips, null, this);
    this.game.physics.arcade.overlap(this.enemies, this.playerBullets, this.hitEnemy, null, this);
    this.game.physics.arcade.overlap(this.player, this.enemyBullets, this.hitPlayer, null, this);
  }
  collideShips(player, enemy) {
    this.explosions.explode(enemy);
    //this.explosions.explode(player);
    //player.kill();
    enemy.kill();
  }
  hitEnemy(enemy, bullet) {
    this.explosions.explode(enemy);
    bullet.kill();
    enemy.kill();
  }
  hitPlayer(player, bullet) {
    //player.kill();
    bullet.kill();
  }
}
