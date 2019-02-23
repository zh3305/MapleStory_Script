/*
 * Time Temple - Kirston
 * Twilight of the Gods
 */
function start() {
    //cm.askAcceptDecline("如果我有善良之镜,我就能召唤黑魔法师!\r\n等等!好像哪里错了!为什么召唤不了黑魔法师?我感觉到跟黑魔法师完全不同的……啊啊啊!!!!!!!\r\n\r\n #b(请把奇拉的使命传递下去.)");
    cm.sendYesNo("如果我有善良之镜,我就能召唤黑魔法师!\r\n等等!好像哪里错了!为什么召唤不了黑魔法师?我感觉到跟黑魔法师完全不同的……啊啊啊!!!!!!!\r\n\r\n #b(请把奇拉的使命传递下去.)");
}

function action(mode, type, selection) {
	//java.lang.System.out.println("dbug");
    if (mode == 1) {
        cm.removeNpc(cm.getMapId(), 2141000);
        if (cm.getMapId() == 270050100) {
            cm.forceStartReactor(cm.getMapId(), 2709000);
        } else if (cm.getMapId() == 270051100) {
            cm.killAllMob();
            cm.spawnMonster(8820108, 8, -43);
            if (!cm.getPlayer().isGM()) {
                cm.getMap().startSpeedRun();
            }
        }
    }
    cm.dispose();
}