var hour;
var min;
var year;
var month;
var day;
var date;
var timeStamp;
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
	hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
	min = cal.get(java.util.Calendar.MINUTE);
	refreshDates(cal);
	if (hour < 12){
		date = year + "-" + month + "-" + day + " 12:00:00.0";
        timeStamp = java.sql.Timestamp.valueOf(date).getTime();
        setupTask = em.scheduleAtTimestamp("startEvent", timeStamp);
		em.broadcastServerMsg("[抢楼活动] 活动将在"+date+"再次开始，希望大家积极参加。");
	}else if (hour >= 12&& hour<=22){
        date = year + "-" + month + "-" + day + " "+(hour+1)+":00:00.0";
        timeStamp = java.sql.Timestamp.valueOf(date).getTime();
        setupTask = em.scheduleAtTimestamp("startEvent", timeStamp);
		em.broadcastServerMsg("[抢楼活动] 活动将在"+date+"再次开始，希望大家积极参加。");
	}else{
		date = year + "-" + month + "-"+(day+1)+" 12:00:00.0";
        timeStamp = java.sql.Timestamp.valueOf(date).getTime();
        setupTask = em.scheduleAtTimestamp("startEvent", timeStamp);
		em.broadcastServerMsg("[抢楼活动] 活动将在"+date+"再次开始，希望大家积极参加。");
		//em.broadcastServerMsg("[抢楼活动] 活动每天12点~23点整时开启现在时间 "+ hour +":"+ min+"，希望大家积极参加。");
	}
    
    /*while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 60 * 2; //设置多久开启
    }*/
    

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
	em.broadcastServerMsg(5120116, "抢楼活动已经开始，请到市场18洞门口找 阿尔法 开抢吧",true);
    em.broadcastServerMsg("[抢楼活动]  活动已经开启。10分钟后结束，第1个达到 " + em.getProperty("maxCheck") + " 楼的玩家将获得丰厚的奖励。");
}

function finishEvent() {
    if (em.getProperty("endEvent").equals("false")) {
        em.broadcastServerMsg("[抢楼活动] 活动已经结束。活动每天12点~23点整时开。本次活动未开出所有奖励，请大家再接再厉。");
    } else {
        em.broadcastServerMsg("[抢楼活动] 本次活动所有奖励已经发放，活动每天12点~23点整时开，希望大家积极参加。");
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
        return 88;
    case 1:
        return 99;
    case 2:
        return 111;
    }
    return 122;
}

function rand(lbound, ubound) {
    return Math.floor(Math.random() * (ubound - lbound)) + lbound;
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