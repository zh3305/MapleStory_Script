
var bossName = "时间塔的本源";
var mapID = 220080001;

function enter(pi) {
    if (!pi.haveItem(4031179)) {
        pi.playerMessage(5, "你没有时空裂缝的碎片D");
    } else {
    	if (pi.getPlayerCount(mapID) <= 0) { // Papu Map
        	var papuMap = pi.getMap(mapID);
		papuMap.resetFully();//重置怪物
            	papuMap.killAllMonsters(false);//删除所有怪物
            	jr(pi);
    	} else {
        	if (pi.getMap(mapID).getSpeedRunStart() == 0 && (pi.getMonsterCount(220080001) <= 0 || pi.getMap(220080001).isDisconnected(pi.getPlayer().getId()))) {
            		jr(pi);
        	} else {
            		pi.playerMessage(5, "对抗闹钟BOSS的挑战已经开始了，你不能进入到里面。");
        	}
    	}
    }
}

//是否允许进入
function jr(pi){
	var kjcs = getJRcs(pi);
	var cs = pi.getBossLog(bossName);
	if (kjcs > cs || kjcs == -1){
		cs++;
		pi.setBossLog(bossName);
		pi.playerMessage(5, "您今天已经进入了" + cs + "次，今天之内还可以进入" + ((kjcs==-1)?"无限":kjcs - cs) + "次.");
		pi.playPortalSE();
		pi.warp(mapID);
	} else {
		pi.playerMessage(5, "您今天已经进入了" + cs + "次，今天之内将不能再次进入.");
	}
}

//允许进入的次数
function getJRcs(pi){
	if (pi.getPlayer().isGM()){
		return -1;
	}
	switch (getVIP(pi)){
	case 0:
	case 1:
		return 5;
	case 2:
		return 10;
	case 3:
		return 20;
	case 4:
		return 50;
	case 5:
		return 100;
	case 6:
		return 200;
	case 7:
		return -1;
	default:
		return 5;
	}
}

//获得VIP等级
function getVIP(pi){
	var v_p = 4031331;
	for (var i = 7;i >= 1;i--){
		if (pi.itemQuantity(v_p + i)!=0) return i;
	}
	return 0;
}
