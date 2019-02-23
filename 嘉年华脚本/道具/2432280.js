function start() {
    if (im.haveItem(2432280)) {
       im.gainItem(2432280,-1);
       im.gainNX(10000);
       im.playerMessage(1, "恭喜获得10000点卷!");
       im.worldSpouseMessage(0x15, "『在线奖励』" + " : " + "玩家 " + im.getChar().getName() + " 已经领取在线360分钟奖励10000点卷！");
       im.dispose();
} else {
     im.sendOk("没有了荣誉勋章");
    }
    im.dispose();
}