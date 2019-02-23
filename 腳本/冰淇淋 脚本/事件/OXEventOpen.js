var setupTask;
var time = new Date();
var hour = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();

function init() {
    scheduleNew();
}

function scheduleNew() {
    em.setProperty("open", "false");
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 30;//30秒检查一次时间
    }
    setupTask = em.scheduleAtTimestamp("startEvent", nextTime);
}

function startEvent() {
    if ((hour == 13 || hour == 7 ) && min == 10) {
        em.setProperty("open", "true");
        var cal = java.util.Calendar.getInstance();
        cal.set(java.util.Calendar.HOUR, 0);
        cal.set(java.util.Calendar.MINUTE, 10);
        cal.set(java.util.Calendar.SECOND, 0);
        var nextTime = cal.getTimeInMillis();
        while (nextTime <= java.lang.System.currentTimeMillis()) {
            nextTime += 1000 * 60 * 3; //设置多久入口开放结束
        }
        setupTask = em.scheduleAtTimestamp("finishEvent", nextTime);
        em.broadcastServerMsg(5120026, "OX宾果活动已经开始拉！请大家速度从副本入口进来哦！", true);
        em.broadcastServerMsg("[OX宾果活动]  活动入口已经开启，请大家速度从副本入口进来哦！");
    }
}

function finishEvent() {
    em.broadcastServerMsg("[OX宾果活动] 活动入口已经关闭，将在每天的13点10、19点的10分开放！");
    scheduleNew();
}

function cancelSchedule() {
    if (setupTask != null) {
        setupTask.cancel(true);
    }
}