/* Cygnus revamp
 Noblesse tutorial
 The Path of a Wind Archer
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
            qm.sendNext("仔細想清楚吧。");
            qm.safeDispose();
            return;
        }
        status--;
    } else {
        status++;
    }
    if (status == 0) {
        qm.sendYesNo("選好了嗎…？選好了可是不能反悔的。慎重地決定才是明智之舉啊。");
    } else if (status == 1) {
        qm.sendNext("現在開始你就是破風使者了。我來分一點能力給你吧…");
    } else if (status == 2) {
        if (qm.getJob() != 1300) {
            qm.gainItem(1452051, 1);//初級弓箭手之弓
            qm.gainItem(2060000, 9999);//箭矢
            qm.gainItem(2060000, 9999);//箭矢
            qm.gainItem(2060000, 9999);//箭矢
            qm.gainItem(1142066, 1);//修煉騎士勳章
            qm.expandInventory(1, 4);
            qm.expandInventory(2, 4);
            qm.expandInventory(3, 4);
            qm.expandInventory(4, 4);
            qm.changeJob(1300);
            qm.forceCompleteQuest();
        }
        qm.sendNextPrev("現在你已經是破風使者了。想要變強的話可於能力視窗(S鍵)中升級適當的能力。透過#b自動配點#k的話應該能夠更簡單地完成升級。");
    } else if (status == 3) {
        qm.sendNextPrev("由於身為破風使者所必須的物品很多，所以已經增加了你的裝備、其他道具欄之欄位格數。");
    } else if (status == 4) {
        qm.sendNextPrev("由於會提供你少許的#bSP#k。開啟#bSkill選單#學習技能吧。也會有不熟悉其他技能而無法學習的技能，好好想想看再升級技能吧。");
    } else if (status == 5) {
        qm.sendNextPrev("與身為貴族的時候不一樣了，成為破風使者後死掉的話，會扣除部分累積的經驗值。");
    } else if (status == 6) {
        qm.sendNextPrev("那麼… 身為皇家騎士團的騎士，要比誰都過得充實才行啊…");
        qm.safeDispose();
    }
}