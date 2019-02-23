function enter(pi) {
	if (pi.getMap().getAllMonster().size() == 0&&pi.getMapId()==326015000){
		pi.warpParty(326016000,0);
	}else if(pi.getMap().getAllMonster().size() == 0&&pi.getMapId()==327035000){
		pi.warpParty(327036000,0);
	}else if(pi.getMap().getAllMonster().size() == 0&&pi.getMapId()==328015000){
		pi.warpParty(328016000,0);
	}else if(pi.getMap().getAllMonster().size() == 0&&pi.getMapId()==323045000){
		pi.warpParty(323046000,0);
	}else if(pi.getMap().getAllMonster().size() == 0&&pi.getMapId()==322045000){
		pi.warpParty(322044000,0);
	}else{
		pi.playerMessage(-1, "恭喜你乱入了！");
        pi.playerMessage(5, "恭喜你乱入了！");
	}
}
