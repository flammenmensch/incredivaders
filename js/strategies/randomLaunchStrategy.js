export default function(minSpacing, maxSpacing) {
  return class RandomLaunchStrategy {
    launch(owner) {
      const enemy = owner.getFirstExists(false);
      if (enemy) {
        enemy.reset(owner.game.rnd.integerInRange(0, owner.game.width), -10);
      }
      owner.game.time.events.add(
        owner.game.rnd.integerInRange(minSpacing, maxSpacing),
        this.launch.bind(this, owner)
      );
    }
  };
}
