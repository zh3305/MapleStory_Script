var itemList = Array(
    //物品编码 几率  数量
    Array(4001784, 5, 1), //金币：50W
    Array(4001714, 10, 1), // 100W
    Array(4001785, 45, 1) //500W
);



function action(mode, type, selection) {
    var em = cm.getEventManager("ZChaosPQ3");
    if (em == null) {
        cm.sendOk("请稍后再试。");
        cm.dispose();
        return;
    }
    switch (cm.getPlayer().getMapId()) {
        case 261000021:
            cm.dispose();
            cm.openNpc(2112003, 1);
            return;
        case 926110000:
            cm.sendOk("你应该尝试调查这里。看看#b文件库#k中的内容。直到找到可以进入实验室的入口。");
            break;
        case 926110001:
            cm.sendOk("请消灭所有的怪物！我会支持你的。");
            break;
        case 926110100:
            cm.sendOk("这些烧杯有泄漏。我们必须把#b可疑的液体#k倒入烧杯里边，一段时间不把#b可疑的液体#k倒入烧杯内，烧杯里的液体会流失光。请抓紧了！");
            break;
        case 926110400:
            cm.sendOk("你什么时候准备好，我们要去拯救我的爱情。");
            break;
        case 926110401:
            if (!cm.haveMonster(9300139)) {
                //cm.gainPlayerEnergy(10);
                cm.gainItem(5062009, 3);
                cm.worldSpouseMessage(0x20, "[日常活动] 恭喜玩家 " + cm.getChar().getName() + " 在拯救罗和朱活动中获得 3个超级神奇魔方 。");


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
                cm.setEventCount("罗朱");
                cm.setPartyEventCount("罗朱1");
                cm.warp(910000000);
                cm.dispose();
            } else {
                cm.sendOk("请确认地图上否还存在怪物!");
            }
            break;
    }
    cm.dispose();
}
