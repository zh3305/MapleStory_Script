

var setupTask;
var times = 1000*60*5;

function init() {
    scheduleNew();
}

function scheduleNew() {
    setupTask = em.schedule("start", times);//900000时间
}

function cancelSchedule() {
    setupTask.cancel(false);
}

function start() {
    scheduleNew();
    em.getChannelServer().saveAll();
    var iter = em.getInstances().iterator();
    while (iter.hasNext()) {
        var eim = iter.next();

}




/*

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
        nextTime += 1000 * 60 * 1; //1分钟保存1次 玩家泡点+1
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
    em.getChannelServer().saveAll();
    var iter = em.getInstances().iterator();
    while (iter.hasNext()) {
        var eim = iter.next();
    }
}

*/