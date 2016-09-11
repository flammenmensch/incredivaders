import weaponFactory, { WeaponType } from '../weapons/weaponFactory';
import Player from '../sprites/Player';
import StarField from '../sprites/StarField';
import Enemies from '../groups/Enemies';
import Explosions from '../groups/Explosions';
import Enemy from '../sprites/Enemy';

import mix from '../mixins/mix';
import mixins from '../mixins';

import randomLaunchStrategy from '../strategies/randomLaunchStrategy';
import queueLaunchStrategy from '../strategies/queueLaunchStrategy';

const createBlackEnemy = () => mix(Enemy).with(
  mixins.waveMovementFactory(),
  mixins.randomRotationMixinFactory(),
  mixins.bankMixinFactory(180),
  mixins.armedEntityMixinFactory(0, 0, weaponFactory(WeaponType.LASER, true)),
  mixins.autoFireMixinFactory()
);

const createRedEnemy = (target) => mix(Enemy).with(
  mixins.randomMovementMixinFactory(),
  mixins.randomRotationMixinFactory(),
  mixins.bankMixinFactory(),
  mixins.armedEntityMixinFactory(0, 0, weaponFactory(WeaponType.ROCKET, true, target)),
  mixins.autoFireMixinFactory()
);

const createBlueEnemy = () => mix(Enemy).with(
  mixins.randomMovementMixinFactory(400),
  mixins.randomRotationMixinFactory(),
  mixins.bankMixinFactory(400),
  mixins.accelerateAfterFactory(100, 75)
);

export default class PlayState extends Phaser.State {
  create() {
    const PlayerClass = mix(Player).with(
      mixins.armedEntityMixinFactory(0, 0, weaponFactory(WeaponType.LASER, false)),
      mixins.bankMixinFactory(),
      mixins.arrowMovementMixinFactory(),
      mixins.manualFireMixinFactory()
    );

    this.game.add.existing(new StarField(this.game));
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.player = this.game.add.existing(new PlayerClass(this.game, this.game.width * .5, this.game.height - 44));
    this.enemies = [
      this.game.add.existing(new Enemies(this.game, createBlackEnemy(), 'enemyBlack', queueLaunchStrategy(300, 1500, 50), 10)),
      this.game.add.existing(new Enemies(this.game, createRedEnemy(this.player), 'enemyRed', randomLaunchStrategy(3000, 6000), 5)),
      this.game.add.existing(new Enemies(this.game, createBlueEnemy(), 'enemyBlue', randomLaunchStrategy(5000, 7500), 5))
    ];
    this.explosions = this.game.add.existing(new Explosions(this.game));

    this.playerBullets = this.player.weapon.bullets;
    this.enemyBullets = this.enemies
      .reduce((acc, group) => {
        return acc.concat(group.children);
      }, [])
      .filter(enemy => enemy.weapon !== undefined) // Armed enemies only
      .map(enemy => enemy.weapon.bullets);

    this.health = this.game.add.text(
      this.game.world.width - 150,
      10,
      `Health: ${this.player.health}%`,
      { font: '20px Arial', fill: '#fff' }
    );
  }
  update() {
    this.game.physics.arcade.overlap(this.player, this.enemies, this.collideShips, null, this);
    this.game.physics.arcade.overlap(this.enemies, this.playerBullets, this.hitEnemy, null, this);
    this.game.physics.arcade.overlap(this.player, this.enemyBullets, this.hitPlayer, null, this);
    this.health.text = `Health: ${this.player.health}%`;

    //  Game over?
    if (!this.player.alive) {
      const tapRestart = this.game.input.onTap.addOnce(() => {
        tapRestart.detach();
        this.restart();
      });
    }
  }
  collideShips(player, enemy) {
    this.explosions.explode(enemy);
    this.explosions.explode(player);
    player.damage(100);
    player.kill();
    enemy.kill();
  }
  hitEnemy(enemy, bullet) {
    this.explosions.explode(enemy);
    bullet.kill();
    enemy.kill();
  }
  hitPlayer(player, bullet) {
    bullet.kill();
    player.damage(20);
    if (player.health <= 0) {
      this.explosions.explode(player);
      player.kill();
    }
  }
  restart() {
    this.enemies.forEach(group => group.callAll('kill'));
    this.player.revive();
    this.player.health = 100;
  }
}
