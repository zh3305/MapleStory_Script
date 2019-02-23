/* 抵用卷3000商品卷 */

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
    if (status == 0 && im.used()) {
        im.gainNX(2, 3000);
        im.sendOk("恭喜你获得了 3000 抵用卷");
    }
    im.dispose();
}
