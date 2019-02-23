var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 50);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
	
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60;
    }
    		setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
	var cal = java.util.Calendar.getInstance();
	var weekday = cal.get(java.util.Calendar.DAY_OF_WEEK);//获得星期（星期天是 1 ，依次下去，星期六是 7）
	var hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
	var min = cal.get(java.util.Calendar.MINUTE);
	var sec = cal.get(java.util.Calendar.SECOND);
	
	scheduleNew();
	if(hour % 2 == 1 && min == 15){
		em.broadcastServerMsg(5121017,"极速钓鱼场开启完毕，极品金龙鱼等你钓，每月大奖等你领~",true);
	}
	if(hour % 2 == 1 && min == 25){
		em.broadcastServerMsg(5121033,"由于官方对快捷键的调整，童鞋们要把分辨率调大才能看到拍卖键喔~",true);
	}
	if(hour % 2 == 1 && min == 35){
		em.broadcastServerMsg(5121017,"每月消费排行已经开放查看，巅峰奖励来袭，点击排行榜关注~",true);
	}
    if(min == 50){
		em.broadcastServerMsg(5120081,"答题活动开放了！喜欢答题的玩家到市场的问答王处参与答题~",true);
	}
	if(weekday == 6 && hour % 2 == 0 && min == 30) {
	    em.broadcastServerMsg(5121036,"今天是渔友日！早上10点到晚上10点钓鱼场钓率翻倍哟，赶快加入吧！~",true);
	}
}
