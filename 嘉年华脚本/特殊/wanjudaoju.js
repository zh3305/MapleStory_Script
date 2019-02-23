/* 玩具商店 */

var status = -1;
var itemList = Array(
Array(1302017, 880000), 
Array(1302025, 880000), 
Array(1302026, 880000), 
Array(1302027, 880000), 
Array(1302029, 880000), 
Array(1302028, 880000), 
Array(1302210, 880000), 
Array(1442039, 1680000), 
Array(1322051, 880000), 
Array(1302049, 880000), 
Array(1302220, 880000), 
Array(1322157, 880000), 
Array(1362064, 880000), 
Array(1372136, 880000), 
Array(1382166, 880000), 
Array(1452166, 880000), 
Array(1402014, 2900000), 
Array(1302021, 660000), 
Array(1362063, 880000), 
Array(1302219, 880000), 
Array(1322156, 880000), 
Array(1302026, 520000), 
Array(1302150, 960000), 
Array(1112100, 120000), 
Array(1302104, 570000),
Array(1322102, 990000),
Array(1302160, 510000),
Array(1302161, 120000),
Array(1302162, 720000),
Array(1332030, 710000),
Array(1412056, 110000),
Array(1422036, 760000),
Array(1402110, 130000),
Array(1402049, 990000)
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