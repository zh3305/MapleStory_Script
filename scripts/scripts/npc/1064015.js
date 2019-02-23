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
        var selStr = "#r#e<鲁塔比斯北部庭院大门入口>#n\r\n#k通往鲁塔比斯北部庭院大门入口的道路选择.\r\n#b#L1#使用#v4033611#古树钥匙，移动到普通模式。(100级以上)\r\n#L2#使用#v4033611#古树钥匙，移动到进阶模式。(140级以上)\r\n#L3#获得古树钥匙#v4033611#";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
if(cm.haveItem(4033611,100) && cm.getPlayer().getLevel() > 100)
		    {
		    cm.gainItem(4033611,-1);
		    cm.warp(105200400);
		    }else{
			cm.sendOk("#e请确认你的等级是否达到符合的要求。\r\n请确认你背包是否有100个#v4033611#古树钥匙。\r\n古树钥匙可以再本图上方 奥克处购买！");
                    cm.dispose();
			}
            break;
        case 3:
		cm.sendOk("请找上方的钥匙商人获得！");
                    cm.dispose();
            break;
        case 2:
		    if(cm.haveItem(4033611,1) && cm.getPlayer().getLevel() > 140)
		    {
                    cm.dispose();
		    cm.gainItem(4033611,-1);
		    cm.warp(105200800);
		    }else{
			cm.sendOk("#e请确认你的等级是否达到符合的要求。\r\n请确认你背包是否有#v4033611#古树钥匙。");
                    cm.dispose();
}
            break;
        }
        cm.dispose();
    }
}