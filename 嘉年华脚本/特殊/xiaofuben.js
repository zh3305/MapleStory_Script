var status = -1;

function action(mode, type, selection) {
           cm.gainPlayerEnergy(5);
	   cm.gainItem(4000082, 3);
	   cm.gainItem(4033356, 2);
           cm.worldSpouseMessage(0x20,"[小副本] 恭喜玩家 "+ cm.getChar().getName() +" 在相框NPC小副本活动中获得 2 个正义火种和 3 僵尸丢失的金齿 。");
	   cm.setEventCount("镜世界副本");
	   cm.setPartyEventCount("镜世界副本");
	  cm.warp(910000000);
	   cm.dispose();
}