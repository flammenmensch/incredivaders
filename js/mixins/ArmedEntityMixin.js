export default function ArmedEntityMixin(Parent, weaponPosition, weaponBuilder, target=null) {
  return class extends Parent {
    constructor() {
      super(...arguments);
      this.__weaponPosition = weaponPosition;
      this.__weapon = weaponBuilder(this);
      this.__target = target;
    }
    get weapon() {
      return this.__weapon;
    }
    fire() {
      if (this.__target) {
        this.__weapon.fireAtSprite(this.__target);
      } else {
        this.__weapon.fire();
      }
    }
  }
}
