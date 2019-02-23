/*
 *
 * NPC类型：兑换NPC
 * NPC名称：温迪
 * NPC职称：末日风暴
 *
 */

var status = -1;

var itemList = Array(
        //Array(1003854, 5000, 24 * 60 * 60 * 1000),
        Array(1004137, 300, 24 * 60 * 60 * 1000),
        Array(1102683, 300, 24 * 60 * 60 * 1000),
        Array(1042314, 300, 24 * 60 * 60 * 1000),
        Array(1062203, 300, 24 * 60 * 60 * 1000),
        Array(1702510, 300, 24 * 60 * 60 * 1000),
        Array(1004126, 300, 24 * 60 * 60 * 1000),
        Array(1042311, 300, 24 * 60 * 60 * 1000),
        Array(1062204, 300, 24 * 60 * 60 * 1000),
        Array(1702509, 300, 24 * 60 * 60 * 1000)
        //Array(5010080, 5000, 24 * 60 * 60 * 1000)        


        );
var itemId = -1;
var points = -1;
var period = -1;

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
        var selStr = "#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b兔花花 MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0##k\r\n枫叶：#r " + cm.itemQuantity(4001126) + " #k个 \r\n该npc主要针对与新手过度,兑换的装备\r\n#b全属性加50点 HP1000 MP1000#k。\r\n使用时间限制1-3天,150级以下的玩家才可以进行兑换。";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":##b#t" + itemList[i][0] + "##k #r" + itemList[i][1] + " #k枫叶#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            itemId = item[0];
            points = item[1];
            period = item[2];
            cm.sendYesNo("您确定兑换#i" + itemId + ":# #b#t" + itemId + "##k 商品价格为：#r" + points + "#k 枫叶。");
        } else {
            cm.sendOk("兑换道具出现错误,请联系管理员。");
            cm.dispose();
        }
    } else if (status == 2) {
        if (itemId <= 0 || points <= 0 || period <= 0) {
            cm.sendOk("兑换道具出现错误,请联系管理员。");
            cm.dispose();
            return;
        }
        if (cm.haveItem(4001126, points)) {
            if (cm.haveSpace(1)) {
                if (cm.getPlayer().getLevel() <= 150) {
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var toDrop = ii.randomizeStats(ii.getEquipById(itemId)).copy(); // 生成一个Eq                toDrop.setStr(50); //装备力量
                toDrop.setDex(50); //装备敏捷
                toDrop.setInt(50); //装备智力
                toDrop.setLuk(50); //装备运气
                toDrop.setHp(1000); //HP
                toDrop.setMp(1000); //MP0086);
                toDrop.setExpiration(java.lang.System.currentTimeMillis() + period); // 期限
                cm.gainItem(4001126, -points);
                Packages.server.MapleInventoryManipulator.addbyItem(cm.getC(), toDrop);
                 cm.worldSpouseMessage(0x20, "[枫叶活动] 玩家 " + cm.getChar().getName() + " 使用"+ points  +"枫叶 兑换了全属性加50的限时点装。");
                cm.sendOk("兑换成功,商品#i" + itemId + ":# #b#t" + itemId + "##k已送往背包。");
            } else {
                cm.sendOk("兑换功能只有150以下的玩家才能使用。");
            }
            } else {
                cm.sendOk("兑换失败，请您确认在背包装备栏目窗口中是否有一格以上的空间。");
            }
        } else {
            cm.sendOk("枫叶不足。\r\n\r\n兑换#i" + itemId + ":# #b#t" + itemId + "##k 需要 #r" + points + "#k 枫叶。\r\n\r\n账户枫叶：#r" + cm.itemQuantity(4001126) + " 个");
        }
        status = -1;
    }
}



