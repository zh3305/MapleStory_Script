//物品自己添加
var status = -1;
var itemList = Array(
Array(2049116, 150), 
Array(2049124, 150), 
Array(2049704, 120), 
Array(2049752, 150), 
Array(2046008, 300), 
Array(2046009, 300), 
Array(2046108, 300), 
Array(2046109, 300), 
Array(2046318, 200), 
Array(2046319, 200),	
Array(2049135, 50),
Array(2049300, 80),
Array(2614007, 180), //突破十万 30%
Array(2048300, 350), //银光潜能附加印章
Array(2048309, 350),  //附加潜能古卷
Array(2046913, 5500), // 宿命正义单手武器攻击力卷轴 100% // 为单手武器增加攻击力属性。
Array(2046914, 5500), // 宿命正义单手武器魔力卷轴 100% // 为单手武器增加魔法攻击力属性。
Array(2046173, 5500), // 宿命正义双手武器攻击力卷轴 100% // 为双手武器增加攻击力属性。
Array(2046577, 2500), // 宿命正义防具力量卷轴 100% // 为防具增加力量属性。
Array(2046578, 2500), // 宿命正义防具智力卷轴 100% // 为防具增加智力属性。
Array(2046579, 2500), // 宿命正义防具敏捷卷轴 100% // 为防具增加敏捷属性。
Array(2046580, 2500), // 宿命正义防具运气卷轴 100% // 为防具增加运气属性。
Array(2046763, 2500), // 宿命正义饰品力量卷轴 100% // 为饰品增加力量属性。
Array(2046764, 2500), // 宿命正义饰品智力卷轴 100% // 为饰品增加智力属性。
Array(2046765, 2500), // 宿命正义饰品敏捷卷轴 100% // 为饰品增加敏捷属性。
Array(2046766, 2500) // 宿命正义饰品运气卷轴 100% // 为饰品增加运气属性。

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