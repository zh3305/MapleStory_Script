/* Denma the Owner
	Henesys VIP Eye Change.
*/
var status = -1;
var facetype;

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
	var face = cm.getPlayerStat("FACE");

	if (cm.getPlayerStat("GENDER") == 0) {
	    facetype = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012, 20014];
	} else {
	    facetype = [21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21012, 21014];
	}
	for (var i = 0; i < facetype.length; i++) {
	    facetype[i] = facetype[i] + face % 1000 - (face % 100);
	}
	cm.askAvatar("Let's see...for #b#t5152057##k, you can get a new face. That's right, I can completely transform your face! Wanna give it a shot? Please consider your choice carefully.", facetype);
    } else if (status == 2){
	if (cm.setAvatar(5152001, facetype[selection]) == 1) {
	    cm.sendNext("Enjoy your new and improved face!");
	} else {
	    cm.sendNext("Hmm... It doesn't look like you have a Face Coupon. I'm sorry, but without a Face Coupon, I can't perform plastic surgery on you.");
	}
	cm.dispose();
    }
}
