var status = -1;
var maxDunas = 5;

function start() {
    if (cm.getPlayer().getMapId() == 271040100) {
        cm.sendYesNo("你想出去吗?");
        status = 1;
        return;
    }
    if (cm.getPlayer().getLevel() < 170) {
        cm.sendOk("你的等级不足170.不能参加远征任务");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getClient().getChannel() != 5) {
        cm.sendOk("远征任务只能在5频道进行.");
        cm.dispose();
        return;
    }
    var em = cm.getEventManager("Dunas");

    if (em == null) {
        cm.sendOk("脚本错误,请联系管理员.");
        cm.dispose();
        return;
    }
    var eim_status = em.getProperty("state");
    var data = cm.getBossLog("都纳斯");
    if (eim_status == null || eim_status.equals("0")) {
        var squadAvailability = cm.getSquadAvailability("Dunas");
        if (squadAvailability == -1) {
            status = 0;
            if (data >= maxDunas && !cm.getPlayer().isGM()) {
                cm.sendOk("您今天挑战都纳斯的次数已经用完，请明天在来挑战吧！");
                cm.dispose();
                return;
            }
            cm.sendYesNo("你要成为都纳斯远征队队长吗?");
        } else if (squadAvailability == 1) {
            if (data >= maxDunas && !cm.getPlayer().isGM()) {
                cm.sendOk("您今天挑战都纳斯的次数已经用完，请明天在来挑战吧！");
                cm.dispose();
                return;
            }
            // -1 = Cancelled, 0 = not, 1 = true
            var type = cm.isSquadLeader("Dunas");
            if (type == -1) {
                cm.sendOk("远征队已经注销,请重新申请.");
                cm.dispose();
            } else if (type == 0) {
                var memberType = cm.isSquadMember("Dunas");
                if (memberType == 2) {
                    cm.sendOk("你在制裁名单,不能进行远征任务.");
                    cm.dispose();
                } else if (memberType == 1) {
                    status = 5;
                    cm.sendSimple("你想干什么? \r\n#b#L0#加入远征队#l \r\n#b#L1#离开远征队#l \r\n#b#L2#查看远征队成员#l");
                } else if (memberType == -1) {
                    cm.sendOk("你已经是远征队成员了.");
                    cm.dispose();
                } else {
                    status = 5;
                    cm.sendSimple("你想干什么? \r\n#b#L0#加入远征队#l \r\n#b#L1#离开远征队#l \r\n#b#L2#查看远征队成员#l");
                }
            } else { // Is leader
                status = 10;
                cm.sendSimple("你想干什么,远征队长? \r\n#b#L0#查看远征队#l \r\n#b#L1#制裁远征队员#l \r\n#b#L2#制裁名单管理#l \r\n#r#L3#开始远征任务#l");
                // TODO viewing!
            }
        } else {
            var eim = cm.getDisconnected("Dunas");
            if (eim == null) {
                var squd = cm.getSquad("Dunas");
                if (eim == null) {
                    if (data >= maxDunas && !cm.getPlayer().isGM()) {
                        cm.sendOk("您今天挑战都纳斯的次数已经用完，请明天在来挑战吧！");
                        cm.dispose();
                        return;
                    }
                    cm.sendYesNo("远征任务已经开始.\r\n" + squd.getNextPlayer());
                    status = 3;
                } else {
                    cm.sendOk("远征任务已经开始.");
                    cm.safeDispose();
                }
            } else {
                cm.sendYesNo("你要继续远征任务吗？");
                status = 2;
            }
        }
    } else {
        var eim = cm.getDisconnected("Dunas");
        if (eim == null) {
            var squd = cm.getSquad("Dunas");
            if (squd != null) {
                if (data >= maxDunas && !cm.getPlayer().isGM()) {
                    cm.sendOk("您今天挑战都纳斯的次数已经用完，请明天在来挑战吧！");
                    cm.dispose();
                    return;
                }
                cm.sendYesNo("远征任务已经开始.\r\n" + squd.getNextPlayer());
                status = 3;
            } else {
                cm.sendOk("远征任务已经开始.");
                cm.safeDispose();
            }
        } else {
            cm.sendYesNo("你要继续进行远征任务吗?");
            status = 2;
        }
    }
}

function action(mode, type, selection) {
    switch (status) {
    case 0:
        if (mode == 1) {
            if (cm.registerSquad("Dunas", 5, " 已经成为远征队长.请各位勇士在5分钟内加入远征队并且开始远征任务.否则将会注销远征队.")) {
                cm.sendOk("你已经成为远征队队长.请在5分钟内召集好远征队队员进行远征任务.否则将会自动注销远征队.");
            } else {
                cm.sendOk("如果你想申请远征队的话，那么就来找我吧。");
            }
        }
        cm.dispose();
        break;
    case 1:
        if (mode == 1) {
            cm.warp(cm.getMap().getAllMonstersThreadsafe().size() == 0 ? 271040200 : 271030000, 0);
        }
        cm.dispose();
        break;
    case 2:
        if (!cm.reAdd("Dunas", "Dunas")) {
            cm.sendOk("错误…请再试一次。");
        }
        cm.safeDispose();
        break;
    case 3:
        if (mode == 1) {
            var squd = cm.getSquad("Dunas");
            if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                squd.setNextPlayer(cm.getPlayer().getName());
                cm.sendOk("副本已经有远征队在进行任务了...");
            }
        }
        cm.dispose();
        break;
    case 5:
        if (selection == 0) { // join
            var ba = cm.addMember("Dunas", true);
            if (ba == 2) {
                cm.sendOk("远征队伍人数已经足够.请稍后在试.");
            } else if (ba == 1) {
                cm.sendOk("成功加入远征队伍.");
            } else {
                cm.sendOk("你已经在远征队伍了.");
            }
        } else if (selection == 1) { // withdraw
            var baa = cm.addMember("Dunas", false);
            if (baa == 1) {
                cm.sendOk("退出远征队成功.");
            } else {
                cm.sendOk("你还没有一个远征队.");
            }
        } else if (selection == 2) {
            if (!cm.getSquadList("Dunas", 0)) {
                cm.sendOk("由于未知的错误，远征队拒绝你的操作。");
            }
        }
        cm.dispose();
        break;
    case 10:
        if (mode == 1) {
            if (selection == 0) {
                if (!cm.getSquadList("Dunas", 0)) {
                    cm.sendOk("由于未知的错误，远征队拒绝你的操作。");
                }
                cm.dispose();
            } else if (selection == 1) {
                status = 11;
                if (!cm.getSquadList("Dunas", 1)) {
                    cm.sendOk("由于未知的错误，远征队拒绝你的操作。");
                    cm.dispose();
                }
            } else if (selection == 2) {
                status = 12;
                if (!cm.getSquadList("Dunas", 2)) {
                    cm.sendOk("由于未知的错误，远征队拒绝你的操作。");
                    cm.dispose();
                }
            } else if (selection == 3) { // get insode
                if (cm.getSquad("Dunas") != null) {
                    var dd = cm.getEventManager("Dunas");
                    dd.startInstance(cm.getSquad("Dunas"), cm.getMap(), "都纳斯",false);
                } else {
                    cm.sendOk("由于未知的错误，远征队拒绝你的操作。");
                }
                cm.dispose();
            }
        } else {
            cm.dispose();
        }
        break;
    case 11:
        cm.banMember("Dunas", selection);
        cm.dispose();
        break;
    case 12:
        if (selection != -1) {
            cm.acceptMember("Dunas", selection);
        }
        cm.dispose();
        break;
    }
}