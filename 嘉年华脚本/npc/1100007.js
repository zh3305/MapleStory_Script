var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
		    cm.sendNext("不想去的话就算了……");
            cm.dispose();
		}
        status--;
    }
    if (status == 0) {
	    cm.sendYesNo("嗯，啊……你是说……你想离开金银岛，到其他地区去？乘坐这条船，可以到达#b圣地#k。那是个阳光洒满树叶、微风吹皱湖水的、美丽的、居住着神兽和女皇的地方。你要到圣地去吗？\r\n\r\n移动时间大约是#b2分钟#k，费用是#b1000#k金币。");
	} else if (status == 1) {
		if (cm.getMeso() < 1000) {
			cm.sendNext("你明明没有钱嘛……必须有#b1000#k才可以去。");
		} else {
			cm.gainMeso(-1000);
			cm.warp(130000210,0);
		}
		cm.dispose(); 
    }
}
