export default function armedEntityMixinFactory(x, y, weaponBuilder, target=null) {
  return function(SuperClass) {
    return class extends SuperClass {
      constructor() {
        super(...arguments);
        this.__weaponPosition = { x, y };
        this.__weapon = weaponBuilder(this);
        this.__target = target;
        this.__originalFireAngle = this.__weapon.fireAngle;
      }
      get weapon() {
        return this.__weapon;
      }
      fire() {
        if (this.__target) {
          this.__weapon.fireAtSprite(this.__target);
        } else {
          this.__weapon.fireAngle = this.__originalFireAngle + this.angle;
          this.__weapon.fire();
        }
      }
    }
  }
}
