export default function(minSpacing=2500, maxSpacing=4000, verticalSpacing=70, numEnemiesInWave=10) {
  return class QueueLaunchStrategy {
    launch(owner) {
      for (let i = 0; i < numEnemiesInWave; i++) {
        const enemy = owner.getFirstExists(false);
        if (enemy) {
          enemy.reset(owner.game.width * .5, -verticalSpacing * i);
        }
      }
      owner.game.time.events.add(
        owner.game.rnd.integerInRange(minSpacing, maxSpacing),
        this.launch.bind(this, owner)
      );
    }
  }
}
