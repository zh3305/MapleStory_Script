var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendNext("哇～！请小心。诺特勒斯号正在施工……嗯？在建造什么！我只能告诉你和新兵器有关……其他的是秘密！");
    } else if (status == 1) {
        cm.sendNextPrev("安装什么兵器现在还是秘密！但是有一点可以确定！这种兵器可以让我们海盗变得更强！而且凯琳是美女，所以攻击力是2倍！嗯？你问我在说什么？哎呀，船长是美女的话，船员们的攻击力当然会提高！");
        cm.dispose();
    }
}