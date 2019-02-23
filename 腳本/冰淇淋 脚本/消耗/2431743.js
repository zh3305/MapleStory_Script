function start() {
        if (im.getEventCount("抵用卷10000") == 0) {
         im.gainItem(2431743, -1);
	 im.setEventCount("抵用卷10000");
         im.gainNX(2,10000);
         im.sendOk("恭喜您获得 #r10000#k 抵用卷。");
         im.dispose(); 
        } else {
	im.gainItem(2431743, -1);
        im.sendOk("抱歉，该帐号已经使用过，无法再次使用.");
        im.dispose();
    }
}