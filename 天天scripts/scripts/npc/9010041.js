var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        cm.sendSimple("你好。你想用自己的努力换取报酬吗？有关打工的一切，我#b出纳小姐#k都可以帮你。#b#e\r\n#L0#领取打工奖励。#l");
    } else if (status == 1) {
        cm.sendNext("嗯～你确实完成打工了吗？现在帐号内没有奖励。请先去打工，然后再来找我。#r- 当前暂不支持次功能。#k");
        cm.dispose();
    }
}