/*
* name;
*/
var GameStartAnimate = (function (_super) {
    function GameStartAnimate() {
        GameStartAnimate.__super.call(this);
    }

    Laya.class(GameStartAnimate, 'view.GameStartAnimate', _super);

    var _proto = GameStartAnimate.prototype;

    _proto.start = function () {
        this.ani1.play(0, false);
    }
    return GameStartAnimate;
}(GameStartAnimateUI));