function start() {
    switch (im.getMapId()) {
        case 814000300:
        case 814000400:
        case 814000500:
            im.playerMessage("移動到時空的隙縫。");
            im.topMsg("移動到時空的隙縫。");
            im.warp(814000000);
            im.dispose();
            break;
        default:
            im.playerMessage("在這裡無法使用。");
            im.topMsg("在這裡無法使用。");
            im.dispose();
    }
}