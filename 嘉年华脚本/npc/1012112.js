importPackage(java.lang);

var status = 0;
var minLevel = 30;
var maxLevel = 250;
var minPlayers = 1; //3
var maxPlayers = 6;
var open = true;//open or not
var PQLog = '月妙的年糕';
var maxenter = 100;

function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (status >= 1 && mode == 0) {
        //cm.sendOk("Ask your friends to join your party. You can use the Party Search funtion (hotkey O) to find a party anywhere, anytime."); // gms has spelling mistakes.. 
        cm.dispose();
        return;
    }
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;

    if (status == 0) {
        if (cm.getPlayer().getMapId() != 933000000) { // not in pq lobby
            cm.sendSimple("#e <组队任务: 月妙的年糕>#n \r\n  你想和队员们一起努力，完成任务吗？这里面有很多如果不同心协力就无法解决的障碍……如果想挑战的话，请让#b所属组队的队长#k来和我说话。#b\r\n#L0#去往组队任务综合入场.");
        } else if (cm.getPlayer().getMapId() == 933000000) {
            cm.sendSimple("#e<组队任务: 月妙的年糕>#n \r\n 你好, 我是达尔利! 你去过迎月花山丘吗? 那里可是个美丽的地方. 直到怪物进来....? \r\n #b#L1# 进入迎月花山丘.#l \r\n #b#L4# 我要兑换年糕帽子.#l \r\n #L3# 告诉我关于迎月花丘的信息.#l \r\n #L5# 我想知道今天剩余的挑战次数?#l");
        } else {
            cm.dispose();
        }
    } else if (status == 1) {
        if (selection == 0) {
            cm.saveLocation("MULUNG_TC");
            cm.warp(933000000, 0);
            cm.dispose();
        } else if (selection == 1) {
            if (cm.getParty() == null) { // No Party
                cm.sendOk("你没有创建组队,无法入场。");
                cm.dispose();
            } else if (!cm.isLeader()) { // Not Party Leader
                cm.sendOk("请你们团队的队长和我对话。");
                cm.dispose();
            } else if (!cm.isAllPartyMembersAllowedLevel(minLevel, maxLevel)) {
                cm.sendOk("在你或者队员中存在" + minLevel + "级以下，" + maxLevel + "级以上的角色。请注意等级限制。");
                cm.dispose();
            } else if (!cm.isAllPartyMembersAllowedPQ(PQLog, maxenter)) {
                cm.sendOk("你的队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLog, maxenter) + "\" #k#n次数已经达到上限了。");
                cm.dispose();
            } else if (!cm.allMembersHere()) {
                cm.sendOk("你的组队部分成员不在当前地图,请召集他们过来后在尝试。");
                cm.dispose();
            } else {
                var party = cm.getParty().getMembers();
                var next = true;
                if (!cm.isAdmin() && (party.size() > maxPlayers || party.size() < minPlayers)) {
                    next = false;
                }
                if (next) {
                    var em = cm.getEventManager("HenesysPQ");
                    if (em == null || open == false) {
                        cm.sendSimple("当前组队任务未加载,请报告管理员.");
                    } else {
                        var prop = em.getProperty("state");
                        if (prop == null || prop.equals("0")) {
                            em.startInstance(cm.getParty(), cm.getMap(), 70);
                        } else {
                            cm.sendSimple("月妙的年糕里面已经有人了，请稍等！或者更换频道!"); // may not be a gms copy.. dont have 6 computers to test party inside and party to enter : (
                        }
                        cm.removeAll(4001453);
                        cm.setPQLog(PQLog);
                    }
                    cm.dispose();
                } else {
                    cm.sendYesNo("你需要有一个 " + minPlayers + " - " + maxPlayers + " 人的队伍.并且等级在" + minLevel + "~" + maxLevel + "范围,\r\n那么请让你的组队长和我对话吧!");
                    cm.dispose();
                }
            }
        } else if (selection == 3) {
            cm.sendOk("#e <组队任务: 月妙的年糕>#n \r\n A mysterious Moon Bunny that only appears in #b#m933001000##k durning full moons. #b#p1012112##k of #b#m100000200##k is looking for Maplers to find #rMoon Bunny's Rice Cake#k for #b#p1012114##k. If you want to meet the Moon Bunny, plant Primrose Seeds in the designated locations and summon forth a full moon. Protect the Moon Bunny from wild animals until all #r10 Rice Cakes#k are made.\r\n #e - Level:#n 10 or above #r (Recommended Level: 10 - 20)#k \r\n #e - Time Limit:#n 10 min \r\n #e - Number of Participants:#n 3 to 6 \r\n #e - Reward:#n #i1003266:# Rice Cake Topper #b \r\n(obtained by giving Tory 100 Rice Cakes)#k \r\n #e - Items:#n #i1002798:# A Rice Cake on Top of My Head #b \r\n(obtained by giving Tory 10 Rice Cakes).");
            cm.dispose();
        } else if (selection == 4) {
            cm.sendOk("哟! 你带来月妙制作的年糕给我呀? 好的,我给你准备了一些特殊的礼物. 那么你想给我多少年糕呢?#b\r\n#L10#月妙的年糕 x10 - 头顶年糕#l\r\n#L11#月妙的年糕 x100 - 飘在头顶的石头");
        } else if (selection == 5) {
            var pqtry = maxenter - cm.getPQLog(PQLog);
            cm.sendOk("今天剩余挑战次数是" + pqtry + "次.");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selection == 10) {
            if (!cm.canHold(1002798, 1)) {
                cm.sendOk("请整理你的背包空间.");
            } else if (cm.haveItem(4001101, 10)) {
                cm.gainItem(1002798, 1);
                cm.gainItem(4001101, -10);
                cm.sendOk("已经兑换好叻!");
                cm.dispose();
            } else {
                cm.sendOk("你需要更多的年糕.");
                cm.dispose();
            }
        } else if (selection == 11) {
            if (!cm.canHold(1003266, 1)) {
                cm.sendOk("请整理你的背包空间.");
            } else if (cm.haveItem(4001101, 100)) {
                cm.gainItem(1003266, 1);
                cm.gainItem(4001101, -100);
                cm.sendOk("已经兑换好叻!");
                cm.dispose();
            } else {
                cm.sendOk("你需要更多的年糕");
                cm.dispose();
            }
        }
        if (mode == 0) {
            cm.dispose();
        }
    }
}
