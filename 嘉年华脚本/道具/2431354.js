status = -1;
var itemList = Array(
// ------ 卷轴 ------
Array(2613000, 500, 1, 3),  // 星火单手武器攻击力卷轴 // 为单手武器附加提升攻击力的属性。
Array(2613001, 500, 1, 3), // 星火单手武器魔法力卷轴 // 为单手武器附加提升魔力的属性。
Array(2612010, 500, 1, 3)  // 星火双手武器攻击力卷轴 // 为双手武器附加提升攻击力的属性。
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
        var chance = Math.floor(Math.random() * 500);
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
            item = im.gainGachaponItem(itemId, quantity, "星火幸运箱子", notice);
            if (item != -1) {
		im.gainItem(2431354, -1);
               // im.warp(910000000, 0);
                im.sendOk("恭喜你获得了 #b#t" + item + "##k ");
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