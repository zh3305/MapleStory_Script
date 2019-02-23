/*
 *	组队任务：侏儒怪皇帝的复活
 */

var status = 0;
var minLevel = 120;
var maxLevel = 250;
var minPlayers = 2; // GMS = 3
var maxPlayers = 6; // GMS = 4
var open = true;//open or not
var maxenter = 10;
var PQLog = '侏儒怪皇帝的复活';
var sel = -1;

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
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
    }

    if (status == 0) {
        if (cm.getMapId() == 910002000 || cm.getMapId() == 211000002) {
            cm.sendSimple("#e<组队任务：侏儒怪皇帝的复活>#n\r\n你们来了啊，#b#h0##k。你们找我有什么事？呵呵呵#b\r\n#L0#我想去阻止侏儒怪皇帝莱格斯的复活。#l\r\n#L1#我想听取说明。#l\r\n#L2#我想领取道具。#l\r\n#L3#我想知道剩余的挑战次数。#l");
        } else {
            cm.sendYesNo("#e<组队任务：侏儒怪皇帝的复活>#n\r\n\r\n你想要就此放弃了吗?");
        }
    } else if (status == 1) {
        sel = selection;
        if (cm.getMapId() == 910002000 && selection == 0) {
            cm.sendNext("我们还是到安静的地方再谈吧，跟我来。");
        } else if (cm.getMapId() != 211000002 && cm.getMapId() != 910002000) {
            cm.warp(211000002, 0);
            cm.dispose();
            return;
        } else if (selection == 0) {
            if (cm.getParty() == null) { // No Party
                cm.sendYesNo("要进入这个任务之前必须先组队. 你想现在就搜索队伍吗?");
            } else if (!cm.isLeader()) { // Not Party Leader
                cm.sendOk("请让队长跟我对话.");
            } else if (!cm.isAllPartyMembersAllowedLevel(minLevel, maxLevel)) {
                cm.sendNext("组队成员等级 " + minLevel + " 以上 " + maxLevel + " 以下才可以入场。");
            } else if (!cm.isAllPartyMembersAllowedPQ(PQLog, maxenter)) {
                cm.sendNext("你的队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLog, maxenter) + "\" #k#n次数已经达到上限了。");
            } else if (!cm.allMembersHere()) {
                cm.sendOk("请确认队员是否都在当前地图.");
            } else {
                var party = cm.getParty().getMembers();
                var next = true;
                if (!cm.isAdmin() && (party.size() > maxPlayers || party.size() < minPlayers)) {
                    next = false;
                }
                if (next) {
                    var em = cm.getEventManager("Rex");
                    if (em == null || open == false) {
                        cm.sendSimple("当前组队任务不可用.");
                    } else {
                        var prop = em.getProperty("state");
                        if (prop == null || prop.equals("0")) {
                            em.startInstance(cm.getParty(), cm.getMap(), 170);
                        } else {
                            cm.sendSimple("当前已经有人在里面了. 请稍等或切换到其他频道.");
                        }
                        cm.removeFromParty(4001528);
                        cm.gainMembersPQ(PQLog, 1);
                    }
                } else {
                    cm.sendYesNo("你需要有一个 " + minPlayers + " - " + maxPlayers + " 人的队伍. 请您组好队员后再试.");
                }
            }
            cm.dispose();
        } else if (selection == 1) {
            cm.sendNext("距离侏儒怪皇帝#r#o9300281##k复活没剩多少时间了。封印#r#o9300281##k的封印石的力量似乎正在逐渐减弱。只能前往#r#o9300281##k被封印的#b#m921120500##k去阻止他复活……如果你需要的话，我会把你带到那里去。但是，你要保护我，直到我安全离开那里。\r\n - #e等级#n : 150以上#r( 推荐等级 : 150 ~ 200 )#k \r\n - #e限定时间#n : 20分钟\r\n - #e参加人数#n : 2~6名r\r\n - #e获得道具#n :\r\n#i1032102:# #t1032102#\r\n#i1032103:# #t1032103#\r\n#i1032104:# #t1032104#\r\n#i1902048:# #t1902048#");
            cm.dispose();
        } else if (selection == 2) {
            cm.sendSimple("你想要获得什么道具？我想要获得#b\r\n#L0##i1032102:# #t1032102#。我想要获得#l\r\n#L1##i1032103:# #t1032103#。我想要获得#l\r\n#L2##i1032104:# #t1032104#。我想要获得#l\r\n#L3##i1902048:# #t1902048#。#l");
        } else if (selection == 3) {
            var pqtry = maxenter - cm.getPQLog(PQLog);
            cm.sendOk("今天剩余挑战次数是" + pqtry + "次.");
            cm.dispose();
        }
    } else if (status == 2) {
        if (cm.getMapId() == 910002000 && sel != 2) {
            cm.saveLocation("MULUNG_TC"); // not sure if correct..?
            cm.warp(211000002);
        } else {
            var itemid;
            var cost = 5;
            switch (selection) {
                case 0:
                    itemid = 1032102;
                    break;
                case 1:
                    itemid = 1032103;
                    break;
                case 2:
                    itemid = 1032104;
                    break;
                case 3:
                    cost = 10;
                    itemid = 1902048;
                    break;
            }
            if (cm.haveItem(4001530, cost)) {
                if (cm.canHold(itemid)) {
                    cm.gainItem(itemid, 1);
                    cm.gainItem(4001530, -cost);
                } else {
                    cm.sendOk("请整理你的背包");
                }
            } else {
                cm.sendOk("要想获得#b#t" + itemid + "##k的话，需要#b" + cost + "个#t4001530##k。你快去搜集吧。消灭莱格斯后，就可以弄到。");
            }
        }
        cm.dispose();
    } else if (mode == 0) {
        cm.dispose();
    }
}