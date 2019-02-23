/* 点卷商店 */

var status = -1;
var itemList = Array(
					Array(3010026, 15000),
					Array(3010040, 15000),
					Array(3010045, 15000),
					Array(3010048, 30000),
					Array(3010053, 15000),
					Array(3010055, 15000),
					Array(3010061, 15000),
					Array(3010068, 15000),
					Array(3010077, 15000),
					Array(3010078, 15000),
					Array(3010079, 15000),
					Array(3010085, 30000),
					Array(3010094, 15000),
					Array(3010095, 15000),
					Array(3010099, 15000),
					Array(3010100, 15000),
					Array(3010110, 15000),
					Array(3010111, 15000),
					Array(3010112, 15000),
					Array(3010113, 15000),
					Array(3010114, 30000),
					Array(3010116, 15000),
					Array(3010117, 15000),
					Array(3010119, 15000),
					Array(3010124, 15000),
					Array(3010129, 15000),
					Array(3010130, 15000),
					Array(3010134, 15000),
					Array(3010135, 15000),
					Array(3010137, 15000),
					Array(3010142, 15000),
					Array(3010145, 15000),
					Array(3010151, 15000),
					Array(3010157, 15000),
					Array(3010168, 15000),
					Array(3010170, 15000),
					Array(3010172, 15000),
					Array(3010173, 15000),
					Array(3010177, 15000),
					Array(3010180, 15000),
					Array(3010181, 15000),
					Array(3010183, 3000),
					Array(3010184, 15000),
					Array(3010186, 15000),
					Array(3010188, 15000),
					Array(3010189, 15000),
					Array(3010191, 15000),
					Array(3010194, 15000),
					Array(3010195, 15000),
					Array(3010197, 15000),
					Array(3010200, 15000),
					Array(3010201, 15000),
					Array(3010205, 15000),
					Array(3010207, 15000),
					Array(3010208, 15000),
					Array(3010209, 15000),
					Array(3010215, 15000),
					Array(3010218, 15000),
					Array(3010219, 15000),
					Array(3010224, 15000),				
                    Array(3010226, 15000)
//
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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#请选择您想要购买的物品：";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList[i][1]  + "#k点卷#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1];
            cm.sendYesNo("您是否购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 点卷？");
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
        if (cm.getPlayer().getCSPoints(1) >= selectedCost) {
            var gachaponItem = cm.gainGachaponItem(selectedItem, 1, "点卷商店", 3, true);
            if (gachaponItem != -1) {
                cm.gainNX( - selectedCost );
                cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k。");
            } else {
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else {
            cm.sendOk("您没有那么多点卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 点卷。");
        }
        cm.dispose();
    }
}