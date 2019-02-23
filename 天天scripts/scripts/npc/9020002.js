/*
 * 内拉 NPC (9020002)
 */

var status = -1;
var minLevel = 160;
var maxLevel = 250;
var minPartySize = 3;
var maxPartySize = 6;
var GetMeny = 500; //消耗点劵数量

var itemList = Array(
    //物品编码 几率  数量
    Array(2430456, 30, 1), //物品箱子1
    // Array(2430471, 30, 1), //物品箱子2
    Array(2431139, 25, 1), //物品箱子2
    // Array(2430472, 10, 1), //物品箱子3
    Array(2431106, 10, 1), //物品箱子3
    Array(2431138, 25, 1) //物品箱子4
);


var random = java.lang.Math.floor(Math.random() * 9 + 1);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
            if (cm.getMap().getId() == 910340600) { //最后一关
                var outText;
                cm.setEventCount("废弃都市");
                if (random == 1) {
                    cm.finishActivity(120104);
                    cm.gainItem(2430781, 1);
                    // cm.worldSpouseMessage(0x20, "[组队-废弃都市] 玩家 " + cm.getChar().getName() + " 通关 " + cm.getEventCount("废弃都市") + " 次 系统随机给予大量通关奖励。");
                    // cm.dispose();
                } else if (random == 2) {
                    cm.gainItem(2430781, 1);
                    cm.gainItem(4310088, 5);
                    cm.finishActivity(120104);
                    // cm.worldSpouseMessage(0x20, "[组队-废弃都市] 玩家 " + cm.getChar().getName() + " 通关 " + cm.getEventCount("废弃都市") + " 次 系统随机给予大量通关奖励，额外获得大量RED币。");
                    // cm.dispose();
                } else if (random == 3) {
                    cm.gainItem(2430781, 1);
                    cm.gainItem(4033356, 1);
                    cm.finishActivity(120104);
                    // cm.worldSpouseMessage(0x20, "[组队-废弃都市] 玩家 " + cm.getChar().getName() + " 通关 " + cm.getEventCount("废弃都市") + " 次 系统随机给予大量通关奖励,额外获得正义火种1。");
                    // cm.dispose();
                } else {
                    if (cm.getEventCount("废弃都市") > 30) {
                        cm.gainItem(2430781, 1);
                        cm.finishActivity(120104);
                        // cm.worldSpouseMessage(0x20, "[组队-废弃都市] 玩家 " + cm.getChar().getName() + " 通关 " + cm.getEventCount("废弃都市") + " 次 系统随机给予大量通关奖励。");
                        // cm.dispose();
                    } else {
                        cm.gainItem(2430781, 1);
                        cm.finishActivity(120104);
                        // cm.gainItem(4310088, Math.random() * 15 + 1);
                        // cm.worldSpouseMessage(0x20, "[组队-废弃都市] 玩家 " + cm.getChar().getName() + " 通关 " + cm.getEventCount("废弃都市") + " 次 系统随机给予大量通关奖励，次数小于30获得大量RED币。");
                    }
                }
                var CounJl = 0;
                for (var i = itemList.length - 1; i >= 0; i--) {
                    CounJl += itemList[i][1];
                }

                var chance = Math.floor(Math.random() * CounJl);
                var finalitem = Array();
                for (var i = 0; i < itemList.length; i++) {
                    if (itemList[i][1] >= chance) {
                        finalitem.push(itemList[i]);
                        break;
                    }
                    chance = chance - itemList[i][1];
                }
                if (finalitem.length != 0) {


                    var item;
                    var random = new java.util.Random();
                    var finalchance = random.nextInt(finalitem.length);
                    var itemId = finalitem[finalchance][0];
                    var quantity = finalitem[finalchance][2];
                    var notice = finalitem[finalchance][3];
                    item = cm.gainItem(itemId, quantity);
                }
                outText = "通关成功!";
                cm.warp(910000000, 0);
                cm.sendOk(outText);
                cm.dispose();
                return;
            } else if (cm.getMap().getId() != 910340000) { //不是进入地图
                cm.sendYesNo("你确定要出去吗?");
            } else {
                var text = "#e<组队任务：组队训练场>#n\r\n";
                text += "你想和队员们一起努力，完成任务吗？这里面有很多如果不同心协力就无法解决的障碍……如果想挑战的话，请让#b所属组队的队长#k来和我说话。";
                text += "\r\n\r\n#b#L0#我想执行组队任务。#l\r\n#L1#我想听一下说明。#l\r\n#L9#我想出去#l";
                cm.sendSimple(text);
            }
        }
        if (type == 1) { //确定出去
            cm.warp(910000000, 0);
            cm.dispose();
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.getParty() == null) { // 没有组队
                    cm.sendOk("里面的世界很危险，不能一个人单独进行。\r\n#b（请组队后再和我谈话。）");
                    cm.dispose();
                } else if (!cm.isLeader()) { // 不是队长
                    cm.sendOk("让你们的代表来和我说话。");
                    cm.dispose();
                    /*} else if (cm.getBossLog('LUDI') >= 6){
                     cm.sendOk("对不起，一天只能进入6次。")
                     cm.dispose();*/
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
                        var em = cm.getEventManager("KerningPQ");
                        if (em == null) {
                            cm.sendOk("此任务正在建设当中。");
                        } else {
                            var prop = em.getProperty("state");
                            if (prop == "0" || prop == null) {
                                cm.worldMessage("[组队任务] " + cm.getChar().getName() + " 带领他的队伍进入了组队训练场挑战任务。大家一起祝福他们吧！");
                                em.startInstance(cm.getParty(), cm.getMap(), 150);
                                cm.removeAll(4001022);
                                cm.removeAll(4001023);
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
            } else if (selection == 1) {
                cm.sendOk("请确认你的组队员：\r\n\r\n#b1、组队员必须要" + minPartySize + "人以上，" + maxPartySize + "人以下。\r\n2、组队员等级必须要在" + minLevel + "级以上。\r\n\r\n（#r如果仍然错误, 重新下线,再登陆 或者请重新组队。#k#b）");
                cm.dispose();
            } else if (selection == 9) {
                if (cm.getEventCount("废弃都市") > 3) {
                    cm.getChar().modifyCSPoints(1, GetMeny);
                }
                cm.warp(910000000, 0);
                cm.dispose();
            }
        }
        //status
    } //mode
} //f


// var mapId = cm.getMapId();
// if (mapId == 910340000) {
//     // cm.warp(910000000, 0);
//     // cm.removeAll(4001007);
//     // cm.removeAll(4001008);
//     // cm.dispose();


// } else {

// }
// else {
//     outText = "你确定要离开地图吗?";
// }
// if (status == 0) {
//     cm.sendYesNo(outText);
// } else if (mode == 1) {
//     cm.warp(910000000, "st00"); // Warp player
//     cm.dispose();
// }
// }
