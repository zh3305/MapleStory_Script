status = -1;
var itemList = Array(
// ------ 卷轴 ------
Array(2049100, 500, 1, 3), //混沌卷轴60%
Array(2049133, 200, 1, 3), //惊人混沌卷轴50%
Array(2049134, 200, 1, 3), //惊人混沌卷轴70%
Array(2049137, 200, 1, 3), //惊人正义混沌卷轴 40%
Array(2049129, 200, 1, 3), //正义混沌卷轴 50%
Array(2049116, 200, 1, 3), //强化混沌卷轴 60%
Array(2049124, 200, 1, 3), //正向混沌卷轴 60%
Array(2340000, 600, 1, 3), //祝福卷轴
Array(2431738, 800, 1, 3), //抵用卷500
Array(2040402, 800, 1, 3), //抵用卷500
Array(2040419, 800, 1, 3), //抵用卷500
Array(2040422, 800, 1, 3), //抵用卷500
Array(2040427, 800, 1, 3), //抵用卷500
Array(2040505, 800, 1, 3), //抵用卷500
Array(2040502, 800, 1, 3), //抵用卷500
Array(2040514, 800, 1, 3), //抵用卷500
Array(2040517, 800, 1, 3), //抵用卷500
Array(2040534, 800, 1, 3), //抵用卷500
Array(2040602, 800, 1, 3), //抵用卷500
Array(2040612, 800, 1, 3), //抵用卷500
Array(2040619, 800, 1, 3), //抵用卷500
Array(2040622, 800, 1, 3), //抵用卷500
Array(2040627, 800, 1, 3), //抵用卷500
Array(2040702, 800, 1, 3), //抵用卷500
Array(2040705, 800, 1, 3), //抵用卷500
Array(2040708, 800, 1, 3), //抵用卷500
Array(2040802, 800, 1, 3), //抵用卷500
Array(2040816, 800, 1, 3), //抵用卷500
Array(2040825, 800, 1, 3), //抵用卷500
Array(2040902, 800, 1, 3), //抵用卷500
Array(2049752, 300, 1, 3), //S级潜能卷轴 30%
Array(2049704, 500, 1, 3), //A级潜能附加卷轴 40%
Array(2048311, 500, 1, 3), //附加潜能附加卷轴 50%
Array(2049304, 500, 1, 3), //3星装备强化卷轴 80%
// ------ 装备 ------
Array(1012319, 600, 1, 3), //8周年点点红
Array(1112915, 300, 1, 3), //蓝调戒指
Array(1082145, 600, 1, 3), //工地（黄）
Array(1082146, 600, 1, 3), //工地（红）
Array(1082147, 600, 1, 3), //工地（蓝）
Array(1082148, 600, 1, 3), //工地（紫）
Array(1082149, 600, 1, 3), //工地（褐）
Array(1082150, 600, 1, 3), //工地（灰）
Array(1102588, 500, 1, 3),
Array(3994417, 200, 1, 3), //红色蜡笔
Array(1202023, 600, 1, 3), //真·乔图腾
Array(1202027, 600, 1, 3), //真·海丽蜜图腾
Array(1202031, 600, 1, 3), //真·小龙图腾
Array(1202035, 600, 1, 3), //真·李卡司图腾
// ------ 特殊 ------
Array(5064300, 600, 2, 3), //卷轴防护卷轴
Array(5062500, 600, 2, 3), //大师附加神奇魔方
Array(5062000, 600, 2, 3), //神奇魔方
Array(5064000, 600, 2, 3), //防爆卷轴
Array(5064100, 600, 2, 3), //保护卷轴
Array(5062002, 600, 2, 3)  //高级神奇魔方
);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            im.sendOk("不想使用吗？…我的肚子里有各类#b奇特座椅或卷轴、装备、新奇道具#k哦！");
            im.dispose();
        }
        status--;
    }
    if (status == 0) {
        var chance = Math.floor(Math.random() * 600);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = im.gainGachaponItem(itemId, quantity, " 妙斯的气息 ", notice);
            if (item != -1) {
		im.gainItem(2431716, -1);
                im.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            } else {
                im.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            im.safeDispose();
        } else {
            im.sendOk("今天的运气可真差，什么都没有拿到。");
            im.safeDispose();
        }
    }
}