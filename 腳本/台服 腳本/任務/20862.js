/* Cygnus revamp
 Noblesse tutorial
 The Path of a Blaze Wizard
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
            qm.sendNext("要再想想看嗎…");
            qm.safeDispose();
            return;
        }
        status--;
    } else {
        status++;
    }
    if (status == 0) {
        qm.sendYesNo("決定好了嗎？真的嗎？選了可是不能反悔的啊。慎重地想清楚啊…真的決定要選擇烈焰巫師這條路嗎？");
    } else if (status == 1) {
        qm.sendNext("現在開始你就是烈焰巫師了。啊，真是開心啊！我有夥伴了呢…對了，我分ㄧ些能力給你吧。");
    } else if (status == 2) {
        if (qm.getJob() != 1200) {
            qm.gainItem(1372043, 1);//新手法師之杖
            qm.gainItem(1142066, 1);//修煉騎士勳章
            qm.expandInventory(1, 4);
            qm.expandInventory(2, 4);
            qm.expandInventory(3, 4);
            qm.expandInventory(4, 4);
            qm.changeJob(1200);
            qm.forceCompleteQuest();
        }
        qm.sendNextPrev("現在你已經是烈焰巫師了。想變得更強的話可於能力視窗(S鍵)中升級適合的能力。覺得很難的話，也可以選擇#b自動配點#k的方式。對於不熟悉魔法師的人而言是很有用的。");
    } else if (status == 3) {
        qm.sendNextPrev("增加了您裝備、其他道具置物櫃的個數！請善加利用吧。");
    } else if (status == 4) {
        qm.sendNextPrev("啊對了, 我又... 給了您一點的 #bSP#k, 請打開#bSkill 選單#k後學習技能. 若熱心的努力修煉的話,很快就可以學習所有技能的. 啊, 並不是一開始就可以學習全部技能,也有一些是學習某技能前無法學習的技能.");
    } else if (status == 5) {
        qm.sendNextPrev("與貴族的時候不一樣對了，成為烈焰巫師死掉的話，會扣除部分累積的經驗值。ㄧ定要保重身體啊…");
    } else if (status == 6) {
        qm.sendNextPrev("那麼…身為西格諾斯騎士團，就一起努力吧！");
        qm.safeDispose();
    }
}