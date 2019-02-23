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
		cm.sendYesNo("尊敬的VIP，您好，花费#r1000#k雪花币，购买一个全属性WELCOME特效（全属性+100），是否购买？");
	} else if (status == 1) {
		if (cm.haveItem(4310014,1000)) {
			var ii = cm.getItemInfo();				
			var toDrop = ii.randomizeStats(ii.getEquipById(1112941)).copy(); // 生成一个Equip类                    
			toDrop.setStr(100); //装备力量
			toDrop.setDex(100); //装备敏捷
			toDrop.setInt(100); //装备智力
			toDrop.setLuk(100); //装备运气
			toDrop.setMatk(100); //物理攻击
			toDrop.setWatk(100); //魔法攻击 ;
			cm.addFromDrop(cm.getC(), toDrop, false);
			cm.gainItem(4310014,-1000);
			cm.sendOk("购买成功！");
		} else {
			cm.sendOk("你好像没有那么多雪花币呢。");
		}
		cm.dispose();
	}
}