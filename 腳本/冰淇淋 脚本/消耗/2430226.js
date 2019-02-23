function start() {
    im.gainItem(2430226, -1);
	var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1102310)).copy(); // 生成一个Equip类                    
	toDrop.setStr(15); //装备力量
	toDrop.setDex(15); //装备敏捷
	toDrop.setInt(15); //装备智力
	toDrop.setLuk(15); //装备运气
	toDrop.setMatk(15); //物理攻击
	toDrop.setWatk(15); //魔法攻击 
	toDrop.setSpeed(15); //移动速度
	toDrop.setJump(15); //跳跃
	toDrop.setAcc(15); //
	var timeStamp = java.lang.System.currentTimeMillis();
	var expirationDate = timeStamp+7*86400*1000;
	toDrop.setExpiration(expirationDate);
	toDrop.setOwner("神级觉醒");
	im.addFromDrop(im.getC(), toDrop, false);
	im.worldMessage( "『财神赐福』" + " : " + "玩家 " + im.getChar().getName() + " 从限量大乱斗礼包中获得了 神级觉醒 精灵翅膀 7天权 一个");
	im.sendOk("成功获得 #r浪漫四翼天使 7天权#k 一个。7天内充值累计满500元，可以通过拍卖的#b我要变强#k处将该翅膀进阶为永久翅膀。");
	im.dispose(); 
}