//物品自己添加
var status = -1;
var itemList = Array(
Array(500, 50),
Array(6000, 500),
Array(13000, 1000),
Array(18000, 1500),
Array(22000, 2000)
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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择您希望兑换的点劵数量：";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "# 兑换 #r[" + itemList[i][0] + "]#k 点劵  需要：#r" + itemList[i][1] + "#k积分#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1];
            cm.sendYesNo("您是否购买  " + selectedItem + "点劵  需要 #r" + selectedCost + "#k 积分？");
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
            //var gachaponItem = cm.gainGachaponItem(selectedItem, 1, "积分商店", 3, true);
            if (cm.gainNX(1,selectedItem)) {
				cm.gainPlayerPoints(-selectedCost);
                cm.sendOk("恭喜您成功购买#i" + selectedItem + " 点劵成功 。\r\n您还有"+cm.getPlayerPoints()+"积分");
            } else {
                cm.sendOk("购买失败");
            }
        } else {
            cm.sendOk("您没有那么多积分。你的积分是:"+cm.getPlayerPoints()+"\r\n\r\n购买" + selectedItem + "点劵 需要 #r" + selectedCost + "#k 积分。");
        }
        cm.dispose();
    }
}