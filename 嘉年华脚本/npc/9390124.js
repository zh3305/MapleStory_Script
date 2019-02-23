var status = 0;
var typede = 0;
var todaycount = 0;
var nowgive = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        if (status == 0) {
            var zyms = "#e<心树的记忆>#n \r\n\r\n再下去就是由于心树的愤怒而发生变异的#r贝勒德#k所在的地了,通往贝勒德的路需要的钥匙。";
            zyms += "\r\n#b#L1#每天可以领取3个#v4033981##z4033981#。\r\n";
            //zyms += "\r\n#b#L2#购买#v4033981##z4033981#。   #r1000#k点卷\r\n";
            zyms += "\r\n#b#L3#移动到#r#e心树的记忆#n#k。\r\n";
            cm.sendSimple(zyms);
        } else if (status == 1) {
            if (selection == 1) {
                todaycount = cm.getPQLog("贝勒德入场卷");
                if (todaycount >= 3) {
                    cm.sendOk("每天只能#r#e3个#v4033981##z4033981##n#k。你已经领取了3个了!");
                    cm.dispose();
                } else if (cm.getItemQuantity(4033981) >= 3) {
                    cm.sendOk("你已经拥有#r#e" + cm.getItemQuantity(4033981) + "个#v4033981##z4033981##n#k。");
                    cm.dispose();
                } else {
                    nowgive = 3 - cm.getItemQuantity(4033981);
                    if (nowgive > 3 - todaycount) {
                        nowgive = 3 - todaycount;
                    }
                    cm.sendNext("你现在拥有#r#e" + cm.getItemQuantity(4033981) + "个#v4033981##z4033981##n#k.\r\n\r\n今天还能领取#r#e" + (3 - todaycount) + "#n#k,我将在给你#r#e" + nowgive + "#n#k个.");
                }
            } else if (selection == 2) {
                if (cm.getSpace(3) < 1) {
                    cm.sendOk("背包其他栏空间不足,无法购买。");
                } else if (cm.getNX(1) >= 1000) {
                    cm.gainItem(4033981, 1);
                    cm.gainNX(-1000);
                    cm.sendOk("领取成功,祝您游戏愉快。");
                } else {
                    cm.sendOk("账户点卷余额不足。\r\n\r\n购买#v4033981##z4033981#需要#r1000#k点卷。");
                }
                cm.dispose();
            } else if (selection == 3) {
                cm.warp(863010000);
                cm.dispose();
            }
        } else if (status == 2) {
            if (cm.getSpace(3) < 1) {
                cm.sendOk("背包其他栏空间不足,无法领取。");
            } else if (cm.getPQLog("贝勒德入场卷") < 3) {
                cm.gainItem(4033981, nowgive);
                cm.setPQLog("贝勒德入场卷", 0, nowgive);
                cm.sendOk("领取成功,祝您游戏愉快。");
            } else {
                cm.sendOk("每天只可以免费领取三次,您已经领取三次了。");
            }
            cm.dispose();
        }
    }
}
