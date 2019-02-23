function action(mode, type, selection) {
    if (cm.getMap().getAllMonster().size() != 0) {
        cm.sendNext("请消灭冰骑士!!!");
    } else {
		if (cm.getEventCount("Iceman")==0)
				{
					if (cm.getLevel()>=220)
					{
						cm.gainMeso(20000000);
					}else{
						cm.gainMeso(10000000);
					}
					
				}
        cm.warp(910000000, 0);
	    cm.gainPlayerEnergy(10);
	  // cm.gainMeso(+20000000);
	  cm.gainNX(2, 1000);
           cm.playerMessage(6,"[组队-冰人] 恭喜玩家 "+ cm.getChar().getName() +" 在消灭冰骑士活动中获得了奖励 。");
	   cm.setPartyEventCount("Iceman");
    }
    cm.dispose();
}
