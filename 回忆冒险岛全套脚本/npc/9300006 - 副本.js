var typed = 0;

var itemList = Array(4000019,4000000,4000016);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
	var em = cm.getEventManager("Yzc");
	var eim = em.getInstance("Yzc");
	if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if (status==0) {
		if (cm.getPlayer().getMapId() == 700000200) {
			cm.sendOk("恭喜恭喜，有空去我的养猪场坐一坐。");
			cm.dispose();
			return;
		}
		if (eim.getProperty("gift") == 1) {
			cm.warp(910000000);
			cm.dispose();return;
		}
		if (em.getProperty("state")==2) {
			cm.sendSimple("嗯，真不错，这下我的金猪安全了。这是一点心意你一定要收下。\r\n#b#L0#那我就不客气了！#l");
		} else {
			cm.sendOk("加油啊，少年！");
			cm.dispose();
		}
	} else if (status == 1) {
		if (selection == 0) {
			eim.setProperty("gift", 1);
			cm.setBossLog("保卫金猪");
			var mobQuantity = eim.getProperty("pigcount");
			var nx = 1*mobQuantity+Math.floor(Math.random()*400+100);
			var nx2 = 1*mobQuantity*2+Math.floor(Math.random()*500+500);
			text = "#e#d<任务奖励>#n#k\r\n你成功击杀了"+mobQuantity+"只野猪。\r\n奖励点卷：#b"+nx+"#k点\r\n奖励抵用券：#b"+nx2+"#k点\r\n";
			if (nx>2000)
				nx = 2000;
			if (nx2 > 5000)
				nx2 = 5000;
			cm.gainNX(1,nx);
			cm.gainNX(2,nx2);
			if (mobQuantity >= 100 && mobQuantity <= 300) {
				text+="奖励道具：1个#b高级神奇魔方#k";
				cm.gainItem(5062002, 1);
			} else if (mobQuantity>300 && mobQuantity<=500) {
				text+="奖励道具：2个#b高级神奇魔方#k";
				cm.gainItem(5062002, 2);
			} else if (mobQuantity>500) {
				text+="奖励道具：2个#b高级神奇魔方#k,2个#b大师附加神奇魔方#k";
				cm.gainItem(5062002, 1);
			}
			text+="\r\n#b#L0#谢谢老板，我先走一步。#l";
			cm.sendSimple(text);
		}
	} else if (status == 2) {
			cm.dispose();
			cm.warp(910000000);
			
	}
}