var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var BloodItemUI=(function(_super){
		function BloodItemUI(){
			
		    this.img=null;

			BloodItemUI.__super.call(this);
		}

		CLASS$(BloodItemUI,'ui.BloodItemUI',_super);
		var __proto__=BloodItemUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BloodItemUI.uiView);

		}

		BloodItemUI.uiView={"type":"View","props":{"width":25,"visible":true,"height":25},"child":[{"type":"Image","props":{"y":0,"x":0,"width":26,"var":"img","skin":"comp/remaining_hp.png","height":25}}]};
		return BloodItemUI;
	})(View);
var FoodUI=(function(_super){
		function FoodUI(){
			

			FoodUI.__super.call(this);
		}

		CLASS$(FoodUI,'ui.FoodUI',_super);
		var __proto__=FoodUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(FoodUI.uiView);

		}

		FoodUI.uiView={"type":"View","props":{"width":1,"rotation":0,"height":1},"child":[{"type":"Image","props":{"y":0,"x":0,"width":100,"skin":"comp/basketball_hoop.png","rotation":-1,"height":133,"anchorY":0.5,"anchorX":0.5}}]};
		return FoodUI;
	})(View);
var GameUI=(function(_super){
		function GameUI(){
			
		    this.game=null;
		    this.gameBg=null;
		    this.killAll=null;
		    this.killAllLabel=null;
		    this.timerBg=null;
		    this.score=null;
		    this.bloodBg=null;
		    this.gameOverPanel=null;
		    this.bg_05=null;
		    this.shareBtn=null;
		    this.rankBtn=null;
		    this.tips=null;
		    this.backBtn=null;
		    this.shareBtn2=null;
		    this.btn2s=null;
		    this.retryBtn=null;
		    this.homeBtn=null;

			GameUI.__super.call(this);
		}

		CLASS$(GameUI,'ui.GameUI',_super);
		var __proto__=GameUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameUI.uiView);

		}

		GameUI.uiView={"type":"View","props":{"y":0,"x":0,"width":750,"height":1334,"anchorY":0,"anchorX":0},"child":[{"type":"Box","props":{"y":0,"x":0,"visible":true,"var":"game"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"var":"gameBg","skin":"comp/white.png","height":1334,"anchorY":0,"anchorX":0}},{"type":"Image","props":{"y":1202,"x":632,"width":88,"var":"killAll","skin":"comp/killAll.png","height":88,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":-32,"x":7,"width":73,"var":"killAllLabel","text":"X1","height":27,"fontSize":30,"color":"#2cfd05","align":"center"}}]},{"type":"Image","props":{"y":114,"x":444,"width":256,"var":"timerBg","skin":"comp/timer_bg.png","height":61,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":114,"x":449,"width":131,"visible":true,"var":"score","text":"1000","height":34,"fontSize":35,"color":"#201e1e","anchorY":0.5,"anchorX":0.5,"align":"left"}},{"type":"Image","props":{"y":115,"x":358,"width":35,"skin":"comp/timer_ico.jpg","height":36,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":84,"x":24,"width":212,"var":"bloodBg","skin":"comp/blood_bg.png","height":61}}]},{"type":"Box","props":{"y":0,"x":0,"visible":false,"var":"gameOverPanel"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"var":"bg_05","skin":"comp/bg_05.jpg","height":1334}},{"type":"Image","props":{"y":960,"x":376,"width":245,"var":"shareBtn","skin":"comp/shareBtn.png","height":72,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":1056,"x":375,"width":245,"var":"rankBtn","skin":"comp/rankBtn.png","height":72,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":565,"x":362,"width":311,"var":"tips","height":59,"fontSize":40,"color":"#ff6d1e","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":1224,"x":378,"width":77,"visible":false,"var":"backBtn","skin":"comp/homeBtn.png","height":77,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":76,"x":12,"text":"返回","fontSize":30,"color":"#010000"}}]},{"type":"Image","props":{"y":1054,"x":378,"width":245,"visible":false,"var":"shareBtn2","skin":"comp/shareBtn2.png","height":72,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":835,"x":374,"width":245,"var":"btn2s","height":71,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":39,"x":208,"width":80,"visible":true,"var":"retryBtn","skin":"comp/retryBtn.png","height":78,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":39,"x":40,"width":80,"var":"homeBtn","skin":"comp/homeBtn.png","height":78,"anchorY":0.5,"anchorX":0.5}}]}]}]};
		return GameUI;
	})(View);
var GameStartUI=(function(_super){
		function GameStartUI(){
			
		    this.ani1=null;
		    this.page1=null;
		    this.page3=null;
		    this.page2=null;
		    this.bg_02=null;
		    this.startBtn=null;
		    this.rankBtn=null;
		    this.homeBtn=null;
		    this.shareBtn=null;

			GameStartUI.__super.call(this);
		}

		CLASS$(GameStartUI,'ui.GameStartUI',_super);
		var __proto__=GameStartUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameStartUI.uiView);

		}

		GameStartUI.uiView={"type":"View","props":{"width":750,"visible":true,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"var":"page1","skin":"comp/bg_01.jpg","sizeGrid":"","height":1334},"compId":17},{"type":"Image","props":{"y":0,"x":0,"width":750,"visible":false,"var":"page3","skin":"comp/bg_03.jpg","height":1334}},{"type":"Box","props":{"y":0,"x":0,"width":750,"visible":false,"var":"page2","height":1336},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"var":"bg_02","skin":"comp/white.png","height":1334}},{"type":"Image","props":{"y":597,"x":375,"width":245,"var":"startBtn","skin":"comp/startBtn.png","height":72,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":707,"x":374,"width":245,"var":"rankBtn","skin":"comp/rankBtn.png","height":72,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":1236,"x":375,"width":119,"visible":false,"var":"homeBtn","skin":"comp/homeBtn.png","height":122,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":119,"x":9,"width":100,"text":"返回","height":30,"fontSize":36,"color":"#030000","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":703,"x":375,"width":245,"visible":false,"var":"shareBtn","skin":"comp/shareBtn2.png","height":72,"anchorY":0.5,"anchorX":0.5}}]}],"animations":[{"nodes":[{"target":17,"keyframes":{"sizeGrid":[{"value":"","tweenMethod":"linearNone","tween":false,"target":17,"key":"sizeGrid","index":0}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
		return GameStartUI;
	})(View);
var GameStartAnimateUI=(function(_super){
		function GameStartAnimateUI(){
			
		    this.ani1=null;
		    this.panel1=null;
		    this.panel2=null;
		    this.seesion2=null;
		    this.panel1=null;
		    this.session3=null;

			GameStartAnimateUI.__super.call(this);
		}

		CLASS$(GameStartAnimateUI,'ui.GameStartAnimateUI',_super);
		var __proto__=GameStartAnimateUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameStartAnimateUI.uiView);

		}

		GameStartAnimateUI.uiView={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"comp/bg.jpg","height":1334}},{"type":"Box","props":{"y":38,"x":35,"visible":true,"var":"panel1"},"compId":4,"child":[{"type":"Image","props":{"skin":"comp/ani_01.png"}},{"type":"Image","props":{"y":185,"x":154,"skin":"comp/ani_02.png","rotation":0,"anchorY":0.5,"anchorX":0.5},"compId":3}]},{"type":"Image","props":{"y":377,"x":35,"visible":true,"var":"panel2","skin":"comp/ani_04.png"},"compId":7},{"type":"Image","props":{"y":327,"x":259,"visible":true,"var":"seesion2","skin":"comp/ani_05.png"},"compId":6},{"type":"Image","props":{"y":13,"x":329,"visible":true,"var":"panel1","skin":"comp/ani_03.png"},"compId":5},{"type":"Box","props":{"y":790,"x":35,"width":679,"height":476},"compId":14,"child":[{"type":"Image","props":{"y":11,"x":-5,"visible":true,"skin":"comp/ani_06.png"},"compId":8},{"type":"Image","props":{"y":357,"x":510,"visible":true,"skin":"comp/ani_08.png","rotation":-15,"anchorY":0.5,"anchorX":0.5},"compId":10}]},{"type":"Image","props":{"y":814,"x":313,"width":414,"visible":true,"var":"session3","skin":"comp/ani_07.png","height":300},"compId":9}],"animations":[{"nodes":[{"target":5,"keyframes":{"y":[{"value":20,"tweenMethod":"linearNone","tween":true,"target":5,"key":"y","index":0},{"value":13,"tweenMethod":"linearNone","tween":true,"target":5,"key":"y","index":8}],"x":[{"value":-398,"tweenMethod":"linearNone","tween":true,"target":5,"key":"x","index":0},{"value":329,"tweenMethod":"linearNone","tween":true,"target":5,"key":"x","index":8}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":5,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":5,"key":"visible","index":8}],"var":[{"value":"seesion1","tweenMethod":"linearNone","tween":false,"target":5,"key":"var","index":0},{"value":"panel1","tweenMethod":"linearNone","tween":false,"target":5,"key":"var","index":1}]}},{"target":6,"keyframes":{"y":[{"value":356,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":0},{"value":327,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":18}],"x":[{"value":-538,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":0},{"value":259,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":18}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":18}]}},{"target":4,"keyframes":{"y":[{"value":38,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":0},{"value":38,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":6}],"x":[{"value":-631,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":0},{"value":35,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":6}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":1}]}},{"target":8,"keyframes":{"y":[{"value":833,"tweenMethod":"linearNone","tween":true,"target":8,"key":"y","index":0},{"value":11,"tweenMethod":"linearNone","tween":true,"target":8,"key":"y","index":22}],"x":[{"value":-679,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":0},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":22}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":8,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":8,"key":"visible","index":22}]}},{"target":9,"keyframes":{"y":[{"value":859,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":0},{"value":814,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":28}],"x":[{"value":-378,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":0},{"value":313,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":28}],"width":[{"value":414,"tweenMethod":"linearNone","tween":true,"target":9,"key":"width","index":0},{"value":414,"tweenMethod":"linearNone","tween":true,"target":9,"key":"width","index":36}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":9,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":9,"key":"visible","index":28}],"height":[{"value":300,"tweenMethod":"linearNone","tween":true,"target":9,"key":"height","index":0},{"value":300,"tweenMethod":"linearNone","tween":true,"target":9,"key":"height","index":36}]}},{"target":10,"keyframes":{"y":[{"value":370,"tweenMethod":"linearNone","tween":true,"target":10,"key":"y","index":0},{"value":353,"tweenMethod":"linearNone","tween":true,"target":10,"key":"y","index":22},{"value":357,"tweenMethod":"linearNone","tween":true,"target":10,"key":"y","index":23}],"x":[{"value":404,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":0},{"value":498,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":22},{"value":510,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":23}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":10,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":10,"key":"visible","index":22}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":23},{"value":-25,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":24},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":25},{"value":-15,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":26},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":27},{"value":-15,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":28},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":29},{"value":-15,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":30},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":31},{"value":-15,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":32},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":33},{"value":-15,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":34},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":35},{"value":-15,"tweenMethod":"linearNone","tween":true,"target":10,"key":"rotation","index":36}],"anchorY":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":10,"key":"anchorY","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":10,"key":"anchorY","index":22},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":10,"key":"anchorY","index":23}],"anchorX":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":10,"key":"anchorX","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":10,"key":"anchorX","index":22},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":10,"key":"anchorX","index":23}]}},{"target":7,"keyframes":{"y":[{"value":377,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":0}],"x":[{"value":761,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":0},{"value":704,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":12},{"value":35,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":17}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":12}]}},{"target":3,"keyframes":{"y":[{"value":76,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":0},{"value":185,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":6},{"value":185,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":7}],"x":[{"value":31,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":154,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":6},{"value":154,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":7}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":6},{"value":10,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":7},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":8},{"value":10,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":9},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":10},{"value":10,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":11},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":12},{"value":10,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":13},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":14},{"value":10,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":15},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":16},{"value":10,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":17},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":18},{"value":10,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":19},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":20},{"value":10,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":21},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":22},{"value":10,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":23},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":24},{"value":10,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":25},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":26},{"value":10,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":27},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":28},{"value":10,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":29},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":30},{"value":10,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":31},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":32},{"value":10,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":33},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":34},{"value":10,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":35},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":36}],"anchorY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"anchorY","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":3,"key":"anchorY","index":6},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":3,"key":"anchorY","index":7}],"anchorX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"anchorX","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":3,"key":"anchorX","index":6},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":3,"key":"anchorX","index":7}]}},{"target":14,"keyframes":{"y":[{"value":824,"tweenMethod":"linearNone","tween":true,"target":14,"key":"y","index":0},{"value":790,"tweenMethod":"linearNone","tween":true,"target":14,"key":"y","index":22},{"value":790,"tweenMethod":"linearNone","tween":true,"target":14,"key":"y","index":27}],"x":[{"value":-632,"tweenMethod":"linearNone","tween":true,"target":14,"key":"x","index":0},{"value":-586,"tweenMethod":"linearNone","tween":true,"target":14,"key":"x","index":22},{"value":35,"tweenMethod":"linearNone","tween":true,"target":14,"key":"x","index":27}],"width":[{"value":679,"tweenMethod":"linearNone","tween":true,"target":14,"key":"width","index":0}],"height":[{"value":476,"tweenMethod":"linearNone","tween":true,"target":14,"key":"height","index":0}]}}],"name":"ani1","id":1,"frameRate":10,"action":0}]};
		return GameStartAnimateUI;
	})(View);
var shanchongjiUI=(function(_super){
		function shanchongjiUI(){
			
		    this.ani1=null;
		    this.ani2=null;
		    this.bright=null;
		    this.bottle=null;

			shanchongjiUI.__super.call(this);
		}

		CLASS$(shanchongjiUI,'ui.shanchongjiUI',_super);
		var __proto__=shanchongjiUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(shanchongjiUI.uiView);

		}

		shanchongjiUI.uiView={"type":"View","props":{"width":100,"visible":true,"height":100},"compId":1,"child":[{"type":"Image","props":{"y":50,"x":50,"width":100,"visible":true,"var":"bright","skin":"comp/bright.png","height":100,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":50,"x":50,"width":100,"visible":false,"var":"bottle","skin":"comp/killAll.png","height":100,"anchorY":0.5,"anchorX":0.5},"compId":3}],"animations":[{"nodes":[{"target":3,"keyframes":{"y":[{"value":50,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":0},{"value":51,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":4},{"value":50,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":7}],"x":[{"value":50,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0}],"width":[{"value":100,"tweenMethod":"linearNone","tween":true,"target":3,"key":"width","index":0},{"value":10,"tweenMethod":"linearNone","tween":true,"target":3,"key":"width","index":4},{"value":25,"tweenMethod":"linearNone","tween":true,"target":3,"key":"width","index":5},{"value":50,"tweenMethod":"linearNone","tween":true,"target":3,"key":"width","index":6},{"value":100,"tweenMethod":"linearNone","tween":true,"target":3,"key":"width","index":7}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":4}],"var":[{"value":"bottle","tweenMethod":"linearNone","tween":false,"target":3,"key":"var","index":0}],"right":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"right","index":7}],"height":[{"value":100,"tweenMethod":"linearNone","tween":true,"target":3,"key":"height","index":0},{"value":10,"tweenMethod":"linearNone","tween":true,"target":3,"key":"height","index":4},{"value":25,"tweenMethod":"linearNone","tween":true,"target":3,"key":"height","index":5},{"value":50,"tweenMethod":"linearNone","tween":true,"target":3,"key":"height","index":6},{"value":100,"tweenMethod":"linearNone","tween":true,"target":3,"key":"height","index":7}]}},{"target":2,"keyframes":{"width":[{"value":12,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":0},{"value":25,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":1},{"value":50,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":2},{"value":100,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":3},{"value":35,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":4}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":2,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":2,"key":"visible","index":5}],"var":[{"value":"bright","tweenMethod":"linearNone","tween":false,"target":2,"key":"var","index":0}],"height":[{"value":12,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":0},{"value":25,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":1},{"value":50,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":2},{"value":100,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":3},{"value":35,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":4}]}}],"name":"ani1","id":1,"frameRate":10,"action":0},{"nodes":[{"target":2,"keyframes":{"width":[{"value":100,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":0},{"value":35,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":3},{"value":100,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":4},{"value":50,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":5},{"value":25,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":6},{"value":12,"tweenMethod":"linearNone","tween":true,"target":2,"key":"width","index":7}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":2,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":2,"key":"visible","index":3}],"height":[{"value":100,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":0},{"value":35,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":3},{"value":100,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":4},{"value":50,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":5},{"value":25,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":6},{"value":12,"tweenMethod":"linearNone","tween":true,"target":2,"key":"height","index":7}]}},{"target":3,"keyframes":{"width":[{"value":100,"tweenMethod":"linearNone","tween":true,"target":3,"key":"width","index":0},{"value":50,"tweenMethod":"linearNone","tween":true,"target":3,"key":"width","index":1},{"value":25,"tweenMethod":"linearNone","tween":true,"target":3,"key":"width","index":2},{"value":10,"tweenMethod":"linearNone","tween":true,"target":3,"key":"width","index":3}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":4}],"height":[{"value":100,"tweenMethod":"linearNone","tween":true,"target":3,"key":"height","index":0},{"value":50,"tweenMethod":"linearNone","tween":true,"target":3,"key":"height","index":1},{"value":25,"tweenMethod":"linearNone","tween":true,"target":3,"key":"height","index":2},{"value":10,"tweenMethod":"linearNone","tween":true,"target":3,"key":"height","index":3}]}},{"target":1,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":1,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":1,"key":"visible","index":8}]}}],"name":"ani2","id":2,"frameRate":10,"action":0}]};
		return shanchongjiUI;
	})(View);
var shoeUI=(function(_super){
		function shoeUI(){
			
		    this.ani1=null;

			shoeUI.__super.call(this);
		}

		CLASS$(shoeUI,'ui.shoeUI',_super);
		var __proto__=shoeUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(shoeUI.uiView);

		}

		shoeUI.uiView={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":50,"x":52,"width":60,"skin":"comp/shoe.png","height":100,"anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":65,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":65,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":1},{"value":65,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":2}],"x":[{"value":38,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":38,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":1},{"value":38,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":2}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":2,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":2,"key":"visible","index":3}],"rotation":[{"value":-80,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":50,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":2}],"anchorY":[{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":2,"key":"anchorY","index":0},{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":2,"key":"anchorY","index":1},{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":2,"key":"anchorY","index":2}],"anchorX":[{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"anchorX","index":0},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"anchorX","index":1},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"anchorX","index":2}]}}],"name":"ani1","id":1,"frameRate":30,"action":0}]};
		return shoeUI;
	})(View);