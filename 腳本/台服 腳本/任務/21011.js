var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        qm.sendNext("和 #p1201000#大人在一起的您，該不會…該不會…也是英雄吧？ #p1201000#大人！不要不耐煩的點頭，請確實的告訴我！這位正是英雄吧！");
    } else if (status == 1) {
        qm.sendNextPrev("   #i4001171#");
    } else if (status == 2) {
        qm.sendNextPrev("…很抱歉。我太感動了，不會再大喊大叫了。可是真的太感動了…啊啊，眼淚都快掉下來了… #p1201000#大人應該也很開心。");
    } else if (status == 3) {
        if (mode == 1) {
            qm.sendNextPrev("可是…英雄怎麼沒有帶武器呢。據我所知英雄有自己的武器…啊！應該是和黑魔法師決鬥時弄掉了。");
        } else {
            qm.sendNext("呃。看不上這把廉價的劍嗎？");
            qm.dispose();
        }
    } else if (status == 4) {
        qm.sendYesNo("湊合著用可能會太寒酸，不過 #b請你先收下這把劍吧#k！這是我送給英雄的禮物。英雄空著手總是有點奇怪…\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1302000# #t1302000# 1個 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 35 exp");
    } else if (status == 5) {
        if (qm.getQuestStatus(21011) == 1) {
            qm.gainItem(1302000, 1);
            qm.gainExp(35);
        }
        qm.forceCompleteQuest();
        qm.sendNextS("#b(連技能一點都不像英雄…連劍都好陌生。我之前真的有用過劍嗎？劍該怎麼配戴呢？)#k", 3);
    } else if (status == 6) {
        qm.summonMsg(16); // How to equip shiet
        qm.dispose();
    }
}