function enter(pi) {
    if (pi.haveItem(4031870) && pi.getPlayer().getSkillLevel(5121010) <= 0) {
        pi.warp(922020300, 0);
        return true;
    }
    /*    if (!pi.haveItem(4031172)) {
     return false;
     }*/
    if (pi.getPQLog("帕普拉图斯") > 2) {
        pi.playerMessage(5, "时塔的本源一天只能进入三次。");
        return false;
    }

    var em = pi.getEventManager("Populatus");
    if (em == null) {
        pi.playerMessage(1, "配置文件不存在,请联系管理员。");
    } else {
        var prop = em.getProperty("state");
        if (prop == null || prop.equals("0")) {
            pi.playPortalSE();
            pi.setPQLog("帕普拉图斯");
            em.startInstance(pi.getPlayer());
        } else if (prop.equals("1")) {
            var eim = pi.getEIMbyEvenName("Populatus");
            if (eim != null) {
                pi.setPQLog("帕普拉图斯");
                eim.registerPlayer(pi.getPlayer());
            } else {
                pi.playerMessage(1, "执行错误,请联系管理员。");
            }
        } else {
            pi.playerMessage(5, "对抗帕普拉图斯的挑战已经开始了，你不能进入到里面。");
            return false;
        }
    }
}
