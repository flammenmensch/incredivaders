export default class SoundGroup {
  constructor(game, keys, allowMultiple=true) {
    this.__game = game;
    this.__sfx = keys.map(key => {
      const sfx = game.add.audio(key);
      sfx.allowMultiple = allowMultiple;
      return sfx;
    });
  }
  play() {
    const sfx = this.__game.rnd.pick(this.__sfx);
    sfx.play();
  }
}
