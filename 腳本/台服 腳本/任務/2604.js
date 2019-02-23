/* Cygnus revamp
 Dualblade tutorial
 Ryden
 Made by Daenerys
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        qm.sendNext("呵呵呵… 這次來了有趣的新生？西巴嫌你動作慢你連眼睛都不眨一下，不會心情不好嗎？實際上西巴只是想測試你。你有成為影武者的才華。");
    } else if (status == 1) {
        qm.sendNextPrev("除了影武者的才華之外，還有別的才華... 這樣不能只做平凡的修練！#b有特殊才能的人要給予特別任務#k！這是我們影武者的方式。");
    } else if (status == 2) {
        qm.sendNextPrev("I can't tell you what kind of mission it is. That's up to #bLady Syl#k, IF she agrees that you're worthy. If not, you'll train the same way as everyone else. So, try not to tick Lady Syl off.");
    } else if (status == 3) {
        qm.sendYesNo("When you accept, I'll send you to Lady Syl.");
    } else if (status == 4) {
        qm.warp(103050101);
        qm.removeNpc(103050910, 1057001);
        qm.forceStartQuest();
        qm.dispose();
    }
}
function end(mode, type, selection) {
    qm.dispose();
}