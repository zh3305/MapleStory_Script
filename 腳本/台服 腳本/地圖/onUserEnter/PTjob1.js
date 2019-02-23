/* global ms */

var status = -1;

function action(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        if (ms.isQuestFinished(25000)) {
            ms.dispose();
            return;
        }
        ms.getDirectionStatus(true);
        ms.EnableUI(1);
        ms.DisableUI(true);
        ms.playMovie("phantom.avi");
        while (ms.getLevel() < 10) {
            ms.levelUp();
        }
        ms.forceCompleteQuest(25000);
        ms.teachSkill(20031211, -1, 0);
        ms.teachSkill(20031212, -1, 0);
    } else if (status === i++) {
        ms.EnableUI(0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}