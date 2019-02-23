/* 点卷商店 - 双倍道具经验卡 */

var status = -1;
var daze1;

var itemList = Array(
Array(5360015, 1500, 1), //双倍爆率卡一天权
Array(5211060, 3000, 2 * 60 * 60 * 1000), //三倍经验卡(2小时) 
Array(5210004, 15000, 1), //双倍经验值卡一天(晚)
Array(5210002, 15000, 1)  //双倍经验值卡一天权(白)
);
var itemId = -1;
var points = -1;
var period = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择您希望购买的道具：";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList[i][1] + "#k点卷#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
		    itemId = item[0];
            points = item[1];
            period = item[2];
			daze = item[1] * 0.88;
        if (cm.getChar().getVip() >= 1 && cm.getPlayer().getCSPoints(1) > daze) {
            daze1 = 1;
		    cm.sendYesNo("系统检测到你是理财玩家，特此为你打8.8折优惠哦！\r\n#e原价#n：#b#e" + points + "#n#k，#e现价#n：#r#e" + daze + "#n#k（小数点舍去）\r\n请问是否要购买？");
        }else if (cm.getPlayer().getCSPoints(1) >= points) { 
			cm.sendYesNo("您是否购买#i" + itemId + ":# #b#t" + itemId + "##k 需要 #r" + points + "#k 点卷？");
			}else {
            cm.sendOk("您没有那么多点卷。");
            cm.dispose();
        }
    } else if (status == 2) {
        if (itemId <= 0 || points <= 0 || period <= 0) {
            cm.sendOk("购买道具出现错误...");
            cm.dispose();
            return;
        }
        if (daze1 == 1){
            if (cm.haveItem(itemId)) {
                cm.sendOk("您已经拥有#i" + itemId + ":# #b#t" + itemId + "##k无需重复购买。");
            } else {
                cm.gainNX( - daze);
                cm.gainItemPeriod(itemId, 1, period);
                cm.sendOk("恭喜您成功购买#i" + itemId + ":# #b#t" + itemId + "##k。");
				cm.dispose();
			}
		 }else if (cm.getPlayer().getCSPoints(1) >= points) { 
		    if (cm.haveItem(itemId)) {
                cm.sendOk("您已经拥有#i" + itemId + ":# #b#t" + itemId + "##k无需重复购买。");
            } else {
                cm.gainNX( - points);
                cm.gainItemPeriod(itemId, 1, period);
                cm.sendOk("恭喜您成功购买#i" + itemId + ":# #b#t" + itemId + "##k。");
				cm.dispose();
		 }
        } else {
            cm.sendOk("您没有那么多点卷。");
        }
        cm.dispose();
    }
}