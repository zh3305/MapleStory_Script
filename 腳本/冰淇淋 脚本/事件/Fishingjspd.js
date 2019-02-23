var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 40;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
        var allPlayers = em.getChannelServer().getMapFactory().getMap(741000202).getCharacters();//取得当前地图上面的所有玩家
        allPlayers = allPlayers.iterator();
        while (allPlayers.hasNext()) {//循环每一个玩家
            var player = allPlayers.next();
			var putong = 1;
			var shuangbei = putong * 2;
			var sanbei = putong * 3;
		if(player.haveItem(5220002) && player.haveItem(3011000) && player.haveItem(5340001)){ //检测钓鱼装备
		if(player.haveItem(2300000) || player.haveItem(2300001)){  //检测鱼饵
		if(player.haveItem(5420008)){
		    player.gainPlayerPoints( + sanbei);
			player.dropMessage(5,"[钓鱼泡点]：服务卡效果增益，获得 [ "+ sanbei +" ] 点积分。");
	    }else if (player.haveItem(4001512)){
		    player.gainPlayerPoints( + shuangbei);
			player.dropMessage(5,"[钓鱼泡点]：双倍道具增益，获得 [ "+ shuangbei +" ] 点积分。");
	    }else{
            player.gainPlayerPoints( + putong);
	        player.dropMessage(5,"[钓鱼泡点]：在线时间奖励，获得 [ "+ putong +" ] 点积分。");
		}
        }else{
		    player.dropMessage(5,"[钓鱼泡点]：没有鱼饵，无法激活泡点。");
	    }
		}else{
		    player.dropMessage(5,"[钓鱼泡点]：没有钓鱼道具，无法激活泡点。");
		}
		}
}
