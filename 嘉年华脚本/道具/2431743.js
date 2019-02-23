function start() {
         im.gainItem(2431743, -1);
         im.gainNX(2,10000);
         im.sendOk("恭喜您获得 #r10000#k 抵用卷。");
	 im.spouseMessage(0x24, "[抵用卷兑换提示]" + " : " + "玩家" + im.getChar().getName() + ",获得了[抵用券10000商品券]。");
         im.dispose(); 
}
