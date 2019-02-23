/* 
 * 杰恩 NPC (9020005)
 */
var status = 0;
var minLevel = 100;
var maxLevel = 250;
var minPlayers = 2; // GMS = 3
var maxPlayers = 6; // GMS = 4
var open = true;//open or not
var maxenter = 10;
var PQLog = '逃脱';

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
        if (cm.getMapId() == 910002000 || cm.getMapId() == 921160000) {
            cm.sendSimple("#e<组队任务: 逃脱>#n\r\n\r\n   虽说想就这样立刻逃跑，但是……我无法拒绝他的嘱托。在这座城里，被关在空中监狱的人们正在寻找帮他们逃离监狱的人。 \r\n\r\n#b#L0#我要去帮助被关在城堡里的冒险家！#l\r\n#L1#请告诉我一些关于城堡监狱的信息。#l\r\n#L2#告诉我一些关于#t4001534#的信息。#l\r\n#L3##b我想要知道今天剩余的挑战次数。#l");
        } else {
            cm.sendYesNo("#e<组队任务: 逃脱>#n\r\n\r\n你想要就此放弃了吗?");
        }
    } else if (status == 1) {
        if (cm.getMapId() == 910002000 && selection == 0) {
            cm.sendNext("你比看上去要勇敢啊。我会告诉你去空中监狱的路，跟我来吧。");
        } else if (cm.getMapId() != 921160000 && cm.getMapId() != 910002000) {
            cm.removeAll(4001528);
            cm.warp(921160000, 0);
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
                    var em = cm.getEventManager("Prison");
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
            cm.sendNext("这座城里有一个隐藏着的塔。有很多人被关在塔内的空中监狱中。我得救出他们…… \r\n - #e等级#n : 120 以上#r( 推荐等级 : 120 ~ 200 )#k \r\n - #e限定时间#n : 20分钟\r\n - #e参加人员#n : 3~6名\r\n - #e获得道具#n :\r\n#i1132094:# #t1132094#\r\n#i1132095:# #t1132095#\r\n#i1132096:# #t1132096#\r\n#i1132097:# #t1132097#\r\n#i1132098:# #t1132098#");
        } else if (selection == 2) {
            cm.sendOk("#r#t4001534##k就在隐藏的塔中的看守身上。搜集#b5个#k交给我，我会送你一份小礼物。搜集5个钥匙，意味着你为囚禁在城里的人们提供了帮助。\r\n#i1132094:# #b#t1132094#, \r\n#i1132095:# #b#t1132095#,\r\n#i1132096:# #b#t1132096#, \r\n#i1132097:# #b#t1132097#, \r\n#i1132098:# #b#t1132098##k");
            cm.dispose();
        } else if (selection == 3) {
            var pqtry = maxenter - cm.getPQLog(PQLog);
            cm.sendOk("今天剩余挑战次数是" + pqtry + "次.");
            cm.dispose();
        }
    } else if (status == 2) {
        if (cm.getMapId() == 910002000) {
            cm.saveLocation("MULUNG_TC"); // not sure if correct..?
            cm.warp(921160000);
        } else {
            cm.sendOk("如果你进入监狱的话，你必须得记住以下几点。\r\n1. 得躲开障碍物，逃出那座塔。 \r\n2. 得消灭地图里所有的警卫。\r\n3. 得逃出为了防止别人接近而设置的迷宫。\r\n4. 得消灭所有守门的警卫。\r\n5. 得通过通往空中监狱的最后障碍物。\r\n6. 得消灭警卫，找到钥匙，打开监狱门。\r\n7. 得找到教导官阿尼，让被囚禁的人们重新获得自由。");
        }
        cm.dispose();
    } else if (mode == 0) {
        cm.dispose();
    }
}