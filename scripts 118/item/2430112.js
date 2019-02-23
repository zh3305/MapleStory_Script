/* 神奇魔方碎片 */

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        im.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {

                if (im.getItemQuantity(2430112) <= 1) {

        im.sendOk("搜集到#r2个#k#b#t2430112##k，可以获得#b#i2049401:##t2049401##k。搜集到#r5个#k可以获得#b#i2049400:##t2049400##k。");
        im.dispose();

                } else if (im.getItemQuantity(2430112) <= 2) {

        im.sendSimple("你现在拥有：#r " + im.getItemQuantity(2430112) + " #k个。\r\n搜集到#r2个#k#b#t2430112##k，可以获得#b#i2049401:##t2049401##k。搜集到#r5个#k可以获得#b#i2049400:##t2049400##k。\r\n你要兑换什么呢？\r\n#L0#一张#b#i2049401:##t2049401##k#l\r\n#L2#结束对话#l");

                } else if (im.getItemQuantity(2430112) >= 3) {

        im.sendSimple("你现在拥有：#r " + im.getItemQuantity(2430112) + " #k个。\r\n搜集到#r2个#k#b#t2430112##k，可以获得#b#i2049401:##t2049401##k。搜集到#r5个#k可以获得#b#i2049400:##t2049400##k。\r\n你要兑换什么呢？\r\n#L0#一张#b#i2049401:##t2049401##k#l\r\n#L1#一张#b#i2049400:##t2049400##k#l\r\n#L2#结束对话#l");

 }
        } else if (status == 1) {
            switch (selection) {
            case 0:

              if (im.getSpace(3) >= 1) {

                im.gainItem(2049401,1);
                im.gainItem(2430112,-2);
                im.dispose();

                } else {
                im.sendOK("你的 #e#r消耗栏 #n#k没有空出一个位置.");

                }
                break;
            case 1:
                im.gainItem(2049400,1);
                im.gainItem(2430112,-5);
                break;
            case 2:
                im.dispose();
                break;
         }

    }
}