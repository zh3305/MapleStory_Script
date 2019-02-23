var status = 0;

var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var epp1 = "#fEffect/CharacterEff/1082312/2/0#"; //彩光1
var axx = "#fEffect/CharacterEff/1051294/0/0#";  //爱心
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮 
var epp3 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var zs = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var zss = "#fEffect/CharacterEff/1112946/2/0#";  //砖石粉
var zs1 = "#fEffect/CharacterEff/1112946/1/1#";  //砖石蓝
var dxxx = "#fEffect/CharacterEff/1102232/2/0#"; //星系
var tz = "#fEffect/CharacterEff/1082565/2/0#";  //兔子蓝
var tz1 = "#fEffect/CharacterEff/1082565/4/0#";  //兔子粉
var tz2 = "#fEffect/CharacterEff/1082565/0/0#";  //兔子灰色
var tz3 = "#fEffect/CharacterEff/1082588/0/0#";  //红点
var tz4 = "#fEffect/CharacterEff/1082588/3/0#";  //蓝点
var tz5 = "#fEffect/CharacterEff/1082588/1/0#";  //绿点
var tz6 = "#fEffect/CharacterEff/1112900/2/1#";  //音符蓝
var tz7 = "#fEffect/CharacterEff/1112900/3/1#";  //音符红
var tz8 = "#fEffect/CharacterEff/1112900/4/1#";  //音符绿
var tz8 = "#fEffect/CharacterEff/1112900/5/1#";  //音符绿!
var tz9 = "#fEffect/CharacterEff/1112902/0/0#";  //蓝心
var tz10 = "#fEffect/CharacterEff/1112903/0/0#";  //红心
var tz11 = "#fEffect/CharacterEff/1112904/0/0#";  //彩心
var tz12 = "#fEffect/CharacterEff/1112924/0/0#";  //黄星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#";  //蓝星
var tz14 = "#fEffect/CharacterEff/1112926/0/0#";  //红星
var tz15 = "#fEffect/CharacterEff/1112949/0/0#";  //花样音符
var tz16 = "#fEffect/CharacterEff/1112949/1/0#";  //花样音符
var tz17 = "#fEffect/CharacterEff/1112949/2/0#";  //花样音符
var tz18 = "#fEffect/CharacterEff/1112949/3/0#";  //花样音符
var tz19 = "#fEffect/CharacterEff/1112949/4/0#";  //花样音符
var tz20 = "#fEffect/CharacterEff/1114000/1/0#";  //红星花
var sz5 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";////美化2

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("#e#r  "+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+"猫岛特色勋章系统"+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+"\r\n"+tz1+""+tz2+""+tz3+""+tz4+""+tz5+""+tz6+""+tz7+""+tz8+""+tz9+""+tz10+""+tz11+""+tz12+""+tz13+""+tz14+""+tz15+""+tz16+""+tz17+""+tz18+""+tz19+""+tz20+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+"\r\n#n#b             以下勋章都是全属性+30:找GM领取\r\n#e#k#v1142003#:人气达到300或-300（全服+-各1枚）\r\n#e#k#v1142002#:收集蓝蜗牛2万个给GM(全服1枚)\r\n#e#k#v1142146#:钓鱼和结婚暂未开放（全服1枚）\r\n#e#k#v1142656#:开服一个月不同椅子数量最多（全服1枚）\r\n#e#k#v1142543#:收集100个#v4310003#不没收道具（全服1枚）\r\n#e#k#v1142541#:第一个达到250级的玩家（全服1枚）\r\n#e#k#v1142540#:第二个达到250级的玩家（全服1枚）\r\n#e#k#v1142539#:第三个达到250级的玩家（全服1枚）\r\n#e#k#v1142218#:第一个穿戴全套漩涡的玩家（全服1枚）\r\n#e#k#v1142790#:对本服做出极大贡献的玩家（GM自发全服1枚）\r\n#e#k#v1142335#:Q群第一连续签到一个月（全服1枚）\r\n#e#k#v1142794#:GM活动中获得（全服1枚）\r\n#e#k#v1142793#:GM活动中获得（全服1枚）\r\n#e#k#v1142792#:GM活动中获得（全服1枚）\r\n#e#k#v1142791#:GM活动中获得（全服1枚）");
		} else if (status == 1) {
            cm.sendPrev("\r\n#b7):#r每晚20点,点击拍卖活动丰收红包福利送不停,规定的时间内只需鼠标点击.\r\n#b8):#r通过世界怪物可以获得荣誉勋章,勋章双击使用后可以获得声望,声望等级可以提高内在能力\r\n#b9):#r通过世界怪物可以获得神秘之冰RED,双击使用后几率性获得RED币,可在市场RED币商店购买物品\r\n#b10):#r各boss都可以掉落怪物币,怪物币即可在市场怪物币商店购买物品\r\n#b11):#r赞助本服一元,可以获得首充大礼包.更多详情请到市场点击查看\r\n#b12):#r更多介绍请加我们的官方交流群:2335015,请记住我们的网站是www.65465.cn");
		} else if (status == 3) {
			cm.dispose();
		}
	}
}
