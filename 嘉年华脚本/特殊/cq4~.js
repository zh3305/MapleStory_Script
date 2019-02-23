/* 点卷商店 - 双倍道具经验卡 */

var status = -1;

var itemList = Array(
Array(2049509, 1000),
Array(2340000, 500),
Array(2046577, 300),
Array(2046578, 300),
Array(2046579, 300),
Array(2046580, 300),
Array(2046763, 300),
Array(2046765, 300),
Array(2046764, 300),
Array(2046766, 300),
Array(2046111, 400),
Array(2047818, 400),
Array(2049153, 400),
Array(2046996, 400),
Array(2046997, 400),
Array(2049750, 200),
Array(2049323, 200),
Array(2470005, 500),
Array(5050000, 200), 
Array(5050001, 400),  
Array(5050002, 600), 
Array(5050003, 1000),  
Array(5050004, 1000),
Array(2501000, 1000),
Array(5062400, 1000),
Array(2049405, 1000),
Array(5530268, 1000),
Array(5530269, 1000),
Array(2048305, 200),
Array(5064003, 1000),
Array(5062500, 300),
Array(5064000, 300),
Array(5064100, 300),
Array(5062002, 200),
Array(5062000, 200),
Array(2702001, 200)
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
        if (item != null) {
            itemId = item[0];
            points = item[1];
            period = item[2];
            cm.sendYesNo("您是否购买#i" + itemId + ":# #b#t" + itemId + "##k 需要 #r" + points + "#k 点卷？");
        } else {
            cm.sendOk("出现错误...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (itemId <= 0 || points <= 0 || period <= 0) {
            cm.sendOk("购买道具出现错误...");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getCSPoints(1) >= points) {
            if (cm.haveItem(itemId)) {
                cm.sendOk("您已经拥有#i" + itemId + ":# #b#t" + itemId + "##k无需重复购买。");
            } else {
                cm.gainNX( - points);
                cm.gainItemPeriod(itemId, 1, period);
                cm.sendOk("恭喜您成功购买#i" + itemId + ":# #b#t" + itemId + "##k。");
				cm.dispose();
			}
        } else {
            cm.sendOk("您没有那么多点卷。\r\n\r\n购买#i" + itemId + ":# #b#t" + itemId + "##k 需要 #r" + points + "#k 点卷。");
        }
        cm.dispose();
    }
}