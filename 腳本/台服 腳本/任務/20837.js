/* Cygnus revamp
 Noblesse tutorial
 Kizan
 Made by Daenerys
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        qm.sendNext("現在試著實地使用技能攻擊怪物吧。將技能登錄到快捷欄的話，使用起來會更方便。將要使用的技能以滑鼠拖曳到快捷欄上就可以了。");
    } else if (status == 1) {
        qm.sendNextPrev("那麼就使用#r元素狂刃#打敗5隻#b#o9300731#吧。");
    } else if (status == 2) {
        qm.forceStartQuest();
        qm.spawnMonster(9300731, 5, -344, -6);
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
        qm.sendNext("使用元素狂刃擊敗怪物了嗎？不簡單啊。嗯，不錯。現在好像到了可以成為修練騎士的時候了？");
    } else if (status == 1) {
        qm.sendNextPrev("現在基礎訓練全部結束了。只要通過簡單的測驗，你就可以成為修練騎士了。我現在就送你去考場。那麼，好好考吧?沒考上的話可得進行再教育啊！");
    } else if (status == 2) {
        qm.forceCompleteQuest();
        qm.warp(130030106);
        qm.dispose();
    } else {
        qm.dispose();
    }
}