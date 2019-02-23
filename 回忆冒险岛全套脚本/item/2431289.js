//精灵帽子
function start() {
	var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1003719)).copy(); // 生成一个Equip类                    
	toDrop.setStr(50); //装备力量
	toDrop.setDex(50); //装备敏捷
	toDrop.setInt(50); //装备智力
	toDrop.setLuk(50); //装备运气
	toDrop.setMatk(30); //物理攻击
	toDrop.setWatk(30); //魔法攻击 
	toDrop.setSpeed(15); //移动速度
	toDrop.setJump(15); //跳跃
	toDrop.setAcc(15); //
	toDrop.setOwner("豪华神装");
	im.addFromDrop(im.getC(), toDrop, false);
	im.sendOk("成功获得 #r豪华神装#k 一个。");
	im.dispose();
	im.remove(1);
}