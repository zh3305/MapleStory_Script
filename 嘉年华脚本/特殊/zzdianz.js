/* 点卷商店 - 双倍道具经验卡 */

var status = -1;

var itemList = Array( 
Array(4032521, 20000),
Array(1004469, 10000),
Array(1042198, 10000),
Array(1003268, 10000),
Array(1102232, 3000),  
Array(1102324, 3000), 
Array(1102461, 3000),  
Array(1102564, 3000),
Array(1102577, 3000),
Array(1102608, 3000),
Array(1102632, 3000),
Array(1102668, 3000),
Array(1102682, 3000),
Array(1102695, 3000),
Array(1102766, 3000),
Array(1102707, 3000),
Array(1102818, 3000),
Array(1073046, 3000),
Array(1073047, 3000),
Array(1072919, 3000),
Array(1073027, 3000),
Array(1072876, 3000),
Array(1062210, 3000),
Array(1062213, 3000),
Array(1062226, 3000),
Array(1062156, 3000),
Array(1062179, 3000),
Array(1042341, 3000),
Array(1042347, 3000),
Array(1042260, 3000),
Array(1052754, 3000),
Array(1052750, 3000),
Array(1052746, 3000),
Array(1052749, 3000),
Array(1052666, 3000),
Array(1052667, 3000),
Array(1052671, 3000),
Array(1052412, 3000),
Array(1052910, 3000),
Array(1052911, 3000),
Array(1052919, 3000),
Array(1052246, 3000),
Array(1004205, 3000),
Array(1004213, 3000),
Array(1004092, 3000),
Array(1004094, 3000),
Array(1004123, 3000),
Array(1004113, 3000),
Array(1002832, 3000),
Array(1702538, 3000),
Array(1702540, 3000),
Array(1702553, 3000),
Array(1702544, 3000),
Array(1702555, 3000),
Array(1702488, 3000),
Array(1702432, 3000),
Array(1702489, 3000),
Array(1702491, 3000),
Array(1702406, 3000),
Array(1702367, 3000),
Array(1702368, 3000),
Array(1702567, 3000),
Array(1702570, 3000),
Array(1702400, 3000),
Array(1702352, 3000),
Array(1702306, 3000),
Array(1004204, 3000)
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