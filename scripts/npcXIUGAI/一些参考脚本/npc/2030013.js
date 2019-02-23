
var status = 0;
var bossName = "普通扎昆";
var mapID = 280030000;

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
    if (status == 0){
	if (cm.getPlayer().getMapId() == 211042400) { //普通扎昆 入口
		var selStr = "伟大的勇士，您需要我的帮助吗\r\n#b#L1#我想现在就开始挑战普通扎昆\r\n#L2#购买火焰的眼(500W金币一个)\r\n#L3#我要回市场\r\n#L4#我还没想好";
		cm.sendSimple(selStr);
	} else if (cm.getPlayer().getMapId() == 211042401) { //进阶扎昆 入口
		bossName = "进阶扎昆";
		mapID = 280030001;
		var selStr = "伟大的勇士，您需要我的帮助吗\r\n#b#L1#我想现在就开始挑战进阶扎昆\r\n#L2#购买火焰的眼(500W金币一个)\r\n#L3#我要回市场\r\n#L4#我还没想好";
		cm.sendSimple(selStr);
	} else {
		cm.sendOk("未知的数据：mapID=#r" + cm.getPlayer().getMapId() + "#k.npcID=#r2030013");
		cm.dispose();
	}
    } else if(status == 1){
	switch (selection){
	case 1:
        	if (cm.getPlayerCount(mapID) <= 0) {
            		var PinkzMap = cm.getMap(mapID);
            		PinkzMap.resetReactors();//重置怪物
            		PinkzMap.killAllMonsters(false);//删除所有怪物
			jr(cm);
			cm.spawnMob(9400900,0,0);
		} else {
			if (cm.getMonsterCount(mapID) <= 0) {
				jr(cm);
			} else {
            			cm.sendOk("对抗BOSS的挑战已经开始了，你不能进入到里面。");
			}
		}
		cm.dispose();
		break;
	case 2:
		var selStr = "每个#v4001017#需要500W金币，你要购买多少个呢？\r\n当前金币#r" + cm.getMeso();
		cm.sendGetNumber(selStr,1,1,100);
		break;
	case 3:
		cm.warp(910000000);
		cm.dispose();
		break;
	case 4:
		cm.dispose();
		break;
	}
    } else if(status == 2){
	var m = selection * 5000000;
	if (cm.getMeso() < m){
		cm.sendOk("我不认为你拥有购买#r" + selection + "#k个#v4001017#的能力");
	} else if(cm.getSpace(4) < 1){
		cm.sendOk("请在其它栏留至少一格空间");
	} else {
		cm.gainItem(4001017, selection);//获得火焰的眼
                cm.gainMeso(-m);
	}
	cm.dispose();
    }
}

//是否允许进入
function jr(cm){
	var kjcs = getJRcs(cm);
	var cs = cm.getBossLog(bossName);
	if (kjcs > cs || kjcs == -1){
		cs++;
		cm.setBossLog(bossName);
		cm.playerMessage(5, "您今天已经进入了" + cs + "次，今天之内还可以进入" + ((kjcs==-1)?"无限":kjcs - cs) + "次.");
		cm.playPortalSE();
		cm.warp(mapID);
		return true;
	} else {
		cm.playerMessage(5, "您今天已经进入了" + cs + "次，今天之内将不能再次进入.");
	}
}

//允许进入的次数
function getJRcs(cm){
	if (cm.getPlayer().isGM()){
		return -1;
	}
	switch (getVIP(cm)){
	case 0:
	case 1:
		return 5;
	case 2:
		return 10;
	case 3:
		return 20;
	case 4:
		return 50;
	case 5:
		return 100;
	case 6:
		return 200;
	case 7:
		return -1;
	default:
		return 5;
	}
}

//获得VIP等级
function getVIP(cm){
	var v_p = 4031331;
	for (var i = 7;i >= 1;i--){
		if (cm.itemQuantity(v_p + i)!=0) return i;
	}
	return 0;
}
