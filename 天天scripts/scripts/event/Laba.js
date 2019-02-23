var setupTask;

function init() {
    // scheduleNew();
    // 关闭提示
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
	var hour = cal.get(java.util.Calendar.HOUR);
	var min = cal.get(java.util.Calendar.MINUTE);
	var sec = cal.get(java.util.Calendar.SECOND);

	scheduleNew();
	 if (hour % 4 == 10 && min == 13) {
		//em.startSuperlabaed("每小时副本<挑战粉扎>在市场刘备处开放了,勇士们快组队征服它吧..",5121010);
		em.broadcastServerMsg(5120023,"每4小时的 < 答题 > 在市场诸葛孔明处开放了,小伙伴们抓紧时间做作业吧..",true);
	} else if (hour % 4 == 0 && min == 20) {
		em.broadcastServerMsg(5120023," < 答题 > 活动结束了，请4小时后继续回来答题哦.",true);
	}

}
