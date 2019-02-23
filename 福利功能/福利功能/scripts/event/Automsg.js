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
        nextTime += 1000 * 60 * 5;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
	var Message = new Array(" 欢迎来到099单机冒险岛，如果发现bug请及时提交给GM，让我们共同完善我们的世界！",
	" 游戏内，所有的东西都是要靠自己的努力得到，GM不会给任何玩家任何东西，所以请各位手下留情！",
	" 请不要使用任何第三方软件，如有发现，一律永久封号处理，不给解封，请大家珍惜自己账号！ ",
	" 各vip有各的说话颜色，想让你说的话让更多人注意吗?赶紧购买会员吧！ ");
	em.getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0, Message[Math.floor(Math.random() * Message.length)]));
}
