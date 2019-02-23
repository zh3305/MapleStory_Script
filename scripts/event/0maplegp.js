

var setupTask;
var times = 1000*60*5;

function init() {
    scheduleNew();
}

function scheduleNew() {
    setupTask = em.schedule("start", times);//900000Ê±¼ä
}

function cancelSchedule() {
    setupTask.cancel(false);
}

function start() {
    scheduleNew();
    //em.getChannelServer().saveAll();//±£´æÍæ¼ÒÊý¾Ý

   // em.getChannelServer().MaplewingGainMose(5);

   // em.getChannelServer().MaplewingGX(5);//½±ÀøÓï¾ä

   // em.getChannelServer().MaplewingJS(1);//¿Û³ýÍæ¼Ò ½ð±Ò

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
        nextTime += 1000 * 10 * 1;//¼ä¸ôÊ±¼ä
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
    em.getChannelServer().MaplewingGX(1);//½±ÀøÓï¾ä
    //em.getChannelServer().MaplewingGP("point");//½±ÀøÓï¾ä
    //em.getChannelServer().MaplewingGXs(1);//½±ÀøÓï¾ä
}


*/