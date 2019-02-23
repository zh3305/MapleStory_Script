var status = 0;
var typed = 0;
var currenttimes;
var maxGifts = 30;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			var currentTimestamp = java.lang.System.currentTimeMillis();
			var startTimestamp = 1414499400000; // 2014.10.25 12:30:00
			if (currentTimestamp < startTimestamp) {
				var lasttime = (startTimestamp-currentTimestamp)/(60*1000);
				cm.sendOk("限量礼包将于今晚8:30开始发放，本次发放#r30#k个礼包，距离活动开始还有#r"+Math.floor(lasttime)+"#k分钟，抓紧时间把包裹整理干净吧！！请各位做好准备！");
				cm.dispose();
				return;
			}
			var queryCurrenttimes = cm.getConnection().prepareStatement("select currenttimes from gamegift where id = 1;").executeQuery();
			if (queryCurrenttimes.next()) {
				currenttimes = queryCurrenttimes.getString("currenttimes");
			} else {
				currenttimes = 0;
			}
			//var text = "";
			var text = "#e#b【开服惊喜礼包】#n#k\r\n\r\n还剩#r"+(maxGifts-currenttimes)+"#k个礼包，每个账号只能领取一次，快来领取吧！\r\n领取前请确认您的包裹有足够的空间\r\n";
			text+="#b#L1#我要领取#l";
			if ((maxGifts-currenttimes)<=0) {
				text="真抱歉，你来晚了，礼包已经被领光了。";
			}
			cm.sendSimple(text);
			//cm.dispose();
		} else if (status == 1) {
			if (cm.getBossLogAcc("校园开服礼包")==-1){
				cm.sendOk("对不起，您已经领过礼包了。");
				cm.dispose();
				return;
			}
			var queryCurrenttimes = cm.getConnection().prepareStatement("select currenttimes from gamegift where id = 1;").executeQuery();
			if (queryCurrenttimes.next()) {
				currenttimes = queryCurrenttimes.getString("currenttimes");
			} else {
				currenttimes = 0;
			}
			if (currenttimes >= maxGifts) {
				cm.sendOk("真悲剧，就在你犹豫的这一瞬间，礼包已经被一抢而空。");
				cm.dispose();
				return;
			}
			var text = "您成功领取了下列物品：\r\n#b";
			if (currenttimes <= 0) {
				cm.gainItem(3010832, 1);
				text+= "太阳椅子，";
			}
			if (currenttimes <= 2) {
				cm.gainItem(1003843, 1);
				text+="奇怪的狐狸面具，";
			}
			if (currenttimes <= 29) {
				cm.gainItem(2049323, 10);
				cm.gainItem(2049137, 10);
				cm.gainItem(2431354, 1);
				cm.gainItem(4310014, 10);
				cm.gainItem(4310036, 1000);
				cm.gainNX(2, 5000);
				text+="惊人正义混沌卷轴 40%x10，无损高级装备强化卷x10，星火幸运箱子x1，雪花币x10，征服币x1000，抵用卷x5000";
			}
			cm.getConnection().prepareStatement("update gamegift set currenttimes = currenttimes +1 where id = 1;").executeUpdate();
			cm.setBossLogAcc("校园开服礼包",-2);
			cm.sendOk(text);
			cm.worldSpouseMessage(0x20, "[系统公告] : 恭喜玩家【" + cm.getChar().getName() + "】抢到了第"+(currenttimes+1)+"份限量大礼包！真是羡慕！");
			cm.dispose();
		}
   }
}
