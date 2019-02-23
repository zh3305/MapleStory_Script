function start() {
        im.gainItem(2430226, -1);
	var ii = var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1102630)).copy(); // 生成一个Equip类                    
	toDrop.setStr(50); //装备力量
	toDrop.setDex(50); //装备敏捷
	toDrop.setInt(50); //装备智力
	toDrop.setLuk(50); //装备运气
	toDrop.setMatk(50); //物理攻击
	toDrop.setWatk(50); //魔法攻击 
	toDrop.setSpeed(50); //移动速度
	toDrop.setJump(50); //跳跃
	toDrop.setAcc(50); //
	toDrop.setOwner("豪华点装");
	im.addFromDrop(im.getC(), toDrop, false);
	im.channelMessage(0x18, "『累计充值奖励』" + " : " + "玩家 " + im.getChar().getName() + " 从限量大乱斗礼包中获得了 浪漫四翼天使 一个");
	im.sendOk("成功获得 #r浪漫四翼天使#k 一个。");
	im.dispose(); 
}