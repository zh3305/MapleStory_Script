function action(mode, type, selection) {
    var em = cm.getEventManager("OrbisPQ");
    if (em == null) {
        cm.dispose();
        return;
    }
    for (var i = 4001044; i < 4001064; i++) {
        cm.removeAll(i); //holy
    }
    switch (cm.getMapId()) {
        case 920010100: //center stage, minerva warps to bonus
            //em.setProperty("done", "1");
            cm.givePartyExp_PQ(120, 1.0);
            cm.warpParty(920011100);
            break;
        default:
            var maple = Math.floor(Math.random() * 10) + 20;
            if (!cm.canHold(4001158, 1)) {//|| !cm.canHold(4001126, maple)
                cm.sendOk("请清理其他空间!");
                cm.dispose();
                return;
            }
            /*if (!cm.canHold(4001713, 1)) {
             cm.sendOk("请清理其他空间!");
             cm.dispose();
             return;
             }
             cm.gainItem(4001713, 1);*/
            cm.gainPQPoint();
            cm.gainItem(4001158, 1);
            //cm.gainItem(4001126, maple);
            cm.getPlayer().endPartyQuest(1203);//might be a bad implentation.. incase they dc or something
            if (cm.getEventCount("OrbisPQ") < 10) {
                cm.setEventCount("OrbisPQ");
				cm.gainItem(2340000,1);
                cm.gainNX(1, 2000);
				cm.gainNX(2, 3000);
				cm.worldSpouseMessage(0x20,"『女神塔组队』" + ":" + "玩家 " + cm.getChar().getName() + " 通关并获得了祝福卷轴，以及组队点数。");
            }else if(cm.getEventCount("OrbisPQ")==10){
				cm.gainItem(2049100,5);
				//cm.gainItem(2049323,5);
				cm.gainItem(2430683,2);
				cm.gainItem(2048717,2);
				cm.gainItem(4001158,4);
			}
			cm.gainPlayerPoints(Math.floor(Math.random() * 40) +10);
            cm.warp(910002000);
            cm.addTrait("will", 50);
            cm.addTrait("charm", 10);
            break;
    }
    cm.dispose();
}
