/* 点卷商店 */

var status = -1;
var itemList = Array(
Array(1052425, 40000),
Array(1052412, 40000),
Array(1102503, 40000),
Array(1052455, 40000),
Array(1052503, 40000),
Array(1051261, 40000),
Array(1050230, 40000),
Array(1050231, 40000),
Array(1051149, 40000),
Array(1051192, 40000),
Array(1051255, 40000),
Array(1051256, 40000),
Array(1112422, 40000),
Array(1112424, 40000),
Array(1112930, 40000),
Array(1112136, 40000),
Array(1112920, 54000),
Array(1702367, 54000),
Array(1702341, 54000),
Array(1322102, 54000),
Array(1702366, 54000),
Array(1702352, 54000),
Array(1302037, 54000),
Array(1302061, 54000),
Array(1302063, 54000),
Array(1302080, 54000),
Array(1302084, 54000),
Array(1302085, 54000),
Array(1302087, 54000),
Array(1322051, 54000),
Array(1332032, 54000),
Array(1332053, 54000),
Array(1372017, 54000),
Array(1402037, 54000),
Array(1402063, 54000),
Array(1422011, 54000),
Array(1432039, 54000),
Array(1432046, 54000),
Array(1442026, 54000),
Array(1442065, 54000),
Array(1442088, 54000),
Array(1472063, 54000),
Array(1702342, 54000),
Array(1702337, 54000),
Array(1702335, 54000),
Array(1702330, 54000),
Array(1702346, 54000),
Array(1702341, 54000),
Array(1702340, 54000),
Array(1702324, 54000),
Array(1322102, 54000),
Array(1412056, 54000),
Array(1402110, 54000),
Array(1702310, 54000),
Array(1702329, 54000),
Array(1702316, 54000),
Array(1102273, 54000),
Array(1102288, 54000),
Array(1102253, 54000),
Array(1102298, 54000),
Array(1102299, 54000),
Array(1102297, 54000),
Array(1102310, 54000),
Array(1102319, 54000),
Array(1102272, 54000),
Array(1102323, 54000),
Array(1102324, 54000),
Array(1102349, 54000),
Array(1102325, 54000),
Array(1102326, 54000),
Array(1102338, 54000),
Array(1102350, 54000),
Array(1102374, 54000),
Array(1102353, 54000),
Array(1102357, 54000),
Array(1003214, 54000),
Array(1003141, 54000),
Array(1003269, 54000),
Array(1003268, 54000),
Array(1003492, 54000),
Array(1003493, 54000),
Array(1003494, 54000),
Array(1003495, 54000),
Array(1003496, 54000),
Array(1003519, 54000),
Array(1003520, 54000),
Array(1002726, 54000),
Array(1002524, 54000),
Array(1002714, 54000),
Array(1002841, 54000),
Array(1003220, 54000),
Array(1003219, 54000),
Array(1003170, 54000),
Array(1003226, 54000),
Array(1003227, 54000),
Array(1000050, 54000),
Array(1003232, 54000),
Array(1001064, 54000),
Array(1001075, 54000),
Array(1003252, 54000),
Array(1003249, 54000),
Array(1001036, 54000),
Array(1002425, 54000),
Array(1002677, 54000),
Array(1002702, 54000),
Array(1002707, 54000),
Array(1002728, 54000),
Array(1002743, 54000),
Array(1002749, 54000),
Array(1002758, 54000),
Array(1002788, 54000),
Array(1002812, 54000),
Array(1002851, 54000),
Array(1002858, 54000),
Array(1002867, 54000),
Array(1002939, 54000),
Array(1002971, 54000),
Array(1002972, 54000),
Array(1002980, 54000),
Array(1002997, 54000),
Array(1002998, 54000),
Array(1003091, 54000),
Array(1003114, 54000),
Array(1003075, 54000),
Array(1000043, 54000),
Array(1003149, 54000),
Array(1002988, 54000),
Array(1003154, 54000),
Array(1003159, 54000),
Array(1003169, 54000),
Array(1003193, 54000),
Array(1003194, 54000),
Array(1003195, 54000),
Array(1003196, 54000),
Array(1003271, 54000),
Array(1003360, 54000),
Array(1003359, 54000),
Array(1003417, 54000),
Array(1112204, 54000),
Array(1003581, 55000),
Array(1042263, 55000),
Array(1062173, 40000),
Array(1072820, 40000),
Array(1702422, 55000),
Array(1112101, 40000),
Array(1112937, 55000),
Array(1012134, 40000),
Array(1112907, 55000),
Array(1112928, 55000),
Array(1050119, 55000),
Array(1042198, 55000),
Array(1062072, 55000),
Array(1002566, 55000),
Array(1112145, 55000),
Array(1112257, 55000),
Array(1112146, 55000),
Array(1112258, 55000),
Array(1112254, 55000),
Array(1112143, 55000),
Array(1102453, 50000), 
Array(1102450, 50000), 
Array(1102451, 50000), 
Array(1102452, 50000), 
Array(1102511, 50000), 
Array(1102385, 50000), 
Array(1102386, 50000), 
Array(1102487, 50000), 
Array(1082549, 55000),
Array(1082548, 55000),
Array(1072843, 55000),
Array(1072832, 55000),
Array(1062174, 55000),
Array(1042204, 55000),
Array(1012208, 55000),
Array(1012165, 55000),
Array(1012412, 55000),
Array(1012413, 55000),
Array(1702442, 55000),
Array(1702422, 55000),
Array(1702446, 55000),
Array(1702460, 55000),
Array(1702408, 55000),
Array(1702415, 55000),
Array(1702403, 55000),
Array(1702402, 55000),
Array(1702375, 55000),
Array(1702348, 55000),
Array(1003965, 55000),
Array(1003964, 55000),
Array(1003920, 55000),
Array(1003921, 55000),
Array(1003918, 55000),
Array(1003861, 55000),
Array(1003865, 55000),
Array(1003919, 55000),
Array(1102593, 55000),
Array(1102564, 55000),
Array(1102615, 55000),
Array(1052661, 55000),
Array(1003504, 55000)
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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择您希望购买的道具：";
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