var status = -1;

function start() {
    cm.sendYesNo("你们谁来打败我？或者你们是反黑魔法师联盟的人？不管你是谁…没有必要再谈下去,\r\n来吧!你们这些傻瓜!");
}

function action(mode, type, selection) {
    if (mode == 1 && cm.getMap().getAllMonstersThreadsafe().size() == 0) {
	cm.removeNpc(cm.getMapId(), 2161000);
	cm.spawnMob(8840010, 0, -181);
	if (!cm.getPlayer().isGM()) {
		cm.getMap().startSpeedRun();
	}
    }
    cm.dispose();
}