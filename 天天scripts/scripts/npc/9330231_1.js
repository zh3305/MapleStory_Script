var status = -1;

var itemList = Array(
    //物品编码 几率  数量
    Array(4001784, 5, 1), //金币：50W
    Array(4001714, 10, 1), // 100W
    Array(4001785, 45, 1) //500W
);


function action(mode, type, selection) {
    //cm.gainPlayerEnergy(10);
    cm.gainItem(5062009, 3);
    cm.worldSpouseMessage(0x20, "[日常活动] 恭喜玩家 " + cm.getChar().getName() + " 在扫荡秦皇陵活动中获得 3个超级神奇魔方 。");

    var CounJl = 0;
    for (var i = itemList.length - 1; i >= 0; i--) {
        CounJl += itemList[i][1];
    }

    var chance = Math.floor(Math.random() * CounJl);
    var finalitem = Array();
    for (var i = 0; i < itemList.length; i++) {
        if (itemList[i][1] >= chance) {
            finalitem.push(itemList[i]);
            break;
        }
        chance = chance - itemList[i][1];
    }
    if (finalitem.length != 0) {
        var item;
        var random = new java.util.Random();
        var finalchance = random.nextInt(finalitem.length);
        var itemId = finalitem[finalchance][0];
        var quantity = finalitem[finalchance][2];
        cm.gainItem(itemId, quantity);
        //var notice = finalitem[finalchance][3];
        // item = im.gainGachaponItem(itemId, quantity, "天筹礼包", 3);
        //     if (item != -1) {
        //         im.gainItem(2430472, -1);
        //         im.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
        //     } else {
        //         im.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
        //     }
        //     im.safeDispose();
        // } else {
        //     im.sendOk("一团白云飘过,什么事都没有发生过!!");
        //     im.safeDispose();
    }
    cm.setEventCount("皇陵");
    cm.setPartyEventCount("皇陵");
    cm.warp(910000000);
    cm.dispose();
}
