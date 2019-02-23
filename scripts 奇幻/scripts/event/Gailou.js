var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    em.setProperty("state", "false");
    em.setProperty("endEvent", "true");
    em.setProperty("check", "0");
    em.setProperty("maxCheck", "9999999");
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 60 * 2  ; //设置多久开启
    }
    setupTask = em.scheduleAtTimestamp("startEvent", nextTime);
}

function startEvent() {
    em.setProperty("state", "true");
    em.setProperty("endEvent", "false");
    em.setProperty("check", 0);
    em.setProperty("maxCheck", "" + getMaxCheck(Math.floor(Math.random() * 2)));
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 10);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 60 * 2 ; //设置多久结束
    }
    setupTask = em.scheduleAtTimestamp("finishEvent", nextTime);
    em.broadcastServerMsg(5120010,"[抢楼活动]活动已经开启。10分钟后结束，第1个达到最高楼的玩家将获得一等奖6666点卷。",true);
}

function finishEvent() {
    if (em.getProperty("endEvent").equals("false")) {
        em.broadcastServerMsg("[抢楼活动] 活动已经结束。110分钟后开启。本次活动未开出所有奖励，请大家再接再厉。");
    } else {
        em.broadcastServerMsg("[抢楼活动] 本次活动所有奖励已经发放，下次活动将在110分钟后开启，希望大家积极参加。");
    }
    scheduleNew();
}

function cancelSchedule() {
    if (setupTask != null) {
        setupTask.cancel(true);
    }
}

function getMaxCheck(type) {
    var lou = Math.floor(Math.random() * 200) + 288;
    switch (type) {
    case 0:
        return lou;
    case 1:
        return lou + 50;
		}
		return 999;
}

function rand(lbound, ubound) {
    return Math.floor(Math.random() * (ubound - lbound)) + lbound;
}