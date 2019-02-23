var status = 0;
var eff = "#fEffect/CharacterEff/1082565/2/0#";
var vvv = "#fEffect/CharacterEff/1082565/2/0#";

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
		var selStr = "　" + vvv + "亲爱的#r#h ##k今天在线：#r"+cm.getGamePoints()+"#k 分钟\r\n";
        selStr += "#L4#" + eff + "#b百宝抽奖#l"
        //selStr +="#L14#" + eff + "#b游戏排名#l"
        selStr += "#L6#" + eff + "#b仓库管理#l"
        //selStr += "#L7#" + eff + "#b点卷中介#l\r\n"
	    //selStr += "#L22#" + eff + "#b终极冒险家#l#n"
		selStr += "#L188#" + eff + "#b神宠进化#l"
		selStr += "#L9999#" + eff + "#b市场石像#l\r\n"
        //selStr += "#L1#" + eff + "#b椅子兑换#l\r\n"
        //selStr += "#L13#" + eff + "#r等级送礼#k[#rNew#k]#l"
        selStr += "#L18#" + eff + "#b结婚系统#k[#rNew#k]#l"
        selStr += "#L0#" + eff + "#b#r道具删除#l\r\n"
        selStr += "#L16#" + eff + "#r购理财卡#k[#rNew#k]#l"
        //selStr += "#L19#" + eff + "#r赞助转盘#k[#rNew#k]#l"
		//selStr += "#L2#" + eff + "#d极品商店#k[#rNew#k]#l"
		//selStr += "#L42#" + eff + "#b冒险之心#l\r\n"
		cm.sendSimple(selStr);
	} else if (status == 1) {
		switch (selection) {
		case 0:
			cm.dispose();
			cm.openNpc(9900002, 27);
			break;
	    case 188:
			cm.dispose();
			cm.openNpc(2040030);
			break;
		case 9999:
			cm.dispose();
			cm.openNpc(2135017);
			break;
		case 1:
			cm.dispose();
			cm.openShop(9310113);
			break;
		case 2014:
			cm.dispose();
			cm.openNpc(9900002, 2);
			break;
		case 2015:
			cm.dispose();
			cm.openNpc(9073025);
			break;
		case 56:
			cm.dispose();
			cm.openNpc(9900001, 200);
			break;
		case 2:
			cm.dispose();
			cm.openNpc(9310074);
			break;
		case 2026:
			cm.dispose();
			cm.openNpc(9900005, 2014);
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
			cm.openNpc(9900002, 2);
			break;
		case 6:
			cm.dispose();
			cm.openNpc(9030100);
			break;
		case 7:
			cm.dispose();
			cm.openNpc(9900002, 8);
			break;
		case 8:
			cm.dispose();
			cm.openNpc(9270035, 1);
			break;
		case 9:
			cm.dispose();
			cm.openShop(2060003);
			break;
		case 10:
			cm.dispose();
			cm.openNpc(9900002, 5);
			break;
		case 11:
			cm.dispose();
			cm.openNpc(9900002, 12);
			break;
		case 13:
			cm.dispose();
			cm.openNpc(9900002, 12);
			break;
		case 14:
			cm.dispose();
			cm.openNpc(9040008);
			//cm.sendOk("请用命令查询！");
			break;
		case 15:
			cm.dispose();
			cm.openNpc(9310058);
			break;
		case 16:
			cm.dispose();
			cm.openNpc(9000111);
			break;
		case 17:
			cm.dispose();
			cm.openNpc(9900001,3000);
			break;
		case 18:
			cm.dispose();
			if (cm.getMapId() == 680000000) {
				cm.sendOk("你已经在结婚地图了.");
			} else {
				cm.warp(680000000);
				cm.sendOk("已经将你传送到结婚地图。\r\n请查看左上角NPC结婚流程.\r\n请带上你的爱人.邀请你的朋友来吧!\r\n祝你新婚快乐!!!");
				break;
			}
		case 19:
			cm.dispose();
			cm.openNpc(9900002, 17);
			break;
		case 20:
			cm.dispose();
			cm.openShop(9000201);
			break;
		case 21:
				cm.dispose();
				cm.openNpc(9900004, 11);
			break;
		case 22:
			cm.dispose();
			cm.sendOk("修复中..");
			//cm.openNpc(1105000, 1);
			break;
		case 23:
			cm.dispose();
			cm.openNpc(9900001, 100);
			break;
		case 24:
			cm.dispose();
			cm.openNpc(9900005);
			break;
		case 30:
			cm.dispose();
			cm.openNpc(9900002, 27);
			break;
		case 41:
			cm.dispose();
			cm.sendOk("正在添加.请期待");
			break;
		case 40:
			cm.dispose();
			cm.sendOk("正在添加.请期待");
			break;
		case 42:
			cm.dispose();
			cm.openNpc(9900002, 41);
			break;
		}
	}
}