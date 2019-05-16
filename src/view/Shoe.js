/**Created by the LayaAirIDE*/
var shoe = (function (_super) {
	function shoe() {
		shoe.__super.call(this);
	}

	Laya.class(shoe, 'view.shoe', _super);

	var _proto = shoe.prototype;
	//开始使用
	_proto.start = function () {
		// Laya.Mouse.hide();
		Laya.stage.on(Laya.Event.CLICK, this, this.onClick);
		Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
		this.onMouseMove();
	}
	//结束使用
	_proto.end = function () {
		Laya.Mouse.show();
		Laya.stage.off(Laya.Event.CLICK, this, this.onClick);
		Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
	}

	_proto.onClick = function () {
		this.ani1.play(0, false);
		this.pos(Laya.stage.mouseX - this.width / 2, Laya.stage.mouseY -Laya.stage.y- this.height / 2);
	}
	_proto.onMouseMove = function () {
		this.pos(Laya.stage.mouseX - this.width / 2, Laya.stage.mouseY -Laya.stage.y- this.height / 2);
	}
	return shoe;
})(shoeUI)