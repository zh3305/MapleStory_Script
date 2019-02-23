var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var eff = "#fEffect/CharacterEff/1082565/0/0#";
var vvv = "#fEffect/CharacterEff/1042176/0/0#";
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
        } else if (status == 0) {
        var selStr = "　" + eff + "尊敬的玩家#r#h ##k今天在线时长#r "+cm.getGamePoints()+"#k 分钟\r\n　#fEffect/CharacterEff/1082565/2/0#今天在线：#r"+cm.getGamePoints()+"#k #fEffect/CharacterEff/1082565/2/0#积分：#r"+cm.getPlayerPoints()+"#k   #fEffect/CharacterEff/1082565/2/0#活力值：#r"+cm.getPlayerEnergy()+"#k #k\r\n　#k#fEffect/CharacterEff/1082565/2/0#美好币:#r " + cm.getHyPay(1) + "#k　　#fEffect/CharacterEff/1082565/2/0#消费:#r " + cm.getHyPay(2) + " #k#k　#fEffect/CharacterEff/1082565/2/0#累计:#r " + cm.getHyPay(3) + " #k\r\n";
        selStr += "#L2014#" + vvv + "#r日常任务#l";
        selStr += "#L13#" + vvv + "#r活动栏#l#n";
        selStr += " #L2016#" + vvv + "#r新手装备#l";
        selStr += "#L6#" + vvv + "#r充值中心#l\r\n";
        selStr += "#L588#" + eff + "#b#v4001126#枫叶免费抽奖系统一切惊喜等您来挑战" + eff + "#l\r\n#n";
        selStr += "#L2024#" + vvv + "#b百货店#l"
        selStr += "  #L0#" + vvv + "#r万能NPC#l#n";
        selStr += "#L2025#" + vvv + "#bRED商店#l"
        selStr += "#L888#" + vvv + "#b重置技能点#l\r\n"
        selStr += "\r\n #L2015#" + eff + "#e#d盖楼活动" + eff + "#l";
		selStr += " #L876#" + eff + "#e#g顶级皇家" + eff + "#l";
        //selStr += "　 #L2010#" + eff + "#e#d娱乐活动" + eff + "#l";
        selStr += " #L2#" + eff + "#e#d免费10级" + eff + "#l\r\n\r\n#n";
        selStr += "#L1##r回到市场#l";
        selStr += "　#L2017##b学购技能#l"
        selStr += "　#L3##r查爆率表#l";
        selStr += "　#L4##b管理雇佣店#l\r\n";
        selStr += "#L2018##r万能传送#l"
        selStr += "　#L2019##b副本传送#l"
        selStr += "　#L2020##r快速#g转职#l"
        selStr += "　#L2021##b银行存款#l\r\n"
        //selStr += "#L510##r百宝抽奖#l"
        //selStr += "　#L512##r仓库管理#l"
        //selStr += "　#L511##r终极冒险#l"
        //selStr += "　#L513##r点卷中介#l\r\n"
        selStr += "#L2022##g美容#b美发#l"
        selStr += "　#L2023##b每日#r福利#k#l"
        selStr += "　#L2026##fEffect/CharacterEff/1082565/0/0##r积分-在线-活力#l\r\n\r\n";
        //selStr += "#L5#" + eff + "#b累计充值兑换#l\r\n";
        //selStr += "  #L10#" + eff + "#r进入PVP地图#l\r\n";
	//selStr += "#L14#" + eff + "#b本服BOSS掉物#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9900002);
            break;
		case 876:
            cm.dispose();
            cm.openNpc(1012117, 1);
            break;
        case 1:
            if (cm.getPlayer().getMapId() >= 910000000 && cm.getPlayer().getMapId() <= 910000022) {
                cm.sendOk("您已经在市场了，还想做什么？");
            } else {
                cm.saveReturnLocation("FREE_MARKET");
                cm.warp(910000000, "st00");
            }
            cm.dispose();
            break;
        case 2:
	if(cm.getPlayer().getLevel() <= 10){
	cm.gainExp( + 50000);
	//cm.worldMessage("恭喜新玩家"+ cm.getChar().getName() +"在拍卖NPC处领取5W经验");
	cm.sendOk("恭喜您领取成功,10级下都能在我这里领取经验");
}else{
	cm.sendOk("你的等级大于10");
}
		cm.dispose();
            break;
        case 3://怪物暴物品命令
            cm.dispose();
            cm.openNpc(9010000, 1);
            break;
        case 4://管理雇佣商店
            cm.dispose();
	    cm.openNpc(9030000);
            break;
        case 2014://日常任务
            cm.dispose();
	    cm.openNpc(9900001, 2);
            break;
        case 588://日常任务
            cm.dispose();
	    cm.openNpc(9900004, 1000);
            break;
		case 510:
			cm.dispose();
			cm.warp(749050400);
			break;
        case 2015://盖楼活动
            cm.dispose();
	    cm.openNpc(9201116);
            break;
		case 511:
			cm.dispose();
			cm.openNpc(1105000, 1);
			break;
		case 512:
			cm.dispose();
			cm.openNpc(9030100);
			break;
		case 513:
			cm.dispose();
			cm.openNpc(9900002, 8);
			break;
        case 888://盖楼活动
            cm.dispose();
	    cm.openNpc(9900002, 10);
            break;
        case 2016://新手成长
            cm.dispose();
	    cm.openNpc(2411021);
            break;
		case 2017:
			cm.dispose();
			cm.openNpc(9270035, 1);
			break;
		case 2010:
			cm.dispose();
			cm.sendOk("正在添加中,请期待\r\n");
			break;
		case 2018:
			cm.dispose();
			cm.openNpc(9270035);
			break;
		case 2019:
			cm.dispose();
			cm.openNpc(9900002, 1);
			break;
		case 2020:
			cm.dispose();
			cm.openNpc(9300011);
			break;
		case 2021:
			cm.dispose();
			cm.openNpc(9900002, 5);
			break;
		case 2022:
			cm.dispose();
			cm.warp(100000104);
			break;
		case 2023:
			cm.dispose();
			cm.openNpc(9310058);
			break;
		case 2024:
			cm.dispose();
			cm.openNpc(1012121);
			break;
		case 2025:
			cm.dispose();
			cm.openNpc(9900005, 2000);
			break;
		case 2026:
			cm.dispose();
			cm.openNpc(9900005, 2014);
			break;
        case 5://累积充值
            cm.dispose();
	    cm.openNpc(9900002,7);
            break;
        case 6://充值网站
            cm.dispose();
	    cm.openNpc(9900002,1314);
            break;
        case 7://在线时间换
            cm.dispose();
	    cm.openNpc(9000030,1);
            break;
        case 9:
            cm.dispose();
	    cm.openNpc(9900005,2000);
            break;
		 case 10:
		if (cm.getPlayer().getLevel() > 100 ) {
			cm.warp(701000210);
			cm.sendOk("青龙之门为大混战PK.赤龙之门为组队PK战.黄龙之门为家族PK战.祝您好运");
			} else {
				cm.sendOk("对不起.PK太危险了.100级以下的玩家不能进入噢.");
			}
			cm.dispose();
            break;
		 case 11:
		if (cm.getPlayer().getLevel() > 30 ) {
			cm.warp(746000003);
			cm.sendOk("您已经进入组队PK 祝你好运");
			} else {
				cm.sendOk("对不起.PK太危险了.只允许等级不小于30级的玩家进入");
			}
			cm.dispose();
            break;
            break;
		case 12:
		if (cm.getPlayer().getLevel() > 30 ) {
			cm.warp(746000004);
			cm.sendOk("您已经进入家族PK 祝你好运");
			} else {
				cm.sendOk("对不起.PK太危险了.只允许等级不小于30级的玩家进入");
			}
			cm.dispose();
            break;
		case 13:
            cm.dispose();
			cm.openNpc(9900001,3000);
            break;
		case 14:
            cm.dispose();
			cm.openNpc(9900002,36);
            break;
	}
    }
}
