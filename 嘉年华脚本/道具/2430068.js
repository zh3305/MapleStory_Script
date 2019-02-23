function start() {
    if (im.getSpace(2)>=5) {
       im.gainItem(2430068,-1);
       im.gainItem(2048723,5);
       im.sendOk("恭喜获得#r#e5#k#n个#v2048721#，请保持消耗5个空格再使用!");
       im.dispose();
} else {
     im.sendOk("请保留消耗栏里只有有5个格子以上");
    }
    im.dispose();
}