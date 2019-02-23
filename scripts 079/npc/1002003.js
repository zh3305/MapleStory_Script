var status = 0;
var sel;
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

		if (status == 0)


			cm.sendSimple("#h #.这里能够提供家族服务.\r\n#L0#０１、我想创建一个家族（需要2500万）#l\r\n#L1#０２、我想解散我的家族（谨慎使用哦）#l\r\n#L2#０３、增加我家族成员数量的上限（需要500万）#l#k\r\n#r#L3#０４、我要改变家族的徽章（需要3000万）#l#k\r\n#r#L4#０５、我要使用#b蓝蜗牛邮票#k#r给家族加10GP#l#k");
		else if (status == 1)
		{
			sel = selection;
			if (selection == 0)
			{
				if (cm.getChar().getGuildId() > 0)
				{
					cm.sendOk("你已经拥有家族了，不能创建.");
					cm.dispose();
				}
				else
					cm.sendYesNo("创建一个新的家族需要 #b" + cm.getChar().guildCost() + " 金币#k, 你确定继续创建?");
			}
			else if (selection == 1)
			{
				if (cm.getChar().getGuildId() <= 0 || cm.getChar().getGuildRank() != 1)
				{
					cm.sendOk("你不是族长，因此你不能解散该家族.");
					cm.dispose();
				}
				else
					cm.sendYesNo("你确定真的要解散你的家族? 当你解散后你将不能恢复所有家族相关资料以及GP的数值.");
			}
			else if (selection == 2)
			{
				if (cm.getChar().getGuildId() <= 0 || cm.getChar().getGuildRank() != 1)
				{
					cm.sendOk("你不是族长，因此你将不能增加你家族成员的数量上限.");
					cm.dispose();
				}
				else
					cm.sendYesNo("增加你家族成员的数量上限需要" + cm.getChar().capacityCost() + " 金币#k, 你确定要增加吗?");
			}
			else if (selection == 3)
			{
cm.openNpc(2010008);
			} else if (selection == 4) {
if (cm.getChar().getGuildId() == 0) {
cm.sendOk("你没有家族!");
cm.dispose();
} else if (!cm.haveItem(4002001)) {
cm.sendOk("你没有#v4002001#我不能给你加GP");
cm.dispose();
} else {
cm.gainGP(10);
cm.gainItem(4002001,-1);
cm.sendOk("成功了.");
cm.dispose();
}
} else if (selection == 5) {
if (cm.getChar().getGuildId() == 0) {
cm.sendOk("你没有家族!");
cm.dispose();
} else if (cm.getChar().getRw15() >= 100) {
cm.gainGP(50);
cm.gainrw15(-100);
cm.sendOk("成功了");
cm.dispose();
} else {
cm.sendOk("抱歉，你没足够的修炼点！.");
cm.dispose();
}

} else if (selection == 6) {
if (cm.getChar().getGuildId() == 0) {
cm.sendOk("你没有家族!");
cm.dispose();
} else if(cm.getChar().getnld() >= 100) {
cm.gainGP(50);
cm.getPlayer().setnld(cm.getPlayer().getnld() -100);
cm.sendOk("成功了");
cm.dispose();
} else {
cm.sendOk("抱歉，你没足够的能量豆！.");
cm.dispose();
}

} else if (selection == 7) {
if (cm.getChar().getGuildId() == 0) {
cm.sendOk("你没有家族!");
cm.dispose();
} else  if (cm.getzb() >= 10) {
cm.gainGP(500);
cm.setzb(-10);
cm.sendOk("成功了");
cm.dispose();
} else {
cm.sendOk("抱歉，你没足够的元宝！.");
cm.dispose();
}
}
		} else if (status == 2)
		{
			if (sel == 0 && cm.getChar().getGuildId() <= 0)
			{
				cm.getChar().genericGuildMessage(1);
				cm.dispose();
			}
			else if (sel == 1 && cm.getChar().getGuildId() > 0 && cm.getChar().getGuildRank() == 1)
			{
				cm.getChar().disbandGuild();
				cm.dispose();
			}
			else if (sel == 2 && cm.getChar().getGuildId() > 0 && cm.getChar().getGuildRank() == 1)
			{
				cm.getChar().increaseGuildCapacity();
				cm.dispose();
			}
		}
	}
}
