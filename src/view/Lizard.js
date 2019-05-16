var Lizard = (function () {
    function Lizard(x, y) {
        this.initializ(x, y);
    }
    var _proto = Lizard.prototype;

    _proto.initializ= function (x, y) {
        this.panel = new Laya.Box();
        this.panel.x = x;
        this.panel.y = y;
        this.panel.width = 100;
        this.panel.height = 200;
        this.panel.anchorX = .5; 
        this.panel.anchorY = .5;
        // this.panel.scale(0.5, 0.5)  ;
        this.live = true;
        this.blink = 0;
        this.rotate = 0;
        this.generateLizard();
        this.time = 0;
        this.task = false;
    }

    _proto.generateLizard = function () {
        var _this = this;
        var factory = new Laya.Templet();
        factory.loadAni("res/dragonBones/LSH.sk");
        factory.on(Laya.Event.COMPLETE, this, function () {
            _this.ani = factory.buildArmature(1);
            _this.ani.x = 40;
            _this.ani.y = 110;
            _this.panel.addChild(_this.ani);
            _this.ani.play(0, true);
        });
        this.ani = _this.ani;
    }

    _proto.isTouch = function (x, y) {
        if (this.live) {
            return new Laya.Rectangle(this.panel.x - this.panel.width / 4, this.panel.y - this.panel.height / 4, this.panel.width / 2, this.panel.height / 2).contains(x, y);
        } else {
            return false;
        }
    };

    _proto.hit = function () {
        if (this.ani) {
            this.ani.removeSelf();
        }
        LayaApp.game.gameOver();
        this.live = false;
    }

    _proto.move = function(rot, time, speed) {
        if (this.live) {
            if (this.task) {
                this.time--;
                var change = false;
                if (this.panel.x < 50 && this.rotate < 180) {
                    this.rotate = rd(180, 360);
                    change = true;
                } else if (this.panel.x > Laya.stage.width - 50 && this.rotate > 180) {
                    this.rotate = rd(0, 180);
                    change = true;
                }
                if (this.panel.y > Laya.stage.height - 50 && (this.rotate > 0 && this.rotate < 90 || this.rotate > 270)) {
                    this.rotate = rd(90, 270);
                    change = true;
                } else if (this.panel.y < 50 && (this.rotate > 90 && this.rotate < 270)) {
                    this.rotate = rd(0, 1) == 0 ? rd(0, 90) : rd(270, 360);
                    change = true;
                }
                if (change) {
                    this.panel.rotation = this.rotate + 180;
                }
                this.panel.x += this.speed * Math.cos((this.rotate + 90) / 180 * Math.PI);
                this.panel.y += this.speed * Math.sin((this.rotate + 90) / 180 * Math.PI);
                if (this.time <= 0) {
                    this.task = false;
                }
            } else {
                this.time = time / 2;
                this.rotate = rot;
                this.speed = speed * 1;
                this.task = true;
                if (this.ani != null) {
                    this.ani.playbackRate(this.speed / 2);
                }
                this.panel.rotation = rot + 180;
            }
        } else {
            this.blink++;
            if (this.blink > 100) {
                this.remove = true;
            }
        }
    };

    return Lizard;
})()