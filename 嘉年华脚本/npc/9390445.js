function start() {
    var pm = cm.getEventInstance();
	var name =pm.getName();
	var eim = cm.getEventManager(name+"");
	var PD = eim.getProperty("state");
	var BOSS = eim.getProperty("leader");
	if (cm.getMap().getAllMonstersThreadsafe().size() == 0){
	if (PD == "1"&&BOSS =="true") {
		cm.givePartyItems(4310143, Math.floor(Math.random()*4));
		cm.givePartyItems(4310036, Math.floor(Math.random()*20));
		cm.givePartyItems(4310014, Math.floor(Math.random()*1)+1);
		cm.givePartyExp(270000);
		var allPlayers = cm.getMap().getCharacters();//取得当前地图上面的所有玩家
					 allPlayers = allPlayers.iterator();
				while (allPlayers.hasNext()) {//循环每一个玩家
					var player = allPlayers.next();
					player.gainPlayerPoints(Math.floor((Math.random()*30)+20));
				}
		cm.warpParty(910340700,0);
		cm.dispose();
	}else if (PD == "1"){
		cm.givePartyItems(4310143, Math.floor(Math.random()*4));
		cm.givePartyItems(4310036, Math.floor(Math.random()*10));
		//cm.givePartyItems(4310014, 1);
		cm.givePartyExp(170000);
		var allPlayers = cm.getMap().getCharacters();//取得当前地图上面的所有玩家
					 allPlayers = allPlayers.iterator();
				while (allPlayers.hasNext()) {//循环每一个玩家
					var player = allPlayers.next();
					player.gainPlayerPoints(Math.floor((Math.random()*20)+10));
				}
		cm.warpParty(910340700,0);
	}else{
		cm.sendOk("对不起，任务没开启！");
		cm.dispose();
	}
	}else{
		cm.sendOk("请清理当前地图的所有怪物再和我对话！");
		cm.dispose();
	}
	cm.dispose();
}