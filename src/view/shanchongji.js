/**Created by the LayaAirIDE*/
var shanchongji = (function (_super) {
	function shanchongji() {
		shanchongji.__super.call(this);
		this.timer = 0;
	}

	Laya.class(shanchongji, 'view.shanchongji', _super);
	var _proto = shanchongji.prototype;

	_proto.appear = function () {
		this.ani1.play(0, false);
		this.x = rd(100, 650);
		this.y = rd(100, 1240);
		this.pos(this.x, this.y);
		console.log("shanchongji appear");
	}

	_proto.isTouch = function (x, y) {
		return new Laya.Rectangle(this.x,this.y, this.width, this.height).contains(x, y);
	};


	_proto.disappear = function () {
		this.ani2.play(0, false);
	}


	return shanchongji;
})(shanchongjiUI)