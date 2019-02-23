function start() {
    im.gainItem(2430505, -1);
	var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1112670)).copy(); // 生成一个Equip类                    
	toDrop.setEnhance(30); //
	//var timeStamp = java.lang.System.currentTimeMillis();
	//var expirationDate = timeStamp+30*86400*1000;
	//toDrop.setExpiration(expirationDate);
	toDrop.setOwner("China冒险岛");
	im.addFromDrop(im.getC(), toDrop, false);
    im.sendOk("恭喜您获得 #r管理员送出的礼物#k 。");
	im.worldSpouseMessage(0x20,"[岛内新闻]：玩家 "+ im.getChar().getName() +" 带着杀猪刀来到China冒险岛,Ta对着市场狂吼一声，谁想我了！");
	im.dispose(); 
}
