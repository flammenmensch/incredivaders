export default function armedEntityMixinFactory(weaponPosition, weaponBuilder, target=null) {
  return function(SuperClass) {
    return class extends SuperClass {
      constructor() {
        super(...arguments);
        this.__weaponPosition = weaponPosition;
        this.__weapon = weaponBuilder(this);
        this.__target = target;
        this.__originalFireAngle = this.__weapon.fireAngle;
      }
      get weapon() {
        return this.__weapon;
      }
      fire() {
        if (this.__target && this.__target.alive) {
          this.__weapon.fireAtSprite(this.__target);
        } else {
          this.__weapon.fireAngle = this.__originalFireAngle + this.angle;
          if (this.__weapon.multiFire) {
            this.__weapon.fireMany(
              Array.isArray(this.__weaponPosition) ? this.__weaponPosition : [ this.__weaponPosition ]
            );
          } else {
            this.__weapon.fire(undefined, undefined, undefined, this.__weaponPosition.x, this.__weaponPosition.y);
          }
        }
      }
    }
  }
}
