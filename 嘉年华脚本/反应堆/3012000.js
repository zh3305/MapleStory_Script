function act() {
    if (rm.isQuestActive(200124)) {
        if (rm.getEventCount("攀爬城墙") <= 0) {
            //rm.gainItem(4001126, 100);
            rm.gainItem(4001839, 500);
            rm.gainNX(2, 1500);
            rm.setEventCount("攀爬城墙");
            rm.forceCompleteQuest(200124);
        }
    }
}