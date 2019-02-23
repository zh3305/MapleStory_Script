function start() {
    var eim = ms.getEventInstance();
    if (eim != null) {
        eim.setProperty("total", "1");
        var total = 1;
        ms.showVisitoKillResult(total);
        ms.showVisitorResult(1);
        ms.getPlayer().updateOneInfo(17204, "stg", "3");
        ms.showEffect("Visitor/Stage3");
        ms.showEffect("Dojang/start");
    }
    ms.dispose();
}