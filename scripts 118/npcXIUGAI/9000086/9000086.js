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
			cm.sendSimple("#b<正义之章>#k 被黑魔法师的终止...为了惩罚...勇士们行动起来吧!拯救正义恢复冒险世界的和平.\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list0#\r\n#b#L1#每天正义#l #L2#正义副本#l\r\n#L3#正义活动#l #L4#正义币兑换#l");	
		} else if (status == 1) {
			if (selection == 1) {
				typed=1;
				cm.sendYesNo("你好，#h #！在#b2012年6月27日到2012年12月21日 #k期间，为了纪念正义节，每天登陆一次，就可以获得1个#r正义币#k 你想现在领取今天的正义币吗？"); 
			}
			if (selection == 2) {
                    cm.dispose();
		    cm.openNpc(9000086, 1);
			}
			if (selection == 3) {
                    cm.dispose();
		    cm.sendOk("活动正在筹备中...");
			}
			if (selection == 4) {
                    cm.dispose();
		    cm.openNpc(9000086,2);
			}
		} else if (status == 2) {
			if(typed==1){
                if (cm.getBossLog("每天正义") == 0) {
                    cm.gainItem(4310034, 1);
                    cm.setBossLog("每天正义");
                    cm.sendOk("#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#v4310034#正义币x1");
                    cm.dispose();
                } else {
                    cm.sendOk("你今天已经领取过。");
                    cm.dispose();
                }
			}
		}
	}
}
