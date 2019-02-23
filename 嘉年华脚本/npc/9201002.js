var status = -1;

function action(mode, type, selection) {
    if (cm.getMapId() != 680000210) {
        if (cm.isMarried()) {
            cm.sendOk("你是不是在这里举行过婚礼？我想起来了，你们当时真是一对恩爱的情侣呢，你们过得还好吗？");
        } else {
            cm.sendOk("如果你想举行婚礼，请和我的助手们说。");
        }
        cm.dispose();
    } else {
        cm.sendOk("嗯…");
        cm.dispose();
    }
}
