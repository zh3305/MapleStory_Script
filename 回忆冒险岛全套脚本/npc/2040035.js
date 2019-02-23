//Memory

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        cm.sendNext("我一直在等你！你终于来到了这里！请收下我的礼物！");
    } else if (status == 1) {
        getPrize();
		
        cm.dispose();
    }
}

function getPrize() {
	var text = "通关成功！";
	var gifts = Array(4000313,4001713,4001713,5062000,5062000,5062002,5062500);
	var gifts1 = Array();
    if (cm.getSpace(2) >= 1 && cm.getSpace(4) >= 1 && cm.getSpace(5) >= 1 && cm.getSpace(1) >= 1) { // 检查背包空间
		cm.setEventCount("玩具组队");
		cm.dispose();
		var itemid = gifts[Math.floor(Math.random()*gifts.length)];
		var quantity = Math.floor(Math.random()*3+2);
		cm.gainItem(4000313, 3);
		cm.gainItem(5062000, 2);
		cm.gainItem(4031169, 1);
		cm.gainItem(itemid, quantity);
		text+="获得道具：\r\n#b";
		text+="#v4000313##t4000313#x3\r\n";
		text+="#v5062000##t5062000#x2\r\n";
		text+="#v4031169##t4031169#x1\r\n";
		text+="#v"+itemid+"##t"+itemid+"#x"+quantity+"\r\n";
		cm.worldSpouseMessage(0x18, "[组队-玩具城] 玩家 " + cm.getChar().getName() + " 通关 [" + cm.getEventCount("玩具组队") + "] 次 系统随机给予大量通关奖励。");
        cm.warp(910000000);
		cm.sendOk(text);
    } else {
        cm.sendNext("请检查你的装备栏、消耗栏、其它栏、特殊栏是否有一个栏目以上的空格。");
    }
}
