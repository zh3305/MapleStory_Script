/**
	Chief Tatamo - Leafre(240000000)
**/

var section;
var temp;
var cost;
var count;
var menu = "";
var itemID = new Array(4000226,4000229,4000236,4000237,4000261,4000231,4000238,4000239,4000241,4000242,4000234,4000232,4000233,4000235,4000243);
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status > 2) {
	    if(section == 0) {
		cm.sendOk("请仔细想想。一旦你做了决定，让我知道。");
	    } else {
		cm.sendOk("想一想，然后让我知道你的决定。");
	    }
	    cm.safeDispose();
	}
	status--;
    }
    if (status == 0) {
	cm.sendSimple("你找我有事吗?\r\n#L0##b魔法种子#k#l\r\n#L1##b为了神木村的行动#k#l");
    } else if(status == 1) {
	section = selection;
	if(section == 0) {
	    cm.sendSimple("不像是我们村子的人，找我什么事情？\r\n#L0##b想得到魔法种子#k#l");
	} else if (section == 1) {
	    cm.sendNext("It is the chief's duty to make the town more hospitable for people to live in, and carrying out the duty will require lots of items. If you have collected items around Leafre, are you interested in donating them?");
	} else {
		if (cm.isQuestActive(3759)) {
			if (cm.haveItem(4032531)) {
				cm.sendNext("Dragon Moss Extract...? I already gave you that!");
			} else {
				cm.sendNext("Dragon Moss Extract...Ah, I see. I will give it to you in this situation.");
				cm.gainItem(4032531,1);
			}
		} else {
			cm.sendNext("What are you talking about? Dragon Moss Extract...?");
		}
		cm.dispose();
	}
    } else if(status == 2) {
	if(section == 0) {
	    cm.sendGetNumber("#b魔法的种子#k是贵重物品，不能白送给你。付出一定的代价可以吗?一个#b魔法的种子#k#b30000金币#k买吗?\r\n要几个?",0,0,99);
	} else {
	    for (var i=0; i < itemID.length; i++) {
		menu += "\r\n#L"+i+"##b#t"+itemID[i]+"##k#l";
	    }
	    cm.sendNext("Which item would you like to donate?"+menu);
	    cm.safeDispose();
	}
    } else if(status == 3) {
	if(section == 0) {
	    if(selection == 0) {
		cm.sendOk("I can't sell you 0.");
		cm.safeDispose();
	    } else {
		temp = selection;
		cost = temp * 30000;
		cm.sendYesNo("Buying #b"+temp+" #t4031346#(s)#k will cost you #b"+cost+" mesos#k. Are you sure you want to make the purchase?");
	    }
	} else {
	    temp = selection;
	    if(!cm.haveItem(itemID[temp])) {
		cm.sendNext("I don't think you have the item.");
		cm.safeDispose();
	    } else {
		cm.sendGetNumber("How many #b#t"+itemID[temp]+"#k's would you like to donate?\r\n#b< Owned : #c"+itemID[temp]+"# >#k",0,0,"#c"+itemID[temp]+"#");
	    }
	}
    } else if(status == 4) {
	if(section == 0) {
	    if(cm.getMeso() < cost || !cm.canHold(4031346)) {
		cm.sendOk("Please check and see if you have enough mesos to make the purchase. Also, I suggest you check the etc. inventory and see if you have enough space available to make the purchase.");
	    } else {
		cm.sendOk("See you again~");
		cm.gainItem(4031346, temp);
		cm.gainMeso(-cost);
	    }
	    cm.safeDispose();
	} else {
	    count = selection;
	    cm.sendYesNo("Are you sure you want to donate #b"+count+" #t"+itemID[temp]+"##k?");
	}
    } else if(status == 5) {
	if (count == 0 || !cm.haveItem(itemID[temp],count)) {
	    cm.sendNext("Please check and see if you have enough of the item.");
	} else {
	    cm.gainItem(itemID[temp],-count);
	    cm.sendNext("Thank you very much.");
	}
	cm.safeDispose();
    }
}
