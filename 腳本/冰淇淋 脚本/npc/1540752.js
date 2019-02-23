/*
 * 斯乌11关超级副本 控制过关
 * Event有的函数过于复杂，直接跳转到NPC处理
 * 菜菜制作 奇幻冒险岛工作室所有
 * 联系QQ：537050710
 * 欢迎定制各种脚本
 */
//进度条
var l = "#fUI/mapleBingo.img/mapleBingo/Gage/leftGage#";
var m = "#fUI/mapleBingo.img/mapleBingo/Gage/middleGage#";
var r = "#fUI/mapleBingo.img/mapleBingo/Gage/rightGage#";

var status = 0;
var typed;

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
            var em = cm.getEventManager("siwu");
            var eim = em.getInstance("siwu")
            if (eim == null) {
                cm.warp(910000000, 0);
                cm.dispose();
            } else {
                if (em.getProperty("state") == "100") {
                    cm.sendPlayerToNpc("这边好像没什么事了，快点前往下一个地图吧！");
                    cm.dispose();
                } else {
                    var PartyPoint = 0;
                    for (var i = 0; i < eim.getPlayerCount(); i++) {
                        PartyPoint += parseInt(eim.getKillCount(eim.getPlayers().get(i)));//组队点数的加到一起
                    }
                    if (PartyPoint >= 314) {
                        clear();//通关效果
                        em.setProperty("state", "100");//过关
                        cm.sendPlayerToNpc("能量值好像收集满了，快点进入下一个地图吧。\r\n（#r往右上角走，好像就可以到达下一个地图了呢……。）")
                        cm.dispose();
                    } else {
                        var text = "#e控制杆无法推动，好像是能量不够。#n\r\n#r我可能要去消灭一下怪物来#e采集能量#n……。#b\r\n\r\n\r\n>>>>>>>>>> 目前的能量进度条(必须占满一行) <<<<<<<<<<<<\r\n" + l;
                        for (var i = 0; i < PartyPoint; i++) {//进度条满一行刚好314
                            text += m;
                        }
                        text += r;
                        cm.sendPlayerToNpc(text);
                        cm.dispose();
                    }
                }
            }
        }
    }
}

function clear() {
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
}