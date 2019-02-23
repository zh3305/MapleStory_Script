var Message = new Array(
        "你能從打獵怪物、達成成就跟武陵道場來獲取楓點。",
        "在對話視窗輸入 '@幫助' 時可以看到使用 '@' 的指令說明.",
        "如果無法跟NPC對話，請輸入'@解卡'.",
        "如果遇到BUG/故障請到QQ群反饋，群號185386815",
        "使用'@查看'指令可以查看自身的各種訊息。",
        "現在，擊殺怪物會有幾率獲得楓點！"
        );

var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    setupTask = em.schedule("start", 180000);
}

function cancelSchedule() {
    setupTask.cancel(false);
}

function start() {
    scheduleNew();
    em.broadcastYellowMsg("[" + em.getChannelServer().getServerName() + "幫助] " + Message[Math.floor(Math.random() * Message.length)]);
}