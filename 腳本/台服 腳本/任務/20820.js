/* Cygnus revamp
 Noblesse tutorial
 Kimu
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
        qm.sendNext("歡迎來到耶雷弗！這裡是楓之谷最和平又安全的地方，是西格諾斯女皇掌管的國度！..你的名字是…啊，是#b#h0##k嗎？很高興見到你！早就在等著你了。#p1101000#你是為了想成為騎士團才來的，對吧？我叫做#p1102004#。受西格諾斯女皇之命，由我為您介紹貴族。");
    } else if (status == 1) {
        qm.sendNextPrev("詳談過後，是否要先去新進騎士團歡迎會呢？去到那?，先和其他修練教官們打聲招呼。那麼，請跟著我來吧。");
    } else if (status == 2) {
        qm.forceStartQuest();
        qm.forceCompleteQuest();
        qm.warp(130030100);
        qm.dispose();
    }
}
function end(mode, type, selection) {
    qm.dispose();
}