var status = -1;

function action(mode, type, selection) {
    if (ms.getJob() == 4100) {
        if (!ms.isQuestFinished(28862)) {
            while (ms.getLevel() < 10) {
                ms.levelUp();
            }
            ms.unequipEverything();
            ms.gainItem(1003567, -1);
            ms.gainItem(1052473, -1);
            ms.gainItem(1072678, -1);
            ms.gainItem(1082442, -1);
            ms.gainItem(1542044, -1);
            ms.forceCompleteQuest(28862);
        }
        ms.dispose();
    } else {
        while (ms.getLevel() < 10) {
            ms.levelUp();
        }
        ms.dispose();
    }
}
