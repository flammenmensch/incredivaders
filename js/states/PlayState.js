import weaponFactory, { WeaponType } from '../weapons/weaponFactory';
import Player from '../sprites/Player';
import StarField from '../sprites/StarField';
import Enemies from '../groups/Enemies';
import PowerUps from '../groups/PowerUps';
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

const createUfo = (target) => mix(Enemy).with(
  mixins.randomMovementMixinFactory(),
  mixins.simpleRotationFactory()
);

const createMeteor = (rotation, speed) => mix(Enemy).with(
  mixins.simpleRotationFactory(rotation, Math.random() >= 0.5),
  mixins.simpleMovementFactory(speed)
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
      this.game.add.existing(new Enemies(this.game, createBlackEnemy(), 'enemyBlack', queueLaunchStrategy(750, 1500, 50), 10)),
      this.game.add.existing(new Enemies(this.game, createRedEnemy(this.player), 'enemyRed', randomLaunchStrategy(3000, 6000), 5)),
      this.game.add.existing(new Enemies(this.game, createBlueEnemy(), 'enemyBlue', randomLaunchStrategy(5000, 7500), 5)),
      this.game.add.existing(new Enemies(this.game, createUfo(), 'ufoRed', randomLaunchStrategy(15000, 17500), 2))
    ];
    this.meteors = [
      this.game.add.existing(new Enemies(this.game, createMeteor(3, 300), 'meteorMed1', randomLaunchStrategy(8000, 16000), 5)),
      this.game.add.existing(new Enemies(this.game, createMeteor(3, 400), 'meteorTiny1', randomLaunchStrategy(5000, 10000), 5)),
      this.game.add.existing(new Enemies(this.game, createMeteor(3, 400), 'meteorTiny2', randomLaunchStrategy(5000, 10000), 5)),
    ];
    this.powerups = this.game.add.existing(new PowerUps(this.game, [
      { quantity: 3, key: 'powerUpBolt' },
      { quantity: 3, key: 'powerUpStar' },
      { quantity: 3, key: 'powerUpShield' },
    ]));
    this.explosions = this.game.add.existing(new Explosions(this.game, ['explosion1', 'explosion2'], ['explosionSfx1', 'explosionSfx2', 'explosionSfx3']));

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

    this.laserSfx = this.game.add.audio('laserSfx');
    this.laserSfx.allowMultiple = true;
  }
  update() {
    this.game.physics.arcade.overlap(this.player, this.enemies, this.collideShips, null, this);
    this.game.physics.arcade.overlap(this.enemies, this.playerBullets, this.hitEnemy, null, this);
    this.game.physics.arcade.overlap(this.player, this.enemyBullets, this.hitPlayer, null, this);
    this.game.physics.arcade.overlap([ this.player, ...this.enemies ], this.meteors, this.collideMeteors, null, this);
    this.game.physics.arcade.overlap([ this.playerBullets, this.enemyBullets ], this.meteors, this.hitMeteor, null, this);
    this.game.physics.arcade.overlap(this.player, this.powerups, this.collectPowerUp, null, this);
    this.health.text = `Health: ${this.player.health}%`;

    if (this.player.health <= 0 && this.player.alive) {
      this.explosions.explode(this.player);
      this.player.kill();
    }

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
    enemy.kill();
    player.damage(75);
  }
  collideMeteors(entity) {
    this.explosions.explode(entity);
    entity.kill();
  }
  hitEnemy(enemy, bullet) {
    bullet.kill();
    enemy.damage(Math.round(Math.random() * 10) + 20);
    if (enemy.health <= 0) {
      this.explosions.explode(enemy);
      this.powerups.addPowerup(enemy.x, enemy.y);
      enemy.kill();
    }
  }
  hitPlayer(player, bullet) {
    bullet.kill();
    player.damage(5);
  }
  hitMeteor(bullet) {
    bullet.kill();
  }
  collectPowerUp(player, powerup) {
    powerup.applyTo(player);
    powerup.kill();
  }
  restart() {
    this.player.revive();
    this.player.health = 100;
    this.player.body.velocity.x = 0;
  }
}
