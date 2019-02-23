function enter(pi) {
    if (pi.haveItem(4001120,20) && pi.haveItem(4001121,20) && pi.haveItem(4001122,20) && pi.isLeader()) {
        pi.warpParty(925100400, 0);
    } else {
        pi.playerMessage(5, "请收集初级、中级、高级、海盗身份各20个,否则无法通过!");
    }
}