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
            var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，需要清除次数吗？#b\r\n#L0#普通扎昆(5000抵用卷)\r\n#L1#普通黑龙(5000抵用卷)\r\n#L2#进阶扎昆(5000抵用卷)\r\n#L3#进阶黑龙(5000抵用卷)\r\n#L4#狮子王·班雷昂(5000抵用卷)\r\n#L5#宠物儿·品克缤(10000抵用卷)\r\n#L6#骑士团·希纳斯女皇(10000抵用卷)\r\n#L7#用物品#v4310015#重置BOSS挑战次数(进阶[扎昆/黑龙/品克缤])";//\r\n#L0#扎昆\r\n#L1#黑龙
 	    cm.sendSimple(selStr);
    } else if (status == 1) {
      switch (selection) {
        case 0:
           if (cm.getPlayer().getCSPoints(2)>=5000 && cm.getPQLog("扎昆") > 1) {
		    cm.gainNX(2,-5000);
                    cm.resetPQLog("扎昆");
                    cm.sendOk("温馨提示：#b\r\n副本重置成功，勇士行动起来吧！");
		    cm.dispose();
                } else {
                    cm.sendOk("温馨提示：#b\r\n副本重置失败，抵用卷剩余不足(5000)或你还剩余次数.");
                    cm.dispose();
                }
            	    break;
        case 1:
           if (cm.getPlayer().getCSPoints(2)>=5000 && cm.getPQLog("普通黑龙") > 1) {
		    cm.gainNX(2,-5000);
                    cm.resetPQLog("普通黑龙");
                    cm.sendOk("温馨提示：#b\r\n副本重置成功，勇士行动起来吧！");
		    cm.dispose();
                } else {
                    cm.sendOk("温馨提示：#b\r\n副本重置失败，抵用卷剩余不足(5000)或你还剩余次数.");
                    cm.dispose();
                }
            	    break;
        case 2:
           if (cm.getPlayer().getCSPoints(2)>=5000 && cm.getPQLog("进阶扎昆") > 1) {
		    cm.gainNX(2,-5000);
                    cm.resetPQLog("进阶扎昆");
                    cm.sendOk("温馨提示：#b\r\n副本重置成功，勇士行动起来吧！");
		    cm.dispose();
                } else {
                    cm.sendOk("温馨提示：#b\r\n副本重置失败，抵用卷剩余不足(5000)或你还剩余次数.");
                    cm.dispose();
                }
            	    break;
        case 3:
           if (cm.getPlayer().getCSPoints(2)>=5000 && cm.getPQLog("进阶黑龙") > 1) {
		    cm.gainNX(2,-5000);
                    cm.resetPQLog("进阶黑龙");
                    cm.sendOk("温馨提示：#b\r\n副本重置成功，勇士行动起来吧！");
		    cm.dispose();
                } else {
                    cm.sendOk("温馨提示：#b\r\n副本重置失败，抵用卷剩余不足(5000)或你还剩余次数.");
                    cm.dispose();
                }
            	    break;
        case 4:
           if (cm.getPlayer().getCSPoints(2)>=5000 && cm.getPQLog("狮子王") > 1) {
		    cm.gainNX(2,-5000);
                    cm.resetPQLog("狮子王");
                    cm.sendOk("温馨提示：#b\r\n副本重置成功，勇士行动起来吧！");
		    cm.dispose();
                } else {
                    cm.sendOk("温馨提示：#b\r\n副本重置失败，抵用卷剩余不足(5000)或你还剩余次数.");
                    cm.dispose();
                }
            	    break;
        case 5:
           if (cm.getPlayer().getCSPoints(2)>=10000 && cm.getPQLog("品克缤") > 1) {
		    cm.gainNX(2,-10000);
                    cm.resetPQLog("品克缤");
                    cm.sendOk("温馨提示：#b\r\n副本重置成功，勇士行动起来吧！");
		    cm.dispose();
                } else {
                    cm.sendOk("温馨提示：#b\r\n副本重置失败，抵用卷剩余不足(10000)或你还剩余次数.");
                    cm.dispose();
                }
            	    break;
        case 6:
           if (cm.getPlayer().getCSPoints(2)>=10000 && cm.getPQLog("希纳斯") >= 1) {
		    cm.gainNX(2,-10000);
                    cm.resetPQLog("希纳斯");
                    cm.sendOk("温馨提示：#b\r\n副本重置成功，勇士行动起来吧！");
		    cm.dispose();
                } else {
                    cm.sendOk("温馨提示：#b\r\n副本重置失败，抵用卷剩余不足(10000)或你还剩余次数.");
                    cm.dispose();
                }
            	    break;
        case 7:
	if( cm.haveItem(4310015,3) && (cm.getPQLog("进阶扎昆") > 1 || cm.getPQLog("进阶黑龙") > 1 || cm.getPQLog("品克缤") > 1)){
                    cm.resetPQLog("进阶扎昆");
                    cm.resetPQLog("进阶黑龙");
                    cm.resetPQLog("品克缤");
		    cm.gainItem(4310015,-2);
	    cm.sendOk("重置成功.祝你游戏愉快!");
	    cm.dispose();
} else {
	    cm.sendOk("你没有带来斗神证物x2(BOSS获得)\r\n或你的挑战次数还没有使用完哦");
	    cm.dispose();
}
            break;
        }
    }
}