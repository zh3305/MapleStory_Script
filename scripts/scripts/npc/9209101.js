var status = 0;
var eff ="#fEffect/CharacterEff/1112908/0/1#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "===============#r★★★ 打宝副本 ★★★#k===============\r\n亲爱的「 #b#h ##k 」 ，#r欢迎来到China冒险岛！#k\r\n我是 「#r宝物老人#k 」，是来到这座美丽的小岛上为大家发放礼物的！可是没想到途中遇到了可恶的「 #b宝物雪人#k 」，把我礼物袋里的礼物都抢走了，这可怎么办哪？你能帮帮我吗？\r\n#L1##e#r<打宝活动，请参加任务2>#k#l\r\n#L2#"+ eff +"#r<任务1>#b闪亮雪花晶片兑换!#k#l   \r\n#L3#"+ eff +"#r<任务2>#b暴怒的大懒虫雪人!#k#l   "
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
	    cm.sendOk("=======================#r尚未开放#k=====================\r\n欢迎各位来到#bChina冒险岛#r尚未开放#k，敬请期待！下面我将为大家介绍本次活动为大家带来的福利：\r\n#e#d①、Merry Christmas！圣诞节的狂欢~#n#k\r\n#r活动时间：#b尚未开放\r\n#e#d③、Merry Christmas！疯抢圣诞狂欢礼~#n#k\r\n#r活动时间：#b2015年5月1日——2015年5月3日\r\n每日签到都有#v2430608##z2430608#相赠哦，可开出很多惊喜礼物哦。累计签到更可赢取三倍经验、祝福卷轴和强化魔方等超值大礼哦！~");
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9209101,1);
            break;
        case 3:
            cm.dispose();
            cm.openNpc(9209101,2);
            break;
        case 4:
            cm.dispose();
            cm.openNpc(9209101,3);
            break;
        /*case 5:
            cm.dispose();
        cm.sendOk("请到各大城市购买新手装备");
            break;
        case 6:
            cm.dispose();
            cm.openShop(1012125);
            break;
        case 7:
            cm.dispose();
            cm.openShop(1033003);
            break;
        case 8:
            cm.dispose();
            cm.openNpc(9900002,26);
            break;
        case 9:
            cm.dispose();
            cm.openShop(2161010);
            break;
        case 10:
            cm.dispose();
            cm.openShop(9310117);
            break;
        case 11:
            cm.dispose();
            cm.openShop(1021000);
            break;
        case 12:
            cm.dispose();
            cm.openShop(9310111);
            break;
        case 13:
            cm.dispose();
            cm.openShop(9000188);
            break; */
        }
    }
}
