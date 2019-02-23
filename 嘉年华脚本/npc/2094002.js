var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getPlayer().getMapId() == 925100700) {
        cm.removeAll(4001117);
        cm.removeAll(4001120);
        cm.removeAll(4001121);
        cm.removeAll(4001122);
        cm.warp(251010404, 0);
        cm.dispose();
        return;
    }
    var em = cm.getEventManager("Pirate");
    var eim = cm.getEventInstance();
    if (em == null || eim == null) {
        cm.sendNext("配置文件出错,请联系管理员。");
        cm.dispose();
        return;
    }
    if (!cm.isLeader()) {
        cm.sendNext("请你们的队长和我说话。");
        cm.dispose();
        return;
    }
    switch (cm.getPlayer().getMapId()) {
        case 925100000:
            cm.sendNext("你和你的队员即将进入海盗的船,现在你们必须消灭所有的怪物和打开所有的宝箱才可以进入下一阶段。");
            cm.dispose();
            break;
        case 925100100:
            var emp = eim.getProperty("stage2");
            if (emp == null) {
                eim.setProperty("stage2", "0");
                emp = "0";
            }
            if (emp.equals("0")) {
                if (cm.haveItem(4001120, 20)) {
                    cm.sendNext("非常好,现在抓紧时间收集20个#b#z4001121##k交给我吧。");
                    cm.removeAll(4001120);
                    eim.setProperty("stage2", "1");
                    eim.schedule("checkPQDone", 100);
                } else {
                    cm.sendNext("你和你的队员即将进入海盗的船,现在你们必须收集20个#b#z4001120##k交给我,才可以开始下一个考验。");
                }
            } else if (emp.equals("1")) {
                if (cm.haveItem(4001121, 20)) {
                    cm.sendNext("非常好,现在抓紧时间收集20个#b#z4001122##k交给我吧。");
                    cm.removeAll(4001121);
                    eim.setProperty("stage2", "2");
                    eim.schedule("checkPQDone", 100);
                } else {
                    cm.sendNext("你和你的队员即将进入海盗的船,现在你们必须收集20个#b#z4001121##k交给我,才可以开始下一个考验。");
                }
            } else if (emp.equals("2")) {
                if (cm.haveItem(4001122, 20)) {
                    cm.sendNext("非常好,抓紧时间前往下一阶段吧!");
                    cm.removeAll(4001122);
                    eim.setProperty("stage2", "3");
                    eim.schedule("setDone", 100);
                } else {
                    cm.sendNext("你和你的队员即将进入海盗的船,现在你们必须收集20个#b#z4001122##k交给我,才可以开始下一个考验。");
                }
            } else {
                cm.sendNext("时间大门已经打开,你们可以前往下一关了,抓紧时间。");
            }
            cm.dispose();
            break;
        case 925100200:
            cm.sendNext("海盗船的袭击,我们必须毁灭守卫第一。");
            cm.dispose();
            break;
        case 925100201:
            if (cm.getMap().getAllMonster().size() == 0) {
                cm.sendNext("Excellent.");
                if (eim.getProperty("stage2a").equals("0")) {
                    cm.getMap().setReactorState();
                    eim.setProperty("stage2a", "1");
                }
            } else {
                cm.sendNext("These bellflowers are in hiding. We must liberate them.");
            }
            cm.dispose();
            break;
        case 925100301:
            if (cm.getMap().getAllMonster().size() == 0) {
                cm.sendNext("Excellent.");
                if (em.getProperty("stage3a").equals("0")) {
                    cm.getMap().setReactorState();
                    em.setProperty("stage3a", "1");
                }
            } else {
                cm.sendNext("These bellflowers are in hiding. We must liberate them.");
            }
            cm.dispose();
            break;
        case 925100202:
        case 925100302:
            cm.sendNext("These are the Captains and Krus which devote their whole life to Lord Pirate. Kill them as you see fit.");
            cm.dispose();
            break;
        case 925100400:
            cm.sendNext("消灭怪物收集骷髅钥匙来关上所有的门,进入下一阶段!");
            cm.dispose();
            break;
        case 925100500:
            if (cm.getMap().getAllMonster().size() == 0) {
                cm.warpParty(925100600);
            } else {
                cm.sendNext("请击败红鼻子海盗团的船长老海盗！");
            }
            cm.dispose();
            break;
    }
}
