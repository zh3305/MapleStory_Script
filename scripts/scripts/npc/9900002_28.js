/* 140装备 */

var status = -1;
var itemList = Array(
Array(1232014, 1500000), 
Array(1302152, 1500000), 
Array(1312065, 1500000), 
Array(1322096, 1500000), 
Array(1402095, 1500000), 
Array(1412065, 1500000), 
Array(1422066, 1500000), 
Array(1432086, 1500000), 
Array(1442116, 1500000), 
Array(1152108, 750000),
Array(1003172, 750000), 
Array(1102275, 750000), 
Array(1082295, 750000), 
Array(1072485, 750000), 
Array(1212014, 1500000), 
Array(1372084, 1500000), 
Array(1382104, 1500000), 
Array(1152110, 750000), 
Array(1003173, 750000), 
Array(1102276, 750000), 
Array(1082296, 750000), 
Array(1052315, 750000), 
Array(1072486, 750000), 
Array(1522018, 1500000),
Array(1382104, 1500000),
Array(1462099, 1500000),
Array(1152111, 750000), 
Array(1003174, 750000), 
Array(1102277, 750000), 
Array(1082297, 750000), 
Array(1052316, 750000), 
Array(1072487, 750000), 
Array(1242042, 1500000), 
Array(1332130, 1500000), 
Array(1362019, 1500000), 
Array(1472122, 1500000), 
Array(1152112, 750000),
Array(1003175, 750000), 
Array(1102278, 750000), 
Array(1082298, 750000), 
Array(1052317, 750000), 
Array(1072488, 750000), 
Array(1222014, 1500000),
Array(1242014, 1500000), 
Array(1482084, 1500000), 
Array(1492085, 1500000), 
Array(1532018, 1500000), 
Array(1152113, 750000),
Array(1003176, 750000),
Array(1102279, 750000),
Array(1082299, 750000),
Array(1052318, 750000),
Array(1072489, 750000)
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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择您希望购买的装备：";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList[i][1] / 5 + "#k点卷#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1] / 5;
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
                cm.gainNX( - selectedCost);
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