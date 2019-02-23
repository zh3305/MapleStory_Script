var status = 0;

var MIN_LEVEL = 125;
var MAX_LEVEL = 255;
var MIN_PARTY_SIZE = 2;
var MAX_PARTY_SIZE = 6;
var MAXENTER = 5;
var PQLOG = "GhostPark";
var EVENT_NAME = "GhostPark";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (status) {
        case 0:
            if (cm.getParty() == null) { // 没有组队
                cm.sendOkN("鬼魂公园只有#b组队#k才可以入场, \r\n#b组队#k后再来吧~");
                cm.dispose();
            } else if (!cm.isLeader()) {
                cm.sendOkN("鬼魂公园只有通过#b队长#k才可以入场, \r\n让#b队长#k和我对话吧~");
                cm.dispose();
            } else if (!cm.isAllPartyMembersAllowedLevel(MIN_LEVEL, MAX_LEVEL)) {
                cm.sendNextN("组队成员等级 " + MIN_LEVEL + " 以上 " + MAX_LEVEL + " 以下才可以入场。");
                cm.dispose();
            } else if (!cm.isAllPartyMembersAllowedPQ(PQLOG, MAXENTER)) {
                cm.sendNextN("你的队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLOG, MAXENTER) + "\" #k#n次数已经达到上限了。");
                cm.dispose();
            } else {
                var party = cm.getParty().getMembers();
                var next = true;
                if (!cm.isAdmin() && (party.size() > MAX_PARTY_SIZE || party.size() < MIN_PARTY_SIZE)) {
                    next = false;
                }
                if (next) {
                    cm.sendGhostParkUI();
                } else {
                    cm.sendYesNoN("你需要有一个 " + MIN_PARTY_SIZE + " - " + MAX_PARTY_SIZE + " 人的队伍. 请您组好队员后再试.");
                    cm.dispose();
                }
            }
            break;
        case 1: //
            var st = cm.getText();
            if (!st.equals("-1")) {
                if (!cm.allMembersHere()) {
                    cm.sendOkN("你的组队部分成员不在当前地图,请召集他们过来后在尝试。"); //判断组队成员是否在一张地图..
                    cm.dispose();
                } else {
                    var em = cm.getEventManager(EVENT_NAME);
                    if (em == null) {
                        cm.sendOk("此任务正在建设当中。");
                    } else {
                        cm.dispose();
                        //cm.updatePartyInfoQuest(30200, "count=0;date=16/04/06;cLevel=0000000;Tcount=1;set=1;clear=0;failed=0");
                        cm.updatePartyOneInfo(30200, "cLevel", st);
                        em.setProperty("PID" + cm.getPlayer().getId(), st);
                        em.startInstance_Party(cm.getPlayer().getId() + "", cm.getPlayer(), 170);
                        cm.gainMembersPQ(PQLOG, 1);
                        return;
                    }
                }
            } else {
                cm.dispose();
            }
            break;
        case 2:
            break;
        case 3:
            cm.dispose();
            break;
    }
}
