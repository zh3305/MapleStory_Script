var status = -1;
var sel = 0;
var normLimit = 5;
var rankLimit = 3;

function start() {
    cm.sendSimple("我师父可是武陵最厉害的人。你竟然想挑战他？以后可别后悔。#b\r\n#L0#我要挑战武陵道场。#l\r\n#L1#我想换取魔方。#l\r\n#L2#我想了解一下在武陵道场里可以获得什么奖励。#l\r\n#L3##b我想在困难模式中查看自己的点数和等级。#l\r\n#L4#武陵道场是什么？#l\r\n#L5#我想查看今日的剩余挑战次数。#l");
}

function action(mode, type, selection) {

    if (mode == 0) {
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
            switch (sel) {
                case 0:
                    cm.sendSimple("在武陵道场中, 通过选择#b普通模式、困难模式、排行榜模式#k, 可以进行挑战。达到#r120级以上#k可以挑战普通模式、困难模式。而必须达到#r130级以上#k才可以挑战排行榜模式。你要挑战哪个模式呢? #b\r\r\n\n#L0# 挑战普通模式#l\r\n#L1# 挑战困难模式#l\r\n#L2##r 挑战排行榜模式#l");
                    break;
                case 1:
                    cm.sendSimple("如果有#b#i4001620# #t4001620##k, 就给你#b腰带#k。不过，这个腰带在 #r#e15天#k#n 之后会消失，如果还想要就再收集武功的证物吧。\r\n\r\n你想领取什么腰带呢？\r\n#b#L0##i1082392:# #t1082392# #r(需要武公的证物800个)#b#l\r\n#L1##i1082393:# #t1082393# #r(需要武公的证物500个)#b#l\r\n#L2##i1082394:# #t1082394# #r(需要武公的证物300个)#b#l\r\n");//#L3##i1132115:# #t1132115# #r(需要武公的证物125个)#b#l");
                    break;
                case 2:
                    cm.sendSimple("武陵道场里，不管是哪个难度模式，只要搜集到#t4001620#就能获得#b武公的腰带#k。如果你挑战#b困难模式#k或#b排名模式#k，还可以获得特殊奖励。当然，能不能拿得到还得看你自己的实力。\r\n#b\r\n#L0#武公的腰带都有什么样的？#l\r\n#L1#挑战困难模式可以获得什么奖励？#l\r\n#L2#怎么做才能在排名模式中获得奖励？#l");
                    break;
                case 3:
                    cm.sendOk("不好意思……现在你的武陵点数只有#b" + cm.getDojoPoints() + "#k点，连B级都不到。要升到B级还差99600点，再加把劲。你该不是在这点失败上就受挫的人吧？");
                    cm.dispose();
                    break;
                case 4:
                    cm.sendNext("我们师傅是武陵最强的人。武陵道场是师傅建造的地方。武陵道场非常高，一共有47层。可以一层一层地向上挑战，修炼自己。当然，以你的实力，估计不可能到达最上层。");
                    cm.dispose();
                    break;
                case 5:
                    cm.sendOk("今天普通/困难模式可以参与#r" + (normLimit - cm.getPQLog("dojonorm")) + "#k次，排名模式可以参加#r" + (rankLimit - cm.getPQLog("dojorank")) + "#k次。");
                    cm.dispose();
                    break;
            }

            break;
        case 1:
            switch (sel) {
                case 0://开始道场
                    if (!cm.isQuestActive(7214)) {
                        cm.forceStartQuest(7214);
                    }
                    switch (selection) {
                        case 0:
                            if (cm.getChar().getLevel() >= 120) {
                                if (cm.getPQLog("dojonorm") >= normLimit) {
                                    cm.sendOk("普通/困难模式一天只能参加" + normLimit + "次");
                                } else if (cm.start_DojoAgent(selection, true, false)) {
                                    cm.setPQLog("dojonorm");
                                } else {
                                    cm.sendOk("当前频道挑战人数已满,请更换频道再试.");
                                }
                            } else {
                                cm.sendOk("要参与普通/困难模式等级必须要达到#r120#k级.");
                            }
                            break;
                        case 1:
                            if (cm.getChar().getLevel() >= 120) {
                                if (cm.getPQLog("dojonorm") >= normLimit) {
                                    cm.sendOk("普通/困难模式一天只能参加" + normLimit + "次");
                                } else if (cm.start_DojoAgent(selection, true, false)) {
                                    cm.setPQLog("dojonorm");
                                } else {
                                    cm.sendOk("当前频道挑战人数已满,请更换频道再试.");
                                }
                            } else {
                                cm.sendOk("要参与普通/困难模式等级必须要达到#r120#k级.");
                            }
                            break;
                        case 2:
                            if (cm.getChar().getLevel() >= 130) {
                                if (cm.getPQLog("dojorank") >= rankLimit) {
                                    cm.sendOk("排行榜模式一天只能参加" + normLimit + "次");
                                } else if (cm.start_DojoAgent(selection, true, false)) {
                                    cm.setPQLog("dojorank");
                                } else {
                                    cm.sendOk("当前频道挑战人数已满,请更换频道再试.");
                                }
                            } else {
                                cm.sendOk("要参与排行榜模式等级必须要达到#r130#k级.");
                            }
                            break;
                    }
                    cm.dispose();
                    break;
                case 1:
                    var cost, itemID = 1082392 + selection;
                    switch (selection) {
                        case 0:
                            cost = 800;
                            break;
                        case 1:
                            cost = 500;
                            break;
                        case 2:
                            cost = 300;
                            break;
                        case 3:
                            cost = 125;
                            break;
                    }
                    if (cm.haveItem(4001620, cost)) {
                        if (cm.canHold(itemID)) {
                            cm.gainItem(4001620, -cost);
                            cm.gainItem(itemID, 1,1000*60*60*24*7);
                            cm.sendOk("兑换好了，如果有能力，可以在130级之后参加 #b排名模式#k！");
                        } else {
                            cm.sendOk("背包空间不足,请整理下你的装备栏空间!");
                        }
                    } else {
                        cm.sendOk("你不要骗我了,你确定你有#r" + cost + "#k个#b#i4001620# #t4001620##k吗??");
                    }
                    cm.dispose();
                    break;
                case 2:
                    switch (selection) {
                        case 0:
                            cm.sendOk("你只要在武陵道场中搜集到#i4001620# #t4001620#就能获得#b武公的腰带#k。武陵道场中偶尔会掉落#b腰带专用卷轴#k，用它可以给腰带升级，你别忘了好好搜集一些。\r\n#e <武公的证物奖励：有效期15日>#n#b\r\n#i1132112:# #t1132112# #r(需要#t4001620#25个)#b\r\n#i1132113:# #t1132113# #r(需要#t4001620#50个)#b\r\n#i1132114:# #t1132114# #r(需要#t4001620#100个)#b\r\n#i1132115:# #t1132115# #r(需要#t4001620#125个)#k");
                            break;
                        case 1:
                            cm.sendOk("根据你挑战困难模式的结果，可以获得相应的点数。该点数在一周内会进行累积，按照你累积的点数，可以获得相应的奖励。只要你多加努力，就能获得更好的奖励，加油吧。\r\n#e <困难模式奖励> \r\n#b#eSS级：#i1022135:# #t1022135# #r(有效期：7日)#b\r\nS级：#i1022136:# #t1022136# #r(有效期：7日)#b\r\nA级：#i2022957:# #t2022957#3个#r(有效期：7日)#b\r\nB级：#i2001505:# #t2001505#10个#r(有效期：7日)#b\r\n");
                            break;
                        case 2:
                            cm.sendOk("挑战排名模式，排名靠前，你就能获得特别的奖励。\r\n#e < 排名模式奖励：有效期到下周一00点>#n#b\r\n#i1082392:# #t1082392# #r(全体排名第1名)\r\n#b#i1082393:# #t1082393# #r(除职业排名第1名，全体排名第1名)\r\n#b#i1082394:# #t1082394# #r(职业排名第2~3名)");
                            break;
                    }
                    cm.dispose();
                    break;
            }
            break;
        case 2:
        case 3:
            cm.dispose();
            break;
    }
}
