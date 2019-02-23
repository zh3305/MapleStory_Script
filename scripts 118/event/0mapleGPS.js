
var setupTask;
var times = 1000*60*65;

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

   // em.getChannelServer().MaplewingGP();//½±ÀøÓï¾ä

 //  em.getChannelServer().MaplewingGX(65);//½±ÀøÓï¾ä

   // em.getChannelServer().MaplewingGainMose(1);

}