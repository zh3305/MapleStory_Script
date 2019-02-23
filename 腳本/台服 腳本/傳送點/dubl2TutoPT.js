function enter(pi) {
    if (pi.isQuestActive(2600)) {
        pi.warp(103050910, 0);
    } else {
        pi.showQuestMsg("先跟鴻亞談話, 然後再開始你的旅程吧.");
    }
}