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

const defaultWeapon = (isEnemy, owner) => {
  const weapon = owner.game.plugins.add(Phaser.Weapon);
  weapon.bulletAngleOffset = 90;
  weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
  weapon.fireAngle = isEnemy ? 90 : -90;
  weapon.trackSprite(owner);
  return weapon;
};

const laserBuilder = (isEnemy, target, owner) => {
  const weapon = defaultWeapon(isEnemy, owner);
  weapon.bulletSpeed = 600;
  weapon.fireRate = isEnemy ? 500 : 250;
  weapon.fireRateVariance = isEnemy ? 150 : 0;
  weapon.createBullets(10, WeaponType.LASER);
  return weapon;
};

const rocketLauncherBuilder = (isEnemy, target, owner) => {
  const weapon = defaultWeapon(isEnemy, owner);
  weapon.bulletSpeed = 500;
  //weapon.bullets = owner.game.add.physicsGroup();
  //weapon.bulletClass = homingMissileFactory(target);
  weapon.fireRate = isEnemy ? 900 : 150;
  weapon.fireRateVariance = isEnemy ? 200 : 0;
  weapon.createBullets(30, WeaponType.ROCKET);
  return weapon;
};
