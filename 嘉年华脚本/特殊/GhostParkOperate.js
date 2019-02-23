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
            cm.sendNextN("#b#e<入场条件>#k#n\r\n为了安全使用鬼魂公园, 身高要在125cm……不对, 得#b超过125级#k才可以, 只身一人进去太可怕了, 还是得#b组队#k入场. \r\n一天可以入场的次数为#b5次#k.");
            break;
        case 1: //
            cm.sendNextN("#b#e<入场条件>#k#n\r\n鬼魂公园的推荐等级是#b125级到170级#k, 就算超过了170级, 鬼魂公园的鬼也不会超过这个等级, 所以得留心着点.\r\n");
            break;
        case 2:
            cm.sendNextN("#b#e<符咒设置>#k#n\r\n进入时的匹配性服务已经准备好, 可以通过休彼德蔓牌特制符咒#b按照口味强化邪恶气息#k.");
            break;
        case 3:
            cm.sendNextN("#b#e<符咒设置>#k#n\r\n公园会根据邪恶气息的种类对固定的#b妨碍要素#k进行激活, 越是强化邪恶气息, 妨碍得就越严重, 如此净化也得加速才行吧? #b经验值#k也会提升呢! 哈哈! ");
            break;
        case 4:
            cm.sendNextN("#b#e<内部规则>#k#n\r\n为了能够在鬼魂公园内部畅快使用, 限制外带饮食的摄入. 也就是#b禁止使用药水类道具#k, 不过#b防止经验值下降#k的基本服务还是会提供的.");
            break;
        case 5:
            cm.sendNextN("#b#e<内部规则>#k#n\r\n另外惊悚的气息可能会让你的#bHP恢复能力#k变得没有用武之地, \r\n就算使用HP恢复技能, 也不会有什么用的.");
            break;
        case 6:
            cm.sendNextN("#b#e<经验值>#k#n\r\n要么是根据累计打猎数, 经验值量会逐渐增加, 要么是根据HP状态产生额外的经验值, 甚至还有符咒强化加成, 我们准备了#b丰富多样的经验值加成#k, 能拿多少就拿多少哦, 呵呵.");
            break;
        case 7:
            cm.sendNextN("是使用方法太复杂了吗?  \r\n我相信你既然达到了" + cm.getLevel() + "级, 就一定能够理解的. \r\n那就让我们拭目以待你能撑到什么时候吧! 呵呵! ");
            cm.dispose();
            break;
    }
}
