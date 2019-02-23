var status = 0;
var aaa ="#fUI/UIWindow/Quest/icon6/7#";
var eff ="#fUI/UIWindow/Quest/icon2/7#";
var	ef ="#fUI/UIWindow2.img/Megaphone/0#";
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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，想传送到什么地方(每次20W):\r\n";
        selStr += "#L0##b[普通/进阶]扎昆任务#l\r\n"
		selStr += "#L1##b[普通/进阶]暗黑龙王#l\r\n"
		selStr += "#L2##b[普通]帕普拉图斯#l\r\n"
		//selStr += "#L8##b[普通]暴力熊/心疤狮子#l\r\n"
		selStr += "#L3##b[普通]班雷昂*狮子王#l\r\n"
		selStr += "#L4##b[普通/混沌]时间宠物—品克缤#l\r\n"
		selStr += "#L6##b[骑士团]女皇 - 希纳斯的庭院#l\r\n"
		selStr += "#L7##b[普通]次元缝隙-阿卡伊勒祭坛#l\r\n"
		selStr += "#L15##r[巨大树根]鲁塔比斯 - 四大天王BOSS#l\r\n"		
		//selStr += "#L16##r[泰坦级]三核贝勒德#l\r\n"
		//selStr += "#L17##r[普通]暴君麦格纳斯#l\r\n"
		selStr += "#L18##r[泰坦级]强化的钻机,弱者勿进（New~）#l\r\n"
		//selStr += "#L24##b克雷塞尔#l\r\n"		
	
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(211042200);
                cm.sendOk("2线挑战普通扎昆\r\n3线挑战进阶扎昆.请你注意!\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 1:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(240040600);
                cm.sendOk("你已经到达目的地.(挑战暗黑龙王需要到商场购买入场卷哦!)\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 2:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(220080000);
                cm.sendOk("你已经到达目的地.(挑战闹钟需要到杂货商店购买D片哦!)\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 15:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(105200000);
                cm.sendOk("你已经到达目的地.(超级装备出处!)\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 3:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(211070000);
                cm.sendOk("你已经到达目的地.(狮子王爆高级装备哦!)\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 4:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(270050000);
                cm.sendOk("你已经到达目的地.(品克缤爆永恒装备和30勇士哦!)\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 5:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(105100100);
                cm.sendOk("你已经到达目的地.\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 7:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(272020110);
                cm.sendOk("你已经到达目的地.\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 8:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(551030100);
                cm.sendOk("你已经到达目的地.\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 9:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(802000110);
                cm.sendOk("你已经到达目的地.\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 10:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(802000210);
                cm.sendOk("你已经到达目的地.\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 11:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(802000410);
                cm.sendOk("你已经到达目的地.\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 12:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(910023000);
                cm.sendOk("你已经到达目的地.\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 6:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(271040000);
                cm.sendOk("你已经到达目的地.\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 16:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(863000100);
                cm.sendOk("你已经到达目的地.(三核贝勒德爆高级饰品哦!)\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
        case 17:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(401072000);
                cm.sendOk("你已经到达目的地.(暴君麦格纳斯爆高级卷轴哦!)\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
		case 18:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(703020000);
                cm.sendOk("你已经到达目的地.(钻机爆外星人币哦.可以兑换不错属性的装备!)\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
		case 19:
            cm.dispose();
            cm.openNpc(9900002, 44);
            break;		
		case 20:
            cm.sendOk(cm.checkDrop(8800002));//扎昆
            status = -1;
            break;
		case 21:
            cm.sendOk(cm.checkDrop(8800102));//进阶扎昆
            status = -1;
            break;
		case 22:
            cm.sendOk(cm.checkDrop(8810018));//黑龙
            status = -1;
            break;	
		case 23:
            cm.sendOk(cm.checkDrop(8810122));//进阶黑龙
            status = -1;
            break;
		case 24:
		if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(541020700);
                cm.sendOk("你已经到达目的地\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;	
		case 25:
            cm.sendOk(cm.checkDrop(9420522));//克雷塞尔
            status = -1;
            break;	
		case 26:
            cm.sendOk(cm.checkDrop(8500002));//闹钟
            status = -1;
            break;
		case 27:
            cm.sendOk(cm.checkDrop(8840000));//版雷昂
            status = -1;
            break;		
		case 28:
            cm.sendOk(cm.checkDrop(8850011));//女皇
            status = -1;
            break;
		case 29:
            cm.sendOk(cm.checkDrop(8820108));//普通PB
            status = -1;
            break;		
		case 30:
            cm.sendOk(cm.checkDrop(8820108));//混沌PB
            status = -1;
            break;	
		case 31:
            cm.sendOk(cm.checkDrop(9600087));//钻机
            status = -1;
            break;
		case 32:
            cm.sendOk(cm.checkDrop(9390600));//贝勒德
            status = -1;
            break;				
		case 33:
            cm.sendOk(cm.checkDrop(8880000));//麦克里斯
            status = -1;
            break;
        case 34:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(272020110);
                cm.sendOk("已经到达\r\n祝你游戏愉快!");
            } else {
                cm.sendOk("你没有20W金币,我不能传送你过去");
            }
            break;
		case 35:
            cm.sendOk(cm.checkDrop(8880000));//阿卡伊诺
            status = -1;
            break;
		case 36:
            cm.sendOk(cm.checkDrop(8920100));//血腥女皇
            status = -1;
            break;
		case 37:
            cm.sendOk(cm.checkDrop(9390306));//混沌血腥女皇
            status = -1;
            break;
		case 38:
            cm.sendOk(cm.checkDrop(8880000));//皮埃尔
            status = -1;
            break;
		case 39:
            cm.sendOk(cm.checkDrop(8880000));//混沌皮埃尔
            status = -1;
            break;
		case 40:
            cm.sendOk(cm.checkDrop(8880000));//贝伦
            status = -1;
            break;
		case 41:
            cm.sendOk(cm.checkDrop(8880000));//混沌贝伦
            status = -1;
            break;			
        }
        cm.dispose();
    }
}