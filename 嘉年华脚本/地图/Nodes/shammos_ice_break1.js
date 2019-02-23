function act(oid, time) {
    var em = nm.getEventManager("Rex");
    var eim = nm.getEventInstance();
    if (em != null && eim != null) {
        nm.startMapEffect("冰块挡住了路，你们快去把冰块破坏掉，开出一条路来！", 5120035);
        nm.getMap().getReactorByName("iceTrap").forceHitReactor(1);
    }
}
