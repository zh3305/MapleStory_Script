/*
 Author: Pungin
 */

function start() {
    if (!cm.isQuestActive(23201)) {
        cm.dispose();
        return;
    }
    cm.sendNextS("#b戴維安！ 你們到底在什麼地方… 如果還活著，就快點回答我！#k", 16);
    cm.forceCompleteQuest(23201);
    cm.forceStartQuest(23202);
    cm.dispose();
}