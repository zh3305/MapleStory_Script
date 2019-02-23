/* 骑宠商店 */

var status = -1;
var itemList = Array(
Array(1902000, 10000000), 
Array(1902001, 40000000), 
Array(1902002, 100000000), 
Array(1912000, 1000000), 
Array(1902005, 10000000), 
Array(1902006, 30000000), 
Array(1902007, 50000000), 
Array(1912005, 10000000), 
Array(1902015, 10000000), 
Array(1902016, 30000000), 
Array(1902017, 50000000), 
Array(1902018, 100000000), 
Array(1912011, 10000000), 
Array(1902040, 10000000), 
Array(1912033, 10000000), 
Array(1902041, 30000000), 
Array(1912034, 30000000), 
Array(1902042, 50000000), 
Array(1912035, 50000000)
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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择您希望购买的道具：";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList[i][1] + "#k金币#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1];
            cm.sendYesNo("您是否购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 金币？");
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
        if (cm.getMeso() >= selectedCost) {
            var gachaponItem = cm.gainGachaponItem(selectedItem, 1, "游戏商店", 3, true);
            if (gachaponItem != -1) {
                cm.gainMeso( - selectedCost);
                cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k。\r\n\r\n请先取下您的骑宠装备,带上你购买的骑宠在带普通骑宠装备!");
            } else {
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else {
            cm.sendOk("您没有那么多金币。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 金币。");
        }
        cm.dispose();
    }
}