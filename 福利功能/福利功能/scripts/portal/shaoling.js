importPackage(net.sf.odinms.server.life);
importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.scripting.npc);
importPackage(java.awt);
function start(ms) {	
	var mob = MapleLifeFactory.getMonster(9600025);
	var pMap = ms.getPlayer().getMap();
	if(ms.getPlayer().getBossLog("shaoling") >= 3){		
		NPCScriptManager.getInstance().start(ms.getPlayer().getClient(), 1100000); //不知道怎么写队员没点NPC的情况下也能写Bosslog记录次数，只能用这馊主意了!
	}else{
	   ms.getPlayer().setBossLog("shaoling");
	}
	if (pMap.mobCount() < 1){		
		pMap.addMapTimer(300, pMap.getReturnMapId());
       		pMap.spawnMonsterWithEffect(mob, 2, new Point(140, 0));
		pMap.mapMessage(5, "提示： 少林老和尚出来了，您只有5分钟时间挑战它,努力战斗吧!!");		
	}
}