var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == -1) {
        if (mode == 0) {
            qm.sendNext("哎呀啊！ 狂狼勇士拒絕了！");
        }
        qm.dispose();
    } else if (status == 0) {
        qm.sendYesNo("…差點被嚇死…快！快點帶我去找赫麗娜大人！");
    } else {
        if (qm.getQuestStatus(21001) == 0) {
            qm.gainItem(4001271, 1);
            qm.forceStartQuest();
        }
        qm.warp(914000300, 0);
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == -1) {
        if (mode == 0) {
            qm.sendNext("孩子呢？倘若您救了那些孩子，就快點讓他們上來吧！");
        }
        qm.dispose();
    } else if (status == 0) {
        qm.sendYesNo("啊啊，您平安無事歸來了！孩子呢？您把那些孩子帶回來了嗎？");
    } else if (status == 1) {
        if (qm.getQuestStatus(21001) != 2) {
            if (qm.haveItem(4001271)) {
                qm.gainItem(4001271, -1);
            }
            qm.forceCompleteQuest();
        }
        qm.sendNextS("真是太好了… 真是太好了……", 9);
    } else if (status == 2) {
        qm.sendNextPrevS("快點坐上飛行船吧！沒時間了。", 3);
    } else if (status == 3) {
        qm.sendNextPrevS("對，對了！現在不是談這些事情的時機。 黑魔法師的氣息已經慢慢的靠近了！好像已經察覺方舟的位置了！不趕快出發的話，就會被逮個正著。", 9);
    } else if (status == 4) {
        qm.sendNextPrevS("立刻出發！", 3);
    } else if (status == 5) {
        qm.sendNextPrevS("狂狼勇士！你也坐上方舟吧！我雖然了解您想火拼到最後一刻的心情…可是已經太遲了！打仗這個任務就交給您的同伴，跟我們一起前往維多利亞島吧！", 9);
    } else if (status == 6) {
        qm.sendNextPrevS("絕對不行！", 3);
    } else if (status == 7) {
        qm.sendNextPrevS("赫麗娜，您先去維多利亞島吧！我絕對不會死的，我們後會有期。我要和同伴們一起對付黑魔法師！", 3);
    } else {
        qm.warp(914090010, 0);
        qm.dispose();
    }
}