/*
	NPC Name: 		伦娜
	Map(s): 		黎明与黄昏间  (270050300)
	BY           LVKEJIAN FOR MAPLEWING
*/
var status = -1;

var xiaoxi = "<终极挑战>  勇敢的冒险家们！祝你们好运！！ <终极挑战> ";
var zfid = 5121009;  

function start() {

    if (cm.getMapId() == 270050300) {
      //  if (cm.getPlayer().getClient().getChannel() != 1) {
    //        cm.sendOk("#e#r终极挑战#n#k  远征队任务只在 频道 1  进行.");
    //        cm.dispose();
   //         return;
   //     }
        var em = cm.getEventManager("0AllBoss");

        if (em == null) {
            cm.sendOk("配置清单为空，请联系管理员。.");
            cm.dispose();
            return;
        }
        //	var prop = em.getProperty("DunasSummoned");

        //	if (((prop.equals("PQCleared") || (prop.equals("1")) && cm.getPlayerCount(802000211) == 0)) || prop.equals("0") || prop == null) {

        var prop = em.getProperty("state");
        if (prop == null || prop.equals("0")) {
            var squadAvailability = cm.getSquadAvailability("AllBoss");
            if (squadAvailability == -1) {
                status = 0;
                cm.sendYesNo("现在可以申请远征队!\r\n你想要成为 #e#r终极挑战 远征队的队长#n #k么?");

            } else if (squadAvailability == 1) {
                // -1 = Cancelled, 0 = not, 1 = true
                var type = cm.isSquadLeader("AllBoss");
                if (type == -1) {
                    cm.sendOk("已经结束了申请。.");
                    cm.dispose();
                } else if (type == 0) {
                    var memberType = cm.isSquadMember("AllBoss");
                    if (memberType == 2) {
                        cm.sendOk("你已经在远征队的制裁名单。.");
                        cm.dispose();
                    } else if (memberType == 1) {
                        status = 5;
                        cm.sendSimple("你现在想做什么？\r\n#b#L0#查看远征队成员。#l \r\n#b#L1#加入远征队。#l \r\n#b#L2#退出远征队。#l");
                    } else if (memberType == -1) {
                        cm.sendOk("远征队员已经达到30名，请稍后再试。.");
                        cm.dispose();
                    } else {
                        status = 5;
                        cm.sendSimple("你现在想做什么？\r\n#b#L0#查看远征队成员。#l \r\n#b#L1#加入远征队。#l \r\n#b#L2#退出远征队。#l");
                    }
                } else { // Is leader
                    status = 10;
                    cm.sendSimple("你现在想做什么？\r\n#b#L0#查看远征队成员#l \r\n#b#L1#管理远征队成员#l \r\n#b#L2#编辑限制列表#l \r\n#r#L3#开始远征任务#l");
                    // TODO viewing!
                }
            } else {
                var eim = cm.getDisconnected("0AllBoss");
                if (eim == null) {
                    var squd = cm.getSquad("AllBoss");
                    if (squd != null) {
                        cm.sendYesNo("远征队的挑战已经开始..\r\n" + squd.getNextPlayer());
                        status = 3;
                    } else {
                        cm.sendOk("远征队的挑战已经开始..");
                        cm.safeDispose();
                    }
                } else {
                    cm.sendYesNo("你要继续进行远征任务吗?");
                    status = 2;
                }
            }
        } else {
            var eim = cm.getDisconnected("0AllBoss");
            if (eim == null) {
                var squd = cm.getSquad("AllBoss");
                if (squd != null) {
                    cm.sendYesNo("远征队的挑战已经开始..\r\n" + squd.getNextPlayer());
                    status = 3;
                } else {
                    cm.sendOk("远征队的挑战已经开始..");
                    cm.safeDispose();
                }
            } else {
                cm.sendYesNo("你要继续进行远征任务吗？");
                status = 2;
            }
        }
    } else {
        status = 25;
        cm.sendNext("你要放弃 远征队任务 离开这里么?");
    }
}

function action(mode, type, selection) {
    switch (status) {
    case 0:
        if (mode == 1) {
            if (cm.registerSquad("AllBoss", 5, " 已经成为了 终极挑战  远征队队长。如果你想加入远征队，请重新打开对话申请加入远征队.")) {
                cm.sendOk("你已经成为了  终极挑战  远征队队长。接下来的5分钟，请等待队员们的申请。");
            } else {
                cm.sendOk("未知错误.");
            }
        }
        cm.dispose();
        break;
    case 2:
        if (!cm.reAdd("0AllBoss", "AllBoss")) {
            cm.sendOk("由于未知的错误，操作失败。");
        }
        cm.safeDispose();
        break;
    case 3:
        if (mode == 1) {
            var squd = cm.getSquad("AllBoss");
            if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                squd.setNextPlayer(cm.getPlayer().getName());
                cm.sendOk("副本已经有远征队在进行任务了....");
            }
        }
        cm.dispose();
        break;
    case 5:
        if (selection == 0) {
            if (!cm.getSquadList("AllBoss", 0)) {
                cm.sendOk("Due to an unknown error, the request for squad has been denied.");
            }
        } else if (selection == 1) { // join
            var ba = cm.addMember("AllBoss", true);
            if (ba == 2) {
                cm.sendOk("远征队员已经达到30名，请稍后再试。.");
            } else if (ba == 1) {
                cm.sendOk("申请加入远征队成功，请等候队长指示。");
            } else {
                cm.sendOk("你已经参加了远征队，请等候队长指示。");
            }
        } else { // withdraw
            var baa = cm.addMember("AllBoss", false);
            if (baa == 1) {
                cm.sendOk("制裁指定的成员成功。");
            } else {
                cm.sendOk("你没有参加远征队。");
            }
        }
        cm.dispose();
        break;
    case 10:
        if (mode == 1) {
            if (selection == 0) {
                if (!cm.getSquadList("AllBoss", 0)) {
                    cm.sendOk("由于未知的错误，操作失败。");
                }
                cm.dispose();
            } else if (selection == 1) {
                status = 11;
                if (!cm.getSquadList("AllBoss", 1)) {
                    cm.sendOk("由于未知的错误，操作失败。");
                    cm.dispose();
                }
            } else if (selection == 2) {
                status = 12;
                if (!cm.getSquadList("AllBoss", 2)) {
                    cm.sendOk("由于未知的错误，操作失败。");
                    cm.dispose();
                }
            } else if (selection == 3) { // get insode
                if (cm.getSquad("AllBoss") != null) {
                    var dd = cm.getEventManager("0AllBoss");
                    dd.startInstance(cm.getSquad("AllBoss"), cm.getMap(), "160113");
                   // cm.removeNpc(272020200, 2144016);
                    cm.Maplewingx(xiaoxi, zfid)
                } else {
                    cm.sendOk("由于未知的错误，操作失败。");
                }
                cm.dispose();
            }
        } else {
            cm.dispose();
        }
        break;
    case 11:
        cm.banMember("AllBoss", selection);
        cm.dispose();
        break;
    case 12:
        if (selection != -1) {
            cm.acceptMember("AllBoss", selection);
        }
        cm.dispose();
        break;
    case 25:
        cm.warp(270050300, 0);
        cm.dispose();
        break;
    }
}