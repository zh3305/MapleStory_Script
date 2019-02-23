/*
	NPC Name: 		The Forgotten Temple Manager
	Map(s): 		Deep in the Shrine - Forgotten Twilight
	Description: 		混沌品克缤远征
*/
var status = -1;
var maxCount = 1;
var checklevel = 170
var squadTpye = "chaospb";
var scriptName = "ChaosPinkBean";
var bossLogId = "混沌品克缤";
var npctxt = "混沌品克缤"

function start() {
    if (cm.getPlayer().getLevel() < checklevel) {
        cm.sendOk("你的等级小于" + checklevel + ",不能挑战#b" + npctxt + "#k!");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getClient().getChannel() != 2) {
        cm.sendOk("挑战#b" + npctxt + "#k请到#r2#k频道!");
        cm.dispose();
        return;
    }
    var em = cm.getEventManager(scriptName);
    if (em == null) {
        cm.sendOk("脚本错误，请联系管理员。");
        cm.dispose();
        return;
    }
    var eim_status = em.getProperty("state");
    var data = cm.getBossLog(bossLogId);
    if (eim_status == null || eim_status.equals("0")) {
        var squadAvailability = cm.getSquadAvailability(squadTpye); //获取远征队伍的状态 -1返回会有
        if (squadAvailability == -1) {
            status = 0;
            if (data >= maxCount && !cm.getPlayer().isGM()) {
                cm.sendOk("您今天挑#b" + npctxt + "#k的次数已经用完，请明天在来挑战吧！");
                cm.dispose();
                return;
            }
            cm.sendYesNo("你要成为#b" + npctxt + "#k远征队队长吗?");
        } else if (squadAvailability == 1) {
            if (data >= maxCount && !cm.getPlayer().isGM()) {
                cm.sendOk("您今天挑#b" + npctxt + "#k的次数已经用完，请明天在来挑战吧！");
                cm.dispose();
                return;
            }
            // -1 = Cancelled, 0 = not, 1 = true
            var type = cm.isSquadLeader(squadTpye);
            if (type == -1) {
                cm.sendOk("已经结束了申请。");
                cm.dispose();
            } else if (type == 0) {
                var memberType = cm.isSquadMember(squadTpye);
                if (memberType == 2) {
                    cm.sendOk("你在远征队制裁名单不能进行远征任务.");
                    cm.dispose();
                } else if (memberType == 1) {
                    status = 5;
                    cm.sendSimple("你想做什么? \r\n#b#L0#加入远征队#l \r\n#b#L1#退出远征队#l \r\n#b#L2#查看远征队成员#l");
                } else if (memberType == -1) {
                    cm.sendOk("你已经是远征队成员了.");
                    cm.dispose();
                } else {
                    status = 5;
                    cm.sendSimple("你想做什么? \r\n#b#L0#加入远征队#l \r\n#b#L1#退出远征队#l \r\n#b#L2#查看远征队成员#l");
                }
            } else {
                status = 10;
                cm.sendSimple("你想做什么? \r\n#b#L0#查看远征队#l \r\n#b#L1#制裁远征队成员#l \r\n#b#L2#管理制裁名单#l \r\n#r#L3#开始远征任务#l");
            }
        } else {
            var eim = cm.getDisconnected(scriptName);
            if (eim == null) {
                var squd = cm.getSquad(squadTpye);
                if (squd != null) {
                    if (data >= maxCount && !cm.getPlayer().isGM()) {
                        cm.sendOk("您今天挑#b" + npctxt + "#k的次数已经用完，请明天在来挑战吧！");
                        cm.dispose();
                        return;
                    }
                    cm.sendYesNo("远征队的挑战已经开始。\r\n" + squd.getNextPlayer());
                    status = 3;
                } else {
                    cm.sendOk("远征队的挑战已经开始。");
                    cm.safeDispose();
                }
            } else {
                cm.sendYesNo("你要继续进行远征任务吗？");
                status = 2;
            }
        }
    } else {
        var eim = cm.getDisconnected(scriptName);
        if (eim == null) {
            var squd = cm.getSquad(squadTpye);
            if (squd != null) {
                if (data >= maxCount && !cm.getPlayer().isGM()) {
                    cm.sendOk("您今天挑#b" + npctxt + "#k的次数已经用完，请明天在来挑战吧！");
                    cm.dispose();
                    return;
                }
                cm.sendYesNo("远征队的挑战已经开始。\r\n" + squd.getNextPlayer());
                status = 3;
            } else {
                cm.sendOk("远征队的挑战已经开始。");
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
            if (cm.registerSquad(squadTpye, 5, " 已经成为" + npctxt + "远征队队长.请各位英雄在5分钟内加入远征队.否则你将不能进入远征任务.如果远征队5分钟内没有进入远征任务.将会自动注销远征队.")) {
                cm.sendOk("你已经成为了远征队队长.请在5分钟内召集远征队员参加远征任务.否则将会自动注销你的远征队.");
            } else {
                cm.sendOk("由于未知的错误，创建远征队伍失败。");
            }
        }
        cm.dispose();
        break;
    case 2:
        if (!cm.reAdd(scriptName, squadTpye)) {
            cm.sendOk("由于未知的错误，操作失败。");
        }
        cm.safeDispose();
        break;
    case 3:
        if (mode == 1) {
            var squd = cm.getSquad(squadTpye);
            if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                squd.setNextPlayer(cm.getPlayer().getName());
                cm.sendOk("副本已经有远征队在进行任务了...");
            }
        }
        cm.dispose();
        break;
    case 5:
        if (selection == 0) { // 加入远征队伍
            var ba = cm.addMember(squadTpye, true);
            if (ba == 2) {
                cm.sendOk("远征队目前为满员状态.请稍后再试.");
            } else if (ba == 1) {
                cm.sendOk("你成功加入远征队.");
            } else {
                cm.sendOk("你已经是远征队成员了.");
            }
        } else if (selection == 1) { // 退出远征队
            var baa = cm.addMember(squadTpye, false);
            if (baa == 1) {
                cm.sendOk("你成功退出远征队.");
            } else {
                cm.sendOk("退出远征队伍出现错误.");
            }
        } else if (selection == 2) {
            if (!cm.getSquadList(squadTpye, 0)) {
                cm.sendOk("由于未知的错误，远征队拒绝你的操作。");
            }
        }
        cm.dispose();
        break;
    case 10:
        if (mode == 1) {
            if (selection == 0) {
                if (!cm.getSquadList(squadTpye, 0)) {
                    cm.sendOk("由于未知的错误，远征队拒绝你的操作。");
                }
                cm.dispose();
            } else if (selection == 1) {
                status = 11;
                if (!cm.getSquadList(squadTpye, 1)) {
                    cm.sendOk("由于未知的错误，远征队拒绝你的操作。");
                    cm.dispose();
                }
            } else if (selection == 2) {
                status = 12;
                if (!cm.getSquadList(squadTpye, 2)) {
                    cm.sendOk("由于未知的错误，远征队拒绝你的操作。");
                    cm.dispose();
                }
            } else if (selection == 3) { // 开始远征任务
                if (cm.getSquad(squadTpye) != null) {
                    var dd = cm.getEventManager(scriptName);
                    dd.startInstance(cm.getSquad(squadTpye), cm.getMap(), bossLogId,false);
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
        cm.banMember(squadTpye, selection);
        cm.dispose();
        break;
    case 12:
        if (selection != -1) {
            cm.acceptMember(squadTpye, selection);
        }
        cm.dispose();
        break;
    }
}