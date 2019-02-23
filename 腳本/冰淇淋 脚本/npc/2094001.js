var status = -1;

function action(mode, type, selection) {
	cm.gainPlayerEnergy(10);
	cm.removeAll(4001117);
	cm.removeAll(4031437);
	cm.removeAll(4001120);
	cm.removeAll(4001121);
	cm.removeAll(4001122);
	cm.removeAll(4001260);
	cm.gainItem(5062002, 1);
	cm.worldSpouseMessage(0x20,"[日常活动] 恭喜玩家 "+ cm.getChar().getName() +" 在抢占海盗船活动中获得 1 个高级神奇魔方 。");
	cm.setEventCount("海盗");
	cm.setPartyEventCount("海盗1");
	cm.warp(910000000);
	cm.dispose();
}