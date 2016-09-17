import BaseLaunchStrategy from './BaseLaunchStrategy';

export default function(minSpacing, maxSpacing) {
  return class RandomLaunchStrategy extends BaseLaunchStrategy {
    scheduleLaunch() {
      this.__owner.game.time.events.add(
        this.__owner.game.rnd.integerInRange(minSpacing, maxSpacing),
        this.__launch.bind(this)
      );
    }
    __launch() {
      const enemy = this.__owner.getFirstExists(false);
      if (enemy) {
        enemy.reset(this.__owner.game.rnd.integerInRange(100, this.__owner.game.width - 100), -10);
      }
      this.scheduleLaunch();
    }
  };
}
