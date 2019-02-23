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
var tz5 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
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
			cm.sendNext("#e#r  "+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+"猫岛特色勋章系统"+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+""+zs1+"\r\n"+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+""+zs+""+eff+"\r\n#n#b             以下勋章都是全属性+30:找GM领取\r\n#e#k#v1142003#:人气达到300或-300（全服+-各1枚）\r\n#e#k#v1142002#:收集蓝蜗牛2万个给GM(全服1枚)\r\n#e#k#v1142146#:钓鱼和结婚暂未开放（全服1枚）\r\n#e#k#v1142656#:开服一个月不同椅子数量最多（全服1枚）\r\n#e#k#v1142543#:收集100个#v4310003#不没收道具（全服1枚）\r\n#e#k#v1142541#:第一个达到250级的玩家（全服1枚）\r\n#e#k#v1142540#:第二个达到250级的玩家（全服1枚）\r\n#e#k#v1142539#:第三个达到250级的玩家（全服1枚）\r\n#e#k#v1142218#:第一个穿戴全套漩涡的玩家（全服1枚）\r\n#e#k#v1142790#:对本服做出极大贡献的玩家（GM自发全服1枚）\r\n#e#k#v1142335#:Q群第一连续签到一个月（全服1枚）\r\n#e#k#v1142794#:GM活动中获得（全服1枚）\r\n#e#k#v1142793#:GM活动中获得（全服1枚）\r\n#e#k#v1142792#:GM活动中获得（全服1枚）\r\n#e#k#v1142791#:GM活动中获得（全服1枚）");
		} else if (status == 1) {
            cm.sendPrev("\r\n#b7):#r会有更多勋章加入，有建议或领取可联系客服，");
		} else if (status == 3) {
			cm.dispose();
		}
	}
}
