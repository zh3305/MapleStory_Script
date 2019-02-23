var status = -1;

function start(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        status--;
    }

    if (status == 0)
        qm.sendYesNo("去農場工作的 #b爸爸#k忘了帶便當出門。你幫待在 #b#m100030300##k的爸爸 #b送便當#k。好乖啊！");
    else if (status == 1) {
        qm.forceStartQuest();
        qm.sendNext("呼呼，#h0#果然是個乖孩子~ 那麼立刻從#b家往外走一直向左邊#k走。爸爸肚子應該很餓了，你的動作要快。");
        if (!qm.haveItem(4032448))
            qm.gainItem(4032448, 1);
    } else if (status == 3)
        qm.sendNextPrev("如果不小心把便當弄掉了，要立刻回家。我會再幫你包一個。");
    else if (status == 4) {
        qm.evanTutorial("UI/tutorial/evan/5/0", 1);
        qm.dispose();
    } else
        qm.dispose();
}