/*
	自动完成
*/

function start(mode, type, selection) {
    qm.dispose();
}

function end(mode, type, selection) {
    if (qm.getQuestStatus(10732) == 0) {
        qm.forceStartQuest();
    } else {
        qm.forceCompleteQuest(10732);
        qm.forceCompleteQuest();
    }
    qm.dispose();
}