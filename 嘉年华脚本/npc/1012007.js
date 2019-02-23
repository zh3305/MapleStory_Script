var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "感谢大家的支持，岛民们加油！\r\n";
		if(cm.getChar().getMapId() == 100000202){
			selStr += "#d#L0#领取第一关活动奖励,领取后你将会传送到第二关#l\r\n";
		}
		if(cm.getChar().getMapId() == 301050300){
			selStr += "#r#e#L1#领取第二关活动奖励#l\r\n";
		}
        cm.sendSimple(selStr)
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getEventCount("城墙")<1) {
			    cm.setEventCount("城墙");
                cm.gainNX(1,2000);
				//cm.gainItem(4033356,1);
				cm.gainItem(4310036,10);
				cm.gainItem(4310030,10);
				cm.warp(301050300,0);
				cm.worldSpouseMessage(0x15,"『全民跳跳活动』" + " : " + "玩家 " + cm.getChar().getName() + " 通过了第1关,成功领取了点卷、征服币、运动会币，大家快去抢");
                cm.sendOk("领取成功\r\n第二关不要掉下去哦,不然就...!");
            } else {
                cm.sendOk("你不符合要求!");
            }
            break;
        case 1:
            if (cm.getEventCount("陷阱")<1) {
			    cm.setEventCount("陷阱");
                cm.gainNX(1,3000);
				//cm.gainItem(4033356,1);
				cm.gainItem(4310036,10);
				cm.gainItem(4310030,10);
				cm.warp(910000000);
				cm.worldSpouseMessage(0x15,"『全民跳跳活动』" + " : " + "玩家 " + cm.getChar().getName() + " 通过了第1关,成功领取了点卷、征服币、运动会币，大家快去抢");
				cm.sendOk("领取成功\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你不符合要求!");
            }
            break;
        }
        cm.dispose();
    }
}
