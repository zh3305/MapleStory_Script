function enter(pi) {
    var eim = pi.getEventInstance();
    if (eim.getProperty("stage4").equals("4")) {
        pi.warpParty(925100500);
    } else {
        pi.playerMessage(5, "请关闭所有入口,否则无法通过!");
    }
}
