/* 抵用卷商店 */

var status = -1;
var itemList = Array(

Array(2213019, 5000),
	Array(2003516, 5000),
	Array(2003517, 5000),
	Array(2003518, 5000),
	Array(2210130, 5000),
	Array(2210139, 5000),
	Array(2210138, 5000),
	Array(2210134, 5000),
	Array(2210097, 5000),
	Array(2210096, 5000),
	Array(2210121, 5000),
	Array(2210108, 5000)
	//Array(1402197, 5000),
	//Array(1412136, 5000),
	//Array(1422141, 5000),
	//Array(1432168, 5000),
	//Array(1442224, 5000),
	//Array(1452206, 5000),
	//Array(1462194, 5000),
	//Array(1472215, 5000),
	//Array(1482169, 5000),
	//Array(1492180, 5000),
	//Array(1522095, 5000),
	//Array(1532099, 5000)

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
        var selStr = "抵用卷余额：#r"+cm.getPlayer().getCSPoints(2)+" #k点，#r有喜欢的找管理员增加~祝你购买愉快#k";
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
            cm.sendOk("您没有那么多抵用卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 抵用卷。");
        }
        cm.dispose();
    }
}