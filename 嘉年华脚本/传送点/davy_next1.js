function enter(pi) {
    var eim = pi.getEventInstance();
    if (eim != null) {
        if (eim.getProperty("stage2").equals("3")) {
            pi.warpParty(925100400, 0);
        } else {
            pi.playerMessage(5, "请收集初级、中级、高级、海盗身份各20个,否则无法通过!");
        }
    } else {
        pi.playerMessage(5, "未执行任务或发生错误!!");
    }
}
