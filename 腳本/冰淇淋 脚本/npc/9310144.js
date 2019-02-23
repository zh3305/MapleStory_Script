
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
		var selStr = "\r\n#e#d#L33#冰淇淋冒险岛欢迎您。如果您对本服不了解请点这里#n#l#k\r\n";
		selStr +="\r\n#d======================================================#k\r\n";
		selStr +="#L15##r"+ttt6+"在线奖励#l#L17#"+ttt6+"充值奖励#l#k#b#L3#"+ttt6+"组队任务#l#L5#"+ttt6+"点卷中介#l\r\n\r\n";
		selStr +="#b#L11#"+ttt6+"挑战首领#l#L12##r"+ttt6+"重置副本#l#L4##b"+ttt6+"美容美发#l#L14#"+ttt6+"解锁密码#l\r\n\r\n";
		selStr +="#b#L9#"+ttt6+"娱乐副本#l#L19#"+ttt6+"装备制作#l#b#L16#"+ttt6+"绑定商城#b#L21#"+ttt6+"绝版点装#l\r\n\r\n";
		selStr +="#L30##r"+ttt6+"抵用奖励#l#L31#"+ttt6+"男神女神#l#L22#"+ttt6+"超级神宠#l#L100#"+ttt6+"点卷时装#l\r\n\r\n";  
		selStr +="#b#L101#"+ttt6+"技能皮肤#l#L102#"+ttt6+"结婚入口#l#b#L103#"+ttt6+"破攻系统#b#L104#"+ttt6+"总排行榜#l\r\n\r\n";
		//selStr +="#b#L1#"+ttt6+"每日寻宝#l#L2#"+ttt6+"现金购物#l#L3#"+ttt6+"组队任务#l\r\n\r\n";
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
            cm.openNpc(9900003, 1111);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9900003, 15);
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9310144, 4);
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
	    cm.openNpc(9310144, 3);
            //cm.openShop(500);
            break;
		case 17:
            cm.dispose();
            cm.openNpc(9310144, 8);
            break;
		case 18:
	    cm.sendOk("近期开放");
            cm.dispose();
            //cm.openShop(600);
            break;
		case 19:
            cm.dispose();
            cm.openNpc(9900003, 24);
            break;
		case 20:
            cm.dispose();
            cm.openNpc(9310144, 3);
            break;
		case 21:
            cm.dispose();
            cm.openNpc(9900003, 10);
            break;
		case 22:
            cm.dispose();
            cm.openNpc(9201290, 0);
            break;
		case 30:
            cm.dispose();
            cm.openNpc(9000345, 0);
            break;
		case 31:
            cm.dispose();
            cm.openNpc(9001014, 0);
            break;
        case 33:
            cm.dispose();
            cm.openNpc(9330006);
            break;       
case 100:
            cm.dispose();
            cm.openNpc(9310074);
            break; 
			case 101:
            cm.dispose();
            cm.openNpc(1540660);
            break; 
			case 102:
            cm.dispose();
            cm.warp(700000000);
            break; 
			case 103:
            cm.dispose();
            cm.openNpc(9900003,1000);
            break; 
			case 104:
            cm.dispose();
            cm.openNpc(9076004);
            break; 











}
    }
}
