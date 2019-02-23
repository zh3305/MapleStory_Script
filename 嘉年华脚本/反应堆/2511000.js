function act() {
        rm.mapMessage(6, "箱子被打开了，怪物已被召唤！");
	rm.dropItems();
        rm.spawnMonster(9300117, 1);
}
