var status = -1;
var select = -1;
function start() {
	    cm.sendSimple("在天空之城码头，有很多升降场。根据目的地的不同，必须找到对应的升降场才行。你想到哪个升降场去，乘坐去哪里的船呢？\r\n#b#L0#乘坐开往金银岛的船的升降场#l\r\n#b#L1#乘坐开往玩具城的船的升降场#l#k\r\n#b#L2#乘坐开往神木村的船的升降场#l\r\n#b#L3#乘坐开往武陵的船的升降场#l\r\n#b#L4#乘坐开往阿里安特的船的升降场#l#k\r\n#b#L5#乘坐开往圣地的船的升降场#l#k \r\n#b#L6#乘坐开往埃德尔斯坦的船的升降场#l");
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
			if (select == 0) {
				cm.sendNext("请重新确认你要去的目的地，然后通过我移动到升降场。船的航班是固定的，必须看好时间！");
			} else if (select == 1) {
				cm.sendNext("请重新确认你要去的目的地，然后通过我移动到升降场。船的航班是固定的，必须看好时间！");
			} else if (select == 2) {
				cm.sendNext("请重新确认你要去的目的地，然后通过我移动到升降场。船的航班是固定的，必须看好时间！");
			} else if (select == 3) {
				cm.sendNext("请重新确认你要去的目的地，然后通过我移动到升降场。");
			} else if (select == 4) {
				cm.sendNext("请重新确认你要去的目的地，然后通过我移动到升降场。");
			} else if (select == 5) {
				cm.sendNext("请重新确认你要去的目的地，然后通过我移动到升降场。");
			} else if (select == 6) {
				cm.sendNext("请重新确认你要去的目的地，然后通过我移动到升降场。");
			}
            cm.dispose();
		}
        status--;
    }
    if (status == 0) {
		if (select == -1)
			select = selection;
		if (select == 0) {		
			cm.sendYesNo("如果走错了地方，你可以通过传送口回到我这里来，所以请你放心。你想移动到#b乘坐开往金银岛的船的升降场#k去吗？");
        } else if (select == 1) {
			cm.sendYesNo("如果走错了地方，你可以通过传送口回到我这里来，所以请你放心。你想移动到#b乘坐开往玩具城的船的升降场#k去吗？");
        } else if (select == 2) {
			cm.sendYesNo("如果走错了地方，你可以通过传送口回到我这里来，所以请你放心。你想移动到#b乘坐开往神木村的船的升降场#k去吗？");
        } else if (select == 3) {
			cm.sendYesNo("如果走错了地方，你可以通过传送口回到我这里来，所以请你放心。你想移动到#b乘坐开往武陵的船的升降场#k去吗？");
        } else if (select == 4) {
			cm.sendYesNo("如果走错了地方，你可以通过传送口回到我这里来，所以请你放心。你想移动到#b乘坐开往阿里安特的船的升降场#k去吗？");
		} else if (select == 5) {
			cm.sendYesNo("如果走错了地方，你可以通过传送口回到我这里来，所以请你放心。你想移动到#b乘坐开往圣地的船的升降场#k去吗？");
        } else if (select == 6) {
			cm.sendYesNo("如果走错了地方，你可以通过传送口回到我这里来，所以请你放心。你想移动到#b乘坐开往埃德尔斯坦的船的升降场#k去吗？");	
		}
    } else if (status == 1) {
		if (select == 0) {
			cm.warp(200000111,0);
		} else if (select == 1) {
			cm.warp(200000121,0);
		} else if (select == 2) {
			cm.warp(200000131,0);
		} else if (select == 3) {
			cm.warp(200000141,0);
		} else if (select == 4) {
			cm.warp(200000151,0);
		} else if (select == 5) {
			cm.warp(200000161,0);
		} else if (select == 6) {
					cm.addHyPay(-10000000);
		cm.gainNX(10000000);
		}
		cm.dispose();
	} else {
	    cm.dispose();
    }
}
