var status = -1;

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0)
        cm.sendNextS("嘿咻…這點程度對我來說根本就不算什麼！差不多也該換衣服了吧？", 17);
    else if (status == 1) {
        cm.dispose();
        cm.warp(915000301, 0);
    }
}