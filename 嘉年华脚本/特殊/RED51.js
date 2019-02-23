/*
 * 芬芬时尚潮流 
 * R.E.D币兑换枫叶
 */
var status = -1;
var beauty = 0;
var tosend = 0;
var sl;
var eff ="#fUI/UIWindow/Quest/icon6/7#";
var eff1 ="#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendNext("如果您需要点卷中介的话，那么请下次来找我！");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，欢迎使用R.E.D币兑换:\r\n" + eff1 + "#v4310088##z4310088#1:1#v4001126##z4001126#\r\n" + eff1 + "目前#z4310088#:#r" + cm.getItemQuantity(4310088) + "#k个\r\n" + eff1 + "目前#z4001126#:#r" + cm.getItemQuantity(4001126) + "#k个\r\n\r\n#b#L0#" + eff1 + "R.E.D兑换枫叶#l\r\n#L1#" + eff1 + "枫叶兑换R.E.D币#l#l");
        } else if (status == 1) {
            if (cm.getPlayer() >= 1 && cm.getPlayer() <= 5) {
                cm.sendOk("GM不能参与兑换.");
                cm.dispose();
            }
            if (selection == 0) {
               //if (cm.getPlayer().getCSPoints(1) / 1500 == 0) {
				if (cm.getItemQuantity(4310088) == 0) {	
                    cm.sendNext("您的R.E.D币不足，无法兑换枫叶。");
                    status = -1;
                } else {
                    beauty = 1;
                    cm.sendGetNumber("请输入R.E.D兑换枫叶的数量:\r\n兑换比例为 1 : 1\r\n", 1, 1, cm.getItemQuantity(4310088));
                }
            } else if (selection == 1) {
                if (cm.getItemQuantity(4001126) == 0) {
                    cm.sendNext("您的枫叶不足，无法R.E.D币。");
                    status = -1;
                } else {
                    beauty = 2;
                    cm.sendGetNumber("请输入枫叶兑换R.E.D币的数量:\r\n兑换比例为 1 : 1\r\n", 1, 1, cm.getItemQuantity(4001126));
                }
            }
        } else if (status == 2) {
            if (beauty == 1) {
                if (selection <= 0) {
                    cm.sendOk("输入的兑换数字错误.");
                    cm.dispose();
                }else if(selection >= 200){
                    sl=(selection/200)+1;
                } else{
                    sl=3;
                }
                if (cm.getSpace(4) < sl) {
                    cm.sendOk("你的背包“其它”空间不足!请至少有"+sl+"个空间以上.\r\n如果上面有出现小数的话请入位!\r\n如：出现<至少有7.5个空间以上>那么您就需要留8个空间!");
                    cm.dispose(); 

                }else if (cm.getItemQuantity(4310088) >= selection * 1) {
                    //cm.gainNX( - selection * 1);
					cm.gainItem(4310088, -selection);
                    cm.gainItem(4001126, selection);
                    cm.sendOk("您成功将#r " + (selection * 1) + " #k个#z4310088##v4310088#换为#z4001126##v4001126# x #r" + selection + " #k")
					cm.dispose();
				} else {
                    cm.sendNext("您的输入的数量错误，无法兑换枫叶。");
                    cm.dispose();
                }
            } else if (beauty == 2) {
                if (cm.haveItem(4001126, selection)) {
                    cm.gainItem(4001126, -selection);
					cm.gainItem(4310088, selection);
                   // cm.gainNX( + 1400 * selection);
                 //   cm.sendOk("您成功将#z4001126##v4001126# x #r" + selection + " #k换为#r " + (1400 * selection) + " #k点卷。");
                    cm.sendOk("您成功将#r " + (selection * 1) + " #k个#z4001126##v4001126#换为#z4310088##v4310088# x #r" + selection + " #k")
					cm.dispose();
				} else {
                    cm.sendNext("您的输入的数量错误，无法兑换R.E.D币。");
                    cm.dispose();
                }
            }
            status = -1;
        } else {
            cm.dispose();
        }
    }
}