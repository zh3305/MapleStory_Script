var status = 0;
var typed=0;

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
			cm.sendSimple("领取未从文教授那里领取的奖励。\r\n#b#L6#[十字猎人]#v1142541#最强勋章\r\n#L7#[十字猎人]#v1142499#超级巨星★\r\n#L1#[十字猎人]#v1142503#神秘扎昆的恶梦\r\n#L2#[十字猎人]#v1142502#神秘希拉的恶梦\r\n#L3#[十字猎人]#v1142500#神秘班·雷昂的恶梦\r\n#L4#[十字猎人]#v1142504#神秘暗黑龙王的恶梦\r\n#L5#[十字猎人]#v1142501#神秘阿卡伊勒的恶梦");
		} else if (status == 1) {
			if (selection == 1) {
			if(cm.haveItem(4033302,15)){
			   cm.gainItem(4033302,-15);
			   cm.gainItem(1142503,1,30);
			   cm.worldMessage(cm.getChar().getName() + "在神秘领域兑换了神秘扎昆的恶梦勋章。");
			   cm.sendOk("获得 神秘扎昆的恶梦 勋章 x1");
			}else{
			   cm.dispose();
			   cm.sendOk("请查看你的背包是否存在 扎昆的石片 x15。");
			}
			}
			if (selection == 2) {
			if(cm.haveItem(4033304,15)){
			   cm.gainItem(4033304,-15);
			   cm.gainItem(1142502,1,30);
			   cm.worldMessage(cm.getChar().getName() + "在神秘领域兑换了神秘希拉的恶梦勋章。");
			   cm.sendOk("获得 神秘希拉的恶梦 勋章 x1");
			}else{
			   cm.dispose();
			   cm.sendOk("请查看你的背包是否存在 希拉的头发 x15。");
			}
			}
			if (selection == 3) {
			if(cm.haveItem(4033311,15)){
			   cm.gainItem(4033311,-15);
			   cm.gainItem(1142500,1,30);
			   cm.worldMessage(cm.getChar().getName() + "在神秘领域兑换了神秘班·雷昂的恶梦勋章。");
			   cm.sendOk("获得 神秘班·雷昂的恶梦 勋章 x1");
			}else{
			   cm.dispose();
			   cm.sendOk("请查看你的背包是否存在 班·雷昂的头发 x15。");
			}
			}
			if (selection == 4) {
			if(cm.haveItem(4033303,15)){
			   cm.gainItem(4033303,-15);
			   cm.gainItem(1142504,1,30);
			   cm.worldMessage(cm.getChar().getName() + "在神秘领域兑换了神秘暗黑龙王的恶梦勋章。");
			   cm.sendOk("获得 神秘暗黑龙王的恶梦 勋章 x1");
			}else{
			   cm.dispose();
			   cm.sendOk("请查看你的背包是否存在 暗黑龙王的鳞片 x15。");
			}
			}
			if (selection == 5) {
			if(cm.haveItem(4033312,15)){
			   cm.gainItem(4033312,-15);
			   cm.gainItem(1142501,1,30);
			   cm.worldMessage(cm.getChar().getName() + "在神秘领域兑换了神秘阿卡伊勒的恶梦勋章。");
			   cm.sendOk("获得 神秘阿卡伊勒的恶梦 勋章 x1");
			}else{
			   cm.dispose();
			   cm.sendOk("请查看你的背包是否存在 阿卡伊勒的胡须 x15。");
			}
			}
			if (selection == 6) {
			if(cm.haveItem(1142503,1) && cm.haveItem(1142504,1) && cm.haveItem(1142501,1) && cm.haveItem(1142502,1) && cm.haveItem(1142500,1)){
			   cm.gainItem(1142500,-1);
			   cm.gainItem(1142501,-1);
			   cm.gainItem(1142502,-1);
			   cm.gainItem(1142503,-1);
			   cm.gainItem(1142504,-1);
			   cm.gainItem(1142541,1,30);
			   cm.worldMessage(cm.getChar().getName() + "在神秘领域兑换了最强勋章。他(她)是冒险岛史上最强的人。");
			   cm.sendOk("获得 最强勋章 勋章 x1");
			}else{
			   cm.dispose();
			   cm.sendOk("请查看你的背包是否存在 神秘领域5大Boss勋章。");
			}
			}
			if (selection == 7) {
			if(cm.getPlayer().getCSPoints(1) >= 30000){
			   cm.gainNX(-30000);
			   cm.gainItem(1142499,1,30);
			   cm.worldMessage(cm.getChar().getName() + "在神秘领域兑换了超级巨星★。他(她)现在是巨星了。");
			   cm.sendOk("获得 超级巨星★ 勋章 x1");
			}else{
			   cm.dispose();
			   cm.sendOk("请查看你的身上是否存在 30000 点卷。");
			}
			}
		}
	}
}