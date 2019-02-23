var status = -1;

function start() {
    cm.removeAll(4001256);
    cm.removeAll(4001257);
    cm.removeAll(4001258);
    cm.removeAll(4001259);
    cm.removeAll(4001260);
    if (cm.getPlayer().getLevel() < 90) {
        cm.sendOk("你的等级必须在90级以上.");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getClient().getChannel() != 2 && cm.getPlayer().getClient().getChannel() != 3 && cm.getPlayer().getClient().getChannel() != 4) {
        cm.sendOk("请在2/3/4频道进行远征任务");
        cm.dispose();
        return;
    }
    var em = cm.getEventManager("CWKPQ");

    if (em == null) {
        cm.sendOk("脚本出错请联系管理员");
        cm.dispose();
        return;
    }
    var prop = em.getProperty("state");

    if (prop == null || prop.equals("0")) {
        var squadAvailability = cm.getSquadAvailability("CWKPQ");
        if (squadAvailability == -1) {
            status = 0;
            cm.sendYesNo("你要成为远征队长吗?");

        } else if (squadAvailability == 1) {
            // -1 = Cancelled, 0 = not, 1 = true
            var type = cm.isSquadLeader("CWKPQ");
            if (type == -1) {
                cm.sendOk("远征队已经注销，请重新发起");
                cm.dispose();
            } else if (type == 0) {
                var memberType = cm.isSquadMember("CWKPQ");
                if (memberType == 2) {
                    cm.sendOk("你被加入制裁名单，不能进行远征任务.");
                    cm.dispose();
                } else if (memberType == 1) {
                    status = 5;
                    cm.sendSimple("你想做什么? \r\n#b#L0#查看远征队#l \r\n#b#L1#加入远征队#l \r\n#b#L2#退出远征队#l \r\n#b#L3#Check out jobs#l");
                } else if (memberType == -1) {
                    cm.sendOk("你被加入制裁名单，不能进行远征任务");
                    cm.dispose();
                } else {
                    status = 5;
                    cm.sendSimple("你想干什么? \r\n#b#L0#查看远征队#l \r\n#b#L1#加入远征队#l \r\n#b#L2#退出远征队#l \r\n#b#L3#Check out jobs#l");
                }
            } else { // Is leader
                status = 10;
                cm.sendSimple("你想干什么? \r\n#b#L0#查看远征队#l \r\n#b#L1#制裁远征成员#l \r\n#b#L2#管理制裁名单#l \r\n#b#L3#Check out jobs#l \r\n#r#L4#开始远征任务#l");
                // TODO viewing!
            }
        } else {
            var eim = cm.getDisconnected("CWKPQ");
            if (eim == null) {
                var squd = cm.getSquad("CWKPQ");
                if (squd != null) {
                    if (squd.getNextPlayer() != null) {
                        cm.sendOk("远征任务已经开始。玩家订下一个景点是 " + squd.getNextPlayer());
                        cm.safeDispose();
                    } else {
                        cm.sendYesNo("远征任务已经开始。你想队列下一个景点？");
                        status = 3;
                    }
                } else {
                    cm.sendOk("远征任务已经开始.");
                    cm.safeDispose();
                }
            } else {
                cm.sendYesNo("你想继续进行远征任务吗?");
                status = 1;
            }
        }
    } else {
        var eim = cm.getDisconnected("CWKPQ");
        if (eim == null) {
            var squd = cm.getSquad("CWKPQ");
            if (squd != null) {
                if (squd.getNextPlayer() != null) {
                    cm.sendOk("远征任务已经开始。玩家订下一个景点是 " + squd.getNextPlayer());
                    cm.safeDispose();
                } else {
                    cm.sendYesNo("远征任务已经开始。你想队列下一个景点？");
                    status = 3;
                }
            } else {
                cm.sendOk("远征任务已经开始.");
                cm.safeDispose();
            }
        } else {
            cm.sendYesNo("你想继续进行远征任务吗?");
            status = 1;
        }
    }
}

function action(mode, type, selection) {
    switch (status) {
    case 0:
        if (mode == 1) {
            if (!cm.haveItem(5252006, 1)) {
                cm.sendOk("你需要一个红色的绯红挑战物品#v5252006#\r\n没有去商城购买吧.");
            } else if (cm.registerSquad("CWKPQ", 5, " 已经成为远征队长。如果你想参加远征任务请在5分钟内加入远征队。")) {
                cm.sendOk("你已经成为远征队长，请在5分钟内整理好你的远征队伍，并开始远征任务.");
            } else {
                cm.sendOk("未知错误。成为远征队长失败");
            }
        }
        cm.dispose();
        break;
    case 1:
        if (!cm.reAdd("CWKPQ", "CWKPQ")) {
            cm.sendOk("错误。。请再试一次");
        }
        cm.safeDispose();
        break;
    case 3:
        if (mode == 1) {
            var squd = cm.getSquad("CWKPQ");
            if (squd != null && squd.getNextPlayer() == null) {
                squd.setNextPlayer(cm.getPlayer().getName());
                cm.sendOk("You have reserved the spot.");
            }
        }
        cm.dispose();
        break;
    case 5:
        if (selection == 0 || selection == 3) {
            if (!cm.getSquadList("CWKPQ", selection)) {
                cm.sendOk("由于未知的错误，对远征队的要求被拒绝。");
            }
        } else if (selection == 1) { // join
            var ba = cm.addMember("CWKPQ", true);
            if (ba == 2) {
                cm.sendOk("远征队人数已经足够。请稍后再试");
            } else if (ba == 1) {
                cm.sendOk("加入远征队成功");
            } else {
                cm.sendOk("你已经加入远征队了.");
            }
        } else { // withdraw
            var baa = cm.addMember("VERGAMOT", false);
            if (baa == 1) {
                cm.sendOk("退出远征队成功");
            } else {
                cm.sendOk("你还没有加入远征队.");
            }
        }
        cm.dispose();
        break;
    case 10:
        if (mode == 1) {
            if (selection == 0 || selection == 3) {
                if (!cm.getSquadList("CWKPQ", selection)) {
                    cm.sendOk("由于未知的错误，对远征队的要求被拒绝。");
                }
                cm.dispose();
            } else if (selection == 1) {
                status = 11;
                if (!cm.getSquadList("VERGAMOT", 1)) {
                    cm.sendOk("由于未知的错误，对远征队的要求被拒绝。");
                    cm.dispose();
                }
            } else if (selection == 2) {
                status = 12;
                if (!cm.getSquadList("VERGAMOT", 2)) {
                    cm.sendOk("由于未知的错误，对远征队的要求被拒绝。");
                    cm.dispose();
                }
            } else if (selection == 4) { // get insode
                if (cm.getSquad("CWKPQ") != null) {
                    if (cm.haveItem(5252006, 1)) {
                        cm.gainItem(5252006, -1);
                        var dd = cm.getEventManager("CWKPQ");
                        dd.startInstance(cm.getSquad("CWKPQ"), cm.getMap());
                    } else {
                        cm.sendOk("你有#v5252006#吗?没有去商城购买吧.");
                    }
                } else {
                    cm.sendOk("由于未知的错误，对远征队的要求被拒绝。");
                }
                cm.dispose();
            }
        } else {
            cm.dispose();
        }
        break;
    case 11:
        cm.banMember("CWKPQ", selection);
        cm.dispose();
        break;
    case 12:
        if (selection != -1) {
            cm.acceptMember("CWKPQ", selection);
        }
        cm.dispose();
        break;
    default:
        cm.dispose();
        break;
    }
}