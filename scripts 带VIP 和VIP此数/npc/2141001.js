
var status = 0;
var bossName = "品克缤";
var mapID = 270050100;

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
	if (cm.getPlayer().getMapId() == 270050000) { 
		var selStr = "您要现在就开始挑战吗？\r\n#b#L1#我想现在就开始挑战品克缤\r\n#L2#我要回市场\r\n#L3#我还没想好";
		cm.sendSimple(selStr);
	} else {
		cm.sendOk("未知的数据：mapID=#r" + cm.getPlayer().getMapId() + "#k.npcID=#r2141001");
		cm.dispose();
	}
    } else if(status == 1){
	switch (selection){
	case 1:
        	if (cm.getPlayerCount(mapID) <= 0) {
            		var PinkzMap = cm.getMap(mapID);
            		PinkzMap.resetReactors();//重置
            		PinkzMap.killAllMonsters(false);//删除所有怪物
			jr(cm);
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
		cm.warp(910000000);
		cm.dispose();
		break;
	case 3:
		cm.dispose();
		break;
	}
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
