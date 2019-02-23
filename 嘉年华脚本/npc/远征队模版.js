var status = -1;
var PQLog = "困难斯乌";
var EventName = "BlackHeavenJBoss";
var minLevel = 60;
var maxLevel = 255;


function start() {
    if (cm.getPlayer().getMapId() == 551030200) {
        cm.sendYesNo("你想出去了吗?");
        status = 1;
        return;
    }
    if (cm.getPlayer().getLevel() < 190) {
        cm.sendOk("参与斯乌远征队需要达到190级.");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getClient().getChannel() != 1 && cm.getPlayer().getClient().getChannel() != 2 && cm.getPlayer().getClient().getChannel() != 3 && cm.getPlayer().getClient().getChannel() != 4) {
        cm.sendOk("只能在频道1,2,3,4 进行.");
        cm.dispose();
        return;
    }
    var em = cm.getEventManager(EventName);

    if (em == null) {
        cm.sendOk("该副本未正常运行,如有疑问请联系管理员.");
        cm.dispose();
        return;
    }
    var eim_status = em.getProperty("state");
    var marr = cm.getQuestRecord(160108);
    var data = marr.getCustomData();
    if (data == null) {
        marr.setCustomData("0");
        data = "0";
    }
    var time = parseInt(data);
    if (eim_status == null || eim_status.equals("0")) {
        var squadAvailability = cm.getSquadAvailability("BlackHeaven");
        if (squadAvailability == -1) {
            status = 0;
            if (time + (3 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                cm.sendOk("你在3小时内已经参加过这个远征队了. 重置时间: " + cm.getReadableMillis(cm.getCurrentTime(), time + (3 * 360000)));
                cm.dispose();
                return;
            }
            cm.sendYesNo("你有兴趣成为远征队长吗?");

        } else if (squadAvailability == 1) {
            if (time + (3 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                cm.sendOk("你在3小时内已经参加过这个远征队了. 重置时间: " + cm.getReadableMillis(cm.getCurrentTime(), time + (3 * 360000)));
                cm.dispose();
                return;
            }
            // -1 = Cancelled, 0 = not, 1 = true
            var type = cm.isSquadLeader("BlackHeaven");
            if (type == -1) {
                cm.sendOk("远征队已经结束,请重新申请.");
                cm.dispose();
            } else if (type == 0) {
                var memberType = cm.isSquadMember("BlackHeaven");
                if (memberType == 2) {
                    cm.sendOk("你被禁止参加远征队.");
                    cm.dispose();
                } else if (memberType == 1) {
                    status = 5;
                    cm.sendSimple("你想要做什么呢? \r\n#b#L0#查看成员#l \r\n#b#L1#申请加入#l \r\n#b#L2#退出远征队#l");
                } else if (memberType == -1) {
                    cm.sendOk("远征队已经结束,请重新申请.");
                    cm.dispose();
                } else {
                    status = 5;
                    cm.sendSimple("你想要做什么呢? \r\n#b#L0#加入远征队#l \r\n#b#L1#离开远征队#l \r\n#b#L2#查看远征队成员列表#l");
                }
            } else { // Is leader
                status = 10;
                cm.sendSimple("你想要做什么呢,远征队长? \r\n#b#L0#查看成员列表#l \r\n#b#L1#踢掉成员#l \r\n#b#L2#黑名单管理#l \r\n#r#L3#选择远征队入场#l");
                // TODO viewing!
            }
        } else {
            var eim = cm.getDisconnected(EventName);
            if (eim == null) {
                var squd = cm.getSquad("BlackHeaven");
                if (squd != null) {
                    if (time + (3 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                        cm.sendOk("你在3小时内已经参加过这个远征队了. 重置时间: " + cm.getReadableMillis(cm.getCurrentTime(), time + (3 * 360000)));
                        cm.dispose();
                        return;
                    }
                    cm.sendYesNo("远征队已经开始对抗强大的怪物了.\r\n" + squd.getNextPlayer());
                    status = 3;
                } else {
                    cm.sendOk("远征队已经开始对抗强大的怪物了.");
                    cm.safeDispose();
                }
            } else {
                cm.sendYesNo("你回来了?. 你想再次回到远征队的战场吗?");
                status = 2;
            }
        }
    } else {
        var eim = cm.getDisconnected(EventName);
        if (eim == null) {
            var squd = cm.getSquad("BlackHeaven");
            if (squd != null) {
                if (time + (3 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                    cm.sendOk("你在3小时内已经参加过这个远征队了. 重置时间: " + cm.getReadableMillis(cm.getCurrentTime(), time + (3 * 360000)));
                    cm.dispose();
                    return;
                }
                cm.sendYesNo("远征队已经开始对抗强大的怪物了.\r\n" + squd.getNextPlayer());
                status = 3;
            } else {
                cm.sendOk("远征队已经开始对抗强大的怪物了.");
                cm.safeDispose();
            }
        } else {
            cm.sendYesNo("你回来了?. 你想再次回到远征队的战场吗?");
            status = 2;
        }
    }
}

function action(mode, type, selection) {
    switch (status) {
        case 0:
            if (mode == 1) {
                if (cm.registerSquad("BlackHeaven", 5, " 成为了远征队长. 如果你想加入远征队,请在现限定的时间内进行申请加入..")) {
                    cm.sendOk("你成为了远征队长. 在接下去的5分钟内你可以添加你的远征队员..");
                } else {
                    cm.sendOk("建立远征队出现错误.");
                }
            }
            cm.dispose();
            break;
        case 1:
            if (mode == 1) {
                cm.warp(551030100, 0);
            }
            cm.dispose();
            break;
        case 2:
            if (!cm.reAdd(EventName, "BlackHeaven")) {
                cm.sendOk("出现错误,请重试.");
            }
            cm.safeDispose();
            break;
        case 3:
            if (mode == 1) {
                var squd = cm.getSquad("BlackHeaven");
                if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                    squd.setNextPlayer(cm.getPlayer().getName());
                    cm.sendOk("You have reserved the spot.");
                }
            }
            cm.dispose();
            break;
        case 5:
            if (selection == 0) { // join
                var ba = cm.addMember("BlackHeaven", true);
                if (ba == 2) {
                    cm.sendOk("远征队人数已满,请稍后再试!");
                } else if (ba == 1) {
                    cm.sendOk("成功加入远征队!");
                } else {
                    cm.sendOk("你已经是该远征队的成员.");
                }
            } else if (selection == 1) {// withdraw
                var baa = cm.addMember("BlackHeaven", false);
                if (baa == 1) {
                    cm.sendOk("你已经成功离开远征队!");
                } else {
                    cm.sendOk("你并不是远征队成员.");
                }
            } else if (selection == 2) {
                if (!cm.getSquadList("BlackHeaven", 0)) {
                    cm.sendOk("由于未知原因,远征队请求被拒绝.");
                }
            }
            cm.dispose();
            break;
        case 10:
            if (mode == 1) {
                if (selection == 0) {
                    if (!cm.getSquadList("BlackHeaven", 0)) {
                        cm.sendOk("由于未知原因,远征队请求被拒绝.");
                    }
                    cm.dispose();
                } else if (selection == 1) {
                    status = 11;
                    if (!cm.getSquadList("BlackHeaven", 1)) {
                        cm.sendOk("由于未知原因,远征队请求被拒绝.");
                        cm.dispose();
                    }
                } else if (selection == 2) {
                    status = 12;
                    if (!cm.getSquadList("BlackHeaven", 2)) {
                        cm.sendOk("由于未知原因,远征队请求被拒绝.");
                        cm.dispose();
                    }
                } else if (selection == 3) { // get insode
                    if (cm.getSquad("BlackHeaven") != null) {
                        var dd = cm.getEventManager(EventName);
                        dd.startInstance(cm.getSquad("BlackHeaven"), cm.getMap(), 160108);
                    } else {
                        cm.sendOk("由于未知原因,远征队请求被拒绝.");
                    }
                    cm.dispose();
                }
            } else {
                cm.dispose();
            }
            break;
        case 11:
            cm.banMember("BlackHeaven", selection);
            cm.dispose();
            break;
        case 12:
            if (selection != -1) {
                cm.acceptMember("BlackHeaven", selection);
            }
            cm.dispose();
            break;
    }
}