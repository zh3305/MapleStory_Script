function enter(pi) {
	if (pi.getMap().getAllMonster().size() != 0){
		pi.playerMessage(-1, "必须消灭区域内的所有怪物才能移动到下一回合。");
        pi.playerMessage(5, "必须消灭区域内的所有怪物才能移动到下一回合。");
		return;
	}else if (pi.getMapId()==326045000){
		pi.warpParty(326046000,0);
	}else{
	pi.openNpc(1540212,"zuduiout");
		}
    /*if (pi.getMap().getAllMonster().size() == 0) {
        pi.warpParty(910000000,0);
    } else {
        pi.playerMessage(-1, "必须消灭区域内的所有怪物才能移动到下一回合。");
        pi.playerMessage(5, "必须消灭区域内的所有怪物才能移动到下一回合。");
    }*/
}
