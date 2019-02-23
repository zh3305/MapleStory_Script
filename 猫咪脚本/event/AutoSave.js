/* 
 * 自动保存角色数据
 */

var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    setupTask = em.schedule("start", 1000 * 60 * 30); //10分钟保存1次
}

function cancelSchedule() {
    setupTask.cancel(false);
}

function start() {
    scheduleNew();
    em.getChannelServer().saveAll();
}