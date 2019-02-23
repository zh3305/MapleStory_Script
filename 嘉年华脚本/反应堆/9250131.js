function act() {
    rm.mapMessage(6, "空气中响起了音乐.");
    var eim = rm.getEventInstance();
    if (eim != null) {
        eim.setProperty("stage", "1");
    }
}
