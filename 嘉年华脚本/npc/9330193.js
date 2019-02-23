var status = -1;
var itemList = Array(
Array(1202023, 480),  
Array(1202027, 480), 
Array(1202031, 480),  
Array(1202035, 480),  
//
Array(1202083, 480)
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
        var selStr = "#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追忆 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0##k\r\n账户考试分数：#r"+cm.getPlayerPoints()+"";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "# #i" + itemList[i][0] + ":#  #b#t" + itemList[i][0] + " # #r" + itemList[i][1] + "#k分#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1];
            cm.sendYesNo("你确定使用#r" + selectedCost + "#k点数兑换#i" + selectedItem + ":# #b#t" + selectedItem + "##k。");
        } else {
            cm.sendOk("兑换道具出现错误。");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selectedItem <= 0 || selectedCost <= 0) {
            cm.sendOk("兑换道具出现错误。");
            cm.dispose();
            return;
        }
        if (cm.getPlayerPoints() >= selectedCost) {
            var gachaponItem = cm.gainGachaponItem(selectedItem, 1, "分数兑换图腾", 3);
            if (gachaponItem != -1) {
                cm.gainPlayerPoints(-selectedCost);
                cm.sendOk("兑换成功,#i" + selectedItem + ":# #b#t" + selectedItem + "##k已送往背包。");
            } else {
                cm.sendOk("兑换奖励失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else {
            cm.sendOk("兑换失败。\r\n\r\n你没有足够的分数。账户组队总共点数：#r" + cm.getPlayerPoints() + "");
        }
        cm.dispose();
    }
}
