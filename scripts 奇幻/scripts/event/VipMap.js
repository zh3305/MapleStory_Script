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
        nextTime += 1000 * 30;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
        var allPlayers = em.getChannelServer().getMapFactory().getMap(704000000).getCharacters();//取得当前地图上面的所有玩家
        allPlayers = allPlayers.iterator();
        while (allPlayers.hasNext()) {//循环每一个玩家
            var player = allPlayers.next();
	    //player.modifyCSPoints(1, 1)
	    player.modifyCSPoints(2, 15);
            //player.gainPlayerPoints(+5);
	player.dropMessage(5,"[泡点奖励]：获得 [ 15 ] 抵用卷 ");
	player.dropMessage(-1,"[泡点奖励]： 获得[ 15 ]抵用卷 ");
	//player.dropMessage(-1,"[五倍泡点奖励]：获得 [5] 点卷,[50] 抵用卷,[25] 绑定校园币。");
	//player.dropMessage(5,"[五倍泡点奖励]：8月17日-20日市场每30秒获得 [5] 点卷,[50] 抵用卷,[25] 绑定校园币。");
	    
        }
}
