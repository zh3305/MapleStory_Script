var status = 0;
var section = 0;
var PQLog = "奈特金字塔";
var maxenter = 5;
importPackage(java.lang);
//questid 29932, infoquest 7760
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 99 || status <= 1) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 1) {
        if (cm.getMapId() >= 926020001 && cm.getMapId() <= 926020004) {
            var itemid = 4001321 + (cm.getMapId() % 10);
            if (!cm.canHold(itemid)) {
                cm.sendOk("请确认背包其他栏有足够空间.");
            } else {
                cm.gainItem(itemid, 1);
                cm.warp(cm.getMapId() - 10000, 0);
            }
            cm.dispose();
        } else if (cm.getMapId() >= 926010001 && cm.getMapId() <= 926010004) {
            cm.warp(926010000, 0);
            cm.dispose();
        } else if (cm.getMapId() >= 926010100 && cm.getMapId() <= 926013504) {
            cm.sendYesNo("你想要离开这里了吗?");
            status = 99;
        } else {
            cm.sendSimple("我是守护奈特神的金字塔的杜阿特。\r\n\r\n#b#L0#听取金字塔的介绍。#l\r\n#e#L1#进入金字塔。#l#n\r\n#L2#寻找组队。#l\r\n#L3#用<奈特的绿宝石>交换其他物品。#l\r\n#L4#查看今日剩余挑战次数。#l\r\n");
        }
    } else if (status == 2) {
        section = selection;
        if (selection == 0) {
            cm.sendNext("这里就是混沌与复仇之神奈特的金字塔。尽管很长时间以来它都隐藏在沙漠深处，但奈特神的意志已然来到了人间。如果不想对将来未知的混沌和死亡感到害怕的话，最好来金字塔挑战下奈特神的试炼。");
        } else if (selection == 1) {
            cm.sendSimple("你这个无知的傻瓜，那么请选择吧！\r\n#L0# #v3994115# #l#L1# #v3994116# #l#L2# #v3994117# #l#L3# #v3994118# #l");
        } else if (selection == 2) {
            //cm.sendSimple("What gem have you brought?\r\n#L0##i4001322##t4001322##l\r\n#L1##i4001323##t4001323##l\r\n#L2##i4001324##t4001324##l\r\n#L3##i4001325##t4001325##l");
            cm.sendNext("打开组队界面寻找找一个队伍吧");
            cm.dispose();
        } else if (selection == 3) {
            cm.sendSimple("通过奈特神的考验，搜集到#e#b#t4001623:##k#n之后，可以交换为其他道具。你想要什么道具呢？\r\n#b\r\n#L0# #i1132013:# #t1132013# #r(需要#t4001623#40个)#b#l\r\n#L1# #i1072619:# #t1072619# #r(需要#t4001623#40个)#b#l\r\n#L2# #i1112682:# #t1112682# #r(需要#t4001623#40个)#b#l");
        } else if (selection == 4) {
             cm.sendOk("今天剩余挑战次数是" + (maxenter - cm.getPQLog(PQLog)) + "次。");
            cm.dispose();
        } else if (selection == 5) {
            var record = cm.getQuestRecord(7760);
            var data = record.getCustomData();
            if (data == null) {
                record.setCustomData("0");
                data = record.getCustomData();
            }
            var mons = parseInt(data);
            if (mons < 50000) {
                cm.sendOk("Please defeat at least 50,000 monsters in the Pyramid and look for me again. Kills : " + mons);
            } else if (cm.canHold(1142142) && !cm.haveItem(1142142)) {
                cm.gainItem(1142142, 1);
                cm.forceStartQuest(29932);
                cm.forceCompleteQuest(29932);
            } else {
                cm.sendOk("Please make room.");
            }
            cm.dispose();
        }
    } else if (status == 3) {
        if (section == 0) {
            cm.sendNext("当你进入金字塔的瞬间，奈特神的试炼就已经开始了。你必须阻止不断涌现的怪物到达#b#e方尖碑#n#k。从金字塔里获得的点数可以用来购买#b眼睛道具#k。");
        } else if (section == 1) {
            var cont_ = false;
            if (selection == 0) { //easy; 40-60
                if (cm.getPlayer().getLevel() < 40) {
                    cm.sendOk("你的等级必须在40以上.");
                } else if (cm.getPlayer().getLevel() > 60) {
                    cm.sendOk("你的等级必须在60以下.");
                } else {
                    cont_ = true;
                }
            } else if (selection == 1) { //normal; 60-80
                if (cm.getPlayer().getLevel() < 60) {
                    cm.sendOk("你的等级必须在60以上.");
                } else if (cm.getPlayer().getLevel() > 80) {
                    cm.sendOk("你的等级必须在80以下.");
                } else {
                    cont_ = true;
                }
            } else if (selection == 2) { //hard; 80-100
                if (cm.getPlayer().getLevel() < 80) {
                    cm.sendOk("你的等级必须在80以上.");
                } else if (cm.getPlayer().getLevel() > 100) {
                    cm.sendOk("你的等级必须在100以下.");
                } else {
                    cont_ = true;
                }
            } else if (selection == 3) { //hell; 61+
                if (cm.getPlayer().getLevel() < 100) {
                    cm.sendOk("你的等级必须在100以上.");
                } else {
                    cont_ = true;
                }
            }
            if (cont_ && cm.isLeader()) {//todo
                if (!cm.isAllPartyMembersAllowedPQ(PQLog, maxenter)) {
                    cm.sendNext("你的队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLog, maxenter) + "\" #k#n次数已经达到上限了。");
                } else if (!cm.start_PyramidSubway(selection)) {
                    cm.sendOk("奈特神的金字塔当前进行的人数已满.");
                } else {
                    cm.gainMembersPQ(PQLog, 1);
                }

            } else if (cont_ && !cm.isLeader()) {
                cm.sendOk("需要组成一个队伍!");
            }
            cm.dispose(); //todo
        } else if (section == 3) {
            var itemid = 4001623;
            var bounse = 0;
            if (selection == 0) {
                bounse = 1132013;
            } else if (selection == 1) {
                bounse = 1072619;
            } else {
                bounse = 1112682;
            }
            if (!cm.haveItem(itemid, 40)) {
                cm.sendOk("奈特的绿宝石差得太多了。想获得#b#i" + bounse + ":##t" + bounse + "##k的话，至少需要40个。");
            } else {
                cm.gainItem(bounse, 1);
                cm.gainItem(itemid, -40);
            }
            cm.dispose(); //todo
        }
    } else if (status == 4) {
        if (section == 0) {
            cm.sendNext("通过奈特的试炼的人会得到无上的荣耀，在试炼前倒下的人就只好自求多福了。我对你的提醒就到这里了。剩下的就全凭你自己的实力了。");
            cm.dispose();
        }
    } else if (status == 100) {
        cm.warp(926010000, 0);
        cm.dispose();
    }
}
