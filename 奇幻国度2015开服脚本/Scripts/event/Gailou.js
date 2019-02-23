var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    em.setProperty("state", "false");
    em.setProperty("endEvent", "true");
    em.setProperty("check", "0");
    em.setProperty("maxCheck", "9999999");
	em.setProperty("Message","");
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 10);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 110; //设置多久开启
    }
    setupTask = em.scheduleAtTimestamp("startEvent", nextTime);
}

function startEvent() {
    em.setProperty("state", "true");
    em.setProperty("endEvent", "false");
    em.setProperty("check", 0);
    em.setProperty("maxCheck", "" + getMaxCheck(Math.floor(Math.random() * 2)));
	em.setProperty("Message","");
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 10);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 10; //设置多久结束
    }
    setupTask = em.scheduleAtTimestamp("finishEvent", nextTime);
	em.broadcastServerMsg(5120116, "抢楼活动已经开始，请找自由市场财神",true);
    em.broadcastServerMsg("[抢楼活动]  活动已经开启。10分钟后结束，第1个达到 " + em.getProperty("maxCheck") + " 楼的玩家将获得丰厚的奖励。");
}

function finishEvent() {
    if (em.getProperty("endEvent").equals("false")) {
        em.broadcastServerMsg("[抢楼活动] 活动已经结束。110分钟后开启。本次活动未开出所有奖励，请大家再接再厉。");
    } else {
		var text = "";
		text += "[抢楼活动] 本次活动所有奖励已经发放!!! 获奖名单如下: " + em.getProperty("Message");
        em.broadcastServerMsg(text);
    }
    scheduleNew();
}

function cancelSchedule() {
    if (setupTask != null) {
        setupTask.cancel(true);
    }
}

function getMaxCheck(type) {
    switch (type) {
    case 0:
        return 555;
    case 1:
        return 666;
    case 2:
        return 777;
    }
    return 999;
}

function rand(lbound, ubound) {
    return Math.floor(Math.random() * (ubound - lbound)) + lbound;
}