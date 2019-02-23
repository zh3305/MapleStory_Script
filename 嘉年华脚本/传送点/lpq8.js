function enter(pi) {
    var eim = pi.getPlayer().getEventInstance();

    // only let people through if the eim is ready
    if (eim.getProperty("8stageclear") == null) { // do nothing; send message to player
        pi.playerMessage(5, "请完成数字组合任务.");
    } else {
        pi.warpParty(922010900, 0);
    }
}
