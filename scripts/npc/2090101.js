/* Lilishu
	Mu Lung Random Hair/Hair Color Change.
*/
var status = 0;
var beauty = 0;
var mhair = Array(30250, 30350, 30270, 30150, 30300, 30600, 30160, 30700, 30720, 30420);
var fhair = Array(31040, 31250, 31310, 31220, 31300, 31680, 31160, 31030, 31230, 31690, 31210, 31170, 31450);
var hairnew = Array();

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendSimple("您好！我是美容店的助手丽秀秀，我的技术比起老爹爹得一点儿都不逊色。只要你有#b万能会员卡#k，你的头发就交给我处理吧。我会让你满意的。怎么样？\r\n#b#L0#换发型（一般会员卡）#l\r\n#L1#染头发（一般会员卡）#l");
    } else if (status == 1) {
        if (selection == 0) {
            var hair = cm.getPlayerStat("HAIR");
            hair_Colo_new = [];
            beauty = 1;
            if (cm.getPlayerStat("GENDER") == 0) {
                hair_Colo_new = [30250, 30110, 30230, 30050, 30280, 30410, 30730, 30160, 30200];
            } else {
                hair_Colo_new = [31150, 31310, 31220, 31300, 31260, 31160, 31730, 31410, 31410];
            }
            for (var i = 0; i < hair_Colo_new.length; i++) {
                hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
            }
            cm.sendYesNo("如果使用一般会员卡，你就不能自己选择发型，你真的想用#b万能会员卡#k换发型吗?");
        } else if (selection == 1) {
            var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
            hair_Colo_new = [];
            beauty = 2;
            for (var i = 0; i < 8; i++) {
                hair_Colo_new[i] = currenthaircolo + i;
            }
            cm.sendYesNo("如果使用一般会员卡，你不能指定你想要的发型，你真的想用#b万能会员卡#k换发型吗?");
        }
    } else if (status == 2) {
        if (beauty == 1) {
            if (cm.setRandomAvatar(5150000, hair_Colo_new) == 1) {
                cm.sendOk("Enjoy your new and improved hairstyle!");
            } else {
                cm.sendOk("你没有我们美发店的会员卡啊？必须有会员卡才能理发。");
            }
        } else {
            if (cm.setRandomAvatar(5150000, hair_Colo_new) == 1) {
                cm.sendOk("Enjoy your new and improved hair colour!");
            } else {
                cm.sendOk("嗯…看来你没有我美容店的会员卡。如果你没有会员卡，我们不能为你染头发.");
            }
        }
        cm.dispose();
    }
}