/* Cygnus revamp
 Noblesse tutorial
 The Path of a Dawn Warrior
 Made by Daenerys
 */

var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode == 0) {
        if (status == 0) {
            qm.sendNext("慎重地選擇吧。");
            qm.safeDispose();
            return;
        }
        status--;
    } else {
        status++;
    }
    if (status == 0) {
        qm.sendYesNo("選好了嗎？因為無法反悔所以慎重地決定吧。真的要選擇成為聖魂劍士的這條路嗎？");
    } else if (status == 1) {
        if (qm.getJob() != 1100) {
            qm.gainItem(1302077, 1);//新手劍士之劍
            qm.gainItem(1142066, 1);//修煉騎士勳章
            qm.expandInventory(1, 4);
            qm.expandInventory(2, 4);
            qm.expandInventory(3, 4);
            qm.expandInventory(4, 4);
            qm.changeJob(1100);
            qm.forceCompleteQuest();
        }
        qm.sendNext("使你的身體與聖魂劍士彼此適合。之後若想變得更強，便在數值視窗(S鍵)中提升適當的數值。覺得很難的話，也可以使用#b自動配點#k。");
    } else if (status == 2) {
        qm.sendNextPrev("你的裝備與其他道具的置物櫃數量已經增加。請裝滿身為騎士所需要的各種物品吧。");
    } else if (status == 3) {
        qm.sendNextPrev("因為會提供你少許的#bSP#k，打開#bSkill清單#k學習技能吧。當然，ㄧ開始不是所有的都可以進行升級。也會有不熟悉其他技能就無法學習的技能。");
    } else if (status == 4) {
        qm.sendNextPrev("要特別記住的是，與貴族的時候不一樣了，成為聖魂劍士後死掉的話，會扣除部分累積的經驗值。");
    } else if (status == 5) {
        qm.sendNextPrev("那麼… 身為皇家騎士團的騎士別看起來要有自信點。");
        qm.safeDispose();
    }
}