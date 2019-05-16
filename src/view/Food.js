/**Created by the LayaAirIDE*/
var Food = (function (_super) {
	function Food() {
		Food.__super.call(this);
		this.x = screenWidth / 2;
		this.y = screenHeight / 2;
		this.anchorX = .5;
		this.anchorY = .5;
	}
	Laya.class(Food, 'view.Food', _super);
	return Food;
})(FoodUI)