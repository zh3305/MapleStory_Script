/* 点卷商店 - 洗能力
Array(2702001,1,2000),
Array(2702001,10,20000),
 */

var status = -1;
var itemList = Array(
Array(4001839, 100, 20000),
Array(4001839, 1000, 200000),
//Array(4001832, 100, 100000),
Array(4001832, 500, 150000),
Array(2610001, 1, 20000),
Array(5062000, 10, 6000),
Array(5062000, 100, 60000),
Array(5062002, 10, 10000),
Array(5062002, 100, 50000),
Array(5062009, 10, 15000),
Array(5062009, 100, 150000),
Array(5062500, 10, 10000),
Array(5062500, 100, 100000),
Array(5220040, 100, 20000),
Array(5064000, 10, 15000),
Array(5190011, 1, 1000),
Array(5520000, 1, 3500),
Array(5520001, 1, 5000),
Array(5050000, 10, 2000),
Array(5050000, 50, 10000),
Array(5050000, 100, 20000),
Array(2501000, 1, 35000),
Array(5062400,1,200000),
Array(2049405, 1, 30000),
Array(5530268,1,2500),
Array(5530268,10,25000),
Array(5530269,1,5000),
Array(5530269,10,50000),
Array(2048305,1,3000),
Array(2048305,10,30000),
Array(5064003,1,10000),
Array(5064003,10,100000),
Array(5064100,1,8000),
Array(5064100,10,80000)

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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##e亲爱的#r#h ##k您好，请选择您希望购买的道具：\r\n#r看看咯#n#k";
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