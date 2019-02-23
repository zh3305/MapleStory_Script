var status = -1;

function action(mode, type, selection) {
           cm.gainPlayerEnergy(20);
	   cm.gainItem(5062002, 1);
           cm.worldSpouseMessage(0x20,"[日常活动] 恭喜玩家 "+ cm.getChar().getName() +" 在扫荡秦皇陵活动中获得 1 个高级神奇魔方和 20 点活力值 。");
	   cm.setEventCount("皇陵");
	   cm.setPartyEventCount("皇陵1");
	   cm.warp(910000000);
	   cm.dispose();
}