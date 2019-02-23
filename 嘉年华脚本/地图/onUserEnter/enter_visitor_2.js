function start() {
    var eim = ms.getEventInstance();
    if (eim != null) {
        eim.setProperty("total", "180");
        var total = 180;
        ms.showVisitoKillResult(total);
        ms.showVisitorResult(1);
        ms.getPlayer().updateOneInfo(17204, "stg", "2");
        ms.showEffect("Visitor/Stage2");
        ms.showEffect("Dojang/start");
    }
    ms.dispose();
}