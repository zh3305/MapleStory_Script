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
            cm.sendOk("你好啊~ 我闻到了一股甜蜜蜜的新婚味道哦~ 哎哟，怎么还戴着订婚戒指啊？结了婚就要换漂亮的结婚戒指才行嘛！你愿意的话，我可以给你们换，怎么样？\r\n\r\n#L0# 把订婚戒指换成结婚戒指。#l");
            break;
        case 1: //
            cm.dispose();//这是结束脚本，请按照实际情况使用
            break;
        case 2:
        case 3:
            cm.dispose();
            break;
    }
}
