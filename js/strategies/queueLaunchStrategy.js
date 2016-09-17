import BaseLaunchStrategy from './BaseLaunchStrategy';

export default function(minSpacing=2500, maxSpacing=4000, verticalSpacing=70, numEnemiesInWave=10) {
  return class QueueLaunchStrategy extends BaseLaunchStrategy{
    scheduleLaunch() {
      this.__owner.game.time.events.add(
        this.__owner.game.rnd.integerInRange(minSpacing, maxSpacing),
        this.__launch.bind(this, this.__owner)
      );
    }
    __launch() {
      let enemy;
      for (let i = 0; i < numEnemiesInWave; i++) {
        enemy = this.__owner.getFirstExists(false);
        if (enemy) {
          enemy.reset(this.__owner.game.width * .5, -verticalSpacing * i);
        }
      }
      this.scheduleLaunch();
    }
  }
}
