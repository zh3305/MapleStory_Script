function enter(pi) {
    if (!pi.haveItem(4032246)) {
        pi.playerMessage(5, "你没有梦幻主题公园魂魄。");
    } else if (pi.getPQLog(4032246) >= 3) {
        pi.playerMessage(5, "梦幻主题公园一天只能进去3次");
    } else {
        //pi.openNpc(9270047);
        var em = pi.getEventManager("ScarTarBattle");
        if (em == null) {
            pi.playerMessage(1, "配置文件不存在,请联系管理员。");
        } else {
            var prop = em.getProperty("state");
            if (prop == null || prop.equals("0")) {
                var FantMap = pi.getMap(551030200);
                FantMap.resetReactors();
                FantMap.killAllMonsters(false);
                pi.playPortalSE();
                em.startInstance(pi.getPlayer());
                pi.setPQLog(4032246);
            } else if (prop.equals("1")) {
                var eim = pi.getEIMbyEvenName("ScarTarBattle");
                if (eim != null) {
                    pi.setPQLog(4032246);
                    eim.registerPlayer(pi.getPlayer());
                } else {
                    pi.playerMessage(1, "执行错误,请联系管理员。");
                }
            } else {
                pi.playerMessage(5, "对抗怪物的挑战已经开始了，你不能进去。");
            }
        }
    }
}
