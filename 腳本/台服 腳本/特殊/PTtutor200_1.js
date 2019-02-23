var status = -1;

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0)
        cm.sendNextS("利用這個傳送點直接到耶雷弗…應該會有許多騎士，千萬要小心一點！好好發揮以前的實力吧！呼。", 17);
    else if (status == 1) {
        cm.dispose();
        cm.warp(915000300, 0);
    }
}