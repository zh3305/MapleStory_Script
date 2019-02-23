var setupTask;
var cal;
var year;
var month;
var day;

function init() {
    scheduleNew();
}

function refreshDates(calendar) {
    year = calendar.get(java.util.Calendar.YEAR);
    month = calendar.get(java.util.Calendar.MONTH) + 1;
    if (Math.floor(month / 10) == 0) {
        month = "0" + month;
    }
    day = calendar.get(java.util.Calendar.DATE);
    if (Math.floor(day / 10) == 0) {
        day = "0" + day;
    }
}


function scheduleNew() {
    em.setProperty("state", "false");
    em.setProperty("endEvent", "true");
    em.setProperty("check", "0");
    em.setProperty("maxCheck", "9999999");
    cal = java.util.Calendar.getInstance();

    // weekday = cal.get(java.util.Calendar.DAY_OF_WEEK);
    // hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
    refreshDates(cal);


    // cal.set(java.util.Calendar.HOUR, 0);
    // cal.set(java.util.Calendar.MINUTE, 10);
    // cal.set(java.util.Calendar.SECOND, 0);
    // var nextTime = cal.getTimeInMillis();
    // while (nextTime <= java.lang.System.currentTimeMillis()) {
    //     nextTime += 1000 * 60 * 60 *  24; //设置多久开启
    // }

    date = year + "-" + month + "-" + day + " 20:00:00.0";
    timeStamp = java.sql.Timestamp.valueOf(date).getTime();
    setupTask = em.scheduleAtTimestamp("startEvent", timeStamp);


    // setupTask = em.scheduleAtTimestamp("startEvent", nextTime);
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
        nextTime += 1000 * 60 * 10; //设置多久结束
    }
    setupTask = em.scheduleAtTimestamp("finishEvent", nextTime);
    em.broadcastServerMsg(5120116, "抢楼活动已经开始，请找自由市场裂空之鹰", true);
    em.broadcastServerMsg("[抢楼活动]  活动已经开启。10分钟后结束，第1个达到 " + em.getProperty("maxCheck") + " 楼的玩家将获得丰厚的奖励。");
}

function finishEvent() {
    if (em.getProperty("endEvent").equals("false")) {
        em.broadcastServerMsg("[抢楼活动] 活动已经结束。110分钟后开启。本次活动未开出所有奖励，请大家再接再厉。");
    } else {
        // em.broadcastServerMsg("[抢楼活动] 本次活动所有奖励已经发放，下次活动将在50分钟后开启，希望大家积极参加。");
        em.broadcastServerMsg("[抢楼活动] 本次活动所有奖励已经发放，希望大家积极参加。");
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
            return 222;
        case 1:
            return 333;
        case 2:
            return 777;
    }
    return 999;
}

function rand(lbound, ubound) {
    return Math.floor(Math.random() * (ubound - lbound)) + lbound;
}
