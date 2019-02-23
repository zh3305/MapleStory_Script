var status = -1;

function start() {
    cm.askAcceptDecline("被黑魔法师黑化的我，你想看清楚真相吗\r\n来吧!打败这可恶的虚幻吧");
}

function action(mode, type, selection) {
    if (mode == 1 && cm.getMap().getAllMonstersThreadsafe().size() == 0) {
	cm.removeNpc(cm.getMapId(), 1104201);
	cm.spawnMob(8850005, 0, -181);
	cm.spawnMob(8850006, 0, -181);
	cm.spawnMob(8850007, 0, -181);
	cm.spawnMob(8850008, 0, -181);
	cm.spawnMob(8850009, 0, -181);
	cm.spawnMob(8850011, 0, -181);

	if (!cm.getPlayer().isGM()) {
		cm.getMap().startSpeedRun();
	}
    }
    cm.dispose();
}