var status = -1;

function action(mode, type, selection) {
    if (ms.getJob() == 4001 || ms.getJob() / 100 == 41) {
        if (!ms.isQuestFinished(28862)) {
            while (ms.getLevel() < 10) {
                ms.levelUp();
            }
            ms.unequip(1003567, true);
            ms.unequip(1052473, true);
            ms.unequip(1072678, true);
            ms.unequip(1082442, true);
            ms.unequip(1542044, true);
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