/**Created by the LayaAirIDE*/
var GameGuid = (function (_super) {
	function GameGuid() {
		GameGuid.__super.call(this);
		this.gameGuid.on(Laya.Event.CLICK, this, this.onStartGame)

	}
	Laya.class(GameGuid, 'view.GameGuid', _super);
	var _proto = GameGuid.prototype;
	_proto.onStartGame = function () {
		this.removeSelf();
		if (!LayaApp.game) {
			LayaApp.game = new Game();
		}
		Laya.stage.addChild(LayaApp.game);
	}
	return GameGuid;
})(GameGuidUI)