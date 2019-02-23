var status = 0;
var minLevel = 120;
var maxLevel = 255;
var minPlayers = 1; // GMS = 3
var maxPlayers = 6; // GMS = 4
var count = 10;
var PQLog = "海盗船组队任务";
var sel = -1;
var questID = 1204;
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
            cm.removeAll(4001117);
            cm.removeAll(4001260);
            cm.removeAll(4001120);
            cm.removeAll(4001121);
            cm.removeAll(4001122);
            cm.sendSimple("#e<组队任务：海盗船组队任务>#n\r\n你想要干什么呢？\r\n#b#L0#我想执行组队任务。#l\r\n#L1#我想寻找一起游戏的队员。#l\r\n#L2#我想听听说明。#l\r\n#L3#我想领取海盗帽。#l\r\n#L4#我想知道今天的剩余挑战次数。#l");
        } else if (status == 1) {
            sel = selection;
            if (cm.getMapId() == 910002000 && selection == 0) {
                cm.sendNext("如果你要挑战一下，我就会指引你到港口……");
            } else if (selection == 0) {
                if (cm.getParty() == null) { // 没有组队
                    cm.sendOk("请组队后和我谈话。");
                    cm.dispose();
                } else if (!cm.isLeader()) { // 不是队长
                    cm.sendOk("队长必须在这里。请让他和我说话。");
                    cm.dispose();
                } else if (!cm.allMembersHere()) {
                    cm.sendOk("你的组队部分成员不在当前地图,请召集他们过来后在尝试。"); //判断组队成员是否在一张地图..
                    cm.dispose();
                } else if (!cm.isAllPartyMembersAllowedPQ(PQLog, count)) {
                    cm.sendOk("你的队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLog, count) + "\" #k#n次数已经达到上限了。");
                    cm.dispose();
               /* } else if (!cm.isAllPartyMembersNotCoolDown(questID, 1300000)) {//判断组队成员是否l冷却..
                    cm.sendOk("你的队员#r#e \"" + cm.getIsInCoolDownMemberName(questID, 1300000) + "\" #k#n目前处于等待重置时间状态。");
                    cm.dispose();*/
                } else {
                    var party = cm.getParty().getMembers();
                    var next = true;
                    if (!cm.isAdmin() && (party.size() > maxPlayers || party.size() < minPlayers)) {
                        next = false;
                    }
                    if (next) {
                        var em = cm.getEventManager("Pirate");
                        if (em == null) {
                            cm.sendOk("此任务正在建设当中。");
                        } else {
                            var prop = em.getProperty("state");
                            if (prop.equals("0") || prop == null) {
                                em.startInstance(cm.getParty(), cm.getMap(), 180, questID);
                                cm.gainMembersPQ(PQLog, 1);
                                cm.dispose();
                                return;
                            } else {
                                cm.sendOk("海盗船组队任务里面已经有人了，请稍等！");
                            }
                        }
                        cm.dispose();
                    } else {
                        cm.sendYesNo("你需要有一个 " + minPlayers + " - " + maxPlayers + " 人的队伍. 请您组好队员后再试.");
                        cm.dispose();
                    }
                }
            } else if (selection == 1) {
                //cm.sendYesNo("你需要有一个 " + minPlayers + " - " + maxPlayers + " 人的队伍.并且等级在" + minLevel + "~" + maxLevel + "范围,\r\n那么请让你的组队长和我对话吧!");
                cm.dispose();
            } else if (selection == 2) {
                cm.sendNext("桔梗精们所在的#b#m251000000##k遭到了#r海盗#o9300119##k的袭击。桔梗精大王--#b#p2094001##k被绑架了。请你和同伴们前往海盗船，击退#o9300119#吧。拜托你了。\r\n - #e等级#n : 120级以上#r ( 推荐等级: 120 ~ 149 )#k \r\n - #e参加人员#n : 2 ~ 6名\r\n - #e最终奖励#n : #b#i01003856# #t01003856##k");
                cm.dispose();
            } else if (selection == 3) {
                cm.sendSimple("感谢你消灭了#b老海盗#k并救出了#b无恙#k。作为报答，如果你能带来帽子碎片，我就为你制成#b海盗船长帽#k。你需要什么样的帽子呢？#b\r\n#L0##i1003856:##t1003856#\r\n#r(需要30个#t4001455#)#l#b\r\n#L1##i1003857:##t1003857#\r\n#r(#t1003856:# 1个, 需要60个#t4001455#)#l#b\r\n#L2##i1003858:##t1003858#\r\n#r(#t1003857:# 1个, 需要90个#t4001455#)#l\r\n");
            } else if (selection == 4) {
                var pqtry = count - cm.getPQLog(PQLog);
                cm.sendOk("今天剩余挑战次数是" + pqtry + "次.");
                cm.dispose();
            }
        } else if (status == 2) {
            if (sel == 0) {
                cm.saveLocation("MULUNG_TC"); // not sure if correct..?
                cm.warp(251010404);
            } else {
                var itemid;
                var cost = 5;
                var need = 0;
                switch (selection) {
                    case 0:
                        cost = 30;
                        itemid = 1003856;
                        break;
                    case 1:
                        cost = 60;
                        itemid = 1003857;
                        need = 1003856;
                        break;
                    case 2:
                        cost = 90;
                        need = 1003857;
                        itemid = 1003858;
                        break;
                }
                if (cm.haveItem(4001455, cost) && (need == 0 || cm.haveItem(need, 1))) {
                    if (cm.canHold(itemid)) {
                        cm.gainItem(itemid, 1);
                        if (need > 0) {
                            cm.gainItem(need, -1);
                        }
                        cm.gainItem(4001455, -cost);
                    } else {
                        cm.sendOk("请整理你的背包");
                    }
                } else {
                    cm.sendOk("要想获得#b#t" + itemid + "##k的话，需要#b" + cost + "个#t4001455##k。你快去搜集吧。消灭老海盗后，就可以弄到。");
                }
            }
            cm.dispose();
        }
    }
}
