/*
 Made by Pungin
 */

        var status = -1;

function action(mode, type, selection) {
    if (mode > 0) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        ms.getDirectionStatus(true);
        ms.EnableUI(1, 0);
        ms.DisableUI(true);
        ms.sendNextSNew("K 還沒嗎? 被其他人發現會很困擾的說…", 0x39, 1);
    } else if (status == 1) {
        ms.getDirectionStatus(true);
        ms.getDirectionInfo(1, 1000);
    } else if (status == 2) {
        ms.trembleEffect(0, 300);
        ms.getDirectionInfo(1, 1000);
        ms.spawnMonster(9460030, 0, 215);
    } else if (status == 3) {
        ms.getDirectionInfoNew(0, 1000, -84, 133);
    } else if (status == 4) {
        ms.getDirectionInfo(1, 2000);
    } else if (status == 5) {
        ms.getDirectionInfoNew(1, 1000);
    } else if (status == 5) {
        ms.sendNextSNew("那是什麼！？怎麼會有如此大的巨人…！！", 0x39, 1);
        ms.trembleEffect(0, 300);
    } else if (status == 6) {
        ms.getDirectionInfo(1, 1000);
    } else if (status == 7) {
        ms.sendNextSNew("阿阿！！", 0x39, 1);
    } else if (status == 8) {
        ms.killMob(9460030);
        ms.updateInfoQuest(58464, "end=1");
        ms.EnableUI(0);
        ms.DisableUI(false);
        ms.warp(814000000, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}