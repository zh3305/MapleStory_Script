function action(mode, type, selection) {

    var em = cm.getEventManager("Rex");
    var eim = cm.getEventInstance();
    if (em != null && eim != null) {
        if (cm.haveItem(2022698) || eim.getProperty("water").equals("1")) {
            cm.sendNext("你已经拥有一个万年冰河水.");
        } else {
            eim.setProperty("water", "1");
            cm.gainItem(2022698, 1);
        }
    }
    cm.dispose();
}
