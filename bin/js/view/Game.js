/**Created by the LayaAirIDE*/
var Game = (function (_super) {
	function Game() {
		Game.__super.call(this);
		this.initializ();
	}

	Laya.class(Game, 'Game', _super);

	var _proto = Game.prototype;

	_proto.initializ = function () {
		this.food = new Food();
		this.game.addChild(this.food);
		this.initIphoneXAdpter();
		this.blaArr = [];
		this.killTimes = 1;
		this.timeCount = 0;
		this.shoe = new shoe();
		this.shoe.visible = true;
		this.food.visible = true;
		this.shoe.start();
		this.blattariaNum = 0;
		this.scoreNum = 0;
		this.scoreImgArr = [];
		this.bloodItemSize = { width: 30, height: 30 };
		this.bloodItemMargin = 6;
		this.foodBloodLength = 3;
		this.stages = gameStages;
		this.lizardTimer = 0;
		this.lizardTimer2 = 0;
		this.foodBloodLost = 0;
		this.bloodItemArr = [];
		this.gameBg.zOrder = -10;
		this.food.zOrder = 1;
		this.killBig = 0;
		this.timer.visible = true;
		this.shachongjiLife = 3000;
		this.shachongjiStartTime = 60000;
		this.shachongjiArr = [];
		this.shachongjiStartDrop = false;
		this.killBigNumOfStartDrop = 5;
		this.shachongjiDropProbability = 0.3;
		this.addEventListeners();
		this.renderPage();
		this.initializeFoodBloodBar();
		this.game.addChild(this.shoe);

	}

	_proto.initIphoneXAdpter = function () {
		if (LayaApp.iphoneXType == "iphoneX") {
			Laya.stage.height = 1624;
			console.log("iPhone X in Game");
			this.gameBg.height = 1624;
			this.bg_05.height = 1624;
			this.retryBtn.y += 100;
			this.homeBtn.y += 100;
			this.shareBtn.y += 100;
			this.shareBtn2.y += 100;
			this.rankBtn.y += 100;
			this.tips.y += 130;
			this.killAll.y += 100;
			this.backBtn.y += 50
		} else if (LayaApp.iphoneXType == "iphoneXR") {
			Laya.stage.height = 1792;
			Laya.stage.width = 828;
			console.log("iPhone X in Game");
			this.gameBg.height = 1792;
			this.bg_05.height = 1792;
			this.gameBg.width = 828;
			this.bg_05.width = 828;
			this.retryBtn.y += 150;
			this.homeBtn.y += 150;
			this.shareBtn.y += 150;
			this.shareBtn2.y += 150;
			this.rankBtn.y += 150;
			this.tips.y += 180;
			this.killAll.y += 150;
			this.backBtn.y += 80
			this.backBtn.x = 414;
			this.rankBtn.x = 414;
			this.shareBtn.x = 414;
			this.shareBtn2.x = 414;
			this.tips.x = 414;
			this.food.x = 414;
			this.btn2s.x = 414;
			this.btn2s.y += 25;
		}
	}

	_proto.addEventListeners = function () {
		addOnceClick(this.game, this, function (e) {
			if (this.blaArr.length > 0) {
				for (var k in this.blaArr) {
					if (this.blaArr[k].isTouch(e.target.mouseX, e.target.mouseY)) {
						this.blaArr[k].hit();
					}
				}
			}

			if (this.shachongjiArr.length > 0) {
				for (var k in this.shachongjiArr) {
					if (this.shachongjiArr[k].isTouch(e.target.mouseX, e.target.mouseY)) {
						this.killTimes++;
						this.killAllLabel.text = "x" + this.killTimes;
						this.shachongjiArr[k].removeSelf();
						this.shachongjiArr.splice(k, 1);
					}
				}
			}

			if (this.lizard && this.lizard.isTouch(e.target.mouseX, e.target.mouseY)) {
				this.lizard.hit();
			}
			if (this.lizard2 && this.lizard2.isTouch(e.target.mouseX, e.target.mouseY)) {
				this.lizard2.hit();
			}
		});

		addOnceClick(this.rankBtn, this, function () {
			if (this.bannerAd) {
				this.bannerAd.hide();
			}
			laya.media.SoundManager.playSound(clickMusic);
			this.backBtn.visible = true;
			this.shareBtn.disabled = true;
			this.shareBtn2.visible = true;
			this.rankBtn.visible = false;
			this.retryBtn.disabled = true;
			this.homeBtn.disabled = true;
			showOpenData(this, {
				type: "showRankList"
			});
			console.log("主域发送showRankList消息");
		});


		addOnceClick(this.backBtn, this, function () {
			if (this.bannerAd) {
				this.bannerAd.hide();
			}
			console.log("click backBtn");
			laya.media.SoundManager.playSound(clickMusic);
			if (this.rankSprite2) {
				this.rankSprite2.graphics.clear();
				this.rankSprite2.removeSelf();
				this.rankSprite2 = null;
				this.backBtn.visible = false;
				this.shareBtn.disabled = false;
				this.rankBtn.visible = true;
				this.shareBtn2.visible = false;
				this.retryBtn.disabled = false;
				this.homeBtn.disabled = false;
			}
		});

		addOnceClick(this.killAll, this, function () {
			if (this.killTimes > 0 && !this.over) {
				laya.media.SoundManager.playSound(killAllMusic);
				this.killTimes--;
				this.clearBla();
			}
		});

		addOnceClick(this.shareBtn, this, function () {
			if (this.bannerAd) {
				this.bannerAd.hide();
			}
			laya.media.SoundManager.playSound(clickMusic);
			wx.shareAppMessage({
				imageUrl: "http://www.md-qc.com/1.png",
				title: "我喜欢唱跳、rap、篮球，快来和我玩吧！"
			});
		});

		addOnceClick(this.shareBtn2, this, function () {
			if (this.bannerAd) {
				this.bannerAd.hide();
			}
			laya.media.SoundManager.playSound(clickMusic);
			wx.shareAppMessage({
				imageUrl: "http://www.md-qc.com/2.png",
				title: "你认真打球的样子，像极了……"
			});
		});

		addOnceClick(this.retryBtn, this, function () {
			if (this.bannerAd) {
				this.bannerAd.hide();
			}
			laya.media.SoundManager.playSound(clickMusic);
			this.resetGame();
		});

		addOnceClick(this.homeBtn, this, function () {
			if (this.bannerAd) {
				this.bannerAd.hide();
			}

			laya.media.SoundManager.playSound(clickMusic);
			if (this.rankSprite2) {
				this.rankSprite2.graphics.clear();
				this.rankSprite2.removeSelf();
				this.rankSprite2 = null;
			}
			this.removeSelf();
			LayaApp.game = null;
			LayaApp.gameStart.page1.visible = true;
			LayaApp.gameStart.page3.visible = false;
			Laya.stage.addChild(LayaApp.gameStart)
		});
	}

	_proto.initializeFoodBloodBar = function () {
		for (i = this.foodBloodLength; i > 0; i--) {
			var bloodItem = new BloodItem();
			bloodItem.visible = true;
			bloodItemX = this.bloodBg.x + 17 + i * (this.bloodItemSize.width + this.bloodItemMargin);
			bloodItemY = this.bloodBg.y + this.bloodBg.height / 2 - bloodItem.height / 2;
			// if(LayaApp.iphoneXType=="iphoneXR"){
			// 	bloodItemY+=83;
			// }else if(LayaApp.iphoneXType=="iphoneX"){
			// 	bloodItemY+=83;
			// }
			bloodItem.pos(bloodItemX, bloodItemY);
			this.bloodItemArr.push(bloodItem);
			this.game.addChild(bloodItem);
		}
	}

	_proto.updateFoodBloodBar = function () {
		laya.media.SoundManager.playSound(loseHpMusic);
		this.bloodItemArr[this.foodBloodLost - 1].img.skin = "comp/lose_hp.png";
	}
	_proto.renderPage = function () {
		// Laya.timer.loop(16.6,this,function(){
		// 	this.scoreNum+=0.0166;
		// 	this.score.text=this.scoreNum.toFixed(2);
		// })
		Laya.timer.loop(20, this, function () {
			if (this.over) {
				return;
			}
			this.updateScore();
			this.initializeStageParams();
			this.produceBlattaria();
			this.produceShachongji();
			this.produceLizard();
			this.updateLizardsStatus();
			this.updateShachongjisStatus();
			this.updateBlattariasStatus();
			this.timeCount += 20;
		});
	}

	_proto.updateScore = function () {
		this.scoreNum += 0.02;
		this.score.text = this.scoreNum.toFixed(2) + "s";
	}

	_proto.initializeStageParams = function () {
		var stageObj;
		for (j = 0; j < this.stages.length; j++) {
			if (this.timeCount >= this.stages[j].minTimeCount && this.timeCount < this.stages[j].maxTimeCount) {
				stageObj = this.stages[j];
				this.setStageParams(stageObj);
				break;
			}
		}
	}

	_proto.setStageParams = function (stageObj) {
		this.lv1Space = stageObj.lv1Space;
		this.lv2Space = stageObj.lv2Space;
		this.lizardLife = stageObj.lizardLife;
		this.lizardSpace = stageObj.lizardSpace;
	}

	_proto.produceBlattaria = function (lv) {
		this.blattariaNum++;
		var x;
		var y;
		if (this.blattariaNum % 8 == 0) {
			x = -10;
			y = rd(-10, 1350);
		} else if (this.blattariaNum % 8 == 4) {
			x = 760;
			y = rd(150, 1350);
		} else if (this.blattariaNum % 8 == 1 || this.blattariaNum % 8 == 3 || this.blattariaNum % 8 == 6) {
			x = rd(-10, 500);
			y = -20;
		} else if (this.blattariaNum % 8 == 2 || this.blattariaNum % 8 == 5 || this.blattariaNum % 8 == 7) {
			x = rd(-10, 760);
			y = 1350;
		}
		if (this.timeCount % this.lv1Space == 0) {
			var bla = poolPopBlaItem(x, y, 1);
			console.log("produceBlattaria lv1,x：" + bla.panel.x + ", y: " + bla.panel.y + ", lv: " + bla.lv);
			this.game.addChild(bla.panel);
			bla.panel.zOrder = -8;
			this.blaArr.push(bla);
		}
		if (this.timeCount % this.lv2Space == 0) {
			var bla = poolPopBlaItem(x, y, 2);
			console.log("produceBlattaria lv2,x：" + bla.panel.x + ", y: " + bla.panel.y + ", lv: " + bla.lv);
			this.game.addChild(bla.panel);
			bla.panel.zOrder = -8;
			this.blaArr.push(bla);
		}
	};

	_proto.updateBlattariasStatus = function () {
		if (this.blaArr.length > 0) {
			var toRm = [];
			for (var k in this.blaArr) {
				this.blaArr[k].move(rd(0, 360), this.blaArr[k].lv == 1 ? 2 : 1);
				if (this.blaArr[k].toRemove) {
					this.blaArr[k].panel.removeSelf();
					Laya.Pool.recover("Blattaria", this.blaArr[k]);
					toRm.push(k);
				}
			}
			for (var i = toRm.length - 1; i >= 0; i--) {
				this.blaArr.splice(toRm[i], 1);
			}
		}
	}

	_proto.produceShachongji = function () {
		if (this.timeCount > this.shachongjiStartTime) {
			this.shachongjiStartDrop = true;
		}
		if (this.killBig >= this.killBigNumOfStartDrop) {
			this.killBig = 0;
			var rdd = Math.random();
			if (rdd < this.shachongjiDropProbability) {
				var shachongji = new shanchongji();
				shachongji.appear();
				this.game.addChild(shachongji);
				this.shachongjiArr.push(shachongji);
			}
		}
	}

	_proto.updateShachongjisStatus = function () {
		if (this.shachongjiArr.length > 0) {
			var toRmv = [];
			for (var k in this.shachongjiArr) {

				this.shachongjiArr[k].timer += 20;

				if (this.shachongjiArr[k].timer >= this.shachongjiLife) {
					this.shachongjiArr[k].disappear();
					this.shachongjiArr.splice(k, 1);
				}
			}
		}
	}


	_proto.produceLizard = function () {
		if (this.timeCount > 0 && this.timeCount % this.lizardSpace == 0) {
			console.log("produceLizard produced , this.timeCount is " + this.timeCount + "this.lizardSpace is " + this.lizardSpace);
			var x = rd(50, 700);
			var y = rd(50, 1330);
			if (this.lizard) {
				this.lizard2 = new Lizard(x, y);
				this.game.addChild(this.lizard2.panel);
				this.lizard2.panel.zOrder = -8;
			} else {
				this.lizard = new Lizard(x, y);
				this.game.addChild(this.lizard.panel);
				this.lizard.panel.zOrder = -8;
			}
		}
	}

	_proto.updateLizardsStatus = function () {
		if (this.lizard) {
			this.lizardTimer += 20;
			this.lizard.move(rd(0, 360), rd(100, 300), 2);
		}
		if (this.lizard2) {
			this.lizardTimer2 += 20;
			this.lizard2.move(rd(0, 360), rd(100, 300), 2);
		}
		if (this.lizard && this.lizardTimer >= this.lizardLife) {
			this.lizard.panel.removeSelf();
			this.lizardTimer = 0;
			this.lizard = null;
		}

		if (this.lizard2 && this.lizardTimer2 >= this.lizardLife) {
			this.lizard2.panel.removeSelf();
			this.lizardTimer2 = 0;
			this.lizard2 = null;
		}
	}
	_proto.showScoreAnimate = function () {
		var scoreImg = new Laya.Sprite();
		scoreImg.pos(320, 400);
		Laya.stage.addChild(scoreImg);
		scoreImg.loadImage("comp/score_reduce.png");
		scoreImg.scale(2, 2);
		scoreImg.visible = true;
		Laya.Tween.to(scoreImg, { y: scoreImg.y - 150 }, 1000, Laya.Ease.backOut);
		this.scoreImgArr.push(scoreImg);
		var _this = this;
		Laya.timer.once(500, this, function () { scoreImg.removeSelf(); });
	}

	_proto.clearBla = function () {
		for (var k in this.blaArr) {
			this.blaArr[k].hit(true);
		}
		this.killAllLabel.text = "x" + this.killTimes;
		shake(this, 8, 30);
	};


	_proto.gameOver = function () {
		if (window['wx']) {
			var _this = this;
			wx.getSystemInfo({
				success: function (obj) {
					_this.device = new Laya.Point(obj.windowWidth, obj.windowHeight);
					_this.bannerAd = wx.createBannerAd({
						adUnitId: 'adunit-eee995c9853a1e80',
						style: {
							left: 0,
							top: _this.device.y - 110,
							width: _this.device.x,
							height: 100
						}
					})
					_this.bannerAd.show()
					_this.bannerAd.onError(function (err) {
						console.log(err)
					})
					_this.bannerAd.onLoad(function () {
						console.log('banner 广告加载成功')
					})
				}
			});

		}
		this.retryBtn.disabled = false;
		this.homeBtn.disabled = false;
		laya.media.SoundManager.playSound(gameOverMusic);
		this.shoe.visible = false;
		this.shoe.end();
		shake(this, 5);
		this.game.visible = false;
		this.gameOverPanel.visible = true;
		this.gameOverPanel.zOrder = 99;
		this.tips.text = "本次成绩：" + this.scoreNum.toFixed(2) + "s";
		// laya.media.SoundManager.playSound("res/music/fail.mp3");
		this.over = true;
		var _this = this;
		for (i = 0; i < this.bloodItemArr.length; i++) {
			this.bloodItemArr[i].removeSelf();
		}
		if (window["wx"]) {
			var data = [{ key: "score", value: this.scoreNum.toFixed(2) + "" }];
			// 让子域更新当前用户的最高分，因为主域无法得到getUserCloadStorage;
			var openDataContext = wx.getOpenDataContext();
			openDataContext.postMessage({
				type: 'updateMaxScore',
				score: parseFloat(_this.scoreNum.toFixed(2))
			});
			console.log("主域发送updateMaxScore消息");
		}

		if (window["tt"]) {
			var data = [{ key: "score", value: this.scoreNum.toFixed(2) + "" }];
			// 让子域更新当前用户的最高分，因为主域无法得到getUserCloadStorage;
			var openDataContext = tt.getOpenDataContext();
			openDataContext.postMessage({
				type: 'updateMaxScore',
				score: parseFloat(_this.scoreNum.toFixed(2))
			});
		}

		for (var i = this.scoreImgArr.length - 1; i >= 0; i--) {
			this.scoreImgArr[i].removeSelf();
		}
	};

	_proto.resetGame = function () {
		for (var k in this.blaArr) {
			this.blaArr[k].panel.removeSelf();
		}
		this.game.visible = true;
		this.gameOverPanel.visible = false;
		this.blaArr = [];
		this.scoreNum = 0;
		this.over = false;
		this.killTimes = 1;
		this.killAllLabel.text = "x1";
		this.foodBloodLost = 0;
		this.bloodItemArr = [];
		this.timer.visible = true;
		this.lizardTimer = 0;
		this.lizardTimer2 = 0;
		this.timeCount = 0;
		this.killBig = 0;
		this.shachongjiStartDrop = false;
		this.shoe.visible = true;
		this.shoe.start();
		for (k = 0; k < this.shachongjiArr.length; k++) {
			this.shachongjiArr[k].removeSelf();
			// this.shachongjiArr.splice(k,1);
		}
		if (this.lizard) {
			this.lizard.panel.removeSelf();
			this.lizard = null;
		}
		if (this.lizard2) {
			this.lizard2.panel.removeSelf();
			this.lizard2 = null;
		}
		this.initializeFoodBloodBar();
		this.shachongjiArr = [];
	};

	return Game;
})(GameUI)