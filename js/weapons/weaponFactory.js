export const WeaponType = {
  LASER: 'laser',
  CANNON: 'cannon',
  ROCKET: 'rocket',
  HOMING: 'homing'
};

export default function(type, isEnemy=false) {
  switch(type) {
    case WeaponType.CANNON:
    case WeaponType.ROCKET:
    case WeaponType.HOMING:
    case WeaponType.LASER:
    default:
      return laserBuilder.bind(null, isEnemy);
  }
}

const laserBuilder = (isEnemy, owner) => {
  const weapon = owner.game.add.weapon(30, WeaponType.LASER);
  weapon.bulletSpeed = 600;
  weapon.bulletAngleOffset = 90;
  weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
  weapon.fireRate = isEnemy ? 500 : 150;
  weapon.fireAngle = isEnemy ? 90 : -90;
  weapon.trackSprite(owner);
  return weapon;
};
