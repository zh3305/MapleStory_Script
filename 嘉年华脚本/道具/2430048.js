function start() {
    if (im.haveItem(2430048)) {
       im.gainItem(2430048,-1);
       im.gainItem(2049153,10);
       im.sendOk("恭喜获得#r#e10#k#n个#v2049153#，请保持消耗10个空格在使用!");
       im.dispose();
} else {
     im.sendOk("没有了荣誉勋章");
    }
    im.dispose();
}