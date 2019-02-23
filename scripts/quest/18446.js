/* RED 1st impact
 The Explorer Book and A Maple Leaf
 Made by Daenerys
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 1) {
            qm.sendNextS("嗯?还没考虑好吗!", 4, 9900004);
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNextS("今天我是来送你签到礼物的,!", 4, 9900004);
    } else if (status == 1) {
        qm.sendYesNoS("怎么样呢?要收下吗?", 15, 1012100);
    }  else if (status == 2) {
        qm.sendNextS("那么,希望将来你每天都能够来我这签到哦,会有更多的礼物在等待你.", 4, 9900004);
    } else if (status == 3) {
        //qm.forceStartQuest();
		qm.dispose();
		qm.openNpc(9310058);
    }
}

