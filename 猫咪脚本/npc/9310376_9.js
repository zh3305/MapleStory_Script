/* 绝版点卷商店  戒子*/

var status = -1;
var itemList = Array(
Array(1112177, 50000),
Array(1112289, 50000),
Array(1112181, 30000),
Array(1112294, 30000),
Array(1112150, 30000),
Array(1112262, 30000),
Array(1112263, 30000),
Array(1113021, 50000),
Array(1112151, 30000),
Array(1112155, 30000),
Array(1112162, 30000),
Array(1112267, 30000),
Array(1112236, 50000),
Array(1112126, 50000),
Array(1112943, 40000),
Array(1112904, 30000), //彩虹星环绕戒指
Array(1112238, 30000), //水墨花聊天戒指
Array(1112135, 30000), //水墨花名片戒指
Array(1112916, 50000), //寂寞单身戒指
Array(1112118, 10000), //可乐名片戒指
Array(1112119, 10000), //可乐(Red) 名片戒指
Array(1112120, 10000), //可乐(White) 名片戒指
Array(1112228, 10000), //可乐聊天戒指
Array(1112229, 10000), //可乐(Red)聊天戒指
Array(1112230, 10000),  //可乐(White)聊天戒指
Array(1112103, 10000),
Array(1112141, 10000),
Array(1112252, 10000),
Array(1112253, 10000),
Array(1112142, 10000),
Array(1112930, 10000),
Array(1112136, 10000),
Array(1112920, 14000),
Array(1112145, 15000),
Array(1112257, 15000),
Array(1112146, 15000),
Array(1112258, 15000),
Array(1112254, 15000),
Array(1112143, 15000),
Array(1112928, 15000),
Array(1112907, 15000),
Array(1112937, 15000),
Array(1112101, 10000),
Array(1112204, 14000)
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