/*
 完成时间：2015-10-18 01:46:22
 脚本功能：良辰跳跳跳
 */
var isopenvip = false;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var npcid = 9000002;

var tiaotiaomaps = Array(
    // Array(100000202,"射手跳跳"),//跳致第二张
    // Array(109030001,"上楼找出口"),
    // Array(910360000,"地铁B1"),
    // Array(910360100,"地铁B2"),
    // Array(910360200,"地铁B3"),
    Array(220000006, "玩具城跳跳"),
    Array(109040004, "向高地 共4阶段"), // Array(109040001,"高地第1阶段"),
    Array(910130001, "忍苦树林"), //只跳第二阶段 Array(910130000,"忍苦树林"),
    Array(910530001, "韧性森林二阶段", 750, -2400) // Array(280020000,"火山的心脏")//韧性森林二阶段
)


var a = 0;
var selects = 0;
var MapType;

function start() {
    a = -1;
    action(1, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    } else {
        if (mode == 1)
            a++;
        else {
            cm.dispose();
            return;
        }
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
            var text = "";
            text += "[#h0#] 良辰不喜欢和人说废话。\"赤珠\"是良辰的东西.我是本地人，我可以有一百种方式，让你待不下去。你若是感觉你有实力和我玩，良辰，不介意奉陪到底。\r\n";
            text += "今日完成" + cm.getBossLog("良辰跳") + " 总共完成" + cm.getBossLog("总计良辰跳", 1) + "\r\n";
            text += "#L0# " + icon + " 我赵日天不服,我去找\"赤珠\"\r\n";
            text += "#L1# " + icon + " 7个赤珠兑换1亿\r\n";
            cm.sendSimple(text)


        } else if (a == 1) {
            var text = ""
            switch (selection) {
                case 0: //随机传送
                    if (cm.getLevel() < 120) {
                        cm.sendOk("#k\r\n\r\n120级都没有你若是感觉你有实力和我玩，良辰不介意奉陪到底；你的等级" + cm.getLevel());
                    } else {
                        if (cm.getBossLog("良辰跳") == 0 || cm.getPlayer().isGM()) {
                            // cm.gainItem(qdwp1, gqdwp1);//出席图章
                            // cm.gainItem(qdwp1, gqdwp2);//国庆纪念币
                            cm.worldMessage("玩家" + cm.getChar().getName() + "开始了良辰跳跳跳" + cm.getBossLog("总计良辰跳"));

                            //跳转到地图
                            temp1 = cm.getBossLog("总计良辰跳");
                            temp1 = temp1 % (tiaotiaomaps.length);
                            cm.worldMessage("玩家" + cm.getChar().getName() + "开始了良辰跳跳跳" + temp1);

                            cm.warp(tiaotiaomaps[temp1][0]);

                            if (tiaotiaomaps[temp1][2] != null) {
                                cm.spawnNpc(npcid, tiaotiaomaps[temp1][2], tiaotiaomaps[temp1][3]);
                            }
                            //cm.setBossLog("良辰跳");
                            // cm.setBossLog("总计良辰跳", 1);
                            //cm.sendOk("#k \r\n#d签到成功#k\r\n获得签到礼物：\r\n#i" + qdwp1 + ":# #kx#r " + gqdwp1 + "  #i" + qdwp2 + ":# #kx#r " + gqdwp2 + " ");
                        } else {
                            cm.sendOk("#k #k\r\n\r\n记住一天只能抢一次。你可以继续我行我素，不过，你的日子不会再很舒心；");
                        }
                    }
                    cm.dispose();
                    break;
                    //----------------------------------
                case 1: //兑换
                    if (cm.itemQuantity(4032398) >= 7) {
                        cm.gainItem(4032398, -7);
                        cm.gainMeso(100000000); //兑换成功
                        cm.sendOk("兑换成功.请查看背包");
                        cm.dispose();
                    } else {
                        cm.sendOk("你没有8个#v4032398#");
                        cm.dispose();
                    }
                    break;
            }

            cm.dispose();
        } //a
    } //mode
} //f
