var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendNextPrev("如果你想去天空之城，请和右边的#b检票员#k说话。");
        cm.dispose();
    } else {
        if (status >= 0  && mode == 0) {
            cm.sendNextPrev("如果你想去天空之城，请和右边的#b检票员#k说话。");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendNext("你好。我是码头的售票员。你想离开金银岛，前往其他地区吗？从这里开往神秘岛的#b天空之城站#k的飞艇#b以整点为基准，每15分钟出发一班#k。");
        } else if (status == 1) {
            cm.sendNextPrev("事实上在不久之前，乘坐飞艇还必须花钱买票。但是玛加提亚的炼金术士们以惊人的魔力开发出了浮游石，因此我们才决定免费运行飞艇。嗯？我们职员靠什么生活？请别担心。政府会给我们补贴。");
        } else if (status == 2) {
            cm.dispose();
        }
    }
}