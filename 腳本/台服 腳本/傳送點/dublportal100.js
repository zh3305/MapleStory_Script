function enter(pi) {
    if (pi.isQuestFinished(2609)) {
        pi.warp(103050200, 4);
    } else {
        pi.showQuestMsg("先跟雪姬談話, 然後再開始你的旅程吧.");
    }
}