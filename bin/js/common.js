/*
* name;
*/

var screenWidth = 750;

var screenHeight = 1334;

CrawlRectangleHeight = 0.3881 * screenHeight;

var Handler = Laya.Handler;
var clickMusic = "res/music/click.mp3";
var gameOverMusic = "res/music/gameOver.mp3";
var killAllMusic = "res/music/killAll.mp3";
var loseHpMusic = "res/music/lose_hp.mp3";
var lv1DieMusic = "res/music/lv1_die.mp3";
var lv2DieMusic = "res/music/lv2_die.mp3";
var lv2HitMusic = "res/music/lv2Hit.mp3";
var warningMusic = "res/music/warning.mp3";
var gameStages = [
    {
        minTimeCount: 0,
        maxTimeCount: 10000,
        lv1Space: 2000,
        lv2Space: 3000,
        lizardLife: 5000,
        lizardSpace: 10000
    },
    {
        minTimeCount: 10000,
        maxTimeCount: 30000,
        lv1Space: 500,
        lv2Space: 2000,
        lizardLife: 5000,
        lizardSpace: 5000
    }, {
        minTimeCount: 30000,
        maxTimeCount: 60000,
        lv1Space: 500,
        lv2Space: 500,
        lizardLife: 5000,
        lizardSpace: 4000
    }, {
        minTimeCount: 60000,
        maxTimeCount: 90000,
        lv1Space: 250,
        lv2Space: 500,
        lizardLife: 5000,
        lizardSpace: 4000
    }, {
        minTimeCount: 90000,
        maxTimeCount: 90000000,
        lv1Space: 200,
        lv2Space: 500,
        lizardLife: 5000,
        lizardSpace: 4000
    }
];

function poolPopBlaItem(x, y, lv) {
    var bla = Laya.Pool.getItemByClass("Blattaria", Blattaria);
    bla.initializ(x, y, lv);
    bla.live = true;
    bla.toRemove = false;
    return bla;
}

var rd = function (min, max) {
    return Math.round(Math.random() * 1e13) % (max - min + 1) + min;
};


// 单次点击
function addOnceClick(btn, caller, func) {
    btn.offAll();
    btn.on(Laya.Event.CLICK, caller, func);
}

function http(ip, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", ip, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // var response = xhr.responseText.substr(1,xhr.response.length-2);
            var response = xhr.responseText;
            var result = JSON.parse(response);
            if (callback) {
                callback(result);
            }
        }
    };
    xhr.send();
}

function blink(obj, delay, times, show) {
    if (times > 0) {
        Laya.Tween.to(obj, {
            alpha: show ? 1 : 0
        }, delay, null, Handler.create(this, function () {
            blink(obj, delay, --times, !show);
        }), show ? 0 : 100);
    }
}

function showOpenData(parent, arg, showClose) {
    if (showClose === void 0) {
        showClose = null;
    }
    if (window["wx"]) {
        Laya.timer.once(1000, parent, function () {
            if (Laya.Browser.onMiniGame) {
                parent.rankSprite2 = new Laya.Sprite();
                parent.rankSprite2.pos(0, 0);
                var rankTexture = new Laya.Texture(Laya.Browser.window.sharedCanvas);
                rankTexture.bitmap.alwaysChange = true;
                //小游戏使用，非常费，每帧刷新
                parent.rankSprite2.graphics.drawTexture(rankTexture, 0, 0, rankTexture.width, rankTexture.height);
                Laya.stage.addChild(parent.rankSprite2);
                wx.getSystemInfo({
                    success: function (res) {
                        if (res.screenWidth == 414 && res.screenHeight == 896) {
                            parent.rankSprite2(0, 0);
                        }
                    }
                })
                wx.postMessage(arg);

            }
        });
    }
}

function checkIphoneXtype(obj) {
    wx.getSystemInfo({
        success: function (res) {
            console.log(res.model);
            if (res.screenWidth == 375 && res.screenHeight == 812) {
                obj.checkIphoneXtype="iphoneX";
                // Laya.stage.height = 1624;
                // console.log("iPhone X in Game");
                // _this.gameBg.height = 1624;
                // _this.bg_05.height = 1624;
                // _this.retryBtn.y += 100;
                // _this.homeBtn.y += 100;
                // _this.shareBtn.y += 100;
                // _this.shareBtn2.y += 100;
                // _this.rankBtn.y += 100;
                // _this.tips.y += 130;
                // _this.killAll.y += 100;
                // _this.backBtn.y += 50
            } else if (res.screenWidth == 414 && res.screenHeight == 896) {
                obj.checkIphoneXtype="iphoneXR";
                // Laya.stage.height = 1792;
                // Laya.stage.width = 828;
                // Laya.stage.y = 240;
                // _this.bg_05.y = -240;
                // _this.gameBg.y = -240;
                // console.log("iPhone X in Game");
                // _this.gameBg.height = 1792;
                // _this.bg_05.height = 1792;
                // _this.gameBg.width = 828;
                // _this.bg_05.width = 828;
                // _this.retryBtn.y += 150;
                // _this.homeBtn.y += 150;
                // _this.shareBtn.y += 150;
                // _this.shareBtn2.y += 150;
                // _this.rankBtn.y += 150;
                // _this.tips.y += 180;
                // _this.killAll.y += 150;
                // _this.backBtn.y += 80
                // _this.backBtn.x = 414;
                // _this.rankBtn.x = 414;
                // _this.shareBtn.x = 414;
                // _this.shareBtn2.x = 414;
                // _this.headerBar.y -= 240;
                // _this.tips.x = 414;
                // _this.food.x = 414;
                // _this.btn2s.x = 414;
                // _this.btn2s.y += 25;


            } else {
                obj.checkIphoneXtype=false;
            }
        }
    })
}


var shake = function (obj, num, time) {
    var dx = num == 0 ? 0 : Math.random() * 1e8 % 10 * (parseInt(Math.random() * 100 + "") % 2 == 0 ? 1 : -1);
    var dy = num == 0 ? 0 : Math.random() * 1e8 % 10 * (parseInt(Math.random() * 100 + "") % 2 == 0 ? 1 : -1);

    Laya.Tween.to(obj, {
        x: dx,
        y: dy
    }, time || 50, null, Laya.Handler.create(this, function () {
        if (num > 0) {
            shake(obj, num - 1, time);
        }
    }));
};


function getAngle(panelX, panelY, foodX, foodY) {
    var cos;
    var dx = Math.abs(foodX - panelX);
    var dy = Math.abs(foodY - panelY);
    var dz = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    var cos = dy / dz;
    var radina = Math.acos(cos);//用反三角函数求弧度
    var angle = Math.floor(180 / (Math.PI / radina));
    if (panelX > foodX && panelY < foodY) {
        // 第一象限
        angle = angle;
    } else if (panelX > foodX && panelY > foodY) {
        // 第二象限
        angle = 180 - angle;
    } else if (panelX < foodX && panelY > foodY) {
        // 第三象限
        angle = 180 + angle;
    } else if (panelX < foodX && panelY < foodY) {
        // 第四象限
        angle = - angle;
    }
    return angle;
}


if (window["wx"]) {
    window["wx"].showShareMenu({
        withShareTicket: true
    });
    window["wx"].onShareAppMessage(function () {
        // 用户点击了“转发”按钮
        return {
            title: '你知道小鸡打篮球有多努力吗？',
            imageUrl: "http://www.md-qc.com/3.png"
        }
    })
}