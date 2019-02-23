var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
    switch (status) {
        case 0:
            qm.sendNext("哈啊，太慢了、太慢了。 很抱歉，你似乎沒有才能，再這樣修練下去，不曉得能不能徹底學習影武者能力。");
            break;
        case 1:
            qm.sendNextPrev("…我都這樣說了，你怎麼還面無表情？ 你真的是有趣的傢伙！ 你看，鴻亞！ 你出來看！ 這個傢伙真有趣？");
            break;
        case 2:
            qm.forceCompleteQuest();
            qm.spawnNpcForPlayer(1057001, -900, 152);
            qm.dispose();
            break;
        default:
            qm.dispose();
            break;
    }
}