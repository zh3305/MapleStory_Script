var status = 0;
var minLevel = 120;
var maxLevel = 255;
var minPartySize = 1;
var maxPartySize = 6;
var types = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.getMapId() == 272030400) {
                status = 1;
                cm.sendSimple("你想放弃挑战离开这里吗？\r\n#b#L0# 我想离开这里。\r\n#L1# 没什么，我要留在这里。");
            } else {
                cm.sendSimple("#e<首领挑战：阿卡伊勒>#n\r\n你想和队员们一起努力，完成任务吗？这里面有很多如果不同心协力就无法解决的障碍……如果想挑战的话，请让#b所属组队的队长#k来和我说话。\r\n#b#L1#我想执行远征队。#l")
            }
        } else if (status == 1) {
            if (cm.getParty() == null) { // 没有组队
                cm.sendOk("请组队后和我谈话。");
                cm.dispose();
            } else if (!cm.isLeader()) { // 不是队长
                cm.sendOk("请叫队长和我谈话。");
                cm.dispose();
            } else if (cm.getBossLog('阿卡伊勒') >= 3) {
                cm.sendOk("对不起，一天只能进入3次。")
                cm.dispose();
            } else {
                var party = cm.getParty().getMembers();
                var mapId = cm.getPlayer().getMapId();
                var next = true;
                var levelValid = 0;
                var inMap = 0;
                var it = party.iterator();
                while (it.hasNext()) {
                    var cPlayer = it.next();
                    if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
                        levelValid += 1;
                    } else {
                        next = false;
                    }
                    if (cPlayer.getMapid() == mapId) {
                        inMap += 1;
                    }
                }
                if (party.size() < minPartySize || party.size() > maxPartySize || inMap < minPartySize) {
                    next = false;
                }
                if (next) {
                    var em = cm.getEventManager("AKBoss");
                    //cm.worldMessage(cm.getChar().getName() + "   带领他的队伍进入了玩具城101副本挑战任务.想去的快去组织队伍吧！"); 
                    if (em == null) {
                        cm.sendOk("此任务正在建设当中。");
                    } else {
                        var prop = em.getProperty("playing");
                        if (prop == "false" || prop == null) {
                            em.startInstance(cm.getParty(), cm.getMap());
                            cm.dispose();
                            return;
                        } else {
                            cm.sendOk("请等待其他队伍出来.或可以换频道进入！");
                        }
                    }
                    cm.dispose();
                } else {
                    cm.sendOk("请确认你的组队员：\r\n\r\n#b1、组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。\r\n2、组队员等级必须要在" + minLevel + "级以上。\r\n\r\n（#r如果仍然错误, 重新下线,再登陆 或者请重新组队。#k#b）");
                    cm.dispose();
                }
            } //判断组队
        } else if (status == 2) {
            if (selection == 0) {
                cm.warp(910000000);
            } else {
                cm.dispose();
            }
        }
    }
}