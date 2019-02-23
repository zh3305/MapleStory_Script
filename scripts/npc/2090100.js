/* Grandpa Luo
	Mu Lung VIP Hair/Hair Color Change.
*/
var status = -1;
var beauty = 0;
var hair_Colo_new;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        cm.sendSimple("欢迎来到武陵美发店。如果你有#b万能会员卡#k的话，我可以给你改变发型。你想试一试吗？\r\n#b#L0#更换发型（使用高级会员卡）#l\r\n#L1#染色（使用高级会员卡）#l");
    } else if (status == 1) {
        if (selection == 0) {
            var hair = cm.getPlayerStat("HAIR");
            hair_Colo_new = [];
            beauty = 1;
            if (cm.getPlayerStat("GENDER") == 0) {
                hair_Colo_new = [30250, 30350, 30270, 30150, 30300, 30600, 30160];
            } else {
                hair_Colo_new = [31040, 31250, 31310, 31220, 31300, 31680, 31160, 31030, 31230];
            }
            for (var i = 0; i < hair_Colo_new.length; i++) {
                hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
            }
            cm.askAvatar("我的手艺在这行是出了名的。如果你有#b万能会员卡#k就可以让换一个发型.请选择喜欢的发型吧", hair_Colo_new, 5150052);
        } else if (selection == 1) {
            var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
            hair_Colo_new = [];
            beauty = 2;
            for (var i = 0; i < 8; i++) {
                hair_Colo_new[i] = currenthaircolo + i;
            }
            cm.askAvatar("怎么样，换一个头发颜色，换一种心情。如果有#b万能会员卡#kk会员卡就可以随心所欲挑一种颜色.", hair_Colo_new, 5151036);
        }
    } else if (status == 2) {
        if (beauty == 1) {
            if (cm.setAvatar(5150052, hair_Colo_new[selection]) == 1) {
                cm.sendOk("Enjoy your new and improved hairstyle!");
            } else {
                cm.sendOk("Hmmm...it looks like you don't have our designated coupon...I'm afraid I can't give you a haircut without it. I'm sorry...");
            }
        } else {
            if (cm.setAvatar(5151036, hair_Colo_new[selection]) == 1) {
                cm.sendOk("Enjoy your new and improved hair colour!");
            } else {
                cm.sendOk("Hmmm...it looks like you don't have our designated coupon...I'm afraid I can't dyle your hair without it. I'm sorry...");
            }
        }
        cm.dispose();
    }
}