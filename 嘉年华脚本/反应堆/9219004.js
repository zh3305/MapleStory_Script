function act() {
    var em = rm.getEventManager("Rex");
    var eim = rm.getEventInstance();
    if (em != null && eim != null) {
        rm.startMapEffect("你们解决得还挺快的嘛。我们快去封印莱格斯吧。", 5120035);
        rm.nextNodeAction(9300275, 0);
    }
}