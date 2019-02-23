function start() {
    if (im.haveItem(2430607)) {
       im.gainItem(2000005,200);
       im.gainItem(2430607,-1);
     //  im.sendOk("恭喜获得#r#e5W#k#n点卷!");
       im.dispose();
} else {
     im.sendOk("没有了荣誉勋章");
    }
    im.dispose();
}