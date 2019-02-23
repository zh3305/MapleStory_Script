
function act() {
    rm.killAllMob();
    rm.spawnMonster(8820108);
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
	}
}