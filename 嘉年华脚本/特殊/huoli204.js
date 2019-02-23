/*
 *活力兑换-兑换图腾戒指勋章
 */

var status = -1;
var itemList = Array(
Array(1112735, 1500), 
Array(1112915, 500), 
Array(1202050, 800), 
Array(1202062, 800), 
Array(1202058, 800), 
Array(1202054, 800), 
Array(1112427, 480), 
Array(1112428, 480), 
Array(1112429, 480), 
Array(1142546, 480), 
Array(1142362, 480), 
Array(1142369, 480), 
Array(1142540, 480), 
Array(1142536, 480), 
Array(1142393, 480), 
Array(1142409, 480), 
Array(1142541, 480), 
Array(1142530, 480)
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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎使用活力值兑换饰品.\r\n\r\n#k#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#积分：#r"+cm.getPlayerPoints()+"#k 点  #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#活力值：#r"+cm.getPlayerEnergy()+"#k 点 \r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#在线时间：#r"+cm.getGamePoints()+"#k 分钟#b\r\n\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/reward#";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":#  #b#t" + itemList[i][0] + "##l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1];
            cm.sendYesNo("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎使用活力值兑换饰品.\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#使用#r" + selectedCost + "#k活力值\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/reward#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#兑换#i" + selectedItem + ":# #b#t" + selectedItem + "##r\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#注：活力值通过[日常]组队任务快速获得.");
        } else {
            cm.sendOk("出现错误...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selectedItem <= 0 || selectedCost <= 0) {
            cm.sendOk("购买道具出现错误...");
            cm.dispose();
            return;
        }
        if (cm.getPlayerEnergy() >= selectedCost) {
            var gachaponItem = cm.gainGachaponItem(selectedItem, 1, "活力值兑换饰品", 3);
            if (gachaponItem != -1) {
                cm.gainPlayerEnergy(-selectedCost);
                cm.sendOk("恭喜您成功兑换#i" + selectedItem + ":# #b#t" + selectedItem + "##k。");
            } else {
                cm.sendOk("兑换奖励失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else {
            cm.sendOk("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎使用活力值兑换饰品.\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#不足#r" + selectedCost + "#k活力值\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/reward#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#无法兑换#i" + selectedItem + ":# #b#t" + selectedItem + "##r\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#注：活力值通过[日常]组队任务快速获得.");
        }
        cm.dispose();
    }
}