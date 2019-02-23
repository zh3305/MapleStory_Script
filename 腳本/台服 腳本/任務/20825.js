/* Cygnus revamp
 Noblesse tutorial
 Kinu
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
        qm.sendYesNo("我遲到了吧？你好。我是教導關於耶雷弗歷史的奇努。怎麼傻傻站在這呢？這裡有椅子，快坐吧。");
    } else if (status == 1) {
        qm.sendNext("走到椅子前，按壓快捷鍵X，便可以坐下。");
    } else if (status == 2) {
        qm.environmentChange("Aran/balloon", 5);
        qm.forceStartQuest();
        qm.showWZEffectNew("UI/tutorial.img/10");
        qm.dispose();
    } else if (status == 3) {
        qm.dispose();
    }
}
function end(mode, type, selection) {
    qm.dispose();
}