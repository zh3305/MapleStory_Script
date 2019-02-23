/* Holy Stone
 Hidden Street: Holy Ground at the Snowfield (211040401)
 
 Made by TheGM
 */

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 2 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {//if no idk? // todo check if quest is started..
        cm.sendYesNo("#b(一個神秘的能量包圍着這塊石頭。老年人明確地告訴我去碰它…我真的應該碰這東西嗎？)#k");
    } else if (status == 1) {
        if (cm.isQuestActive(1431) || cm.isQuestActive(1432) || cm.isQuestActive(1433) || cm.isQuestActive(1435) || cm.isQuestActive(1436) || cm.isQuestActive(1437) || cm.isQuestActive(1439) || cm.isQuestActive(1440) || cm.isQuestActive(1442) || cm.isQuestActive(1443) || cm.isQuestActive(1445) || cm.isQuestActive(1446) || cm.isQuestActive(1447) || cm.isQuestActive(1448)) {
            cm.warp(910540000, 1);
            cm.dispose();
        } else {
            cm.sendOk("你想3轉的時候再來吧。");
            cm.dispose();
        }
    } else if (mode == 0) {
        cm.sendOk("準備好了再來吧。");
        cm.dispose();
    }

}