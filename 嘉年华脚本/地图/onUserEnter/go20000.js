/*
 Author: Pungin
 */
var status = -1;

function start() {
    ms.environmentChange("maplemap/enter/20000", 13);
    if (!ms.isQuestFinished(32200)) {
        ms.forceCompleteQuest(32200);
    }
    if (!ms.isQuestFinished(32201)) {
        ms.forceCompleteQuest(32201);
    }
    if (!ms.isQuestFinished(32202)) {
        ms.forceCompleteQuest(32202);
    }
    ms.dispose();
}
