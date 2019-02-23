function start() {
    if (im.haveItem(2430191)) {
       im.removeItem(2430191);
       im.gainItem(1142358,1);
       im.gainItem(1302035,1);
       im.gainItem(1102159,1);
       im.gainItem(1082231,1);
       im.gainItem(1042125,1);
       im.gainItem(1062110,1);
       im.gainItem(1072517,1);
       im.gainItem(1002302,1);
       im.gainItem(1112117,1);
       im.gainItem(1112227,1);
       im.gainItem(1022110,1);
       im.sendOk("礼物已经送到,检查背包吧。");
       im.dispose();
} else {
     im.sendOk("没有了荣誉勋章");
    }
    im.dispose();
}