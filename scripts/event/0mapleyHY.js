

var setupTask;
var times = 1000*60*55;

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
    //em.getChannelServer().saveAll();//保存玩家数据
  //  em.getChannelServer().MaplewingHY(11);//奖励语句
   // em.getChannelServer().MaplewingJS(55);//扣除玩家 金币

/*
    em.getChannelServer().saveAll();
    var iter = em.getInstances().iterator();
    while (iter.hasNext()) {
        var eim = iter.next();
    }
*/

}





/*

var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 3);
    cal.set(java.util.Calendar.MINUTE, 50);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 10;//间隔时间
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
    em.getChannelServer().MaplewingHY(1);//奖励语句
   // em.getChannelServer().MaplewingHYs(2);//奖励语句
}



*/