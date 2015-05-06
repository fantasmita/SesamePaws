SideScroller.MainMenu = function(){};

SideScroller.MainMenu.prototype = {
  create: function() {

    //highest score
    text = "Highest score: "+this.highestScore;
    style = { font: "40px Arial", fill: "#000", align: "center" };
    var h = this.game.add.text(this.game.width-170, 30, text, style);
    h.anchor.set(0.5);

    //start game text
    var text = "Select A Level";
    var style = { font: "30px Arial", fill: "#000", align: "center" };
    var t = this.game.add.text(this.game.width-150, this.game.height/4, text, style);
    t.anchor.set(0.5);

    //instructions
    text = "Press the number key associated\n to the level you want to play.";
    style = { font: "20px Arial", fill: "#000", align: "center" };
    t = this.game.add.text(this.game.width-155, this.game.height/4+50, text, style);
    t.anchor.set(0.5);

    //level 1
    text = "1 - The City";
    style = { font: "20px Arial", fill: "#000", align: "center" };
    t = this.game.add.text(this.game.width-150, this.game.height/2+20, text, style);
    t.anchor.set(0.5);

    //level 2
    text = "2 - The Property";
    style = { font: "20px Arial", fill: "#000", align: "center" };
    t = this.game.add.text(this.game.width-150, this.game.height/2+40, text, style);
    t.anchor.set(0.5);

    //level 3
    text = "3 - The Building";
    style = { font: "20px Arial", fill: "#000", align: "center" };
    t = this.game.add.text(this.game.width-150, this.game.height/2+60, text, style);
    t.anchor.set(0.5);

    //level 4
    text = "4 - The Room";
    style = { font: "20px Arial", fill: "#000", align: "center" };
    t = this.game.add.text(this.game.width-150, this.game.height/2+80, text, style);
    t.anchor.set(0.5);

    //level 5
    text = "5 - The Machine";
    style = { font: "20px Arial", fill: "#000", align: "center" };
    t = this.game.add.text(this.game.width-150, this.game.height/2+100, text, style);
    t.anchor.set(0.5);

    //level 6
    text = "6 - The Server";
    style = { font: "20px Arial", fill: "#000", align: "center" };
    t = this.game.add.text(this.game.width-150, this.game.height/2+120, text, style);
    t.anchor.set(0.5);

    //level 7
    text = "7 - The File System";
    style = { font: "20px Arial", fill: "#000", align: "center" };
    t = this.game.add.text(this.game.width-150, this.game.height/2+140, text, style);
    t.anchor.set(0.5);

    //level 8
    text = "8 - The Database";
    style = { font: "20px Arial", fill: "#000", align: "center" };
    t = this.game.add.text(this.game.width-150, this.game.height/2+160, text, style);
    t.anchor.set(0.5);

    //level 9
    text = "9 - The Final Code";
    style = { font: "20px Arial", fill: "#000", align: "center" };
    t = this.game.add.text(this.game.width-150, this.game.height/2+180, text, style);
    t.anchor.set(0.5);
  },
  init: function(score, levelBG) {
    var score = score || 0;
    this.highestScore = this.highestScore || 0;

    this.highestScore = Math.max(score, this.highestScore);
	
	//Set the menu background based on level
	var levelBackground = 'default';
	switch(levelBG){
		case('level1'):
			levelBackground = 'L1BG';
			break;
		case('level2'):
			levelBackground = 'L2BG';
			break;
		case('level3'):
			levelBackground = 'L3BG';
			break;
		case('level4'):
			levelBackground = 'L4BG';
			break;
		case('level5'):
			levelBackground = 'L5BG';
			break;
		case('level6'):
			levelBackground = 'L6BG';
			break;
		case('level7'):
			levelBackground = 'L7BG';
			break;
		case('level8'):
			levelBackground = 'L8BG';
			break;
		case('level9'):
			levelBackground = 'L9BG';
			break;
		case('gameOver'):
			levelBackground = 'gameOverBG';
			break;
		default:
			levelBackground = 'default';
	}
	//show the space tile, repeated
    //this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, levelBackground);
	this.background = this.game.add.sprite(0, 0, levelBackground);
	this.background.height = this.game.height;
	this.background.width = this.game.width;
	this.background.smoothed = false;
	
   },
  update: function() {
    //if(this.game.input.activePointer.justPressed()) {
    //    this.game.state.start('Game',true, false, 'level1');
    //}
    if(this.game.input.keyboard.isDown(Phaser.Keyboard.ONE)){
      this.game.state.start('Game',true, false, 'level1');
    }
    if(this.game.input.keyboard.isDown(Phaser.Keyboard.TWO)){
      this.game.state.start('Game',true, false, 'level2');
    }
    if(this.game.input.keyboard.isDown(Phaser.Keyboard.THREE)){
      this.game.state.start('Game',true, false, 'level3');
    }
    if(this.game.input.keyboard.isDown(Phaser.Keyboard.FOUR)){
      this.game.state.start('Game',true, false, 'level4');
    }
    if(this.game.input.keyboard.isDown(Phaser.Keyboard.FIVE)){
      this.game.state.start('Game',true, false, 'level5');
    }
    if(this.game.input.keyboard.isDown(Phaser.Keyboard.SIX)){
      this.game.state.start('Game',true, false, 'level6');
    }
    if(this.game.input.keyboard.isDown(Phaser.Keyboard.SEVEN)){
      this.game.state.start('Game',true, false, 'level7');
    }
    if(this.game.input.keyboard.isDown(Phaser.Keyboard.EIGHT)){
      this.game.state.start('Game',true, false, 'level8');
    }
    if(this.game.input.keyboard.isDown(Phaser.Keyboard.NINE)){
      this.game.state.start('Game',true, false, 'level9');
    }
  },
  playState: function(level){
    var lvl = level || 'level1'
   this.game.state.start('Game',true, false, lvl);
  }
};