/* Cygnus revamp
 Noblesse tutorial
 The Path of a Night Walker
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
            qm.sendNext("再想想看吧。真的就這麼走上這條路也沒有關係嗎？");
            qm.safeDispose();
            return;
        }
        status--;
    } else {
        status++;
    }
    if (status == 0) {
        qm.sendYesNo("真的選好了嗎？就算後悔也無法回頭了。慎重地決定吧。真的要走上暗夜行者這條路嗎？");
    } else if (status == 1) {
        qm.sendNext("從現在起你就是暗夜行者了。為了慶祝你成為夥伴，我分ㄧ些能力給你吧。");
    } else if (status == 2) {
        if (qm.getJob() != 1400) {
            qm.gainItem(1472061, 1);//新手盜賊的護腕
            qm.gainItem(2070015, 1000);//新手盜賊的飛鏢
            qm.gainItem(2070015, 1000);//新手盜賊的飛鏢
            qm.gainItem(2070015, 1000);//新手盜賊的飛鏢
            qm.gainItem(1142066, 1);//修煉騎士勳章
            qm.expandInventory(1, 4);
            qm.expandInventory(2, 4);
            qm.expandInventory(3, 4);
            qm.expandInventory(4, 4);
            qm.changeJob(1400);
            qm.forceCompleteQuest();
        }
        qm.sendNextPrev("現在你已經是暗夜行者了。想變強的話可於能力視窗(S鍵)中升級適合的能力。如果覺得很困難的話，也可以使用#b自動配點#k進行升級…但如果不相信自動配點的話也可以手動升級。");
    } else if (status == 3) {
        qm.sendNextPrev("連同必需品一起，已經幫你增加了裝備、其他道具的欄位個數。請善加利用吧。");
    } else if (status == 4) {
        qm.sendNextPrev("還有我給你了一點的給了您一點的 #bSP#k, 請打開#bSkill 選單#k後學習技能. 那樣狩獵才會比較輕鬆. 啊, 先別管要學習某技能才能學習的技能.");
    } else if (status == 5) {
        qm.sendNextPrev("與貴族的時候不一樣了，成為暗夜行者後死掉的話，會扣除部分累積的經驗值。自己的身體要多多注意啊。");
    } else if (status == 6) {
        qm.sendNextPrev("那麼… 身為皇家騎士團的騎士，要比誰都更深入險境地確認才行。");
        qm.safeDispose();
    }
}