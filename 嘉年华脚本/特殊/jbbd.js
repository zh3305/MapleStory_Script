
var status = 0;
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";////美化2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";////美化!
var ttt7 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化会员
var ttt6 ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

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
    if (cm.getMapId() == 180000001) {
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
            cm.dispose();
        } 
    else if (status == 0) {
		var selStr = "\r\n#e#d#L33#回忆冒险岛欢迎您。如果您对本服不了解请点这里#n#l#k\r\n";
		selStr +="\r\n#d======================================================#k\r\n";
		selStr +="	因玩家反应尖兵导弹在遇到反伤的BOSS时经常给自己带来困扰，特推出删除尖兵导弹技能的功能，当然您也可以在这里进行免费的恢复。\r\n"
		//selStr +="\r\n大部分的操作都在拍卖里进行，我已经累飞了。使用#r@pm#k命令可以快速呼叫拍卖NPC\r\n";
		//selStr +="#L15##r"+ttt6+"在线奖励#l#L17#"+ttt6+"充值奖励#l#k#b#L3#"+ttt6+"组队任务#l#L5#"+ttt6+"元宝兑换#l\r\n\r\n";
		//selStr +="#b#L11#"+ttt6+"挑战首领#l#L12##r"+ttt6+"重置副本#l#L4##b"+ttt6+"美容美发#l#L14#"+ttt6+"解锁密码#l\r\n\r\n";
		//selStr +="#b#L9#"+ttt6+"娱乐副本#l#L19#"+ttt6+"装备制作#l#b#L16#"+ttt6+"活动奖励#l#b#L20#"+ttt6+"点装觉醒#l\r\n\r\n";
		//selStr +="#b#L21#"+ttt6+"随身会员#l#r#L18#"+ttt6+"飞升洗髓#l#k#r#L22#"+ttt6+"爆率物品出处查询#l\r\n\r\n";
		selStr +="#b#L23#"+ttt6+"删除宙斯盾系统#l#L24#"+ttt6+"恢复宙斯盾系统#l\r\n\r\n";
		//selStr +="#b#L1#"+ttt6+"每日寻宝#l#L2#"+ttt6+"现金购物#l#L3#"+ttt6+"组队任务#l#L5#"+ttt6+"点卷中介#l\r\n\r\n";
		//selStr +="#L4#"+ttt6+"美容美发#l#L10##r"+ttt6+"游戏宝贝#l#L9##r"+ttt6+"魔法物品#l#L11##b"+ttt6+"挑战首领#l\r\n\r\n";
		//selStr +="#b#L13#"+ttt6+"点卷任务#l#L12#"+ttt6+"重置副本#l#L14#"+ttt6+"解锁密码#l#k#L15##r"+ttt6+"在线奖励#l#k\r\n\r\n";
		//selStr +="#b#L16#"+ttt6+"金币商城#l#r#L17#"+ttt6+"充值奖励#l#b#L18#"+ttt6+"怪物币店#l#r#L19#"+ttt6+"RED币商店#l\r\n";
		selStr +="\r\n#d======================================================#k\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9310144, 1);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9310144, 9);
            break;
        case 8:
            cm.dispose();
            cm.openNpc(9310144, 3);
            break;
        case 4:
            cm.dispose();
            cm.openNpc(9900003, 9);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9900003, 15);
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9310144, 101);
            break;
        case 3:
            cm.dispose();
            cm.openNpc(9310144, 6);
            break; 
        case 6:
            cm.dispose();
            cm.openNpc(9020000);
            break; 
        case 7:
            cm.dispose();
            cm.openNpc(2040034);
            break;
        case 10:
            cm.dispose();
            cm.openNpc(9900003, 10);
            break;
		case 9:
            cm.dispose();
            cm.openNpc(9900003, 108);
            break;
		case 11:
            cm.dispose();
            cm.openNpc(9900003, 13);
            break;
		case 12:
            cm.dispose();
            cm.openNpc(9900004, 3);
            break;
		case 13:
            cm.dispose();
            cm.openNpc(9900003, 110);
            break;
		case 14:
            cm.dispose();
            cm.openNpc(9900003, 111);
            break;
	    case 15:
            cm.dispose();
            cm.openNpc(9900003, 608);
            break;
		case 16:
	    //cm.sendOk("近期开放");
            cm.dispose();
	    cm.openNpc(9310144, 1);
            //cm.openShop(500);
            break;
		case 17:
            cm.dispose();
            cm.openNpc(9310144, 8);
            break;
		case 18:
	    //cm.sendOk("近期开放");
            cm.dispose();
            cm.openNpc(9000174, 1);
            break;
		case 19:
            cm.dispose();
            cm.openNpc(9900003, 24);
            break;
		case 20:
            cm.dispose();
            cm.openNpc(9000069);
            break;
		case 21:
            cm.dispose();
            cm.openNpc(9310144, 17);
            break;
		case 22:
			cm.dispose();
			cm.openNpc(9310144, 100);
			break;
		case 23:
		if (cm.getJob() >= 3600 && cm.getJob() <= 3612){		
			cm.teachSkill(36110004, 0, 0);
			cm.sendOk("恭喜您，操作成功");
			cm.dispose();
		} else {
			cm.sendOk("你又不是尖兵，找盖？");
			cm.dispose();
		}
			break;
			case 24:
		if (cm.getJob() >= 3600 && cm.getJob() <= 3612){		
			cm.teachSkill(36110004, 10, 10);
			cm.sendOk("恭喜您，操作成功");
			cm.dispose();
		} else {
			cm.sendOk("你又不是尖兵，找盖？");
			cm.dispose();
		}
			break;
        case 33:
            cm.dispose();
            cm.openNpc(9330006);
            break;       













}
    }
}
