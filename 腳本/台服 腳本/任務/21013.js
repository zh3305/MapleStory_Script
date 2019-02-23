var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        if (mode == 1) {
            qm.sendSimple("啊， 英雄…我好想你喔！  \r\n#b#L0#(害羞的樣子)#l");
        } else {
            qm.sendNext("對英雄很有幫助的禮物。請不要拒絕。");
            qm.dispose();
        }
    } else if (status == 1) {
        qm.sendYesNo("我從以前就決定遇見英雄要送您一個禮物…我知道您忙著回村莊，可是…可以收下我誠心的禮物嗎？");
    } else if (status == 2) {
        qm.forceStartQuest();
        qm.sendNextS("禮物的材料就放在這附近的箱子裡面。雖然有點麻煩，可是請您將箱子打破後，將裡面的材料 #b#t4032309##k和 #b#t4032310##k帶回來。我就會立刻幫您組裝。", 1);
    } else if (status == 3) {
        qm.summonMsg(18);
        qm.dispose();
    } else {
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        qm.sendNext("材料都帶回來了嗎？那麼請您等一下，只要這樣組裝一下…\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i3010062# #t3010062# 1個\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 95 exp");
    } else if (status == 1) {
        if (qm.getQuestStatus(21013) == 1) {
            if (!qm.haveItem(4032310) || !qm.haveItem(4032309)) {
                qm.dispose();
                return;
            }
            qm.gainItem(4032309, -1);
            qm.gainItem(4032310, -1);
            qm.gainItem(3010062, 1);
            qm.gainExp(95);
            qm.forceCompleteQuest();
        }
        qm.sendNextPrevS("好了，椅子做好了！嘿嘿！就算是英雄也有疲倦的時候，因此我從很早之前就想送英雄一把椅子當作禮物。", 1);
    } else if (status == 2) {
        qm.sendNextPrevS("算是英雄也不可能永遠都很強大。英雄應該也有疲倦吃力的時候，有時也會感到脆弱。可是能夠克服這些的人才配當英雄不是嗎？", 1);
    } else if (status == 3) {
        qm.summonMsg(19);
        qm.dispose();
    }
}