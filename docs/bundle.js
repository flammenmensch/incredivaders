/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _LoadState = __webpack_require__(4);

	var _LoadState2 = _interopRequireDefault(_LoadState);

	var _PlayState = __webpack_require__(5);

	var _PlayState2 = _interopRequireDefault(_PlayState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Game = function (_Phaser$Game) {
	  _inherits(Game, _Phaser$Game);

	  function Game() {
	    var _this;

	    _classCallCheck(this, Game);

	    return _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Game).call(this, 800, 600, Phaser.AUTO, 'game', {
	      create: function create() {
	        _this.state.add('load', _LoadState2.default);
	        _this.state.add('play', _PlayState2.default);
	        _this.state.start('load');
	      }
	    }));
	  }

	  return Game;
	}(Phaser.Game);

	new Game();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2)(__webpack_require__(3))

/***/ },
/* 2 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(src) {
		if (typeof execScript !== "undefined")
			execScript(src);
		else
			eval.call(null, src);
	}


/***/ },
/* 3 */
/***/ function(module, exports) {


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoadState = function (_Phaser$State) {
	  _inherits(LoadState, _Phaser$State);

	  function LoadState() {
	    _classCallCheck(this, LoadState);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(LoadState).apply(this, arguments));
	  }

	  _createClass(LoadState, [{
	    key: 'preload',
	    value: function preload() {
	      this.game.load.image('space', 'assets/images/nebula.jpg');
	      this.game.load.image('player', 'assets/images/playerShip1_orange.png');
	      this.game.load.image('enemyBlack', 'assets/images/enemyBlack3.png');
	      this.game.load.image('enemyRed', 'assets/images/enemyRed1.png');
	      this.game.load.image('enemyBlue', 'assets/images/enemyBlue5.png');
	      this.game.load.image('laser', 'assets/images/laserBlue01.png');
	      this.game.load.image('rocket', 'assets/images/laserRed06.png');
	      this.game.load.spritesheet('redExplosion', 'assets/images/explosion_9.png', 256, 256);
	      this.game.load.spritesheet('blueExplosion', 'assets/images/explosion_1.png', 196, 237);
	    }
	  }, {
	    key: 'create',
	    value: function create() {
	      this.game.state.start('play');
	    }
	  }]);

	  return LoadState;
	}(Phaser.State);

	exports.default = LoadState;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _weaponFactory = __webpack_require__(6);

	var _weaponFactory2 = _interopRequireDefault(_weaponFactory);

	var _Player = __webpack_require__(8);

	var _Player2 = _interopRequireDefault(_Player);

	var _StarField = __webpack_require__(9);

	var _StarField2 = _interopRequireDefault(_StarField);

	var _Enemies = __webpack_require__(10);

	var _Enemies2 = _interopRequireDefault(_Enemies);

	var _Explosions = __webpack_require__(11);

	var _Explosions2 = _interopRequireDefault(_Explosions);

	var _Enemy = __webpack_require__(12);

	var _Enemy2 = _interopRequireDefault(_Enemy);

	var _mix = __webpack_require__(13);

	var _mix2 = _interopRequireDefault(_mix);

	var _mixins = __webpack_require__(14);

	var _mixins2 = _interopRequireDefault(_mixins);

	var _randomLaunchStrategy = __webpack_require__(24);

	var _randomLaunchStrategy2 = _interopRequireDefault(_randomLaunchStrategy);

	var _queueLaunchStrategy = __webpack_require__(25);

	var _queueLaunchStrategy2 = _interopRequireDefault(_queueLaunchStrategy);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var createBlackEnemy = function createBlackEnemy() {
	  return (0, _mix2.default)(_Enemy2.default).with(_mixins2.default.waveMovementFactory(), _mixins2.default.randomRotationMixinFactory(), _mixins2.default.bankMixinFactory(180), _mixins2.default.armedEntityMixinFactory(0, 0, (0, _weaponFactory2.default)(_weaponFactory.WeaponType.LASER, true)), _mixins2.default.autoFireMixinFactory());
	};

	var createRedEnemy = function createRedEnemy(target) {
	  return (0, _mix2.default)(_Enemy2.default).with(_mixins2.default.randomMovementMixinFactory(), _mixins2.default.randomRotationMixinFactory(), _mixins2.default.bankMixinFactory(), _mixins2.default.armedEntityMixinFactory(0, 0, (0, _weaponFactory2.default)(_weaponFactory.WeaponType.ROCKET, true, target)), _mixins2.default.autoFireMixinFactory());
	};

	var createBlueEnemy = function createBlueEnemy() {
	  return (0, _mix2.default)(_Enemy2.default).with(_mixins2.default.randomMovementMixinFactory(400), _mixins2.default.randomRotationMixinFactory(), _mixins2.default.bankMixinFactory(400), _mixins2.default.accelerateAfterFactory(100, 75));
	};

	var PlayState = function (_Phaser$State) {
	  _inherits(PlayState, _Phaser$State);

	  function PlayState() {
	    _classCallCheck(this, PlayState);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(PlayState).apply(this, arguments));
	  }

	  _createClass(PlayState, [{
	    key: 'create',
	    value: function create() {
	      var PlayerClass = (0, _mix2.default)(_Player2.default).with(_mixins2.default.armedEntityMixinFactory(0, 0, (0, _weaponFactory2.default)(_weaponFactory.WeaponType.LASER, false)), _mixins2.default.bankMixinFactory(), _mixins2.default.arrowMovementMixinFactory(), _mixins2.default.manualFireMixinFactory());

	      this.game.add.existing(new _StarField2.default(this.game));
	      this.game.physics.startSystem(Phaser.Physics.ARCADE);

	      this.player = this.game.add.existing(new PlayerClass(this.game, this.game.width * .5, this.game.height - 44));
	      this.enemies = [this.game.add.existing(new _Enemies2.default(this.game, createBlackEnemy(), 'enemyBlack', (0, _queueLaunchStrategy2.default)(300, 1500, 50), 10)), this.game.add.existing(new _Enemies2.default(this.game, createRedEnemy(this.player), 'enemyRed', (0, _randomLaunchStrategy2.default)(3000, 6000), 5)), this.game.add.existing(new _Enemies2.default(this.game, createBlueEnemy(), 'enemyBlue', (0, _randomLaunchStrategy2.default)(5000, 7500), 5))];
	      this.explosions = this.game.add.existing(new _Explosions2.default(this.game));

	      this.playerBullets = this.player.weapon.bullets;
	      this.enemyBullets = this.enemies.reduce(function (acc, group) {
	        return acc.concat(group.children);
	      }, []).filter(function (enemy) {
	        return enemy.weapon !== undefined;
	      }) // Armed enemies only
	      .map(function (enemy) {
	        return enemy.weapon.bullets;
	      });

	      this.health = this.game.add.text(this.game.world.width - 150, 10, 'Health: ' + this.player.health + '%', { font: '20px Arial', fill: '#fff' });
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      var _this2 = this;

	      this.game.physics.arcade.overlap(this.player, this.enemies, this.collideShips, null, this);
	      this.game.physics.arcade.overlap(this.enemies, this.playerBullets, this.hitEnemy, null, this);
	      this.game.physics.arcade.overlap(this.player, this.enemyBullets, this.hitPlayer, null, this);
	      this.health.text = 'Health: ' + this.player.health + '%';

	      //  Game over?
	      if (!this.player.alive) {
	        (function () {
	          var tapRestart = _this2.game.input.onTap.addOnce(function () {
	            tapRestart.detach();
	            _this2.restart();
	          });
	        })();
	      }
	    }
	  }, {
	    key: 'collideShips',
	    value: function collideShips(player, enemy) {
	      this.explosions.explode(enemy);
	      this.explosions.explode(player);
	      player.damage(100);
	      player.kill();
	      enemy.kill();
	    }
	  }, {
	    key: 'hitEnemy',
	    value: function hitEnemy(enemy, bullet) {
	      this.explosions.explode(enemy);
	      bullet.kill();
	      enemy.kill();
	    }
	  }, {
	    key: 'hitPlayer',
	    value: function hitPlayer(player, bullet) {
	      bullet.kill();
	      player.damage(20);
	      if (player.health <= 0) {
	        this.explosions.explode(player);
	        player.kill();
	      }
	    }
	  }, {
	    key: 'restart',
	    value: function restart() {
	      this.enemies.forEach(function (group) {
	        return group.callAll('kill');
	      });
	      this.player.revive();
	      this.player.health = 100;
	    }
	  }]);

	  return PlayState;
	}(Phaser.State);

	exports.default = PlayState;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.WeaponType = undefined;

	exports.default = function (type) {
	  var isEnemy = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	  var target = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  switch (type) {
	    case WeaponType.CANNON:
	    case WeaponType.ROCKET:
	      return rocketLauncherBuilder.bind(null, isEnemy, target);
	    case WeaponType.HOMING:
	    case WeaponType.LASER:
	    default:
	      return laserBuilder.bind(null, isEnemy, target);
	  }
	};

	var _homingMissileFactory = __webpack_require__(7);

	var _homingMissileFactory2 = _interopRequireDefault(_homingMissileFactory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var WeaponType = exports.WeaponType = {
	  LASER: 'laser',
	  CANNON: 'cannon',
	  ROCKET: 'rocket',
	  HOMING: 'homing'
	};

	var defaultWeapon = function defaultWeapon(isEnemy, owner) {
	  var weapon = owner.game.plugins.add(Phaser.Weapon);
	  weapon.bulletAngleOffset = 90;
	  weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
	  weapon.fireAngle = isEnemy ? 90 : -90;
	  weapon.trackSprite(owner);
	  return weapon;
	};

	var laserBuilder = function laserBuilder(isEnemy, target, owner) {
	  var weapon = defaultWeapon(isEnemy, owner);
	  weapon.bulletSpeed = 600;
	  weapon.fireRate = isEnemy ? 500 : 250;
	  weapon.fireRateVariance = isEnemy ? 150 : 0;
	  weapon.createBullets(10, WeaponType.LASER);
	  return weapon;
	};

	var rocketLauncherBuilder = function rocketLauncherBuilder(isEnemy, target, owner) {
	  var weapon = defaultWeapon(isEnemy, owner);
	  weapon.bulletSpeed = 500;
	  //weapon.bullets = owner.game.add.physicsGroup();
	  //weapon.bulletClass = homingMissileFactory(target);
	  weapon.fireRate = isEnemy ? 900 : 150;
	  weapon.fireRateVariance = isEnemy ? 200 : 0;
	  weapon.createBullets(30, WeaponType.ROCKET);
	  return weapon;
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (target) {
	  return function (_Phaser$Bullet) {
	    _inherits(HomingMissile, _Phaser$Bullet);

	    function HomingMissile(game, x, y) {
	      _classCallCheck(this, HomingMissile);

	      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HomingMissile).call(this, game, x, y, 'rocket'));

	      _this.targetX = target.body.x;
	      _this.targetY = target.body.y;
	      return _this;
	    }

	    _createClass(HomingMissile, [{
	      key: 'update',
	      value: function update() {
	        if (this.alive) {
	          var targetAngle = this.game.math.angleBetween(this.x, this.y, this.targetX, this.targetY);

	          if (this.rotation !== targetAngle) {
	            var delta = targetAngle - this.rotation;

	            if (delta > Math.PI) {
	              delta -= PI2;
	            }

	            if (delta < -Math.PI) {
	              delta += PI2;
	            }

	            if (delta > 0) {
	              this.angle += TURN_RATE;
	            } else {
	              this.angle -= TURN_RATE;
	            }

	            if (Math.abs(delta) < this.game.math.degToRad(this.TURN_RATE)) {
	              this.rotation = targetAngle - Math.PI;
	            }

	            this.body.velocity.x = Math.cos(this.rotation) * SPEED;
	            this.body.velocity.y = Math.sin(this.rotation) * SPEED;
	          }
	        }

	        var distance = this.game.math.distance(this.x, this.y, this.targetX, this.targetY);

	        if (distance < 50) {
	          this.kill();
	        }
	      }
	    }]);

	    return HomingMissile;
	  }(Phaser.Bullet);
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PI2 = Math.PI * 2;
	var TURN_RATE = 5;
	var SPEED = 250;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Player = function (_Phaser$Sprite) {
	  _inherits(Player, _Phaser$Sprite);

	  function Player(game, x, y) {
	    _classCallCheck(this, Player);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Player).call(this, game, x, y, 'player'));

	    _this.anchor.setTo(.5, .5);
	    _this.health = 100;
	    return _this;
	  }

	  return Player;
	}(Phaser.Sprite);

	exports.default = Player;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var StarField = function (_Phaser$TileSprite) {
	  _inherits(StarField, _Phaser$TileSprite);

	  function StarField(game) {
	    _classCallCheck(this, StarField);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(StarField).call(this, game, 0, 0, game.width, game.height, 'space'));
	  }

	  _createClass(StarField, [{
	    key: 'update',
	    value: function update() {
	      _get(Object.getPrototypeOf(StarField.prototype), 'update', this).call(this);
	      this.tilePosition.y += 2;
	    }
	  }]);

	  return StarField;
	}(Phaser.TileSprite);

	exports.default = StarField;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Enemies = function (_Phaser$Group) {
	  _inherits(Enemies, _Phaser$Group);

	  function Enemies(game, enemyClass, enemySpriteKey, enemyLauncherClass) {
	    var enemyCount = arguments.length <= 4 || arguments[4] === undefined ? 5 : arguments[4];

	    _classCallCheck(this, Enemies);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Enemies).call(this, game));

	    _this.classType = enemyClass;
	    _this.enableBody = true;
	    _this.physicsBodyType = Phaser.Physics.ARCADE;
	    _this.createMultiple(enemyCount, enemySpriteKey);

	    _this.enemyLauncher = new enemyLauncherClass();
	    _this.enemyLauncher.launch(_this);
	    return _this;
	  }

	  return Enemies;
	}(Phaser.Group);

	exports.default = Enemies;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Explosions = function (_Phaser$Group) {
	  _inherits(Explosions, _Phaser$Group);

	  function Explosions(game) {
	    _classCallCheck(this, Explosions);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Explosions).call(this, game));

	    _this.enableBody = true;
	    _this.physicsBodyType = Phaser.Physics.ARCADE;
	    _this.createMultiple(30, 'redExplosion');
	    _this.setAll('anchor.x', .5);
	    _this.setAll('anchor.y', .5);
	    _this.forEach(function (explosion) {
	      explosion.animations.add('explosion');
	    });
	    return _this;
	  }

	  _createClass(Explosions, [{
	    key: 'explode',
	    value: function explode(target) {
	      var explosion = this.getFirstExists(false);
	      explosion.reset(target.body.x + target.body.halfWidth, target.body.y + target.body.halfHeight);
	      explosion.body.velocity.y = this.game.math.min(target.body.velocity.y, 180);
	      explosion.play('explosion', 30, false, true);
	    }
	  }]);

	  return Explosions;
	}(Phaser.Group);

	exports.default = Explosions;

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Enemy = function (_Phaser$Sprite) {
	  _inherits(Enemy, _Phaser$Sprite);

	  function Enemy(game, x, y, key) {
	    _classCallCheck(this, Enemy);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Enemy).call(this, game, x, y, key));

	    _this.game.physics.arcade.enable(_this);
	    _this.anchor.setTo(.5, .5);
	    _this.outOfBoundsKill = true;
	    _this.checkWorldBounds = true;
	    return _this;
	  }

	  return Enemy;
	}(Phaser.Sprite);

	exports.default = Enemy;

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (SuperClass) {
	  return new MixinBuilder(SuperClass);
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MixinBuilder = function () {
	  function MixinBuilder(SuperClass) {
	    _classCallCheck(this, MixinBuilder);

	    this.superclass = SuperClass;
	  }

	  _createClass(MixinBuilder, [{
	    key: "with",
	    value: function _with() {
	      for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
	        mixins[_key] = arguments[_key];
	      }

	      return mixins.reduce(function (c, mixin) {
	        return mixin(c);
	      }, this.superclass);
	    }
	  }]);

	  return MixinBuilder;
	}();

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _armedEntityMixin = __webpack_require__(15);

	var _armedEntityMixin2 = _interopRequireDefault(_armedEntityMixin);

	var _manualFireMixin = __webpack_require__(16);

	var _manualFireMixin2 = _interopRequireDefault(_manualFireMixin);

	var _arrowMovementMixin = __webpack_require__(17);

	var _arrowMovementMixin2 = _interopRequireDefault(_arrowMovementMixin);

	var _randomRotationMixin = __webpack_require__(18);

	var _randomRotationMixin2 = _interopRequireDefault(_randomRotationMixin);

	var _randomMovementMixin = __webpack_require__(19);

	var _randomMovementMixin2 = _interopRequireDefault(_randomMovementMixin);

	var _autoFireMixin = __webpack_require__(20);

	var _autoFireMixin2 = _interopRequireDefault(_autoFireMixin);

	var _bankMixin = __webpack_require__(21);

	var _bankMixin2 = _interopRequireDefault(_bankMixin);

	var _waveMovementMixin = __webpack_require__(22);

	var _waveMovementMixin2 = _interopRequireDefault(_waveMovementMixin);

	var _accelerateAfterMixin = __webpack_require__(23);

	var _accelerateAfterMixin2 = _interopRequireDefault(_accelerateAfterMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mixins = {
	  armedEntityMixinFactory: _armedEntityMixin2.default,
	  arrowMovementMixinFactory: _arrowMovementMixin2.default,
	  autoFireMixinFactory: _autoFireMixin2.default,
	  bankMixinFactory: _bankMixin2.default,
	  manualFireMixinFactory: _manualFireMixin2.default,
	  randomMovementMixinFactory: _randomMovementMixin2.default,
	  randomRotationMixinFactory: _randomRotationMixin2.default,
	  waveMovementFactory: _waveMovementMixin2.default,
	  accelerateAfterFactory: _accelerateAfterMixin2.default
	};

	exports.default = mixins;

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = armedEntityMixinFactory;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function armedEntityMixinFactory(x, y, weaponBuilder) {
	  var target = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

	  return function (SuperClass) {
	    return function (_SuperClass) {
	      _inherits(_class, _SuperClass);

	      function _class() {
	        _classCallCheck(this, _class);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));

	        _this.__weaponPosition = { x: x, y: y };
	        _this.__weapon = weaponBuilder(_this);
	        _this.__target = target;
	        _this.__originalFireAngle = _this.__weapon.fireAngle;
	        return _this;
	      }

	      _createClass(_class, [{
	        key: "fire",
	        value: function fire() {
	          if (this.__target && this.__target.alive) {
	            this.__weapon.fireAtSprite(this.__target);
	          } else {
	            this.__weapon.fireAngle = this.__originalFireAngle + this.angle;
	            this.__weapon.fire();
	          }
	        }
	      }, {
	        key: "weapon",
	        get: function get() {
	          return this.__weapon;
	        }
	      }]);

	      return _class;
	    }(SuperClass);
	  };
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	exports.default = function () {
	  var key = arguments.length <= 0 || arguments[0] === undefined ? Phaser.Keyboard.SPACEBAR : arguments[0];

	  return function (SuperClass) {
	    return function (_SuperClass) {
	      _inherits(_class, _SuperClass);

	      function _class() {
	        _classCallCheck(this, _class);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));

	        _this.__fireButton = _this.game.input.keyboard.addKey(key);
	        return _this;
	      }

	      _createClass(_class, [{
	        key: "update",
	        value: function update() {
	          _get(Object.getPrototypeOf(_class.prototype), "update", this).call(this);
	          if (this.alive) {
	            if (this.__fireButton.isDown) {
	              this.fire();
	            }
	          }
	        }
	      }]);

	      return _class;
	    }(SuperClass);
	  };
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	exports.default = function () {
	  var acceleration = arguments.length <= 0 || arguments[0] === undefined ? 600 : arguments[0];
	  var maxSpeed = arguments.length <= 1 || arguments[1] === undefined ? 400 : arguments[1];
	  var drag = arguments.length <= 2 || arguments[2] === undefined ? 400 : arguments[2];
	  var padding = arguments.length <= 3 || arguments[3] === undefined ? 32 : arguments[3];

	  return function (SuperClass) {
	    return function (_SuperClass) {
	      _inherits(_class, _SuperClass);

	      function _class() {
	        _classCallCheck(this, _class);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));

	        _this.game.physics.arcade.enable(_this);
	        _this.body.maxVelocity.setTo(maxSpeed, maxSpeed);
	        _this.body.drag.setTo(drag, drag);
	        _this.__cursors = _this.game.input.keyboard.createCursorKeys();
	        return _this;
	      }

	      _createClass(_class, [{
	        key: "update",
	        value: function update() {
	          _get(Object.getPrototypeOf(_class.prototype), "update", this).call(this);
	          if (this.alive) {
	            this.body.acceleration.x = 0;

	            if (this.__cursors.left.isDown) {
	              this.body.acceleration.x = -acceleration;
	            } else if (this.__cursors.right.isDown) {
	              this.body.acceleration.x = acceleration;
	            }
	          }

	          if (this.x > this.game.width - padding) {
	            this.x = this.game.width - padding;
	            this.body.acceleration.x = 0;
	          }

	          if (this.x < padding) {
	            this.x = padding;
	            this.body.acceleration.x = 0;
	          }
	        }
	      }]);

	      return _class;
	    }(SuperClass);
	  };
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	exports.default = function () {
	  return function (SuperClass) {
	    return function (_SuperClass) {
	      _inherits(_class, _SuperClass);

	      function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
	      }

	      _createClass(_class, [{
	        key: "update",
	        value: function update() {
	          _get(Object.getPrototypeOf(_class.prototype), "update", this).call(this);
	          this.angle = -this.game.math.radToDeg(Math.atan2(this.body.velocity.x, this.body.velocity.y));
	        }
	      }]);

	      return _class;
	    }(SuperClass);
	  };
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	exports.default = function () {
	  var speed = arguments.length <= 0 || arguments[0] === undefined ? 300 : arguments[0];
	  var drag = arguments.length <= 1 || arguments[1] === undefined ? 300 : arguments[1];

	  return function (SuperClass) {
	    return function (_SuperClass) {
	      _inherits(_class, _SuperClass);

	      function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
	      }

	      _createClass(_class, [{
	        key: "reset",
	        value: function reset() {
	          _get(Object.getPrototypeOf(_class.prototype), "reset", this).apply(this, arguments);
	          this.body.velocity.x = this.game.rnd.integerInRange(-speed, speed);
	          this.body.velocity.y = speed;
	          this.body.drag.x = drag;
	        }
	      }]);

	      return _class;
	    }(SuperClass);
	  };
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	exports.default = function () {
	  return function (SuperClass) {
	    return function (_SuperClass) {
	      _inherits(_class, _SuperClass);

	      function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
	      }

	      _createClass(_class, [{
	        key: "update",
	        value: function update() {
	          _get(Object.getPrototypeOf(_class.prototype), "update", this).call(this);
	          if (this.alive && this.withinFireBounds()) {
	            this.fire();
	          }
	        }
	      }, {
	        key: "withinFireBounds",
	        value: function withinFireBounds() {
	          return this.x > 0 && this.x < this.game.width && this.y > 0 && this.y < this.game.height * .5;
	        }
	      }]);

	      return _class;
	    }(SuperClass);
	  };
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	exports.default = function () {
	  var maxSpeed = arguments.length <= 0 || arguments[0] === undefined ? 300 : arguments[0];

	  return function (SuperClass) {
	    return function (_SuperClass) {
	      _inherits(_class, _SuperClass);

	      function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
	      }

	      _createClass(_class, [{
	        key: "update",
	        value: function update() {
	          _get(Object.getPrototypeOf(_class.prototype), "update", this).call(this);
	          var bank = this.body.velocity.x / maxSpeed;
	          this.scale.x = 1 - Math.abs(bank) * .5;
	          this.angle = bank * 15;
	        }
	      }]);

	      return _class;
	    }(SuperClass);
	  };
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	exports.default = function () {
	  var verticalSpeed = arguments.length <= 0 || arguments[0] === undefined ? 180 : arguments[0];
	  var frequency = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];
	  var spread = arguments.length <= 2 || arguments[2] === undefined ? 60 : arguments[2];

	  return function (SuperClass) {
	    return function (_SuperClass) {
	      _inherits(_class, _SuperClass);

	      function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
	      }

	      _createClass(_class, [{
	        key: "reset",
	        value: function reset() {
	          _get(Object.getPrototypeOf(_class.prototype), "reset", this).apply(this, arguments);
	          this.startingX = this.game.rnd.integerInRange(100, this.game.width - 100);
	          this.body.velocity.y = verticalSpeed;
	        }
	      }, {
	        key: "update",
	        value: function update() {
	          _get(Object.getPrototypeOf(_class.prototype), "update", this).call(this);
	          this.body.x = this.startingX + Math.sin(this.y / frequency) * spread;
	        }
	      }]);

	      return _class;
	    }(SuperClass);
	  };
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	exports.default = function (position) {
	  var accelerationFactor = arguments.length <= 1 || arguments[1] === undefined ? 10 : arguments[1];

	  return function (SuperClass) {
	    return function (_SuperClass) {
	      _inherits(_class, _SuperClass);

	      function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
	      }

	      _createClass(_class, [{
	        key: "update",
	        value: function update() {
	          _get(Object.getPrototypeOf(_class.prototype), "update", this).call(this);
	          if (this.body.y > position) {
	            this.body.acceleration.y += accelerationFactor;
	          }
	        }
	      }]);

	      return _class;
	    }(SuperClass);
	  };
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (minSpacing, maxSpacing) {
	  return function () {
	    function RandomLaunchStrategy() {
	      _classCallCheck(this, RandomLaunchStrategy);
	    }

	    _createClass(RandomLaunchStrategy, [{
	      key: "launch",
	      value: function launch(owner) {
	        var enemy = owner.getFirstExists(false);
	        if (enemy) {
	          enemy.reset(owner.game.rnd.integerInRange(0, owner.game.width), -10);
	        }
	        owner.game.time.events.add(owner.game.rnd.integerInRange(minSpacing, maxSpacing), this.launch.bind(this, owner));
	      }
	    }]);

	    return RandomLaunchStrategy;
	  }();
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function () {
	  var minSpacing = arguments.length <= 0 || arguments[0] === undefined ? 2500 : arguments[0];
	  var maxSpacing = arguments.length <= 1 || arguments[1] === undefined ? 4000 : arguments[1];
	  var verticalSpacing = arguments.length <= 2 || arguments[2] === undefined ? 70 : arguments[2];
	  var numEnemiesInWave = arguments.length <= 3 || arguments[3] === undefined ? 10 : arguments[3];

	  return function () {
	    function QueueLaunchStrategy() {
	      _classCallCheck(this, QueueLaunchStrategy);
	    }

	    _createClass(QueueLaunchStrategy, [{
	      key: "launch",
	      value: function launch(owner) {
	        for (var i = 0; i < numEnemiesInWave; i++) {
	          var enemy = owner.getFirstExists(false);
	          if (enemy) {
	            enemy.reset(owner.game.width * .5, -verticalSpacing * i);
	          }
	        }
	        owner.game.time.events.add(owner.game.rnd.integerInRange(minSpacing, maxSpacing), this.launch.bind(this, owner));
	      }
	    }]);

	    return QueueLaunchStrategy;
	  }();
	};

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/***/ }
/******/ ]);