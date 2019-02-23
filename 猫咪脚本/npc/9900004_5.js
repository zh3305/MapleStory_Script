var status = 0;

var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var epp1 = "#fEffect/CharacterEff/1082312/2/0#"; //彩光1
var axx = "#fEffect/CharacterEff/1051294/0/0#";  //爱心
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮 
var epp3 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var axx1 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var zs = "#fEffect/CharacterEff/1112946/2/0#";  //砖石粉
var zs1 = "#fEffect/CharacterEff/1112946/1/1#";  //砖石蓝
var dxxx = "#fEffect/CharacterEff/1102232/2/0#"; //星系
var tz = "#fEffect/CharacterEff/1082565/2/0#";  //兔子蓝
var tz1 = "#fEffect/CharacterEff/1082565/4/0#";  //兔子粉
var tz5 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
            cm.dispose();
        } 
    else if (status == 0) {
        var selStr = "                \r\n"+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+"\r\n                #L1##e#r"+tz1+"点卷商店"+tz1+"#l\r\n              #L2##e#b"+tz1+"抵用商店"+tz1+"#l\r\n              #L3##e#d"+tz1+"游戏商店"+tz1+"#l\r\n              #L5##e#d"+tz1+"绑定商城"+tz1+"#l\r\n\r\n       #e#d"+tz+"市场里4个妹妹NPC也是商店哦！"+tz+"\r\n\r\n"+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+"\r\n"//您累计充值金额为：#r" + rmb + "#k元
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
            cm.dispose();
            cm.openNpc(9900003, 15);
            break;
		case 5:
            cm.dispose();
            cm.openNpc(9310144, 3);
            break;
		case 2:
            cm.dispose();
            cm.openNpc(9900003,16);
            break;
		case 4:
            cm.dispose();
            cm.openNpc(9900004, 3);
            break;
		case 225:
            cm.dispose();
            cm.gainItem(2430505, 1);// 
	        cm.sendOk("已获得星之力徽章礼包,戴上不会在出现打怪只扣一血情况！\r\n请勿重复领取,多领无用");
		    break;
        case 3:
            cm.dispose();
            cm.openNpc(9900003,1);
            break;
		}
    }
}
