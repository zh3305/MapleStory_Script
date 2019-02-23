function start() {
    if (im.haveItem(2433295)) {
       im.gainItem(2433295,-1);
       im.gainNX(1000000);
       im.playerMessage(1, "恭喜获得100W点卷!");
      // im.worldSpouseMessage(0x00, "『补偿奖励』" + " : " + "玩家 " + im.getChar().getName() + " 已经领取补偿点卷！");
       im.dispose();
} else {
     im.sendOk("没有了荣誉勋章");
    }
    im.dispose();
}