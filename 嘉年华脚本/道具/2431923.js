status = -1;
var itemList = Array(//注释
// ------ 卷轴 ------
Array(4001715, 500, 1, 3), //定居币
Array(2049153, 250, 5, 3), //祝福卷轴
Array(2049750, 300, 1, 3), //S级潜能卷
Array(2614000, 500, 1, 3), //突破一万之石
Array(2614001, 500, 1, 3), //突破十万
Array(2614002, 50, 1, 3), //突破百万
Array(5062024, 40, 5, 3), //闪炫魔方X5
Array(2048721, 200, 1, 3), //涅槃
Array(2049116, 200, 1, 3), //强化混沌
Array(2510173, 100, 1, 3), //机器人图纸
Array(2510174, 100, 1, 3), //机器人图纸
Array(4000377, 600, 1, 3), //其他类
Array(4000378, 600, 1, 3) //
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
            item = im.gainGachaponItem(itemId, quantity, "[活动礼包]", notice);
            if (item != -1) {
		im.gainItem(2431923, -1);
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