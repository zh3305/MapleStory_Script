
var setupTask;
var times = 1000*20*1;

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

    em.getChannelServer().MaplewingGP();//½±ÀøÓï¾ä

}