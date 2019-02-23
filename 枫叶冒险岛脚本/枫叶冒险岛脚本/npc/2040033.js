function start() {
	if (cm.getBossLog("玩具跳跳")<=0)
	{
		cm.gainItem(5064000, 1);
		cm.gainItem(5062002, 3);
		cm.gainItem(5062000, 3);
		cm.gainNX(300);
		cm.setBossLog("玩具跳跳");
		cm.dispose();
		cm.warp(220000006, 0);
		cm.sendOk("恭喜你获得了3个高级神奇魔方、3个神奇魔方、1张防爆卷轴以及300点卷");
	} else {
		cm.sendOk("你今天已经领取过奖励了哦~每天只有一次领奖机会，可不要太贪心呢！");
		cm.dispose();
	}
}