/* Natalie
	Henesys VIP Hair/Hair Color Change.
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
	cm.sendSimple("I'm the head of this hair salon Natalie. If you have #b#t5150053##k or #b#t5151036##k, allow me to take care of your hairdo. Please choose the one you want.\r\n#b#L0# Haircut(VIP coupon)#l\r\n#L1# Dye your hair(VIP coupon)#l");
    } else if (status == 1) {
	if (selection == 0) {
	    var hair = cm.getPlayerStat("HAIR");
	    hair_Colo_new = [];
	    beauty = 1;

	    if (cm.getPlayerStat("GENDER") == 0) {
		hair_Colo_new = [30030, 30020, 30000, 30310, 30330, 30060, 30150, 30410, 30210, 30140, 30120, 30200];
	    } else {
		hair_Colo_new = [31050, 31040, 31000, 31150, 31310, 31300, 31160, 31100, 31410, 31030, 31080, 31070];
	    }
	    for (var i = 0; i < hair_Colo_new.length; i++) {
		hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
	    }
	    cm.askAvatar("I can totally change up your hairstyle and make it look so good. Why don't you change it up a bit? If you have #b#t5150053##k I'll change it for you. Choose the one to your liking.~", hair_Colo_new);
	} else if (selection == 1) {
	    var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
	    hair_Colo_new = [];
	    beauty = 2;

	    for (var i = 0; i < 8; i++) {
		hair_Colo_new[i] = currenthaircolo + i;
	    }
	    cm.askAvatar("I can totally change your haircolor and make it look so good. Why don't you change it up a bit? With #b#t5151036##k I'll change it for you. Choose the one to your liking.", hair_Colo_new);
	}
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setAvatar(5150001, hair_Colo_new[selection]) == 1) {
		cm.sendNext("Enjoy your new and improved hairstyle!");
	    } else {
		cm.sendNext("Hmmm...it looks like you don't have our designated coupon...I'm afraid I can't give you a haircut without it. I'm sorry.");
	    }
	} else {
	    if (cm.setAvatar(5151001, hair_Colo_new[selection]) == 1) {
		cm.sendNext("Enjoy your new and improved haircolor!");
	    } else {
		cm.sendNext("Hmmm...it looks like you don't have our designated coupon...I'm afraid I can't dye your hair without it. I'm sorry.");
	    }
	}
	cm.dispose();
    }
}
