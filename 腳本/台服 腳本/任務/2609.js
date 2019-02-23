/* 
 NPC Name: 		Lady syl
 Map(s): 		103050101
 Description: 		Quest - Becoming a Blade Specialist 2
 */
        var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0 && qm.getQuestStatus(2608) == 2) {
            qm.forceStartQuest();
            qm.useItem(2022963);
            qm.dispose();
        } else {
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    status++;
    if (status == 0) {
        qm.sendNextS("…#h0#？ 有什麼事嗎？ 臉色好難看… 什麼？ 鴻亞，毒藥…？ …這個傢伙，又開這麼奇怪的玩笑了… 我們影武者不可能讓同伴吃毒藥。這只是鴻亞的玩笑罷了，不要太在意，我們相信你。", 0);
    } else if (status == 1) {
        qm.sendNextPrevS("當然如果信賴換來的是背叛，那又另當別論了。如果不想讓影武者變成永遠的敵人，就不要想要背叛。", 0);
    } else if (status == 2) {
        qm.sendYesNo("現在能開這種玩笑，你的教育已經完成了。姿態、眼神… 已經做好了潛入當間諜的準備了。那麼要進行 #b轉職#k嗎？正式進入任務的準備階段。");
    } else if (status == 3) {
        if (mode == 1) {
            qm.sendNextS("這樣下去你就是盜賊。雖然還沒學習影武者的技術… 現在的你成為秘密花園的間諜就能接近達克魯了。", 1);
            qm.changeJob(400);
            qm.gainItem(1332063, 1);
            qm.forceCompleteQuest();
        } else {
            qm.sendNextS("你還需要心理準備嗎？真是個膽小鬼…", 0);
            qm.dispose();
        }
    } else if (status == 4) {
        qm.sendNextPrevS("雖然要成為影武者，然而和一般的盜賊的屬性沒兩樣。 盜賊 LUK是主屬性，DEX是副屬性。倘若不了解提升屬性的方法，就使用#b自動配點#k。", 1);
    } else if (status == 5) {
        qm.sendNextPrevS("啊，還有… 若想進行間諜活動，必需有許多必要物品。增加你的裝備、其他道具欄位的數量。 物品欄越大則活動越方便。", 1);
    } else if (status == 6) {
        qm.sendNextPrevS("嗯！ 我要告訴你的話僅止於此。從現在起由鴻亞再次告知你的任務。 那麼… 很期待吧！ ", 1);
        qm.dispose();
    }
}