/*
 * The return of the Hero
 * Rien Cold Forest 1
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        qm.sendNext("咦？這個島上的什麼人…？喔 ，您認識 #p1201000#嗎？ #p1201000#到這裡有什麼事…啊，這位是不是 #p1201000#大人認識的人呢？什麼？你說這位是英雄嗎？");
    } else if (status == 1) {
        qm.sendNextPrev("     #i4001170#");
    } else if (status == 2) {
        if (mode == 1) {
            qm.sendNextPrev("這位正是 #p1201000#家族數百年等待的英雄！喔喔！難怪看起來不是什麼平凡的人物…");
        } else {
            qm.sendNext("哎呀，不用客氣啦！送英雄一瓶藥水也不是什麼了不起的事。倘若您改變心意再告訴我吧 ！");
            qm.dispose();
        }
    } else if (status == 3) {
        qm.sendYesNo("但是，因為黑魔法師的詛咒而在巨冰裡沉睡著，所以，好像英雄的體力都消耗掉了的樣子。 #b我給你一個恢復體力用的藥水，趕緊喝喝看。#k.");
    } else if (status == 4) {
        qm.gainItem(2000022, 1);
        qm.forceStartQuest();
        qm.sendNext("您先大口喝下，我再繼續說下去~");
    } else if (status == 5) {
        qm.sendNextPrevS("#b(藥水該怎麼喝呢？…想不起來了…)#k", 3);
    } else if (status == 6) {
        qm.summonMsg(0xE);
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
        qm.sendNext("長久以來尋找英雄的痕跡，在冰雪中挖掘，果然真正的英雄出現了！預言果然是真的！ #p1201000#大人做了正確的選擇。英雄回來了，現在沒有必要再畏懼黑魔法師了！");
    } else if (status == 1) {
        qm.sendNextPrev("啊！真是的，我耽擱英雄太久了。先收拾起快樂的心情…其他企鵝應該也有同樣的想法。我知道您很忙，不過在前往村莊的路上 #b也請您和其他企鵝們談一談#k。可以和英雄談話，大家應該會很興奮！ \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i2000022# #t2000022# 5個 \r\n#i2000023# #t2000023# 5個 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 16 exp");
    } else if (status == 2) {
        if (qm.getQuestStatus(21010) == 1) {
            qm.gainExp(16);
            qm.gainItem(2000022, 5);
            qm.gainItem(2000023, 5);
            qm.forceCompleteQuest();
        }
        qm.sendNextPrev("想要升級嗎？不曉得您有沒有獲得技能點數。在楓之谷內透過轉職之後每上升1級就會獲得3點的技能點數。按下 #bK鍵#k開啟技能欄位就能確認。");
    } else if (status == 3) {
        qm.sendNextPrevS("#b(這麼親切的說明，可是我什麼都想不起來。我真的是英雄嗎？那麼先確認技能看看…可是該怎麼確認呢？)#k");
    } else if (status == 4) {
        qm.summonMsg(0xF);
        qm.dispose();
    }
}