function start() {
	if (cm.getBossLog("射手跳跳")<=0)
	{
		cm.gainItem(4310129, 1);
		cm.gainNX(200);
		cm.sendOk("恭喜你获得了一个#v4310129##b#t4310129##k以及#r200#k点卷");
		cm.setBossLog("射手跳跳");
		cm.dispose();
	} else {
		cm.sendOk("你今天已经领取过奖励了哦~每天只有一次领奖机会，可不要太贪心呢！");
		cm.dispose();
	}
}