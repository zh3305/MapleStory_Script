function start() {
    if (im.haveItem(2430049)) {
       im.gainItem(2430049,-1);
       im.gainItem(1672005,1);
       im.gainItem(1662027,1);
       im.gainItem(2431642,1);
       im.gainItem(2430045,1);
       im.gainItem(2431867,1);
       im.gainItem(2431046,1);
       im.gainItem(5062024,50);
       im.gainItem(5062009,100);
       im.gainItem(4001839,2000);
       im.gainItem(2049116,200);
       im.sendOk("恭喜获得#r#e#v1672005# #v2431046# #v2431867# #v1662027# #v2431642# #v2430045# #v5062024# x50 #v5062009# x100 #v2049116# x200 #v4001839# x2000!");
       im.worldSpouseMessage(0x0C, "『补偿奖励』" + " : " + "玩家 " + im.getChar().getName() + " 已经领取补偿！");
       im.dispose();
} else {
     im.sendOk("没有了荣誉勋章");
    }
    im.dispose();
}