function action(mode, type, selection) {
    if (cm.getMapId() / 100 == 9211607) {
        if (cm.getMap().getAllMonster().size() == 0) {
            var maple = Math.floor(Math.random() * 10) + 20;
            if (!cm.canHold(4001534, 1)) {//|| !cm.canHold(4001126, maple)
                cm.sendOk("请整理你的背包空间!.");
                cm.dispose();
                return;
            }
            /*if (!cm.canHold(4001713, 1)) {
             cm.sendOk("请清理其他空间!");
             cm.dispose();
             return;
             }
             cm.gainItem(4001713, 1);*/
            cm.gainExp_PQ(205, 1.5);
            cm.gainPQPoint();
//            cm.gainItem(4001126, maple);
            cm.gainItem(4001534, 1);
			cm.gainItem(5062024, 1);
            if (cm.getEventCount("Prison") < 10) {
                cm.setEventCount("Prison");
				cm.gainNX(1, 1000)
                cm.gainNX(2, 2000);
				cm.worldSpouseMessage(0x20,"『逃脱组队』" + ":" + "玩家 " + cm.getChar().getName() + " 通关并获得6角魔方，以及组队点数。");
            }else if(cm.getEventCount("Prison")==10){
				cm.gainItem(2049323,2);
				cm.gainItem(2049607,5);
			}
            cm.removeAll(4001528);
			cm.gainPlayerPoints(Math.floor(Math.random() * 40) +10);
            cm.warp(921160000, 0);
            cm.dispose();
        } else {
            cm.sendOk("请快点击败看守阿尼!");
            cm.safeDispose();
        }
    }
}
