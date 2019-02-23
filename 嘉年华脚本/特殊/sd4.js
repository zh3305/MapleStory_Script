/* 点卷商店 - 双倍道具经验卡 */

var status = -1;

var itemList = Array(
Array(3015015, 1),
Array(3015016, 1),
Array(3015017, 1),
Array(3015018, 1),
Array(3015019, 1),
Array(3015020, 1),
Array(3015021, 1),
Array(3015022, 1),
Array(3015023, 1),
Array(3015024, 1),
Array(3015025, 1),
Array(3015026, 1),
Array(3015057, 1), 
Array(3015053, 1),  
Array(3015051, 1), 
Array(3012023, 1),  
Array(3012022, 1),
Array(3012021, 1),
Array(3015001, 1),
Array(3010935, 1),
Array(3010944, 1),
Array(3015034, 1),
Array(3015009, 1),
Array(3015013, 1),
Array(3015012, 1),
Array(3015011, 1),
Array(3013008, 1),
Array(3015008, 1),
Array(3015037, 1),
Array(3015028, 1),
Array(3010753, 1),
Array(3010823, 1),
Array(3010822, 1),
Array(3010821, 1),
Array(3010939, 1),
Array(3010938, 1),
Array(3010937, 1),
Array(3015007, 1),
Array(3015006, 1),
Array(3992051, 1),
Array(3014008, 1),
Array(3010865, 1),
Array(3010864, 1),
Array(3010755, 1),
Array(3010955, 1),
Array(3010964, 1),
Array(3010965, 1),
Array(3010878, 1),
Array(3010875, 1),
Array(3010966, 1),
Array(3010947, 1),
Array(3010936, 1),
Array(3010948, 1)
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