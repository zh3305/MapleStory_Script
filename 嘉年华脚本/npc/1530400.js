/* 点卷商店 - 洗能力
Array(2702001,1,2000),
Array(2702001,10,20000),
 */

var status = -1;
var itemList = Array(
					Array(1662002, 1,100000),
					Array(1662003, 1,100000),
					Array(1662041, 1,100000),
					Array(1662039, 1,200000),
Array(1662035, 1,200000),
Array(1662036, 1,200000),
Array(1662032, 1,250000),

Array(1662054, 1,500000),
Array(1672067, 1,500000)


//Array(2049122,1,2000),
//Array(2049122,10,20000)
/*Array(2044003,1,5000),
Array(2044303,1,5000),
Array(2043003,1,5000),
Array(2040806,1,5000),
Array(2043303,1,5000),
Array(2040709,1,5000),
Array(2043103,1,5000),
Array(2043703,1,5000),
Array(2044703,1,5000)*/
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
                cm.worldMessage("『机器人商城』 " + cm.getPlayer().getName() + " 玩家在机器人商城购买道具： " + cm.getItemName(selectedItem) + " x " + selequantity);
                cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 。");
            } else {
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else if (cm.getPlayer().getCSPoints(1) >= selectedCost) {
	   if (cm.canHold(selectedItem, selequantity)) {
                cm.gainNX(1, - selectedCost);
                cm.gainItem(selectedItem, selequantity);
                cm.worldMessage("『机器人商城』 " + cm.getPlayer().getName() + " 玩家在机器人商城购买道具： " + cm.getItemName(selectedItem) + " x " + selequantity);
                cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 。");
            } else {
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }	
	} else {
            cm.sendOk("您没有那么多抵用卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k 抵用卷。");
        }
        status = -1;
    }
}