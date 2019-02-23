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
    if (cm.getPlayer().getLevel() < 8 && cm.getPlayer().getJob() != 200) {
	cm.warp(50000);
        cm.sendOk("等级达到 8 级才能使用此功能.请你在这里升到 8 级吧.\r\n8 级前因为职业问题可能经验不//是100倍.\r\n8 级后经验将会恢复当前倍数.8 级后可以在我这里领取新人奖励哦!\r\n最后祝你游戏愉快!");
        cm.dispose();
        return;
    }
        if (!cm.isQuestFinished(29003) && !cm.haveItem(1142184, 1, true, true)) {
            if (!cm.haveItem(1002419, 1, true, true) && cm.canHold(1002419, 1)) {
                cm.gainItem(1002419, 1); //枫叶帽
            }
            if (cm.canHold(1142184, 1)) {
                cm.gainItem(1142184, 1); //荣誉冒险家
                cm.gainMeso(200000); //yo shit who the hell added this
		cm.gainItem(1302063,1);
                cm.forceCompleteQuest(29003);
                cm.sendOk("欢迎光临，作为新玩家，系统特送你几样礼物！希望您在游戏中玩的愉快！");
            } else {
                cm.sendOk("请将背包留一定的空间.");
            }
            cm.dispose();
            return;
        }
        var selStr = "亲爱的#r#h ##k您好，请您选择您需要的功能:\r\n\r\n#b#L0#快速转职#l  #L1#万能传送#l  #L3#游戏商店#l  #L2#美容美发#l\r\n#L4#百宝抽奖#l  #L5#点卷商店#l  #L13#BOSS传送#l  #L14#游戏排名#l\r\n#L6#仓库管理#l  #L7#点卷中介#l  #L8#学习技能#l  #L10#银行存款#l\r\n#L11##r等级送礼#l#l  #L18##r结婚系统#l  #L15##b每日签到  #L12##r正义副本\r\n#l#L16##bBOSS查询#l  #L19##r7周年副本 #L21##r充值奖励  #L20#转花生机\r\n#L23#140装备合成  #L24#满技能｛推荐｝";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
	    cm.openNpc(9900002,20);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9270035);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9900002,21);
            break;
        case 3:
            cm.dispose();
            cm.openNpc(1012121);
            break;
        case 4:
            cm.dispose();
	    cm.warp(749050400);
            break;
        case 5:
            cm.dispose();
	    cm.openNpc(9900002,2);
            break;
        case 6:
            cm.dispose();
	    cm.openNpc(9030100);
            break;
        case 7:
            cm.dispose();
	    cm.openNpc(9900002,8);
            break;
        case 8:
            cm.dispose();
	    cm.openNpc(9270035,1);
            break;
        case 9:
            cm.dispose();
	    cm.openShop(2060003);
            break;
        case 10:
            cm.dispose();
	    cm.openNpc(9900002,5);
            break;
        case 11:
            cm.dispose();
	    cm.openNpc(9900002,12);
            break;
        case 12:
            cm.dispose();
	    cm.openNpc(9000086);
            break;
        case 13:
            cm.dispose();
	    cm.openNpc(9900002,1);
            break;
        case 14:
            cm.dispose();
            cm.sendOk("请用命令查询！");
            break;
        case 15:
            cm.dispose();
	    cm.openNpc(9310058);
            break;
        case 16:
            cm.dispose();
	    cm.openNpc(9900004,80);
            break;
        case 17:
            cm.dispose();
	    cm.openNpc(9900004,4);
            break;
        case 18:
            cm.dispose();
	if(cm.getMapId() == 700000000)
{
	    cm.sendOk("你已经在结婚地图了.");
}else{
            cm.warp(700000000);
	    cm.sendOk("已经将你传送到结婚地图。\r\n结婚和盛大一样.\r\n请带上你的爱人.邀请你的朋友来吧!\r\n祝你新婚快乐!!!");
            break;
}
        case 19:
            cm.dispose();
	    cm.openNpc(9120033);
            break;
	case 20:
            cm.dispose();
	    cm.openNpc(9900002,24);
            break;
        case 21:
            cm.dispose();
	    cm.openNpc(9900002,17);
            break;
        case 23:
            cm.dispose();
	    cm.openNpc(9900002,25);
            break;
        }
    }
}