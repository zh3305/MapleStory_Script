function start() {
    if (im.haveItem(2430047)) {
       im.gainItem(2430047,-1);
       im.gainNX(50000);
       im.sendOk("恭喜获得#r#e5W#k#n点卷!");
       im.dispose();
} else {
     im.sendOk("没有了荣誉勋章");
    }
    im.dispose();
}