function start() {
    if (im.haveItem(2431642)) {
       im.gainItem(2431642,-1);
       im.gainNX(150000);
       im.playerMessage(1, "恭喜获得15W点卷!");
       im.worldSpouseMessage(0x0A, "『新人奖励』" + " : " + "玩家 " + im.getChar().getName() + " 已经领取新人15W点卷！");
       im.dispose();
} else {
     im.sendOk("没有了荣誉勋章");
    }
    im.dispose();
}