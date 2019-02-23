function start() {
    if (im.haveItem(2432278)) {
       im.gainItem(2432278,-1);
       im.gainNX(1000);
       im.playerMessage(1, "恭喜获得1000点卷!");
       im.worldSpouseMessage(0x12, "『签到系统』" + " : " + "玩家 " + im.getChar().getName() + " 已经领取1000点卷！");
       im.dispose();
} else {
     im.sendOk("没有了荣誉勋章");
    }
    im.dispose();
}