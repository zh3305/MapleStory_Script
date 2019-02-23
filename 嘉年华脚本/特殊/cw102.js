var status = -1;

function action(mode, type, selection) {
           cm.worldSpouseMessage(0x14,"[小伙伴养成] 玩家 "+ cm.getChar().getName() +" 炫耀了一下他(她)的小伙伴(草泥马)成长值达到 "+ cm.getPQLog("宠物总计成长值",1) +" 点啦!!!");
	   cm.dispose();
}