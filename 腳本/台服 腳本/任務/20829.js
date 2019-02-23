/* Cygnus revamp
 Noblesse tutorial
 Kizan
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
        qm.sendYesNo("我是要教你戰鬥的奇加。你說你叫做#h0#對吧？\r\n之後好好加油吧。要現在就開始嗎？");
    } else if (status == 1) {
        qm.sendNext("我會從最基本的攻擊方式開始教你的。基本中的基本攻擊方式，可以說是使用#rCtrl鍵的一般攻擊。走到怪物的附近，按壓Ctrl鍵，便可以進行攻擊。並不會消耗HP和MP。試試看吧。試著打敗練武場裡的3隻#b#o9300730#吧。");
    } else if (status == 2) {
        qm.forceStartQuest();
        qm.spawnMonster(9300730, 3, -344, -6);
        qm.environmentChange("Aran/balloon", 5);
        qm.showWZEffectNew("UI/tutorial.img/4");
        qm.spawnNpcForPlayer(1102101, 90, 88);
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}