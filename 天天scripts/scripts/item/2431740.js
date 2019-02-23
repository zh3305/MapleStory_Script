function start() {
         im.gainItem(2431740, -1);
         im.gainNX(2,1500);
         im.sendOk("恭喜您获得 #r1500#k 低用卷。");
	 im.channelMessage(0x18, "[怪物掉宝提示]" + " : " + "玩家" + im.getChar().getName() + ",从怪物身上掉落[抵用券1500商品券]获得1500抵用卷。");
	 //im.worldSpouseMessage(0x20,"[怪物掉宝提示]：恭喜玩家 "+ im.getChar().getName() +" 从怪物身上掉落[抵用券1500商品券]获得1500抵用卷。");
         im.dispose(); 
}
