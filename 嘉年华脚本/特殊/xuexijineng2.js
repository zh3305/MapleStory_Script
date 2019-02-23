/* 技能册 */

var status = -1;
var itemList = Array(
Array(2290868, 1000), // 英雄的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得英雄所需的一本能手册。
Array(2290869, 1000), // 圣骑士的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得圣骑士所需的一本能手册。
Array(2290870, 1000), // 黑骑士的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得黑骑士所需的一本能手册。
Array(2290871, 1000), // 火毒魔导师的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得火毒魔导师所需的一本能手册。
Array(2290872, 1000), // 冰雷魔导师的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得冰雷魔导师所需的一本能手册。
Array(2290873, 1000), // 主教的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得主教所需的一本能手册。
Array(2290874, 1000), // 神射手的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得神射手所需的一本能手册。
Array(2290875, 1000), // 箭神的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得箭神所需的一本能手册。
Array(2290876, 1000), // 侠盗的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得侠盗所需的一本能手册。
Array(2290877, 1000), // 隐士的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得隐士所需的一本能手册。
Array(2290878, 1000), // 暗影双刀的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得暗影双刀所需的一本能手册。
Array(2290879, 1000), // 冲锋队长的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得冲锋队长所需的一本能手册。
Array(2290880, 1000), // 船长的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得船长所需的一本能手册。
Array(2290881, 1000), // 火炮手的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得火炮手所需的一本能手册。
Array(2290882, 1000), // 战神的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得战神所需的一本能手册。
Array(2290883, 1000), // 龙神的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得龙神所需的一本能手册。
Array(2290884, 1000), // 双弩精灵的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得双弩精灵所需的一本能手册。
Array(2290885, 1000), // 恶魔猎手的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得恶魔猎手所需的一本能手册。
Array(2290886, 1000), // 唤灵斗师的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得唤灵斗师所需的一本能手册。
Array(2290887, 1000), // 豹弩游侠的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得豹弩游侠所需的一本能手册。
Array(2290245, 1000), // 尖兵的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得尖兵所需的一本能手册。
Array(2290889, 1000), // 幻影的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得幻影所需的一本能手册。
Array(2290890, 1000), // 夜光法师的神秘的能手册 , 未知的神秘能手册。双击后，可以随机获得夜光法师所需的一本能手册。
Array(2290891, 1000), // 狂龙战士神秘能手册 , 未知的神秘能手册。双击后，可以随机获得狂龙战士所需的一本能手册。
Array(2290892, 1000) // 爆莉萌天使神秘能手册 , 未知的神秘能手册。双击后，可以随机获得爆莉萌天使所需的一本能手册。
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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择您希望购买的技能册：\r\n\点卷：#r" + cm.getPlayer().getCSPoints(1) + "#k	";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList[i][1] + "#k点卷#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            itemId = item[0];
            points = item[1];
            period = item[2];
            cm.sendYesNo("您是否购买#i" + itemId + ":# #b#t" + itemId + "##k 需要 #r" + points + "#k 点卷？");
        } else {
            cm.sendOk("出现错误...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (itemId <= 0 || points <= 0 || period <= 0) {
            cm.sendOk("购买道具出现错误...");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getCSPoints(1) >= points) {
            if (cm.haveItem(itemId)) {
                cm.sendOk("您已经拥有#i" + itemId + ":# #b#t" + itemId + "##k无需重复购买。");
            } else {
                cm.gainNX( - points);
                cm.gainItemPeriod(itemId, 1, period);
                cm.sendOk("恭喜您成功购买#i" + itemId + ":# #b#t" + itemId + "##k。");
				cm.dispose();
			}
        } else {
            cm.sendOk("您没有那么多点卷。\r\n\r\n购买#i" + itemId + ":# #b#t" + itemId + "##k 需要 #r" + points + "#k 点卷。");
        }
        cm.dispose();
    }
}