function start() {
    if (ms.getQuestStatus(21101) == 2 && ms.getInfoQuest(21019).equals("miss=o;arr=o;helper=clear")) {
        ms.updateInfoQuest(21019, "miss=o;arr=o;ck=1;helper=clear");
    }
    ms.dispose();
}
