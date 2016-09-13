export default function(minSpacing, maxSpacing) {
  return class RandomLaunchStrategy {
    scheduleLaunch(owner) {
      owner.game.time.events.add(
        owner.game.rnd.integerInRange(minSpacing, maxSpacing),
        this.__launch.bind(this, owner)
      );
    }
    __launch(owner) {
      const enemy = owner.getFirstExists(false);
      if (enemy) {
        enemy.reset(owner.game.rnd.integerInRange(100, owner.game.width - 100), -10);
      }
      this.scheduleLaunch(owner);
    }
  };
}
