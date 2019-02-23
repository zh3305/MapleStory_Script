function start() {
    var eim = ms.getEventInstance();
    if (eim != null) {
        //var total = parseInt(eim.getProperty("total"));
        //ms.showVisitoKillResult(total);
        eim.setProperty("stage", "done");
        ms.showVisitorResult(2);
    }
    ms.dispose();
}