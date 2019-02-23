function enter(pi) {

    if (pi.haveItem(4032922)) {
        pi.warp(271030100, 0);
    } else {
        pi.playerMessage("你没有 冒险骑士团微章 不能进入要塞  请获得后在进入.");
        pi.openNpc(9010000, 100);

      }
}