/*
	所在地图: 		黑暗祭坛前面
	脚本名字: 		阿卡伊勒远征队
*/

var status = 0;
var maxAkayile = 3;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (cm.getPlayer().getMapId() == 272020110) { //阿卡伊勒 - 黑暗祭坛前面 入口
        switch (status) {
        case 0:
            if (cm.getPlayer().getLevel() < 120) {
                cm.sendOk("你的等级小于 120 级，无法挑战阿卡伊勒。");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getClient().getChannel() != 1) {
                cm.sendOk("阿卡伊勒只能在 1 频道挑战。");
                cm.dispose();
                return;
            }
            var em = cm.getEventManager("Akayile");
            if (em == null) {
                cm.sendOk("配置清单为空，请联系管理员。");
                cm.safeDispose();
                return;
            }
            var prop = em.getProperty("state");
            var data = cm.getBossLog("阿卡伊勒");
            if (prop == null || prop.equals("0")) {
                var squadAvailability = cm.getSquadAvailability("Akayile1");
                if (squadAvailability == -1) {
                    status = 1;
                    if (data >= maxAkayile && !cm.getPlayer().isGM()) {
                        cm.sendOk("您今天挑战阿卡伊勒的次数已经用完，请明天在来挑战吧！");
                        cm.dispose();
                        return;
                    }
                    cm.sendYesNo("现在可以申请远征队，你想成为远征队队长吗？");
                } else if (squadAvailability == 1) {
                    if (data >= maxAkayile && !cm.getPlayer().isGM()) {
                        cm.sendOk("您今天挑战阿卡伊勒的次数已经用完，请明天在来挑战吧！");
                        cm.dispose();
                        return;
                    }
                    // -1 = Cancelled, 0 = not, 1 = true
                    var type = cm.isSquadLeader("Akayile1");
                    if (type == -1) {
                        cm.sendOk("已经结束了申请。");
                        cm.safeDispose();
                    } else if (type == 0) {
                        var memberType = cm.isSquadMember("Akayile1");
                        if (memberType == 2) {
                            cm.sendOk("在远征队的制裁名单。");
                            cm.safeDispose();
                        } else if (memberType == 1) {
                            status = 5;
                            cm.sendSimple("你现在想做什么？\r\n#b#L0#查看远征队成员。#l \r\n#b#L1#加入远征队。#l \r\n#b#L2#退出远征队。#l");
                        } else if (memberType == -1) {
                            cm.sendOk("远征队员已经达到30名，请稍后再试。");
                            cm.safeDispose();
                        } else {
                            status = 5;
                            cm.sendSimple("你现在想做什么？ \r\n#b#L0#查看远征队成员。#l \r\n#b#L1#加入远征队。#l \r\n#b#L2#退出远征队。#l");
                        }
                    } else { // Is leader
                        status = 10;
                        cm.sendSimple("你现在想做什么？\r\n#b#L0#查看远征队成员。#l \r\n#b#L1#管理远征队成员。#l \r\n#b#L2#编辑限制列表。#l \r\n#r#L3#进入地图。#l");
                        // TODO viewing!
                    }
                } else {
                    var eim = cm.getDisconnected("Akayile");
                    if (eim == null) {
                        var squd = cm.getSquad("Akayile1");
                        if (squd != null) {
                            if (data >= maxAkayile && !cm.getPlayer().isGM()) {
                                cm.sendOk("您今天挑战阿卡伊勒的次数已经用完，请明天在来挑战吧！");
                                cm.dispose();
                                return;
                            }
                            cm.sendYesNo("远征队的挑战已经开始.\r\n" + squd.getNextPlayer());
                            status = 3;
                        } else {
                            cm.sendOk("远征队的挑战已经开始.");
                            cm.safeDispose();
                        }
                    } else {
                        cm.sendYesNo("你要继续进行远征任务吗?");
                        status = 2;
                    }
                }
            } else {
                var eim = cm.getDisconnected("Akayile");
                if (eim == null) {
                    var squd = cm.getSquad("Akayile1");
                    if (squd != null) {
                        if (data >= maxAkayile && !cm.getPlayer().isGM()) {
                            cm.sendOk("您今天挑战阿卡伊勒的次数已经用完，请明天在来挑战吧！");
                            cm.dispose();
                            return;
                        }
                        cm.sendYesNo("远征队的挑战已经开始.\r\n" + squd.getNextPlayer());
                        status = 3;
                    } else {
                        cm.sendOk("远征队的挑战已经开始.");
                        cm.safeDispose();
                    }
                } else {
                    cm.sendYesNo("你要继续进行远征任务吗？");
                    status = 2;
                }
            }
            break;
        case 1:
            if (mode == 1) {
                if (cm.registerSquad("Akayile1", 5, " 已经成为了远征队队长。如果你想加入远征队，请重新打开对话申请加入远征队。")) {
                    cm.sendOk("你已经成为了远征队队长。接下来的5分钟，请等待队员们的申请。");
                } else {
                    cm.sendOk("未知错误.");
                }
            } else {
                cm.sendOk("如果你想申请远征队的话，那么就来找我吧。")
            }
            cm.safeDispose();
            break;
        case 2:
            if (!cm.reAdd("Akayile", "Akayile1")) {
                cm.sendOk("由于未知的错误，操作失败。");
            }
            cm.dispose();
            break;
        case 3:
            if (mode == 1) {
                var squd = cm.getSquad("Akayile1");
                if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                    squd.setNextPlayer(cm.getPlayer().getName());
                    cm.sendOk("You have reserved the spot.");
                }
            }
            cm.dispose();
            break;
        case 5:
            if (selection == 0) {
                if (!cm.getSquadList("Akayile1", 0)) {
                    cm.sendOk("由于未知的错误，操作失败。");
                    cm.safeDispose();
                } else {
                    cm.dispose();
                }
            } else if (selection == 1) { // join
                var ba = cm.addMember("Akayile1", true);
                if (ba == 2) {
                    cm.sendOk("远征队员已经达到30名，请稍后再试。");
                    cm.safeDispose();
                } else if (ba == 1) {
                    cm.sendOk("申请加入远征队成功，请等候队长指示。");
                    cm.safeDispose();
                } else {
                    cm.sendOk("你已经参加了远征队，请等候队长指示。");
                    cm.safeDispose();
                }
            } else { // withdraw
                var baa = cm.addMember("Akayile1", false);
                if (baa == 1) {
                    cm.sendOk("制裁指定的成员成功。");
                    cm.safeDispose();
                } else {
                    cm.sendOk("你没有参加远征队。");
                    cm.safeDispose();
                }
            }
            break;
        case 10:
            if (selection == 0) {
                if (!cm.getSquadList("Akayile1", 0)) {
                    cm.sendOk("由于未知的错误，操作失败。");
                }
                cm.safeDispose();
            } else if (selection == 1) {
                status = 11;
                if (!cm.getSquadList("Akayile1", 1)) {
                    cm.sendOk("由于未知的错误，操作失败。");
                    cm.safeDispose();
                }
            } else if (selection == 2) {
                status = 12;
                if (!cm.getSquadList("Akayile1", 2)) {
                    cm.sendOk("由于未知的错误，操作失败。");
                    cm.safeDispose();
                }
            } else if (selection == 3) { // get insode
                if (cm.getSquad("Akayile1") != null) {
                    var dd = cm.getEventManager("Akayile");
                    //dd.startInstance(cm.getSquad("Akayile1"), cm.getMap(), 160102);
                    dd.startInstance(cm.getSquad("Akayile1"), cm.getMap(), "160105");
                    cm.dispose();
                } else {
                    cm.sendOk("由于未知的错误，操作失败。");
                    cm.safeDispose();
                }
            }
            break;
        case 11:
            cm.banMember("Akayile1", selection);
            cm.dispose();
            break;
        case 12:
            if (selection != -1) {
                cm.acceptMember("Akayile1", selection);
            }
            cm.dispose();
            break;
        }
    }
}