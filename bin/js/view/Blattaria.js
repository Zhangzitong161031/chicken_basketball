var Blattaria = (function () {
    function Blattaria() {

    }
    var _proto = Blattaria.prototype;

    _proto.initializ = function (x, y, lv) {
        this.panel = new Laya.Box();
        this.panel.x = x;
        this.panel.y = y;
        this.lv = lv;
        if (this.panel.x < 375) {
            if (this.lv == 1) {
                this.scaleX = -0.5;
            } else {
                this.scaleX = 0.5;
            }

        } else {
            if (this.lv == 1) {
                this.scaleX = 0.5;
            } else {
                this.scaleX = -0.5;
            }
        }


        this.panel.width = 90;
        this.panel.height = 135;
        this.panel.anchorX = .5;
        this.panel.anchorY = .5;
        // this.panel.scale(lv == 2?0.5:0.5, lv == 2?0.5:0.5);
        this.live = true;
        this.time = 0;
        this.task = false;
        this.blink = 0;
        this.rotate = 0;
        this.speed = 0;
        this.dieImgSrc = this.lv == 1 ? "comp/xiaoji_die.png" : "comp/daji_die.png";
        this.hp = lv == 1 ? 1 : 3;
        this.foodX = LayaApp.game.food.x;
        this.foodY = LayaApp.game.food.y;
        this.foodWidth = LayaApp.game.food.width;
        this.foodHeight = LayaApp.game.food.height;
        this.angle = getAngle(this.panel.x, this.panel.y, this.foodX, this.foodY);
        // this.panel.rotation = 180;
        this.generateBlattaria();
    }

    _proto.generateBlattaria = function () {
        var _this = this;
        var factory = new Laya.Templet();
        factory.loadAni(_this.lv == 1 ? "res/dragonBones/XJ_1.sk" : "res/dragonBones/DJ.sk");
        factory.on(Laya.Event.COMPLETE, this, function () {
            _this.ani = factory.buildArmature(1);
            _this.ani.x = 50;
            _this.ani.y = 80;
            // _this.ani.anchorX = .5;
            // _this.ani.anchorY = .5;
            _this.panel.scale(_this.scaleX, 0.5);
            _this.panel.addChild(_this.ani);
            _this.ani.play(0, true);
        });
        this.ani = _this.ani;
    }

    _proto.isTouch = function (x, y) {
        if (this.live) {
            // return new Laya.Rectangle(this.panel.x - this.panel.width / 4, this.panel.y - this.panel.height / 4, this.panel.width / 2, this.panel.height / 2).contains(x, y);
            return new Laya.Rectangle(this.panel.x - this.panel.width / 2, this.panel.y - this.panel.height / 2, this.panel.width, this.panel.height).contains(x, y);
        } else {
            return false;
        }
    };

    _proto.hit = function (killAll = false) {
        this.hp--;
        if (killAll) {
            this.hp = 0;
        }
        if (this.hp > 0 && this.lv == 2 && killAll == false) {
            laya.media.SoundManager.playSound("res/music/lv2Hit.mp3");
        }
        if (this.hp <= 0) {
            if (killAll == false) {
                laya.media.SoundManager.playSound("res/music/lv" + this.lv + "_die.mp3");
            }
            if (LayaApp.game.shachongjiStartDrop && this.lv == 2 && killAll == false) {
                LayaApp.game.killBig += 1;
                console.log("LayaApp.game.killBig+=1;");
            }
            if (this.ani) {
                this.ani.removeSelf();
            }
            this.dieImg = new Laya.Image(this.dieImgSrc);
            this.dieImg.scale(3,3);
            this.dieImg.centerX = 0;
            this.dieImg.centerY = -30;
            this.panel.addChild(this.dieImg);
            this.live = false;
        }
    }

    _proto.move = function (rot, speed) {
        if (this.live) {
            this.time--;
            var dX = this.foodX - this.panel.x;
            var dY = this.foodY - this.panel.y;
            var dZ = Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));
            this.xRate = dX / dZ;
            this.yRate = dY / dZ;
            if (!this.checkEat(this.panel.x, this.panel.y)) {
                this.panel.x += speed * this.xRate;
                this.panel.y += speed * this.yRate;
            } else {
                this.blink++;
                if (this.blink > 50) {
                    this.toRemove = true;
                    LayaApp.game.showScoreAnimate();
                    LayaApp.game.foodBloodLost += 1;
                    if (LayaApp.game.foodBloodLost < LayaApp.game.foodBloodLength) {
                        LayaApp.game.updateFoodBloodBar();
                    } else if (LayaApp.game.foodBloodLost == LayaApp.game.foodBloodLength) {
                        LayaApp.game.updateFoodBloodBar();
                        LayaApp.game.gameOver();
                    }
                }
            }
        } else {
            this.blink++;
            if (this.blink > 50) {
                this.toRemove = true;
            }
        }
    }

    _proto.checkEat = function () {
        var rectangle = this.panel.getBounds().intersection(LayaApp.game.food.getBounds());
        if (rectangle && rectangle.width * rectangle.height > 2500) {
            return true;
        }
        return false;
    }

    return Blattaria;
})()