/**
 * 启动界面类
 */
var GameStart = (function (_super) {
    function GameStart() {
        GameStart.__super.call(this);

 

        addOnceClick(this.page1, this, function () {
            laya.media.SoundManager.playSound(clickMusic);
            this.page1.visible = false;
            this.page2.visible = true;
        })

        addOnceClick(this.startBtn, this, function () {
            laya.media.SoundManager.playSound(clickMusic);
            this.page2.visible = false;
            this.page3.visible = true;
        })

        addOnceClick(this.rankBtn, this, function () {
            laya.media.SoundManager.playSound(clickMusic);
            this.homeBtn.visible = true;
            this.startBtn.disabled = true;
            this.rankBtn.visible = false;
            this.shareBtn.visible = true;
            showOpenData(this, {
                type: "showRankList"
            });
            console.log("主域发送showRankList消息");
        })
        addOnceClick(this.homeBtn, this, function () {
            laya.media.SoundManager.playSound(clickMusic);
            if (this.rankSprite2) {
                this.rankSprite2.graphics.clear();
                this.rankSprite2.removeSelf();
                this.rankSprite2 = null;
                this.homeBtn.visible = false;
                this.startBtn.disabled = false;
                this.rankBtn.visible = true;
                this.shareBtn.visible = false;
            }
        });
        addOnceClick(this.shareBtn, this, function () {
            laya.media.SoundManager.playSound(clickMusic);
            wx.shareAppMessage({
                imageUrl: "http://www.md-qc.com/1.png",
                title: "我喜欢唱跳、rap、篮球，快来和我玩吧！"
            });
        });
        addOnceClick(this.page3, this, function () {
            laya.media.SoundManager.playSound(clickMusic);
            this.removeSelf();
            if (!LayaApp.game) {
                LayaApp.game = new Game();
                Laya.stage.addChild(LayaApp.game);
            }
        })
        this.initIphoneXAdpter();
    }

    Laya.class(GameStart, 'view.GameStart', _super);
    var _proto = GameStart.prototype;

    _proto.initIphoneXAdpter = function () {
        if (LayaApp.iphoneXType == "iphoneX") {
            Laya.stage.height = 1624;
            console.log("iPhone X in GameStart");
            this.page1.height = 1624;
            this.bg_02.height = 1624;
            this.page3.height = 1624;
            this.rankBtn.y += 100;
            this.startBtn.y += 100;
            this.homeBtn.y += 100;
            this.shareBtn.y += 100;
        } else if (LayaApp.iphoneXType == "iphoneXR") {
            Laya.stage.height = 1792;
            Laya.stage.width = 828;
            console.log("iPhone XR in GameStart");
            this.page1.height = 1792;
            this.bg_02.height = 1792;
            this.page3.height = 1792;
            this.page1.width = 828;
            this.bg_02.width = 828;
            this.page3.width = 828;
            this.rankBtn.y += 100;
            this.startBtn.y += 100;
            this.homeBtn.y += 100;
            this.rankBtn.x = 414;
            this.startBtn.x = 414;
            this.homeBtn.x = 414;
            this.shareBtn.x = 414;
            this.shareBtn.y += 100;
        }
    }

    return GameStart;
})(GameStartUI)