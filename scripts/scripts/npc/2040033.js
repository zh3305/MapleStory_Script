function start() {
	if (cm.getBossLog("玩具跳跳")<=0)
	{
		cm.gainItem(4310066, 2);
		cm.gainNX(500);
		cm.sendOk("恭喜你获得了两个#v4310066##b#t4310066##k以及#r500#k点卷");
		cm.setBossLog("玩具跳跳");
		cm.dispose();
	} else {
		cm.sendOk("你今天已经领取过奖励了哦~每天只有一次领奖机会，可不要太贪心呢！");
		cm.dispose();
	}
}