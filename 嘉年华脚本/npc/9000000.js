var quantities = Array(10, 8, 6, 5, 4, 3, 2, 1, 1, 1);
var prize1 = Array(1442047, 2000000, 2000001, 2000002, 2000003, 2000004, 2000005, 2430036, 2430037, 2430038, 2430039, 2430040); //1 day
var prize2 = Array(1442047, 4080100, 4080001, 4080002, 4080003, 4080004, 4080005, 4080006, 4080007, 4080008, 4080009, 4080010, 4080011);
var prize3 = Array(1442047, 1442048, 2022070);
var prize4 = Array(1442048, 2430082, 2430072); //7 day
var prize5 = Array(1442048, 2430091, 2430092, 2430093, 2430101, 2430102); //10 day
var prize6 = Array(1442048, 1442050, 2430073, 2430074, 2430075, 2430076, 2430077); //15 day
var prize7 = Array(1442050, 3010183, 3010182, 3010053, 2430080); //20 day
var prize8 = Array(1442050, 3010178, 3010177, 3010075, 1442049, 2430053, 2430054, 2430055, 2430056, 2430103, 2430136); //30 day
var prize9 = Array(1442049, 3010123, 3010175, 3010170, 3010172, 3010173, 2430201, 2430228, 2430229); //60 day
var prize10 = Array(1442049, 3010172, 3010171, 3010169, 3010168, 3010161, 2430117, 2430118, 2430119, 2430120, 2430137); //1 year
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }	
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("你好,我是#p" + cm.getNpc() + "#, 那个。。。如果你现在不忙的话，和我一起走，好吗？我听说这里有人举行了一个#r活动#k, 但是我不想自己一个人去那里 ... 你想去看看吗?");
        } else if (status == 1) {	
            cm.sendSimple("唔? 那么你想...\r\n#L0##e1.#n#b 什么样的活动?#k#l\r\n#L1##e2.#n#b 请你给我说明一下。#k#l\r\n#L2##e3.#n#b 好！跟我一起走吧！#k#l\r\n#L3##e4.#n#b 将连胜证明书兑换成奖励#k#l");
        } else if (status == 2) {
            if (selection == 0) {
                cm.sendNext("非常高兴你能来，我们为你准备了许多有趣的活动！建议你查看活动说明以便了解活动规则。这些活动是由管理员开启才能进行，否则将不能进入专用的活动地图。有些活动是个人赛，有些需要团队合作，还会有丰富的奖品等着你。祝你好运！在活动得到了冠军，就有金币或道具等多种多样的奖品。");
                cm.dispose();
            } else if (selection == 1) {
                cm.sendSimple("我们准备各种各样的活动。先了解游戏规吧。想了解的游戏，请选择~!\r\n#b#L0# 上楼上楼#l\r\n#L1# 向高地#l\r\n#L2# 雪球赛#l\r\n#L3# 椰子比赛#l\r\n#L4# 快速OX问答#l\r\n#L5# 寻找宝物#l\r\n#L6# 群羊牧场#l#k");
            } else if (selection == 2) {
                var marr = cm.getQuestRecord(160200);
                if (marr.getCustomData() == null) {
                    marr.setCustomData("0");
                }
                var dat = parseInt(marr.getCustomData());
                if (dat + 60 * 60 * 1000 >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                    cm.sendNext("You've entered the event already in the past hour.");
                } else if (!cm.canHold()) {
                    cm.sendNext("请给你的背包留下足够的恐惧");
                } else if (cm.getChannelServer().getEvent() > -1) {
                    cm.saveReturnLocation("EVENT");
                    cm.getPlayer().setChalkboard(null);
                    marr.setCustomData("" + cm.getCurrentTime());
                    cm.warp(cm.getChannelServer().getEvent(), cm.getChannelServer().getEvent() == 109080000 || cm.getChannelServer().getEvent() == 109080010 ? 0 : "join00");
                } else {
                    cm.sendNext("你没有票, 或活动还没开始，或已经带着#t4031019#，或活动人数已满，就无法参加活动。以后再来一起玩吧");
                }
                cm.dispose();
            } else if (selection == 3) {
                var selStr = "你想兑换哪个连胜证明书?";
                for (var i = 0; i < quantities.length; i++) {
                    selStr += "\r\n#b#L" + i + "##t" + (4031332 + i) + "# 兑换(需要" + quantities[i] + "个)#l";
                }
                cm.sendSimple(selStr);
                status = 9;
            }
        } else if (status == 3) {
            if (selection == 0) {
                cm.sendNext("#b[上楼上楼]是一种类似爬梯子游戏的。#k方法是，爬上梯子后，在许多的入口当中，选择其中一个，接着往下一阶段移动。\r\n\r\n一共有3个阶段，#r时间限制是6分钟#k。在[上楼上楼]游戏内#b不能使用跳跃，缩地大法，轻功，提高速度的药水，道具等。#k其中有的入口，会使玩家移动到别地方。请你小心点儿。");
                cm.dispose();
            } else if (selection == 1) {
                cm.sendNext("#b[向高地]是一种障碍赛跑游戏。#k与金银岛的沉睡森林和忍苦树林差不多。只要在时间限制之内，克服所有的难关，到达终点，就会得到冠军。\r\n\r\n游戏有4个阶段。#b时间限制是15分钟#k。在[向高地]游戏里不能使用缩地大法和轻功。");
                cm.dispose();
            } else if (selection == 2) {
                cm.sendNext("#b[雪球赛]#k是分两个队伍进行的比赛#b把雪球送到最远地方的队就获胜#k。如果在规定时间内没有队伍到终点，那么雪球距离起点最远的队就获胜。\r\n\r\n接近雪球后进行攻击(默认：Ctrl键)雪球就会慢慢前进。远距离攻击和所有的技能攻击都无效，只有近距离攻击才有效。\r\n\r\n要是角色的身体接触了雪球，他就被送到起点。如果攻击位于起点的雪人，可以妨碍对方雪球的前进。大家需要好好商量谁打雪球，谁打雪人。");
                cm.dispose();
            } else if (selection == 3) {
                cm.sendNext("#b[椰子比赛]#k是分两个队伍进行的比赛#b在规定时间内获取椰子最多的队就获胜#k。游戏的#r时间限制是5分钟#k。如果第一次结果是平局的话，需要加赛2分钟。如果还没有分出胜负，比赛就以平局结束。\r\n\r\n不能使用远距离攻击和技能攻击，只有#r近距离攻击才有效#k。要是你没有近距离攻击的武器，可以找活动地图里的NPC购买。不管角色的等级和武器的种类攻击力都一样。\r\n\r\n地图的很多地方有障碍物和陷阱。如果角色死掉，该角色将离开活动地图。椰子掉下的时候最后打的人就获得椰子。只有掉下的椰子才计算分数，不掉下的或破坏的不算分数。地图的下面有隐藏的跳转点。你好好使用吧。");
                cm.dispose();
            } else if (selection == 4) {
                cm.sendNext("#b[快速OX问答]#k是判断问题的答案对错的游戏。参加游戏后，按M键可以打开小地图，查看O和X的位置。答对所有问题即可获胜。\r\n\r\n阅读问题后，沿着梯子到达自己认为是正确答案的位置。必须在限定时间内做出选择。如果未选中正确答案，或悬挂在梯子上，在记分时会自动按失败处理。请一定要在画面上的[回答正确]消失之后，再进行移动。");
                cm.dispose();
            } else if (selection == 5) {
                cm.sendNext("#b[寻找宝物]#k游戏是在10分钟之内从这里找到隐藏的#b宝物文件#k。这里处处有神秘的宝物箱。打破箱子会爆出来多样的道具，其中重要的是宝物文件。\r\n\r\n打宝物箱的时候只能用一般攻击。找到宝物文件后交给NPC，他会换给你恶魔卷轴。该NPC在这里有，如果你愿意，在明珠港的#b[贝干]#k也可以交换。\r\n\r\n在这个游戏里存在很多秘密传送点。你在某个地方停下，按下#b↑键#k就可以到另一个地方。也有秘密梯和绳子，虽然什么也看不见，你去试试吧。还有的宝物箱能让你移动到别的地方。这样你可以发现更多的宝物箱。\r\n\r\n请注意在寻找宝物的游戏里不能使用技能。");
                cm.dispose();
            } else if (selection == 6) {
                cm.sendNext("#b[群羊牧场]#k游戏是分为羊阵营和狼阵营，在限定时间内看剩余人数谁多谁少的游戏。");
                cm.dispose();
            }
        } else if (status == 10) {
            if (selection < 0 || selection > quantities.length) {
                return;
            }
            var ite = 4031332 + selection;
            var quan = quantities[selection];
            var pri;
            switch(selection) {
                case 0:
                    pri = prize1;
                    break;
                case 1:
                    pri = prize2;
                    break;
                case 2:
                    pri = prize3;
                    break;
                case 3:
                    pri = prize4;
                    break;
                case 4:
                    pri = prize5;
                    break;
                case 5:
                    pri = prize6;
                    break;
                case 6:
                    pri = prize7;
                    break;
                case 7:
                    pri = prize8;
                    break;
                case 8:
                    pri = prize9;
                    break;
                case 9:
                    pri = prize10;
                    break;
                default:
                    cm.dispose();
                    return;
            }
            var rand = java.lang.Math.floor(java.lang.Math.random() * pri.length);
            if (!cm.haveItem(ite, quan)) {
                cm.sendOk("你需要#b" + quan + "#k个 #b#t" + ite + "##k 来兑换奖励");
            } else if (cm.getInventory(1).getNextFreeSlot() <= -1 || cm.getInventory(2).getNextFreeSlot() <= -1 || cm.getInventory(3).getNextFreeSlot() <= -1 || cm.getInventory(4).getNextFreeSlot() <= -1) {
                cm.sendOk("你的背包空间不足");
            } else {
                cm.gainItem(pri[rand], 1);
                cm.gainItem(ite, -quan);
                cm.gainMeso(100000 * selection); //temporary prize lolol
            }
            cm.dispose();
        }
    }
}
