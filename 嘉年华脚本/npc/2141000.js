/*
 * Time Temple - Kirston
 * Twilight of the Gods
 */
function start() {
    cm.sendOk("如果我有善良之镜,我就能召唤黑魔法师!\r\n等等!好像哪里错了!为什么召唤不了黑魔法师?我感觉到跟黑魔法师完全不同的……啊啊啊!!!!!!!\r\n\r\n #b(请把奇拉的使命传递下去.)");
}

function action(mode, type, selection) {
    //if (mode == 1) {
		if (cm.getMapId() != 270051100 ){
			if (cm.getMonsterCount(cm.getMapId())==0){
		cm.removeNpc(cm.getMapId(), 2141000);
		cm.forceStartReactor(cm.getMapId(), 2709000);
			}
	} else {
		if (cm.getMonsterCount(cm.getMapId())==5){
			//cm.killAllMob();
    		cm.spawnMob(8820108, 1, 7,-42);
		}
		cm.removeNpc(cm.getMapId(), 2141000);
	}

    //}
    cm.dispose();

// If accepted, = summon PB + Kriston Disappear + 1 hour timer
// If deny = NoTHING HAPPEN
}
