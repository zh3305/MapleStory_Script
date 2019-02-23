function act(oid, time) {
    var em = nm.getEventManager("Rex");
    var eim = nm.getEventInstance();
    if (em != null && eim != null) {
        nm.startMapEffect("寒冰的碎片掉了下来！快躲开！", 5120035);
        nm.nextNodeAction(9300275, time);
    }
}
