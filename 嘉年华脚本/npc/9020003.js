var status = 0;
var minLevel = 50; // GMS = 50 
var maxLevel = 250; // GMS = 200? recommended 50 - 69
var minPlayers = 1; // GMS = 3
var maxPlayers = 6; // GMS = 4 || but 6 makes it better :p
var open = true; //open or not
var PQLog = '陷入危险的坎特';
var maxenter = 10;
var sel = -1;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (status >= 1 && mode == 0) {
        cm.sendOk("让你的朋友加入你的队伍. 你也可以使用组队搜索功能来搜索队伍."); // gms has spelling mistakes.. 
        cm.dispose();
        return;
    }
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (cm.getPlayer().getMapId() != 910002000 && cm.getPlayer().getMapId() != 923040000) { // not in pq lobby
            cm.sendSimple("你真的想离开这里么?#b\r\n#L0#是的! 让我离开这里.#l");
        } else if (cm.getPlayer().getMapId() == 923040000 || cm.getPlayer().getMapId() == 910002000) {
            cm.sendSimple("#e<组队任务：陷入危险的坎特>#n\r\n\r\n不好了！！坎特好像陷入危险了。他说要亲自去调查海洋生物的异常行动，可是出去后就没回来，肯定是出事了。我得把坎特找回来。请你帮帮忙！ \r\n\r\n#b#L0#我去找坎特。#l\r\n#L1#我想要#t1022175#。#k\r\n#b#L2#请详细地说说是怎么回事吧。#l\r\n#L3#我想知道今天的剩余挑战次数。#l");
        } else {
            cm.dispose();
        }
    } else if (status == 1) {
        if (cm.getPlayer().getMapId() != 910002000 && cm.getPlayer().getMapId() != 923040000 && selection == 0) {
            cm.warp(923040000, 0);
            cm.dispose();
        } else if (selection == 0) {
            if (cm.getPlayer().getMapId() == 910002000) {
                cm.saveLocation("MULUNG_TC");
                cm.warp(923040000, 0);
                cm.dispose();
            } else if (cm.getParty() == null) { // No Party
                cm.sendOk("你没有创建组队,无法入场。");
                cm.dispose();
            } else if (!cm.isLeader()) { // Not Party Leader
                cm.sendOk("请你们团队的队长和我对话。");
                cm.dispose();
            } else if (!cm.isAllPartyMembersAllowedLevel(minLevel, maxLevel)) {
                cm.sendOk("在你或者队员中存在" + minLevel + "级以下，" + maxLevel + "级以上的角色。请注意等级限制。");
                cm.dispose();
            } else if (!cm.isAllPartyMembersAllowedPQ(PQLog, maxenter)) {
                cm.sendOk("你的队员#r#e \"" + cm.getNotAllowedPQMemberName(PQLog, maxenter) + "\" #k#n次数已经达到上限了。");
                cm.dispose();
            } else if (!cm.allMembersHere()) {
                cm.sendOk("你的组队部分成员不在当前地图,请召集他们过来后在尝试。");
                cm.dispose();
            } else {
                // Check if all party members are over lvl 50
                var inMap = 0;
                var em = cm.getEventManager("Kenta");
                if (em == null || open == false) {
                    cm.sendSimple("This PQ is not currently available.");
                    cm.dispose();
                } else {
                    var prop = em.getProperty("state");
                    if (prop == null || prop.equals("0")) {
                        cm.gainMembersPQ(PQLog, 1);
                        em.startInstance(cm.getParty(), cm.getMap(), 170);
                    } else {
                        cm.sendSimple("已经有队伍在进行了,请换其他频道尝试。");
                    }
                    cm.removeAll(4001453);
                    cm.dispose();
                }
            }
        } else if (selection == 1) {
            sel = selection;
            cm.sendNext("看样子你对#i1022175:# #t1022175#挺感兴趣……#t1022175#是坎特为那些协助自己进行海洋生物调查的人准备的谢礼。如果你搜集来研究所需的#b10个#t4001535##k，我就给你。你找到坎特后，和他一起消灭皮亚奴斯，就可以获得#t4001535#。搜集100个比较吃力的话，用#b5个#t4001535##k也可以交换到宠物装备卷轴，请你去帮助坎特吧。");
        } else if (selection == 2) {
            sel = selection;
            cm.sendNext("坎特觉得光用冒险家他们搜集到的样本进行研究还不够，说要直接去对海洋生物的异常行为进行调查，之后去了危海。他出去之后就一直没有联系，也没有回来。一定是出了什么事。");
        } else if (selection == 3) {
            var pqtry = maxenter - cm.getPQLog(PQLog);
            cm.sendOk("今天剩余挑战次数是" + pqtry + "次.");
            cm.dispose();
        }
    } else if (status == 2) {
        if (sel == 1) {
            cm.sendNext("现在不是进行那种研究的时候。坎特一直没有联系，一定是遇到了什么危险！请你找到他，帮帮他！");
        } else if (sel == 2) {
            cm.sendNext("请你去找到坎特！一定要小心。那里很危险。我能拜托你几件事吗？\r\n\r\n1. 在去寻找坎特的路上如果遇到了危险的海洋生物，请你把它们消灭掉。\r\n2. 坎特出去很久了，准备的氧气可能不够。请你帮他搜集一些空气玲。\r\n3. 发现坎特之后，请你保护他，不要让凶暴的海洋生物伤害他。\r\n4. 坎特如果想继续进行调查，请你帮助他完成调查，安全地回到这里。");
        }
        cm.dispose();
    } else if (mode == 0) {
        cm.dispose();
    }
}
