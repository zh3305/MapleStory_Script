/*
 脚本功能：英语村组队任务相关。
 */

var rewards = Array(2022154, 3010283, 3010286, 3010057, 3010053, 3010059, 3010068, 3010078, 1302106, 1142574, 1182010, 1190101, 5062002, 1032156, 3010071, 3010658, 3010715, 3010718, 3010696, 1112150, 1112262, 1102659, 1102554, 1102604, 1102588, 1102589, 1102546, 1102547, 1102548, 1102550, 1102532, 1102555, 1142210, 1142208, 1142189, 1032110, 1132104, 1122149, 1112662, 1012283, 1152046, 1152047, 1152048, 1152049, 5079001, 5079002, 3010099, 3010123, 3010124, 3010125, 3010126, 3010142);
var expires = Array(4, 7, 7);
var quantity = Array(5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 100, 100, 1, 1, 1, 1, 1, 1, 1);
var needed = Array(50, 200, 200, 200, 200, 200, 200, 200, 200, 300, 300, 400, 500, 300, 200, 800, 1000, 800, 800, 500, 500, 300, 300, 300, 300, 300, 300, 300, 300, 300, 500, 300, 500, 400, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 200, 200, 200, 200, 200, 200);
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        for (var i = 3994059; i < 3994085; i++) {
            cm.givePartyItems(i, 0, true);
        }
    }
    switch (cm.getPlayer().getMapId()) {
        default:
            //event map
            if (status == 0) {
                cm.sendSimple("你好~我是来自#b英语村#k的蘑菇博士~#b\r\n\r\n#L0#前往英语村！#l\r\n#L1#我想使用#z4001137#兑换物品。#l\r\n#L2#英语村是一个什么样的地方？#l");
            } else if (status == 1) {
                if (selection == 0) {
                    cm.warp(702090400, 0); //前往英语村地图
                    cm.dispose();
                } else if (selection == 1) {
                    var selStr = "也许你可以跟我兑换下面的东西\r\n\r\n#b";
                    for (var i = 0; i < rewards.length; i++) {
                        selStr += "#L" + i + "##z" + rewards[i] + "# x " + quantity[i] + " #r(" + needed[i] + " 印章)#b#l\r\n";
                    }
                    cm.sendSimple(selStr);
                } else if (selection == 2) {
                    cm.sendNext("看来你对英语村的一些事项还不太清楚，我来跟你介绍吧！#d\r\n\r\n1) 英语村是一个神秘的地方，你必须组队并且组队必须满5人才能进入。 \r\n2) 英语村有两个不同的难度等级：#b简单、困难。#d \r\n3) 在限制的5分钟内，收集所有与答案附合的字母组，把它们交给你们的组队长，再由组队长转交给大卫。\r\n4) 在限制的时间内，你可以继续回答随机出现的问题，回答问题后出现的奖励也将是随机的。 \r\n5) 如果回答正确的话，#b你会获得随机的奖励并且得到一个#z4001137#，他可以跟蘑菇博士领取很多奇妙的东西。\r\n#k#e6) 奖励的多少取决于答案的数量。");
                    cm.dispose();
                }
            } else if (status == 2) {
                if (!cm.haveItem(4001137, needed[selection])) {
                    cm.sendNext("对不起，你没有足够的#z4001137#。");
                } else if (!cm.canHold(rewards[selection], 1)) {
                    cm.sendNext("你可能还没有准备好，请让你的背包腾出一个空格。");
                } else {
                    cm.gainItem(4001137, -needed[selection]);
                    if (expires[selection] > 0) {
                        cm.gainItemPeriod(rewards[selection], quantity[selection], expires[selection]);
                    } else {
                        cm.gainItem(rewards[selection], quantity[selection]);
                    }
                    cm.sendOk(" 欢迎再来！")
                }
                cm.dispose();
            }
            break;
        case 702090400:
            if (status == 0) {
                cm.sendSimple("你好~我是来自#b英语村#k的蘑菇博士~#b\r\n\r\n#L0#前往英语村 - 简单#l\r\n#L1#前往英语村 - 一般#l\r\n#L3#离开到活动地图#l");
            } else if (status == 1) {
                if (selection == 0 || selection == 1 || selection == 2) {
                    var em = cm.getEventManager("English");
                    if (em == null) {
                        cm.sendOk("此副本没有开放。");
                        cm.dispose();
                        return;
                    }
                    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
                        cm.sendOk("潜入这个地方的话\r\n必须要组队，或者请你的队长跟我讲话吧。");
                    } else {
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var size = 0;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null) {
                                next = false;
                                break;
                            }
                            size++;
                        }
                        if (next && size >= 1) {
                            if (em.getInstance("English" + selection) == null) {
                                em.startInstance("" + selection, cm.getPlayer());
                            } else {
                                cm.sendOk("已经有其它的组队正在挑战英语村任务。");
                            }
                        } else {
                            cm.sendOk("组队中的所有成员必须在同一个地图。");
                        }
                    }
                } else if (selection == 3) {
                    cm.warp(910000000, 0);
                }
                cm.dispose();
            }
            break;
    }
}