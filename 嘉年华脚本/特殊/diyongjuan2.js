/* 副手商店 */

var status = -1;
var itemList = Array(

        Array(1353105, 300000),
	Array(1342095, 300000),
	Array(1352009, 300000),
	Array(1352109, 300000),
	Array(1352206, 300000),
	Array(1352216, 300000),
	Array(1352226, 300000),
	Array(1352276, 300000),
	Array(1352286, 300000),
	Array(1352296, 300000),
	Array(1352406, 300000),
	Array(1352506, 300000),
	Array(1352707, 300000),
	Array(1352815, 300000),
	Array(1352906, 300000),
	Array(1352916, 300000),
	Array(1352935, 300000),
	Array(1352945, 300000),
	Array(1352957, 300000),
	Array(1352967, 300000),
	Array(1352975, 300000),
	Array(1353006, 300000),
	Array(1352928, 300000),
	Array(1352236, 300000),
	Array(1352246, 300000),
	Array(1352256, 300000),
	Array(1352266, 300000),
	Array(1352606, 300000),
	Array(1353405, 300000),
    Array(1099011, 300000),
	Array(1099012, 300000)
);
var selectedItem = -1;
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
        var selStr = "你好,嘉年华祝你游戏愉快...你还有抵用卷：#r"+cm.getPlayer().getCSPoints(2);
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList[i][1] + "#k抵用卷#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1];
            cm.sendYesNo("您是否购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 抵用卷？");
        } else {
            cm.sendOk("出现错误...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selectedCost <= 0 || selectedItem <= 0) {
            cm.sendOk("购买道具出现错误...");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getCSPoints(2) >= selectedCost) {
            var gachaponItem = cm.gainGachaponItem(selectedItem, 1, "抵用卷商店", 3, true);
            if (gachaponItem != -1) {
                cm.gainNX(2, - selectedCost );
                cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k。");
            } else {
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else {
            cm.sendOk("您没有那么多抵押卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 抵用卷。");
        }
        cm.dispose();
    }
}