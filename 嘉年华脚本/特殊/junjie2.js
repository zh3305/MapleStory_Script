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
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";////美化2
var yun ="#fUI/UIWindow/Quest/icon7/0#";////红沙漏
var yun1 ="#fUI/UIWindow/Quest/icon7/10#";////红色圆
var yun2 ="#fUI/UIWindow/Quest/icon8/0#";////蓝指标
var yun3 ="#fUI/UIWindow/Quest/prob#";////机率获得
var yun4 ="#fUI/UIWindow/Quest/reward#";////奖励
var yun5 ="#fUI/UIWindow/Quest/summary#";////任务简洁
var yun6 ="#fUI/UIWindow/PartySearch2/BtPrev/mouseOver/0#";////左指标
var yun7 ="#fUI/UIWindow/PartySearch2/BtNext/mouseOver/0#";////右指标
var yun8 ="#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#";////金左指标
var yun9 ="#fUI/UIWindow/MonsterBook/arrowRight/normal/0#";////金右指标
var yun12 ="#fUI/UIWindow/Megaphone/2#";////骷髅
var xiaoyun1 ="#fUI/UIWindow/AriantMatch/characterIcon/0#";////红方
var xiaoyun2 ="#fUI/UIWindow/AriantMatch/characterIcon/1#";////蓝方
var xiaoyun3 ="#fUI/UIWindow/AriantMatch/characterIcon/2#";////绿方
var xiaoyun4 ="#fUI/UIWindow/AriantMatch/characterIcon/3#";////黄方
var xiaoyun5 ="#fUI/UIWindow/AriantMatch/characterIcon/4#";////紫方
var xiaoyun6 ="#fUI/UIWindow/AriantMatch/characterIcon/5#";////橙方
var xiaoyun7 ="#fUI/UIWindow/Minigame/Common/btStart/mouseOver/0#";////开始
var xiaoyun8 ="#fUI/UIWindow/Minigame/Common/mark#";////冒险岛图标

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
        var selStr = "#e#k         "+yun8+"☆冰封独家军衔勋章系统☆"+yun9+"\r\n"+xiaoyun5+""+xiaoyun5+""+xiaoyun5+""+xiaoyun5+""+xiaoyun5+""+xiaoyun5+""+xiaoyun5+""+xiaoyun5+""+xiaoyun5+""+xiaoyun5+""+xiaoyun5+""+xiaoyun5+""+xiaoyun5+""+xiaoyun5+""+xiaoyun5+""+xiaoyun5+""+xiaoyun5+""+xiaoyun5+""+xiaoyun5+""+xiaoyun5+""+xiaoyun5+""+xiaoyun5+""+xiaoyun5+"\r\n#e#r      请把勋章取下来放背包里在领取\r\n#e#g         #L1##i1142318#领取每日[少校]军饷#i1142318##l\r\n#e#r         #L2##i1142319#领取每日[中校]军饷#i1142319##l\r\n\#e#b         #L3##i1142320#领取每日[上校]军饷#i1142320##l\r\n\#e#d         #L4##i1142321#领取每日[#r团#b长#d]军饷#i1142321##l\r\n\r\n#i1142311##i1142312##i1142313##i1142314##i1142315##i1142316##i1142317##i1142318##i1142319##i1142320##i1142321#\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
			        case 1:
            if (cm.haveItem(1142318, 1) && cm.getPlayer().getLevel() > 200 && cm.getPQLog("少校") < 1) {
				cm.setPQLog("少校");
                cm.gainItem(2340000,20);
				cm.gainItem(4001126,50);
				cm.gainItem(4000463,1);
				cm.gainItem(4001714,1);
				cm.gainItem(4001839,5);
                cm.sendOk("#r#e尊敬的少校，\r\n#k祝你游戏愉快!");
				cm.worldSpouseMessage(0x20, "『军事新闻』 : " + cm.getChar().getName() + "[少校] 领取了军饷，妹子们在哪里！☆☆☆☆☆☆");
				cm.dispose();
            } else {
                cm.sendOk("信不信我分分钟枪毙你？");
				cm.dispose();
            }
            break;
			case 100:
            cm.dispose();
            cm.openNpc(9310376,110);
            break;
			        case 2:
            if (cm.haveItem(1142319, 1) && cm.getPlayer().getLevel() > 220 && cm.getPQLog("中校") < 1) {
				cm.setPQLog("中校");
               			 cm.gainItem(4001126,80);
				cm.gainItem(4000463,2);
				cm.gainItem(4001714,2);
				cm.gainItem(4001839,10);
				cm.gainItem(5062009,10);
				cm.gainItem(5220040,10);
				cm.gainItem(2430069,1);
                cm.sendOk("#r#e尊敬的中校，\r\n#k祝你游戏愉快!");
				cm.worldSpouseMessage(0x20, "『军事新闻』 : " + cm.getChar().getName() + "[中校] 领取了军饷，妹子们在哪里！☆☆☆☆☆☆");
				cm.dispose();
            } else {
                cm.sendOk("信不信我分分钟枪毙你？");
				cm.dispose();
            }
            break;
			        case 3:
            if (cm.haveItem(1142320, 1) && cm.getPlayer().getLevel() > 230 && cm.getPQLog("上校") < 1) {
				cm.setPQLog("上校");
            			   cm.gainItem(4001126,120);
				cm.gainItem(4000463,3);
				cm.gainItem(4001714,3);
				cm.gainItem(4001839,15);
				cm.gainItem(5062009,20);
				cm.gainItem(5220040,20);
				cm.gainItem(2430069,2);
                cm.sendOk("#r#e尊敬的上校，\r\n#k祝你游戏愉快!");
				cm.worldSpouseMessage(0x20, "『军事新闻』 : " + cm.getChar().getName() + "[上校] 领取了军饷，妹子们在哪里！☆☆☆☆☆☆");
				cm.worldSpouseMessage(0x20, "『军事新闻』 : " + cm.getChar().getName() + "[上校] 领取了军饷，妹子们在哪里！☆☆☆☆☆☆");
				cm.dispose();
            } else {
                cm.sendOk("信不信我分分钟枪毙你？");
				cm.dispose();
            }
            break;
			        case 4:
           if (cm.haveItem(1142321, 1) && cm.getPlayer().getLevel() > 240 && cm.getPQLog("团长") < 1) {
				cm.setPQLog("团长");
                  cm.gainItem(4001126,200);
				cm.gainItem(4000463,3);
				cm.gainItem(4001714,3);
				cm.gainItem(4001839,20);
				cm.gainItem(5062009,30);
				cm.gainItem(5220040,30);
				cm.gainItem(2430069,3);
                cm.sendOk("#r#e尊敬的团长，\r\n#k祝你游戏愉快!");
				cm.worldSpouseMessage(0x20, "『军事新闻』 : " + cm.getChar().getName() + "[团长] 领取了军饷，妹子们在哪里！☆☆☆☆☆☆");
				cm.worldSpouseMessage(0x20, "『军事新闻』 : " + cm.getChar().getName() + "[团长] 领取了军饷，妹子们在哪里！☆☆☆☆☆☆");
            } else {
                cm.sendOk("信不信我分分钟枪毙你？");
				cm.dispose();
            }
            break;
			        case 5:
            cm.dispose();
            cm.openNpc(9310376,6);
            break;
			        case 6:
            cm.dispose();
            cm.openNpc(9310376,3);
            break;
			        case 7:
            cm.dispose();
            cm.openNpc(9310376,7);
            break;
			        case 8:
            cm.dispose();
            cm.openNpc(9310376,8);
            break;
			        case 9:
            cm.dispose();
            cm.openNpc(9310376,9);
            break;
			case 10:
            cm.dispose();
            cm.openNpc(9310376,10);
            break;
			case 11:
            cm.dispose();
            cm.openNpc(9310376,11);
            break;
		}
    }
}
