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
        nextTime += 1000 * 60;
    }
    		setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
	if (setupTask!=null)
  		setupTask.cancel(true);
}

function start() {
	var cal = java.util.Calendar.getInstance();
	var hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
	var min = cal.get(java.util.Calendar.MINUTE);
	var sec = cal.get(java.util.Calendar.SECOND);
	var weekday = cal.get(java.util.Calendar.DAY_OF_WEEK);
	var month = cal.get(java.util.Calendar.MONTH) + 1; //获得月份
	var day = cal.get(java.util.Calendar.DATE); //获取日
	weekday-=1;
	scheduleNew();
	if(hour == 20 && min == 29){
		em.broadcastServerMsg(5121047,"还有1分钟，女神马上要来赐福了哦，千万别掉线~~",true);
	}
	if(hour == 20 && min >= 30 && min <= 35){
		em.broadcastServerMsg(5121048,"女神正在赐福，幸运时可以获得蘑菇金币！",true);
		var allPlayers = em.getChannelServer().getPlayerStorage().getAllCharacters();
		allPlayers = allPlayers.iterator();
		while (allPlayers.hasNext()) {//循环每一个玩家
			var player = allPlayers.next();
			var p = player.getBossLog("女神赐福");
			if (p <= 0) {
				player.setBossLog("女神赐福");
				var text = "< 回忆冒险岛 >\r\您获得了女神在线赐福！\r\n";
				var gifts = Array(
					Array(5062000, 10, "神奇魔方"),
					Array(5062002, 5, "高级神奇魔方"),
					Array(5062500, 5, "大师附加神奇魔方")
				);
				var random = Math.floor(Math.random()*100);
				if (random < 15) {
					gifts.push(Array(4031997, 1, "[幸运]蘑菇金币"));
				}
				for(var key in gifts) {
					em.addById(player.getClient(), gifts[key][0], gifts[key][1], "女神赐福");
					text+=gifts[key][2]+"×"+gifts[key][1]+"\r\n";
				}
				text+="感谢您的支持！";
				player.dropMessage(1,text);	
			} 
		}
	}
   // java.lang.System.out.println(month+"-"+day+" "+hour+":"+min+" LABA WORK");
}
