function enter(pi) {
    if (pi.getPQLog("克雷塞尔") > 2) {
        pi.playerMessage(5, "你今天已经不能进入到里面去了。");
        return false;
    }
    var em = pi.getEventManager("BossKrexel");
    if (em == null) {
        pi.playerMessage(1, "配置文件不存在,请联系管理员。");
    } else {
        var prop = em.getProperty("state");
        if (prop == null || prop.equals("0")) {
            pi.playPortalSE();
            pi.setPQLog("克雷塞尔");
            em.startInstance(pi.getPlayer());
        } else if (prop.equals("1")) {
            var eim = pi.getEIMbyEvenName("BossKrexel");
            if (eim != null) {
                pi.setPQLog("克雷塞尔");
                eim.registerPlayer(pi.getPlayer());
            } else {
                pi.playerMessage(1, "执行错误,请联系管理员。");
            }
        } else {
            pi.playerMessage(5, "对抗克雷塞尔的挑战已经开始了，你不能进入到里面。");
            return false;
        }
    }
}
