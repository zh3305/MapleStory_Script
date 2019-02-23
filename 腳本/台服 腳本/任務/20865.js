/* Cygnus revamp
 Noblesse tutorial
 The Path of a Thunder Breaker
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
            qm.sendNext("啊，不做嗎？啊…真可惜啊。");
            qm.safeDispose();
            return;
        }
        status--;
    } else {
        status++;
    }
    if (status == 0) {
        qm.sendYesNo("真的選好了嗎？難道不會後悔嗎？慎重地決定吧。真的決定踏上閃雷悍將這條路嗎？");
    } else if (status == 1) {
        qm.sendNext("現在開始你就是閃雷悍將了啊！好耶！雷電之騎士增加了一名新成員！對了，我稍微分一點能力給你吧。");
    } else if (status == 2) {
        if (qm.getJob() != 1500) {
            qm.gainItem(1482014, 1);//初級海盜指虎
            qm.gainItem(1142066, 1);//修煉騎士勳章
            qm.expandInventory(1, 4);
            qm.expandInventory(2, 4);
            qm.expandInventory(3, 4);
            qm.expandInventory(4, 4);
            qm.changeJob(1500);
            qm.forceCompleteQuest();
        }
        qm.sendNextPrev("現在你已經是閃雷悍將了呢。想要變強的話可於能力視窗(S鍵)中升級適當的能力。覺得很困難的話，透過#b自動配點#k的方式也可以的。☆");
    } else if (status == 3) {
        qm.sendNextPrev("還有！身為閃雷悍將必需的物品很多的，所以已經增加了你的裝備、其他道具的欄位個數！不錯吧？");
    } else if (status == 4) {
        qm.sendNextPrev("對了, 我又... 給了您一點的 #bSP#k, 請打開#bSkill 選單#k後學習技能. 現在雖然還不能學習很多技能, 可是很快就可以學習所有技能的. 喔對, 並不是一開始就可以學習全部的技能,也有一些是學習某技能前無法學習的技能.");
    } else if (status == 5) {
        qm.sendNextPrev("和身為貴族的時候不同了，成為閃雷悍將後死亡的話，有可能會扣除已累積的經驗值。不要因為覺得狩獵很有趣就不集中精神，知道嗎？");
    } else if (status == 6) {
        qm.sendNextPrev("那麼…做為皇家騎士團的騎士，ㄧ起盡情的冒險吧！");
        qm.safeDispose();
    }
}