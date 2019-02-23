/*
 Red Sign - 101st Floor Eos Tower (221024500)
 */


var status = 0;
var minLevel = 200;
var maxLevel = 250;
var minPlayers = 3; // GMS = 3
var maxPlayers = 6; // GMS = 4
var next = true;//next or not
var maxenter = 10;
var PQLog = '玩具城组队任务';

function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (status >= 1 && mode == 0) {
        cm.sendOk("让你你的朋友加入你的队伍. 你也可以使用组队搜索功能来搜索队伍."); // gms has spelling mistakes.. 
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;

    if (status == 0) {
        if (cm.getMapId() == 910002000 || cm.getMapId() == 221023300) {
            cm.sendSimple("#e<组队任务：玩具城组队任务>#n\r\n\r\n从这里往上到处都是很危险的东西，你不能继续往上走了。你想和队员们一起齐心协力，完成任务吗？如果想挑战的话，就通过#b所属组队的队长#k来和我说话。\r\n#b#L1#我想参加组队任务。#l\r\n#L2#我想寻找组队。#l\r\n#L4#我想领取#t1022073#。#l#l\r\n#L3#我想听听说明。#l\r\n#L5#我想知道今天的剩余挑战次数。#l");
        } else {
            cm.dispose();
        }
    } else if (status == 1) {
        if (cm.getMapId() == 910002000 && selection == 1) {
            cm.sendNext("如果你要挑战一下，我就会指引你到达塔的顶端……");
        } else if (selection == 1) {
            if (cm.getParty() == null) { // No Party
                cm.sendYesNo("要进入这个任务之前必须先组队. 你想现在就搜索队伍吗?");
            } else if (!cm.isLeader()) { // Not Party Leader
                cm.sendOk("请让队长跟我对话.");
            } else if (!cm.isAllPartyMembersAllowedLevel(minLevel, maxLevel)) {
                cm.sendNext("组队成员等级 " + minLevel + " 以上 " + maxLevel + " 以下才可以入场。");
            } else if (!cm.isAllPartyMembersAllowedPQ(PQLog, maxenter)) {
                cm.sendNext("你的队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLog, maxenter) + "\" #k#n次数已经达到上限了。");
            } else if (!cm.allMembersHere()) {
                cm.sendOk("请确认队员是否都在当前地图."); // check if working..
            } else {
                var party = cm.getParty().getMembers();
                var next = true;
                if (!cm.isAdmin() && (party.size() > maxPlayers || party.size() < minPlayers)) {
                    next = false;
                }
                if (next) {
                    var em = cm.getEventManager("LudiPQ");
                    if (em == null || next == false) {
                        cm.sendSimple("当前组队任务不可用.");
                    } else {
                        var prop = em.getProperty("state");
                        if (prop == null || prop.equals("0")) {
                            em.startInstance(cm.getParty(), cm.getMap(), 170);
                        } else {
                            cm.sendSimple("当前已经有人在里面了. 请稍等或切换到其他频道.");
                        }
                        cm.removeAll(4001022);
                        cm.removeAll(4001023);
                        cm.gainMembersPQ(PQLog, 1);
                    }
                } else {
                    cm.sendYesNo("你需要有一个 " + minPlayers + " - " + maxPlayers + " 人的队伍. 请您组好队员后再试.");
                }
            }
            cm.dispose();
        } else if (selection == 2) {
            cm.sendOk("请向周围的朋友们请求组队。使用寻找组队(快捷键O)功能，可以在任何时间任何地点寻找组队。敬请参考。");
            cm.dispose();
        } else if (selection == 3) {
            cm.sendOk("#e<组队任务：次元裂缝>#n\r\n#b#m220000000##k出现了次元裂缝！为了阻止入侵的怪物，我们迫切需要冒险家们自发的帮助。请和可以信赖的同伴一起，拯救#m220000000#！.必须消灭怪物，解决各种难关，战胜#r#o9300012##k。\r\n  - #e等级#n：50级以上#r(推荐等级 50～69 )#k \r\n  - #e限制时间#n：20分钟\r\n  - #e参加人数#n：3～6人\r\n  - #e获得物品#n：#i1022073:# #t1022073# #b(每帮助5次时获得)#k                         各种消耗、其他、装备物品");
            cm.dispose();
        } else if (selection == 4) {
            if (!cm.canHold(1022073, 1)) {
                cm.sendOk("请确认你的背包有足够空间!");
            } else if (cm.haveItem(4033039, 35)) {
                cm.gainItem(4033039, -35);
                cm.gainItem(1022073, 1);
                cm.sendOk("Here you go. Enjoy!");
            } else {
                cm.sendOk("你每帮助我5次，我就会给你1个#i1022073:##b#t1022073##k。你只要再帮我#b5次#k，就可以获得#b#t1022073##k了。");
            }
            cm.dispose();
        } else if (selection == 5) {
            var pqtry = maxenter - cm.getPQLog(PQLog);
            cm.sendOk("今天剩余挑战次数是" + pqtry + "次.");
            cm.dispose();
        }
    } else if (status == 2) {
        cm.saveLocation("MULUNG_TC"); // not sure if correct..?
        cm.warp(221023300);
        cm.dispose();
    } else if (mode == 0) {
        cm.dispose();
    }
}
