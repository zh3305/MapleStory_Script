/* 绝版抵用卷商店 脸饰*/

var status = -1;
var itemList = Array(
Array(1662041, 200000),//万圣节机器人
Array(1662039, 200000),//奥尔卡机器人
Array(1662036, 200000),//神之子贝塔机器人
Array(1662027, 200000),//银河战士
Array(1662032, 200000),//女妖机器人
Array(1662035, 100000),//神之子阿尔法机器人
Array(1662033, 300000),//未来机器人(男)
Array(1662034, 300000),//未来机器人(女)
Array(1672039, 100000)//未来机器人心脏 : 最高级

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
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList[i][1]  + "#k抵用卷#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1];
            cm.sendYesNo("您是否购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 抵用卷？");
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
        if (cm.getPlayer().getCSPoints(2) >= selectedCost) {
            var gachaponItem = cm.gainGachaponItem(selectedItem, 1, "抵用卷商店", 3, true);
            if (gachaponItem != -1) {
                cm.gainNX(2, - selectedCost );
                cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k。");
            } else {
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else {
            cm.sendOk("您没有那么多抵用卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 抵用卷。");
        }
        cm.dispose();
    }
}