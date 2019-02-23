var status = -1;
var sel = -1;
var cardPiece = [4001513, 4001515, 4001521];
var card = [4001514, 4001516, 4001522];

function start() {
    cm.sendSimple("你好～天气不错吧？要想使用怪物公园，当然应该来找我。我能为你做什么呢？\r\n#b#L0#交换#t4001513##l\r\n#L1#交换#t4001515##l\r\n#L2#交换#t4001521##l\r\n#L3#购买入场券#l#k");
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
            sel = selection;
            if (sel != 3) {
                cm.sendGetNumber("你想要换多少张#b#t" + card[sel] + "##k呢?#r(最大值99张)#k\r\n#r10#k张#b#t" + cardPiece[sel] + "##k可以兑换1张#b#t" + card[sel] + "##k\r\n您当前拥有#b#t" + cardPiece[sel] + "##k#r" + cm.getItemQuantity(cardPiece[sel]) + "#k张", 0, 0, 99);
            } else {
                cm.sendSimple("嗯～本来不能这样的，因为我最近心情很好，所以才会破例卖给你。#r不管是哪种入场券，每人一天只能购买3张#k。对了，这件事一定要对休彼德蔓保密！\r\n#b#L0##t4001514#5万金币#l\r\n#L1##t4001516#10万金币#l\r\n#L2##t4001522#20万金币#l#k");
            }
            break;
        case 1: //
            if (sel != 3) {
                var cost = 10 * selection;
                if (cm.haveItem(cardPiece[sel], cost)) {
                    cm.gainItem(cardPiece[sel], -cost);
                    cm.gainItem(card[sel], selection);
                    cm.sendOk("恭喜你交换成功.");
                } else {
                    cm.sendNext("怎么回事？没有啊。要想交换#r" + selection + "张#k#t" + card[sel] + "#，需要#b" + cost + "个#t" + cardPiece[sel] + "##k。");
                }
            } else {
                if (selection == 0) {
                    if (cm.getPQLog("MParkTicket1") < 3) {
                        if (cm.getMeso() >= 50000 && cm.canHold(4001514)) {
                            cm.gainItem(4001514, 1);
                            cm.gainMeso(-50000);
                            cm.setPQLog("MParkTicket1");
                            cm.sendOk("恭喜你购买成功");
                        } else {
                            cm.sendOk("你是不是没钱，或者没地方放入场券了啊？你再确认一下。");
                        }
                    } else {
                        cm.sendOk("你今天已经购买了3张入场券了,你再确认一下。");
                    }
                } else if (selection == 1) {
                    if (cm.getPQLog("MParkTicket2") < 3) {
                        if (cm.getMeso() >= 100000 && cm.canHold(4001516)) {
                            cm.gainItem(4001516, 1);
                            cm.gainMeso(-100000);
                            cm.setPQLog("MParkTicket2");
                            cm.sendOk("恭喜你购买成功");
                        } else {
                            cm.sendOk("你是不是没钱，或者没地方放入场券了啊？你再确认一下。");
                        }
                    } else {
                        cm.sendOk("你今天已经购买了3张入场券了,你再确认一下。");
                    }
                } else if (selection == 2) {
                    if (cm.getPQLog("MParkTicket3") < 3) {
                        if (cm.getMeso() >= 200000 && cm.canHold(4001522)) {
                            cm.gainItem(4001522, 1);
                            cm.gainMeso(-200000);
                            cm.setPQLog("MParkTicket3");
                            cm.sendOk("恭喜你购买成功");
                        } else {
                            cm.sendOk("你是不是没钱，或者没地方放入场券了啊？你再确认一下。");
                        }
                    } else {
                        cm.sendOk("你今天已经购买了3张入场券了,你再确认一下。");
                    }
                }
            }
            cm.dispose();
            break;
        default:
            cm.dispose();
            break;
    }
}
