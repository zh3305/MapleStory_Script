// EL Nath PQ

function enter(pi) {
    if (pi.haveMonster(9300093)) { // Tylus
        var pt = pi.getEventManager("ProtectTylus");
        if (pt == null) {
            pi.warp(211000001, 0);
        } else {
            if (pt.getInstance("ProtectTylus").getTimeLeft() < 180000) { // 小于3分钟
                pi.warpParty(921100301, 0);
            } else {
                pi.playerMessage("请保卫泰勒斯到3分钟时间!");
                return false;
            }
        }
    } else {
        pi.warp(211000001, 0);
        pi.playerMessage("哦 不! 保卫泰勒斯 失败了!");
    }
    return true;
}
