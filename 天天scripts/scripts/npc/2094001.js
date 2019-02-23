var status = -1;
var itemList = Array(
    //物品编码 几率  数量
    Array(4001784, 5, 1), //金币：50W
    Array(4001714, 10, 1), // 100W
    Array(4001785, 45, 1) //500W
);

function action(mode, type, selection) {
    cm.gainPlayerEnergy(10);
    cm.removeAll(4001117);
    cm.removeAll(4031437);
    cm.removeAll(4001120);
    cm.removeAll(4001121);
    cm.removeAll(4001122);
    cm.removeAll(4001260);
    cm.gainItem(5062009, 3);
    cm.worldSpouseMessage(0x20, "[日常活动] 恭喜玩家 " + cm.getChar().getName() + " 在抢占海盗船活动中获得 3个超级神奇魔方 。");


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
    }
    cm.setEventCount("海盗");
    cm.setPartyEventCount("海盗");
    cm.warp(910000000);
    cm.dispose();
}
