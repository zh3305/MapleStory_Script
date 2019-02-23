/*
	拉克里斯 - Victoria Road: Kerning City (103000000)
*/

var status = -1;
var minLevel = 1;
var maxLevel = 250;

var minPartySize = 2;
var maxPartySize = 6;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        cm.removeAll(4001007);
        cm.removeAll(4001008);
        if (cm.getPlayer().getMapId() != 910000000) {
            cm.sendSimple("#e<组队任务：组队训练场>#n\r\n你想和队员们一起努力，完成任务吗？这里面有很多如果不同心协力就无法解决的障碍。\r\n#b#L0#我想进入组队训练场待机室。#l");
        } else {
            cm.sendSimple("#e<组队任务：组队训练场>#n\r\n你想和队员们一起努力，完成任务吗？这里面有很多如果不同心协力就无法解决的障碍……想挑战的话，请通过#b所属组队的队长#k和我说话。\r\n#b#L0#我想执行组队任务。#l\r\n#L1#我想寻找队员。#l\r\n#L2#我想听听说明。#l");
        }
    } else if (status == 1) {
        if (selection == 0) { //我想执行组队任务。
            if (cm.getPlayer().getMapId() != 910000000) { //不在任务开始地图
                cm.saveLocation("MULUNG_TC");
                cm.warp(910340700, 0);
            } else if (cm.getPlayer().getParty() == null) { //没有组队
                cm.sendNext("里面的世界很危险，不能一个人单独进行。\r\n#b（请组队后再和我谈话。）");
            } else if (!cm.isLeader()) { //不是队长
                cm.sendNext("让你们的代表来和我说话。");
            } else {
                var party = cm.getPlayer().getParty().getMembers();
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
                if (party.size() > maxPartySize || inMap < minPartySize) {
                    next = false;
                }
                if (next) {
                    var em = cm.getEventManager("KerningPQ");
                    if (em == null) {
                        cm.sendOk("Please try again later.");
                    } else {
                        var prop = em.getProperty("state");
                        if (prop == null || prop.equals("0")) {
                            em.startInstance(cm.getParty(), cm.getMap(), 150);
                        } else {
                            cm.sendOk("请稍等...任务正在进行中.");
                        }
                    }
                } else {
                    cm.sendOk("您所属的组队的人数不是2人以上，无法执行任务。请凑齐2人以上。如果您想招募队员，可以使用寻找组队功能。");
                }
            }
            cm.dispose();
        } else if (selection == 1) { //我想寻找队员。
            status = -1;
            cm.sendNext("请向周围的好友申请组队。通过寻找组队（快捷键O），可以随时找到适合自己的组队。希望你能参考一下。");
        } else if (selection == 2) { //我想听听说明。
            status = -1;
            cm.sendOk("我正在等待勇敢的冒险家。请大家用自己的力量和智慧，一起破解难题，击退强大的#r#o9300003##k！通过“获取和随机数字相等的通行证”和“猜猜正确位置”等问答后，#o9300003#就会出现。\r\n - #e等级#n：20级以上#r（推荐等级：20～69 ）#k\r\n - #e限制时间#n：20分钟\r\n - #e参加人数#n：2～4人\r\n - #e获得物品#n：#i1072369:# #t1072369# #b（#o9300003#掉落）#k\r\n - #e获得物品#n：#i1072533:# #t1072533# #b（用15个#t4001531#交换）#k");
        } else if (selection == 3) { //我想获得#t1072533#。
            status = -1;
            cm.sendNext("想要#i1072533:# #t1072533#的话，需要#b15个#t4001531##k。消灭#r绿水灵王#k，可以获得#t4001531#。");
        } else if (selection == 4) { //我想知道今天的剩余挑战次数。
            status = -1;
            cm.sendOk("今天剩余挑战次数是无数次。");
        }
    } else if (status == 2) {
        cm.dispose();
    }
}