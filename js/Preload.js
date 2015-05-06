var SideScroller = SideScroller || {};

//loading the game assets
SideScroller.Preload = function(){};

SideScroller.Preload.prototype = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);
    this.preloadBar.scale.setTo(3);

    this.load.setPreloadSprite(this.preloadBar);

    //load game assets
    this.load.tilemap('level1', 'http://students.uwyo.edu/tlegg/assets/tilemaps/level1.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('level2', 'http://students.uwyo.edu/tlegg/assets/tilemaps/level2.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('level3', 'http://students.uwyo.edu/tlegg/assets/tilemaps/level3.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('level4', 'http://students.uwyo.edu/tlegg/assets/tilemaps/level4.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('level5', 'http://students.uwyo.edu/tlegg/assets/tilemaps/level5.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('level6', 'http://students.uwyo.edu/tlegg/assets/tilemaps/level6.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('level7', 'http://students.uwyo.edu/tlegg/assets/tilemaps/level7.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('level8', 'http://students.uwyo.edu/tlegg/assets/tilemaps/level8.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('level9', 'http://students.uwyo.edu/tlegg/assets/tilemaps/level9.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('default','http://students.uwyo.edu/tlegg/assets/images/default.png')
    this.load.image('L1BG','http://students.uwyo.edu/tlegg/assets/images/level1Background.png')
    this.load.image('L2BG','http://students.uwyo.edu/tlegg/assets/images/level2Background.png')
	this.load.image('L3BG','http://students.uwyo.edu/tlegg/assets/images/level3Background.png')
	this.load.image('L4BG','http://students.uwyo.edu/tlegg/assets/images/level4Background.png')
	this.load.image('L5BG','http://students.uwyo.edu/tlegg/assets/images/level5Background.png')
	this.load.image('L6BG','http://students.uwyo.edu/tlegg/assets/images/level6Background.png')
	this.load.image('L7BG','http://students.uwyo.edu/tlegg/assets/images/level7Background.png')
	this.load.image('L8BG','http://students.uwyo.edu/tlegg/assets/images/level8Background.png')
	this.load.image('L9BG','http://students.uwyo.edu/tlegg/assets/images/level9Background.png')
    this.load.image('gameOverBG','http://students.uwyo.edu/tlegg/assets/images/GameOver.jpg')
    this.load.image('gameTiles', 'http://students.uwyo.edu/tlegg/assets/images/tiles_spritesheet.png');
    this.load.image('player', 'http://students.uwyo.edu/tlegg/assets/images/player.png');
    this.load.image('playerDuck', 'http://students.uwyo.edu/tlegg/assets/images/player_duck.png');
    this.load.image('playerDead', 'http://students.uwyo.edu/tlegg/assets/images/player_dead.png');
    this.load.image('goldCoin', 'http://students.uwyo.edu/tlegg/assets/images/goldCoin.png');
	this.load.image('nip', 'http://students.uwyo.edu/tlegg/assets/images/nip.png');
	this.load.image('cd', 'http://students.uwyo.edu/tlegg/assets/images/cd.png');
	this.load.image('drive', 'http://students.uwyo.edu/tlegg/assets/images/flash.png');
	this.load.image('floppy', 'http://students.uwyo.edu/tlegg/assets/images/floppy.png');
    this.load.audio('coin', 'http://students.uwyo.edu/tlegg/assets/audio/coin.mp3');
	this.load.audio('level1', 'http://students.uwyo.edu/tlegg/assets/audio/fast.mp3');
	this.load.audio('level2', 'http://students.uwyo.edu/tlegg/assets/audio/sleepy.mp3');
	this.load.audio('sweetKnowledge', 'http://students.uwyo.edu/tlegg/assets/audio/sweetKnowledge.mp3');
    this.load.audio('meow', 'http://students.uwyo.edu/tlegg/assets/audio/meow.mp3');
  },
  create: function() {
    this.state.start('MainMenu', true, false, 0);
  }
};