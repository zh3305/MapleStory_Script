/* Cygnus revamp
 Noblesse tutorial
 Kiku
 Made by Daenerys
 */
var status = -1;

function start(mode, type, selection) {
    if (mode != 1) {
        qm.dispose();
        return;
    }
    status++;
    if (status == 0) {
        qm.sendYesNo("正如你所知道的，我們皇家騎士團是掌管楓之谷的西格諾斯女皇為了對抗黑魔法師所組成的。忠誠於女皇，為了阻止將甦醒的黑魔法師而培植力量。\r\n什麼嘛，看起來是得好好經過一番修練啊…別擔心。我們這些教官會使你成為有用的騎士的。\r\n\r\n準備好了嗎？");
    } else if (status == 1) {
        qm.sendNext("奇慕負責騎士團裡必需的各種教育。再去找奇慕看看吧。\r\n啊，另外，記得按壓#e#b快捷鍵Q#k#n的話，就可以透過#e#r任務資料視窗#k#n再次確認任務內容。不懂的地方一定要確認，才不會產生問題。");
    } else if (status == 2) {
        qm.environmentChange("Aran/balloon", 5);
        qm.forceStartQuest();
        qm.showWZEffectNew("UI/tutorial.img/2");
        qm.dispose();
    }
}
function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendNext("和奇酷打過招呼了嗎？為了使你成為了不起的騎士，我們這些教官#h0#會盡力幫助你的。");
        } else if (status == 1) {
            qm.sendNextPrev("歡迎會現在也進入尾聲了，我們先走一步，開始進行修練吧。你有覺悟了嗎？");
        } else if (status == 2) {
            qm.forceCompleteQuest();
            qm.warp(130030101, 0);
            qm.dispose();
        }
    }
}