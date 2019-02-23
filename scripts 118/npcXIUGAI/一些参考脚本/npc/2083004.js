
var status = 0;
var bossName = "普通黑龙";
var mapID = 240060200;

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
	if (cm.getPlayer().getMapId() == 240050400) { 
		var selStr = "您要现在就开始挑战吗？\r\n#b#L2#我要挑战普通黑龙\r\n#L1#我要挑战进阶黑龙";
		cm.sendSimple(selStr);
	} else {
		cm.sendOk("未知的数据：mapID=#r" + cm.getPlayer().getMapId() + "#k.npcID=#r2083004");
		cm.dispose();
	}
    } else if(status == 1){
	switch (selection){
	case 1:
		bossName = "进阶黑龙";
		mapID = 240060201;
	case 2:
        	if (cm.getPlayerCount(mapID) <= 0) {
            		var BossMap = cm.getMap(mapID);
            		BossMap.resetReactors();//重置
            		BossMap.killAllMonsters(false);//删除所有怪物
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
