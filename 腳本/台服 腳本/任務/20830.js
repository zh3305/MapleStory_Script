/* Cygnus revamp
 Noblesse tutorial
 Kimu
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
        qm.sendYesNo("看你在努力訓練的樣子,真令人開心. 因該很快修練為騎士吧. 不停訓練因該很累吧? 這裡喝點冰涼的飲料,休息一下吧. 來, 拿去吧.");
    } else if (status == 1) {
        qm.gainItem(2001555, 1);
        qm.forceStartQuest();
        qm.sendNext("冰涼的飲料，按壓快捷鍵打開道具欄後，以滑鼠雙擊就可以喝了。");
        qm.environmentChange("Aran/balloon", 5);
        qm.showWZEffectNew("UI/tutorial.img/3");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}