/* 点卷商店 - 洗能力
Array(2702001,1,2000),
Array(2702001,10,20000),
 */

var status = -1;
var itemList = Array(
Array(1099011, 1, 800000), 
Array(1099012, 1, 800000), 
Array(1353105, 1, 800000), 
Array(1342095, 1, 800000),
Array(1352009, 1, 800000), 
Array(1352109, 1, 800000), 
Array(1352206, 1, 800000), 
Array(1352216, 1, 800000), 
Array(1352226, 1, 800000), 
Array(1352276, 1, 800000), 
Array(1352286, 1, 800000), 
Array(1352296, 1, 800000), 
Array(1352406, 1, 800000), 
Array(1352506, 1, 800000), 
Array(1352707, 1, 800000), 
Array(1352815, 1, 800000), 
Array(1352906, 1, 800000), 
Array(1352916, 1, 800000), 
Array(1352935, 1, 800000), 
Array(1352945, 1, 800000), 
Array(1352957, 1, 800000), 
Array(1352967, 1, 800000), 
Array(1352975, 1, 800000), 
Array(1353006, 1, 800000),
Array(1352928, 1, 800000),
Array(1352236, 1, 800000),
Array(1352246, 1, 800000),
Array(1352256, 1, 800000),
Array(1352266, 1, 800000),
Array(1352606, 1, 800000)
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
        var selStr = "#h0#，#e#b我是皮皮银河副手购买NPC,请留出一格空间获取装备,你当前的点券：#r" + cm.getPlayer().getCSPoints(1) + "\r\n#k请选择你想要购买的副武器：#b";
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