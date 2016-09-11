import homingMissileFactory from './homingMissileFactory';

export const WeaponType = {
  LASER: 'laser',
  CANNON: 'cannon',
  ROCKET: 'rocket',
  HOMING: 'homing'
};

export default function(type, isEnemy=false, target=null) {
  switch(type) {
    case WeaponType.CANNON:
    case WeaponType.ROCKET:
      return rocketLauncherBuilder.bind(null, isEnemy, target);
    case WeaponType.HOMING:
    case WeaponType.LASER:
    default:
      return laserBuilder.bind(null, isEnemy, target);
  }
}

const laserBuilder = (isEnemy, target, owner) => {
  const weapon = owner.game.plugins.add(Phaser.Weapon);
  weapon.bulletSpeed = 600;
  weapon.bulletAngleOffset = 90;
  weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
  weapon.fireRate = isEnemy ? 500 : 250;
  weapon.fireRateVariance = isEnemy ? 150 : 0;
  weapon.fireAngle = isEnemy ? 90 : -90;
  weapon.trackSprite(owner);
  weapon.createBullets(10, WeaponType.LASER);
  return weapon;
};

const rocketLauncherBuilder = (isEnemy, target, owner) => {
  const weapon = owner.game.plugins.add(Phaser.Weapon);
  weapon.bulletSpeed = 500;
  weapon.bulletAngleOffset = 90;
  weapon.bullets = owner.game.add.physicsGroup();
  //weapon.bulletClass = homingMissileFactory(target);
  weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
  weapon.fireRate = isEnemy ? 900 : 150;
  weapon.fireRateVariance = isEnemy ? 200 : 0;
  weapon.fireAngle = isEnemy ? 90 : -90;
  weapon.trackSprite(owner);
  weapon.createBullets(30, WeaponType.ROCKET);
  return weapon;
};
