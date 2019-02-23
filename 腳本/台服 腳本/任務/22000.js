var status = -1;

function start(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        if (status == 7) {
            qm.dispose();
            return;
        }
        status--;
    }

    if (status == 0)
        qm.sendNext("睡得好嗎，#h0#？");
    else if (status == 1)
        qm.sendNextPrevS("#b嗯…媽媽也睡得好嗎？", 2);
    else if (status == 2)
        qm.sendNextPrev("對了... 你昨天晚上似乎沒有睡得很好。是因為昨晚雷聲轟隆隆閃電交加的緣故。是這樣嗎？");
    else if (status == 3)
        qm.sendNextPrevS("#b不是！不是啦！我昨晚做了一個奇怪的夢。", 2);
    else if (status == 4)
        qm.sendNextPrev("奇怪的夢？你做了什麼夢？");
    else if (status == 5)
        qm.sendNextPrevS("#b就是啊…", 2);
    else if (status == 6)
        qm.sendNextPrevS("#b(說明了在霧中遇見龍的夢。)", 2);
    else if (status == 7)
        qm.sendYesNo("呵呵呵呵，龍嗎？真的好厲害。還好沒被抓去吃掉。 有趣的夢也可以和#p1013101#分享。應該會很棒。");
    else if (status == 8) {
        qm.forceStartQuest();
        qm.sendNext("#b#p1013101##k拿早餐去給獵犬吃，前往 #b#m100030102##k了。你從家裡往外走就能看到了。");
    } else if (status == 9) {
        qm.evanTutorial("UI/tutorial/evan/1/0", 1);
        qm.dispose();
    } else {
        qm.dispose();
    }
            
}

function end(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;

    if (status == 0)
        qm.sendNext("喔！你起床了？#h0#！眼睛怎麼有黑眼圈哪？你都沒睡嗎？什麼？你說你做了奇怪的夢？什麼夢呢？做了龍出現的夢嗎？" + status);
    else if (status == 1)
        qm.sendNextPrev("哇哈哈哈~ 龍嗎？那很厲害？龍夢耶！可是夢裡面沒有出現一隻狗嗎？ 哈哈哈哈~\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 20 exp");
    else if (status == 2) {
        qm.gainExp(20);
        qm.evanTutorial("UI/tutorial/evan/2/0", 1);
        qm.forceCompleteQuest();
        qm.dispose();
    } else {
        qm.dispose();
    }
}