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
        qm.sendYesNo("飲料的口味還可以嗎？不知道合不合你的胃口。是我們貴族非常喜歡的果汁呢。..那麼要再開始訓練了嗎？這次是複習！剛才學過的東西應該沒有忘記吧？打敗3隻..#o9300730#並蒐集3個#t4000489#。");
    } else if (status == 1) {
        qm.sendNext("一般攻擊！按壓Ctrl鍵攻擊怪物。嗯？你問我要怎麼撿羽毛？哎呀，我沒有告訴你嗎？抱歉，按壓Z鍵就可以撿拾道具了。");
    } else if (status == 2) {
        qm.forceStartQuest();
        qm.environmentChange("Aran/balloon", 5);
        qm.showWZEffectNew("UI/tutorial.img/5");
        qm.spawnMonster(9300730, 3, -344, -6);
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}