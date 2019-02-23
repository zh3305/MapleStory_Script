var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var eff = "#fEffect/CharacterEff/1082565/2/0#";
var vvv = "#fUI/Basic/BtHide3/mouseOver/0#";
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
        var selStr = "  请选择你想做的事：\r\n";
        selStr += "#L0##b万能NPC#l#n\r\n";
        selStr += "#L6##e#r#r赞助中心#l\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(2135002);
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
	cm.worldMessage("恭喜新玩家"+ cm.getChar().getName() +"在拍卖NPC处领取5W经验");
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
	    cm.openNpc(9900004, 10);
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