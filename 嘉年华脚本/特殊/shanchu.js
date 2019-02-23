var status = 0;
var eff ="#fUI/UIWindow/Quest/icon6/7#";

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
            var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，需要清除次数吗？#b\r\n#L2#" + eff + "进阶扎昆(3000点卷)-您今天已经用了[#r" + cm.getPlayer().getPQLog("进阶扎昆") + "#b]次\r\n#L3#" + eff + "进阶黑龙(1W点卷)-您今天已经用了[#r" + cm.getPlayer().getPQLog("进阶黑龙") + "#b]次\r\n#L4#" + eff + "狮子王·班雷昂(1W点卷)-您今天已经用了[#r" + cm.getPlayer().getPQLog("狮子王") + "#b]次\r\n#L5#" + eff + "宠物儿·品克缤(1W点卷)-您今天已经用了[#r" + cm.getPlayer().getPQLog("品克缤") + "#b]次\r\n#L6#" + eff + "骑士团·希纳斯女皇(2W点卷)-您今天已经用了[#r" + cm.getPlayer().getPQLog("希纳斯") + "#b]次\r\n#L7#" + eff + "用#v4310015#重置BOSS挑战次数(进阶[扎昆/黑龙/品克缤])";
 	    cm.sendSimple(selStr);
    } else if (status == 1) {
      switch (selection) {
        case 0:
           if (cm.getPlayer().getCSPoints(1)>=3000 && cm.getPQLog("普通扎昆") > 1) {
		    cm.gainNX(-3000/5);
                    cm.resetPQLog("普通扎昆");
                    cm.sendOk("温馨提示：#b\r\n副本重置成功，勇士行动起来吧！");
		    cm.dispose();
                } else {
                    cm.sendOk("温馨提示：#b\r\n副本重置失败，点卷剩余不足(3000)或你还剩余次数.");
                    cm.dispose();
                }
            	    break;
        case 1:
           if (cm.getPlayer().getCSPoints(1)>=3000 && cm.getPQLog("普通黑龙") > 1) {
		    cm.gainNX(-3000/5);
                    cm.resetPQLog("普通黑龙");
                    cm.sendOk("温馨提示：#b\r\n副本重置成功，勇士行动起来吧！");
		    cm.dispose();
                } else {
                    cm.sendOk("温馨提示：#b\r\n副本重置失败，点卷剩余不足(3000)或你还剩余次数.");
                    cm.dispose();
                }
            	    break;
        case 2:
           if (cm.getPlayer().getCSPoints(1)>=10000 && cm.getPQLog("进阶扎昆") > 1) {
		    cm.gainNX(-10000/5);
                    cm.resetPQLog("进阶扎昆");
                    cm.sendOk("温馨提示：#b\r\n副本重置成功，勇士行动起来吧！");
		    cm.dispose();
                } else {
                    cm.sendOk("温馨提示：#b\r\n副本重置失败，点卷剩余不足(1W)或你还剩余次数.");
                    cm.dispose();
                }
            	    break;
        case 3:
           if (cm.getPlayer().getCSPoints(1)>=10000 && cm.getPQLog("进阶黑龙") > 1) {
		    cm.gainNX(-10000/5);
                    cm.resetPQLog("进阶黑龙");
                    cm.sendOk("温馨提示：#b\r\n副本重置成功，勇士行动起来吧！");
		    cm.dispose();
                } else {
                    cm.sendOk("温馨提示：#b\r\n副本重置失败，点卷剩余不足(1W)或你还剩余次数.");
                    cm.dispose();
                }
            	    break;
        case 4:
           if (cm.getPlayer().getCSPoints(1)>=10000 && cm.getPQLog("狮子王") > 1) {
		    cm.gainNX(-10000/5);
                    cm.resetPQLog("狮子王");
                    cm.sendOk("温馨提示：#b\r\n副本重置成功，勇士行动起来吧！");
		    cm.dispose();
                } else {
                    cm.sendOk("温馨提示：#b\r\n副本重置失败，点卷剩余不足(1W)或你还剩余次数.");
                    cm.dispose();
                }
            	    break;
        case 5:
           if (cm.getPlayer().getCSPoints(1)>=10000 && cm.getPQLog("品克缤") > 1) {
		    cm.gainNX(-10000/5);
                    cm.resetPQLog("品克缤");
                    cm.sendOk("温馨提示：#b\r\n副本重置成功，勇士行动起来吧！");
		    cm.dispose();
                } else {
                    cm.sendOk("温馨提示：#b\r\n副本重置失败，点卷剩余不足(1W)或你还剩余次数.");
                    cm.dispose();
                }
            	    break;
        case 6:
           if (cm.getPlayer().getCSPoints(1)>=20000 && cm.getPQLog("希纳斯") >= 1) {
		    cm.gainNX(-20000/5);
                    cm.resetPQLog("希纳斯");
                    cm.sendOk("温馨提示：#b\r\n副本重置成功，勇士行动起来吧！");
		    cm.dispose();
                } else {
                    cm.sendOk("温馨提示：#b\r\n副本重置失败，点卷剩余不足(2W)或你还剩余次数.");
                    cm.dispose();
                }
            	    break;
        case 7:
	if( cm.haveItem(4000243,1) && cm.haveItem(4000235,1) && (cm.getPQLog("进阶扎昆") > 1 || cm.getPQLog("进阶黑龙") > 1 || cm.getPQLog("品克缤") > 1)){
                    cm.resetPQLog("进阶扎昆");
                    cm.resetPQLog("进阶黑龙");
                    cm.resetPQLog("品克缤");
		    cm.gainItem(4310015,-10);
	    cm.sendOk("重置成功.祝你游戏愉快!");
	    cm.dispose();
} else {
	    cm.sendOk("你没有带来斗神证物(怪物嘉年华获得)\r\n或你的挑战次数还没有使用完哦");
	    cm.dispose();
}
            break;
        }
    }
}