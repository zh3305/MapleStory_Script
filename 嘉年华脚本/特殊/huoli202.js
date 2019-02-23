//物品自己添加
var status = -1;
var itemList = Array(
Array(3010029, 864),
Array(3010030, 864),
Array(3010031, 864),
Array(3010032, 864),
Array(3010033, 864),
Array(3010049, 864),
Array(3010054, 864),
Array(3010071, 864),
Array(3010099, 864),
Array(3010098, 864),
Array(3010356, 864),
Array(3010357, 864),
Array(3010361, 864),
Array(3010373, 864),
Array(3010375, 864),
Array(3010522, 864),
Array(3010587, 864),
Array(3010523, 14400),
Array(3010416, 14400),
Array(3010718, 14400),
Array(3010658, 14400),
Array(3010621, 14400),
Array(3010631, 14400),
Array(3010609, 14400),
Array(3010591, 14400),
Array(3010592, 14400),
Array(3010417, 14400),
Array(3010070, 14400),
Array(3010779, 14400),
Array(3010788, 14400)
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