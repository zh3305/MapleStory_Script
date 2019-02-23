/* 技能册 */

var status = -1;
var itemList = Array(
Array(2290868, 20), // 英雄的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得英雄所需的一本能手册。
Array(2290869, 20), // 圣骑士的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得圣骑士所需的一本能手册。
Array(2290870, 20), // 黑骑士的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得黑骑士所需的一本能手册。
Array(2290871, 20), // 火毒魔导师的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得火毒魔导师所需的一本能手册。
Array(2290872, 20), // 冰雷魔导师的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得冰雷魔导师所需的一本能手册。
Array(2290873, 20), // 主教的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得主教所需的一本能手册。
Array(2290874, 20), // 神射手的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得神射手所需的一本能手册。
Array(2290875, 20), // 箭神的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得箭神所需的一本能手册。
Array(2290876, 20), // 侠盗的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得侠盗所需的一本能手册。
Array(2290877, 20), // 隐士的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得隐士所需的一本能手册。
Array(2290878, 20), // 暗影双刀的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得暗影双刀所需的一本能手册。
Array(2290879, 20), // 冲锋队长的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得冲锋队长所需的一本能手册。
Array(2290880, 20), // 船长的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得船长所需的一本能手册。
Array(2290881, 20), // 火炮手的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得火炮手所需的一本能手册。
Array(2290882, 20), // 战神的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得战神所需的一本能手册。
Array(2290883, 20), // 龙神的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得龙神所需的一本能手册。
Array(2290884, 20), // 双弩精灵的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得双弩精灵所需的一本能手册。
Array(2290885, 20), // 恶魔猎手的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得恶魔猎手所需的一本能手册。
Array(2290886, 20), // 唤灵斗师的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得唤灵斗师所需的一本能手册。
Array(2290887, 20), // 豹弩游侠的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得豹弩游侠所需的一本能手册。
Array(2290888, 20), // 机械师的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得机械师所需的一本能手册。
Array(2290889, 20), // 幻影的神秘能手册 , 未知的神秘能手册。双击后，可以随机获得幻影所需的一本能手册。
Array(2290890, 20), // 夜光法师的神秘的能手册 , 未知的神秘能手册。双击后，可以随机获得夜光法师所需的一本能手册。
Array(2290891, 20), // 狂龙战士神秘能手册 , 未知的神秘能手册。双击后，可以随机获得狂龙战士所需的一本能手册。
Array(2290892, 20) // 爆莉萌天使神秘能手册 , 未知的神秘能手册。双击后，可以随机获得爆莉萌天使所需的一本能手册。
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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择您希望购买的技能册：";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList[i][1] + " #k活力值#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1];
            cm.sendYesNo("您是否购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 活力值\r\n附加 2000万 冒险币？");
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
        if (cm.getMeso() >= 20000000 && cm.getPlayerEnergy() >= selectedCost) {
            if (cm.gachaponItem != -1) {
		cm.gainItem(selectedItem,1);
                cm.gainMeso(-20000000);
		cm.gainPlayerEnergy(-20);
                cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k。");
            } else {
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else {
            cm.sendOk("您没有那么多活力值或冒险币。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k \r\n需要 #r" + selectedCost + "#k 活力值 附加 2000万 冒险币。");
        }
        cm.dispose();
    }
}