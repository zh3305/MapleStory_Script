var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == 0) {
        cm.dispose();
        return;
    } else if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (status) {
        case 0:
            cm.sendOk("需要我帮忙吗？\r\n#b#L0##b我想查看结婚礼物。#l#k");
            break;
        case 1: //
            if (!cm.isMarried()) {
                cm.sendOk("只有结婚的夫妻才能查看收到的结婚礼物，想收到结婚礼物的话，先去结婚吧？");
            } else {
                //打开礼物箱查看收到的礼物
            }
            cm.dispose();//这是结束脚本，请按照实际情况使用
            break;
        case 2:
        case 3:
            cm.dispose();
            break;
    }
}
