var sel;
var mapid;
var selectedBuff;

﻿var status = -1;

function start() {
    mapid = cm.getMapId();
    var record = cm.getQuestRecord(7214);
    var data = parseInt(record.getCustomData());
    var min = parseInt(data / 60);
    var sec = parseInt(data % 60);
    if (isRestingSpot(mapid)) {
        cm.sendSimple("竟然能来到这里，真让人吃惊。但是接下去可没那么容易。怎么样？你想继续挑战吗?\r\n#r[目前为止消耗时间：" + min + "分" + sec + "秒]" + (cm.getPlayer().getInfoQuest(7218).equals("1") ? "#b\r\n#L4#我想获得恢复、增益效果。#l" : "") + "#b\r\n#L0#我想继续挑战。#l\r\n#L1#我想退出#l");
    } else {
        cm.sendYesNo("你要放弃?现在只要通过下一阶段就能大功告成了.你真的要放弃并离开吗?");
    }
}

function action(mode, type, selection) {

    if (mode == 0) {
        if (!isRestingSpot(mapid)) {
            cm.sendOk("你怎么这么优柔寡断!相信要不了多久你就又巴望着要回来了.");
        }
        cm.dispose();
        return;
    } else if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (status) {
        case 0:
            sel = selection;
            if (!isRestingSpot(mapid)) {
                exit();
            } else {
                switch (sel) {
                    case 4:
                        cm.sendSlideMenu(4, "#0# HP恢复50% #1# HP恢复100% #2# 最大HP+10000(持续时间：10分钟) #3# 攻击力/魔法攻击力+30(持续时间：10分钟) #4# 攻击力/魔法攻击力+60(持续时间：10分钟) #5# 物理/魔法防御力+2500(持续时间：10分钟) #6# 物理/魔法防御力+4000(持续时间：10分钟) #7# 命中值/回避值+2000(持续时间：10分钟) #8# 移动速度/跳跃力最大(持续时间：10分钟) #9# 攻击速度+1(持续时间：10分钟)");
                        break;
                    case 0:
                        if (cm.getParty() == null || cm.isLeader()) {
                            cm.dojoAgent_NextMap(true, true);
                            cm.getPlayer().updateInfoQuest(7218, "1");
                        } else {
                            cm.sendOk("请组队长跟我对话.");
                        }
                        cm.dispose();
                        break;
                    case 1:
                        cm.askAcceptDecline("最后还是要放弃了吗?真的想退出吗?");
                        break;
                }
            }
            break;
        case 1:
            switch (sel) {
                case 4:
                    selectedBuff = 2022856 - 1 + selection;
                    cm.sendYesNo("#i" + selectedBuff + "# #t" + selectedBuff + "#你要使用吗？每个休息阶段只能选择一次，要慎重考虑！");
                    break;
                case 1:
                    exit();
                    cm.dispose();
                    break;
            }
            break;
        case 2:
            if (sel == 4) {
                cm.getPlayer().updateInfoQuest(7218, "0");
                cm.useItem(selectedBuff);
            }
            cm.dispose();
            break;
    }
}

function exit() {
    if (cm.isLeader()) {
        cm.warpParty(925020002);
    } else {
        cm.warp(925020002);
    }
    cm.getPlayer().updateInfoQuest(7214, "0");
    cm.getPlayer().updateInfoQuest(7218, "1");
}

function isRestingSpot(id) {
    return (id % 10000 / 100 % 6) == 0;
}
