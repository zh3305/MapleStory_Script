/*
 * 斯乌11关超级副本 控制过关
 * Event有的函数过于复杂，直接跳转到NPC处理
 * 菜菜制作 天天冒险岛工作室所有
 * 联系QQ：537050710
 * 欢迎定制各种脚本
 */

var status = 0;
var typed;
var em;
var eim;

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
            em = cm.getEventManager("siwu");
            eim = em.getInstance("siwu")
            if (eim == null) {
                cm.warp(910000000, 0);
                cm.dispose();
            } else {
                if (cm.isLeader()) {
                    if (cm.getMap().getId() == 350050300) {
                        typed = 0;
                        clear();//通关效果
                        cm.sendNextNoESC("黑暗力量越来越明显了，他们的爪牙居然潜伏在这种地方。。\r\n勇士们，继续前进吧！");
                    } else if (cm.getMap().getId() == 350051100) {
                        if (cm.haveItem(4009159, 100) || em.getProperty("state") == "5" || em.getProperty("state") == "6" || em.getProperty("state") == "7" || em.getProperty("state") == "8" || em.getProperty("state") == "100") {
                            if (cm.haveItem(4009159, 100)) {
                                clear();
                            }
                            cm.dispose();
                        } else {
                            cm.warp(350051100, "sp");
                            cm.sendOk("机械装置损坏！\r\n为了能继续前进，请在废弃的机器人身上收集：\r\n#b#i4009159# #t4009159#   #r#ex100个#n#k ！！  ")
                            cm.dispose();
                        }
                    } else if (cm.getMap().getId() == 350051050) {
                        clear();//通关效果
                        cm.dispose();
                    } else if (cm.getMap().getId() == 350051200) {
                        if (em.getProperty("state") == "100") {
                            var map = eim.getMapInstance(350051250);
                            for (var i = 0; i < eim.getPlayerCount(); i++) {
                                eim.getPlayers().get(i).changeMap(map, map.getPortal(0))
                            }
                            cm.playerMessage(6, "1540446_1 - 1")
                            cm.dispose();
                        } else {
                            cm.sendPlayerToNpc("能量值不够，好像不能打开这扇门……。")
                        }
                        cm.dispose();
                    } else if (cm.getMap().getId() == 350051250 && cm.getMap().getId() == 350060000) {
                        clear();//通关效果 
                        cm.dispose();
                    } else {
                        cm.dispose();
                    }
                } else {//is leader
                    if (cm.getMap().getId() == 350050300) {
                        cm.dispose();
                    } else if (cm.getMap().getId() == 350051100) {
                        if (em.getProperty("state") == "5" || em.getProperty("state") == "6" || em.getProperty("state") == "7" || em.getProperty("state") == "8" || em.getProperty("state") == "100") {
                            cm.dispose();
                        } else {
                            cm.warp(350051100, "sp");
                            cm.sendOk("机械装置损坏！\r\n为了能继续前进，请在废弃的机器人身上收集：\r\n#b#i4009159# #t4009159#   #r#ex100个#n#k ！！  ")
                        }
                        cm.dispose();
                    } else if (cm.getMap().getId() == 350051200) {
                        cm.sendOk("你们必须要让队长领队，才能继续进行下一个地图！");
                        cm.dispose();
                    } else {
                        cm.dispose();
                    }
                }
            }
        } else if (status == 1) {
            switch (typed) {
                case 0:
                    if (em.getProperty("state") == "4") {
                        var map = eim.getMapInstance(350051000);
                        for (var i = 0; i < eim.getPlayerCount(); i++) {
                            eim.getPlayers().get(i).changeMap(map, map.getPortal(0))
                        }
                        cm.playerMessage(6, "1540446_1 - 2")
                    } else {
                        cm.warp(350051000, 0);
                    }
                    break;

            }
            cm.dispose();
        }//status
    }
}

function clear() {
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
}