function start() {
         im.gainItem(2431741, -1);
         im.gainNX(2,3000);
         im.sendOk("恭喜您获得 #r3000#k 低用卷。");
	 im.worldSpouseMessage(0x20,"[抵用兑换提示]：恭喜玩家 "+ im.getChar().getName() +" 从每日在线领取[抵用券3000商品券]获得3000抵用卷。");
         im.dispose(); 
}
