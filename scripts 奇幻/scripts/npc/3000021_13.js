/* 点卷商店 */

var status = -1;
var itemList = Array(
Array(2431965, 30000),
Array(2432592, 300000),
Array(2432591, 300000),
Array(2432532, 300000),
Array(2432526, 300000),
Array(2432695, 300000),
Array(2432661, 300000),
Array(2432659, 300000),
Array(2432658, 300000),
Array(2432354, 300000),
Array(2432355, 300000),
Array(2432479, 300000),
Array(2432465, 300000),
Array(2432973, 300000),
Array(2433038, 300000),
Array(2433063, 300000),
Array(2432710, 300000),
Array(2432749, 300000),
Array(2432748, 300000),
Array(2433112, 300000),
Array(2433113, 300000),
Array(2433104, 300000),
Array(2433197, 300000),
Array(2433183, 300000),
Array(2432804, 300000),
Array(2433182, 300000),
Array(2432836, 300000),
Array(2431967, 300000),
Array(2432207, 300000),
Array(2432131, 300000)
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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0# 请选择您想要购买的物品：";
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