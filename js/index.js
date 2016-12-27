import 'pixi.js';
import 'p2';
import 'phaser';

import LoadState from './states/LoadState';
import PlayState from './states/PlayState';

class Game extends Phaser.Game {
  constructor() {
    super(800, 600, Phaser.AUTO, 'game', {
      create: () => {
        this.state.add('load', LoadState);
        this.state.add('play', PlayState);
        this.state.start('load');
      }
    });
  }
}

new Game();
