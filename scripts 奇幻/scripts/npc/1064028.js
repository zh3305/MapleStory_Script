function action(mode, type, selection) {
    if (cm.getPlayer().getMapId() == 105200000) {
        cm.warp(910000000);
        cm.dispose();
    }else{
	cm.warp(105200000);
    }
    cm.dispose();
}