/*
 Author: Pungin
 */

function start() {
    if (!cm.isQuestFinished(23200)) {
        cm.playerMessage(5, "距離實在太遠了。 再靠近一點吧。");
        cm.dispose();
        return;
    }
    if (!cm.isQuestActive(23201) && !cm.isQuestFinished(23201)) {
        cm.sendNextS("#b媽媽！ 你們在哪裡？#k", 16);
    } else {
        cm.dispose();
    }
}

function action(mode, type, selection) {
    cm.forceStartQuest(23201);
    cm.dispose();
}