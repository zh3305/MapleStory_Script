function init() {
}

function setup(eim, leaderid) {
    var eim = em.newInstance("KnightsBattle" + leaderid);
    
    eim.setProperty("KnightsSummoned", "0");
    eim.createInstanceMap(271040100);
	eim.startEventTimer(1000*60*60*1); // 1 hour
    eim.schedule("scheduledTimeout", 1000*60*60*1); // 1 hour
	eim.createIntVar("Dead", 5);  

    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
	player.openNpc(9900000)
}

function playerRevive(eim, player) {
    return true;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 271040200);
}

function changedMap(eim, player, mapid) {
    	switch (mapid) {
	case 271040100:
	case 271040110: //复活地图
	    return;
    	}
	eim.unregisterPlayer(player);
	//em.setProperty("started", "false");
}

function playerDisconnected(eim, player) {
    return 0;
}

function scheduledTimeout(eim) {
    end(eim);
}

function monsterKilled(eim, mobId) {
	if(mobId == 8850011 || mobId == 8850012){
    KnightsDead(eim)
	eim.restartEventTimer(1000*60*5);//如果打死怪物后。玩家没有完全退出，将在5分钟后自动退出。
	}
}

function KnightsDead(eim){
	var intvar = eim.getIntVar("Dead");
	if (intvar == 6){
		clearPQ(eim)
	}else if (intvar == 0){
		eim.broadcastPlayerMsg(6, "因为黑暗魔法师的力量，你们将在1分钟之后传送到外面。")
		eim.setIntVar("Dead",6);
		eim.schedule("KnightsDead", 1000*60);//1分钟
	}else{
		eim.broadcastPlayerMsg(6, "希纳斯终于被消灭了。受到黑魔法师的影响，将在"+eim.getIntVar("Dead")+"分钟之后传送到外面。")
		eim.setIntVar("Dead",eim.getIntVar("Dead")-1);
		eim.schedule("KnightsDead", 1000*60);//1分钟
	}
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    eim.disposeIfPlayerBelow(0, 0);
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 271040200);
    em.setProperty("KnightsSummoned", "0");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
}

function leftParty (eim, player) {}
function disbandParty (eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}

function monsterValue(eim, mobId) {
}