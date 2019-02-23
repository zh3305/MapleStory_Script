/* 机器人商店 - 
Array(2702001,1,2000),
Array(2702001,10,20000),
 */

var status = -1;
var itemList = Array(
Array(1662027, 1, 300000),
Array(1662059, 1, 300000),
Array(1662033, 1, 300000),
Array(1662034, 1, 300000),
Array(1662011, 1, 300000),
Array(1662012, 1, 300000),
Array(1662024, 1, 300000),
Array(1662065, 1, 300000),
Array(1662066, 1, 300000),
Array(1662067, 1, 300000),
Array(1662068, 1, 300000),
Array(1662069, 1, 300000),
Array(1662070, 1, 300000),
Array(1662071, 1, 300000),
Array(1662077, 1, 300000),
Array(1662054, 1, 300000),
Array(1662064, 1, 300000),
Array(1662074, 1, 300000),
Array(1662075, 1, 300000),
Array(1662073, 1, 400000),
Array(1662072, 1, 400000),
Array(1662086, 1, 300000),
Array(1662087, 1, 300000),
Array(1662053, 1, 300000),
Array(1662006, 1, 300000),
Array(1662017, 1, 300000),
Array(1662018, 1, 300000),
Array(1662032, 1, 300000),
Array(1662039, 1, 300000),
Array(1666000, 1, 300000)
);
var selectedItem = -1;
var selequantity = -1;
var selectedCost = -1;

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
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k x (" + itemList[i][1] + ")   #r" + itemList[i][2] + "#k点卷#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selequantity = item[1];
            selectedCost = item[2];
            cm.sendYesNo("您是否购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k 点卷？");
        } else {
            cm.sendOk("出现错误...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selectedCost <= 0 || selequantity <= 0 || selectedItem <= 0) {
            cm.sendOk("购买道具出现错误...");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getCSPoints(1) >= selectedCost) {
            if (cm.canHold(selectedItem, selequantity)) {
                cm.gainNX( - selectedCost);
                cm.gainItem(selectedItem, selequantity);
                cm.worldMessage("『点卷商城』 " + cm.getName() + " 玩家在点卷商城购买道具： " + cm.getItemName(selectedItem) + " x " + selequantity);
                cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 。");
            } else {
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else if (cm.getPlayer().getCSPoints(1) >= selectedCost) {
	   if (cm.canHold(selectedItem, selequantity)) {
                cm.gainNX(1, - selectedCost);
                cm.gainItem(selectedItem, selequantity);
                cm.worldMessage("『点卷商城』 " + cm.getName() + " 玩家在点卷商城购买道具： " + cm.getItemName(selectedItem) + " x " + selequantity);
                cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 。");
            } else {
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }	
	} else {
            cm.sendOk("您没有那么多点卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k 点卷。");
        }
        status = -1;
    }
}