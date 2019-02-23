var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//美化

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        im.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "#e#r#fEffect/ItemEff/1112811/0/0##fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k\r\n\r\n- #e#r新手装备礼包#k#n\r\n";
		selStr += "#d请选择您需要的装备：(PS:慎重选择)#k\r\n";
		selStr += "#r#L0#"+z+" 选择战士型装备#l      #L1#"+z+" 选择法师型装备#l\r\n";
		selStr += "#r#L2#"+z+" 选择弓手型装备#l      #L3#"+z+" 选择飞侠型装备#l\r\n";
		selStr += "#r#L4#"+z+" 选择海盗型装备#l      #L5#"+z+" 选择尖兵/幻影装备#l\r\n";
		selStr += "\r\n\r\n#fEffect/ItemEff/1112811/0/0##fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k";
        im.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
           if (im.getLevel() >= 120 && im.getPlayerPoints() > 100) { //战士
		im.gainItem(2431676, -1);
		im.gainItem(1002776,1);
		im.gainItem(1102172,1);
		im.gainItem(1082234,1);
		im.gainItem(1052155,1);
		im.gainItem(1072355,1);
		im.sendOk("恭喜您领取战士120永恒装备.");
		im.worldSpouseMessage(0x20,"『成长礼包』 ：玩家 "+ im.getChar().getName() +" 在成长礼包里领取装备。");
		im.dispose();
            } else {
                im.sendOk("失败：\r\n\r\n#r1). 您的等级不够120级.无法领取.\r\n2). 您当前在线积分不足100点。请去市场挂机");
				im.dispose();
            }
            break;
        case 1:
           if (im.getLevel() >= 120 && im.getPlayerPoints() > 100) { //法师
		im.gainItem(2431676, -1);
		im.gainItem(1002777,1);
		im.gainItem(1102172,1);
		im.gainItem(1082235,1);
		im.gainItem(1052156,1);
		im.gainItem(1072356,1);
		im.sendOk("恭喜您领取法师120永恒装备.");
		im.worldSpouseMessage(0x20,"『成长礼包』 ：玩家 "+ im.getChar().getName() +" 在成长礼包里领取装备。");
		im.dispose();
            } else {
                im.sendOk("失败：\r\n\r\n#r1). 您的等级不够120级.无法领取.\r\n2). 您当前在线积分不足100点。请去市场挂机");
				im.dispose();
            }
            break;
        case 2:
           if (im.getLevel() >= 120 && im.getPlayerPoints() > 100) { //弓手
		im.gainItem(2431676, -1);
		im.gainItem(1002778,1);
		im.gainItem(1102172,1);
		im.gainItem(1082236,1);
		im.gainItem(1052157,1);
		im.gainItem(1072357,1);
		im.sendOk("恭喜您领取弓手120永恒装备.");
		im.worldSpouseMessage(0x20,"『成长礼包』 ：玩家 "+ im.getChar().getName() +" 在成长礼包里领取装备。");
		im.dispose();
            } else {
                im.sendOk("失败：\r\n\r\n#r1). 您的等级不够120级.无法领取.\r\n2). 您当前在线积分不足100点。请去市场挂机");
				im.dispose();
            }
            break;
        case 3:
           if (im.getLevel() >= 120 && im.getPlayerPoints() > 100) { //飞侠
		im.gainItem(2431676, -1);
		im.gainItem(1002779,1);
		im.gainItem(1102172,1);
		im.gainItem(1082237,1);
		im.gainItem(1052158,1);
		im.gainItem(1072358,1);
		im.sendOk("恭喜您领取弓手120永恒装备.");
		im.worldSpouseMessage(0x20,"『成长礼包』 ：玩家 "+ im.getChar().getName() +" 在成长礼包里领取装备。");
		im.dispose();
            } else {
                im.sendOk("失败：\r\n\r\n#r1). 您的等级不够120级.无法领取.\r\n2). 您当前在线积分不足100点。请去市场挂机");
				im.dispose();
            }
            break;
        case 4:
           if (im.getLevel() >= 120 && im.getPlayerPoints() > 100) { //海盗
		im.gainItem(2431676, -1);
		im.gainItem(1002780,1);
		im.gainItem(1102172,1);
		im.gainItem(1082238,1);
		im.gainItem(1052159,1);
		im.gainItem(1072359,1);
		im.sendOk("恭喜您领取弓手120永恒装备.");
		im.worldSpouseMessage(0x20,"『成长礼包』 ：玩家 "+ im.getChar().getName() +" 在成长礼包里领取装备。");
		im.dispose();
            } else {
                im.sendOk("失败：\r\n\r\n#r1). 您的等级不够120级.无法领取.\r\n2). 您当前在线积分不足100点。请去市场挂机");
				im.dispose();
            }
            break;
        case 5:
           if (im.getLevel() >= 120 && im.getPlayerPoints() > 100) { //飞侠
		im.gainItem(2431676, -1);
		im.gainItem(1002779,1);
		im.gainItem(1102172,1);
		im.gainItem(1082237,1);
		im.gainItem(1052158,1);
		im.gainItem(1072358,1);
		im.sendOk("恭喜您领取弓手120永恒装备.");
		im.worldSpouseMessage(0x20,"『成长礼包』 ：玩家 "+ im.getChar().getName() +" 在成长礼包里领取装备。");
		im.dispose();
            } else {
                im.sendOk("失败：\r\n\r\n#r1). 您的等级不够120级.无法领取.\r\n2). 您当前在线积分不足100点。请去市场挂机");
				im.dispose();
            }
            break;
        }
    }
}
