//物品自己添加
var status = -1;
var itemList = Array(
//Array(2434143, 500),
Array(2432996, 200),
Array(2432994, 200),
Array(2433003, 200),
Array(2432724, 200),
Array(2432635, 200),
Array(2432008, 200),
Array(2432031, 200),
Array(2432030, 200),
Array(2432527, 200),
Array(2432528, 200),
Array(2432295, 200),
Array(2432328, 200),
Array(2431697, 200),
Array(2433006, 200),
Array(2432309, 500),
Array(2432217, 200),
Array(2431825, 80),
Array(2430149, 80),
Array(2433002, 200),
Array(2433001, 200),
Array(2432995, 200),
Array(2432100, 200),
Array(2432736, 200),
Array(2432654, 200),
Array(2432079, 200),
Array(2432085, 200),
Array(2432149, 200),
Array(2431358, 200),
Array(2432450, 200),
Array(2432361, 200),
Array(2430993, 200),
Array(2432359, 200),
Array(2432015, 200),
Array(2431415, 200),
Array(2430312, 80),
Array(2432582, 80),
Array(2430326, 80),
Array(2430327, 80),
Array(2430321, 80),
Array(2430323, 80),
Array(2430339, 80),
Array(2430337, 80),
Array(2430335, 80),
Array(2430333, 80),
Array(2430332, 80),
Array(2430330, 80),
Array(2430348, 80),
Array(2430344, 80),
Array(2430346, 80),
Array(2430341, 80)
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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择您希望兑换的装备：";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList[i][1] + "#k积分#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1];
            cm.sendYesNo("您是否购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 积分？");
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
        if (cm.getPlayerPoints() >= selectedCost) {
            var gachaponItem = cm.gainGachaponItem(selectedItem, 1, "积分商店", 3, true);
            if (gachaponItem != -1) {
				cm.gainPlayerPoints(-selectedCost);
                cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k。您还有\r\n您还有"+cm.getPlayerPoints()+"积分");
            } else {
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else {
            cm.sendOk("您没有那么多积分。你的积分是:"+cm.getPlayerPoints()+"\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 积分。");
        }
        cm.dispose();
    }
}