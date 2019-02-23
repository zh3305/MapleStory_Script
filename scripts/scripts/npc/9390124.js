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
        var selStr = "#r#e<通往贝勒德的路>#n\r\n#k由于心树的愤怒,三核贝勒德再次唤醒.\r\n#b#L1#使用#v4033981##t4033981#，移动到三核贝勒德。\r\n#L2#领取#v4033981##t4033981#";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
		if(cm.haveItem(4033981,1) && cm.getPlayer().getLevel() >= 200)
		    {
		    cm.gainItem(4033981,-1);
		    cm.warp(863010000);
		}else{
		    cm.sendOk("#e请确认你的等级是否达到符合的要求。(200级以上)\r\n请确认你背包是否有#v4033981##t4033981#。");
                    cm.dispose();
		}
            break;
        case 2:
		if(cm.getPlayerStat("GM") == 1 || (cm.getBossLog("钥匙") < 3 && cm.getSpace(3) > 1)){
		    cm.sendOk("获得 #v4033981##t4033981# x1");
		    cm.gainItem(4033981,1,1);
		    cm.setBossLog("钥匙");
                    cm.dispose();
		} else {
		    cm.sendOk("每天限制领取3次。\r\n请确认你其它背包栏是否有1格以上空位。");
		}
            break;
        }
        cm.dispose();
    }
}