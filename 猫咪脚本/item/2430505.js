function start() {
        im.gainItem(2430505, -1);
    var ii = im.getItemInfo();					
	var toDrop = ii.randomizeStats(ii.getEquipById(1190400)).copy(); // 生成一个Equip类                    
	toDrop.setEnhance(30); 
	toDrop.setOwner("星之力勋章");
	im.addFromDrop(im.getC(), toDrop, false);
	im.sendOk("成功获得 #r星之力勋章#k 一个。");
	im.dispose(); 
}