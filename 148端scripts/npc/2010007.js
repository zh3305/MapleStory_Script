/* Dawnveil
    Form guild
	Heracle
    Made by Daenerys
*/
var status = -1;
var sel;

function start() {
    cm.sendNext("Hey...would you happen to be interested in GUILDS by any chance?");
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0)
	cm.sendSimple("\t\r\n#b#L0#I want to start a guild#l\r\n#L1#I want to disband my guild#l\r\n#L2#Increase your Guild's capacity (limited to 100)#l#k");
    else if (status == 1) {
	sel = selection;
	if (selection == 0) {
	    if (cm.getPlayerStat("GID") > 0) {
		cm.sendNext("Hmmm...I don't think you're qualified enough to be a Guild Master yet. Please train harder, so you can become worthy of being a Guild Master.");
		cm.dispose();
	    } else
		cm.sendYesNo("Oh! So you're here to register a guild... You need 100,000 mesos to register a guild. I trust that you are ready. Would you like to create a guild?");
	} else if (selection == 1) {
	    if (cm.getPlayerStat("GID") <= 0 || cm.getPlayerStat("GRANK") != 1) {
		cm.sendOk("You can only disband a Guild if you are the leader of that Guild.");
		cm.dispose();
	    } else
		cm.sendYesNo("Are you sure you want to disband your Guild? You will not be able to recover it afterward and all your GP will be gone.");
	} else if (selection == 2) {
	    if (cm.getPlayerStat("GID") <= 0 || cm.getPlayerStat("GRANK") != 1) {
		cm.sendOk("You can only increase your Guild's capacity if you are the leader.");
		cm.dispose();
	    } else
		cm.sendYesNo("Increasing your Guild capacity by #b5#k costs #b500,000 mesos#k, are you sure you want to continue?");
	} else if (selection == 3) {
	    if (cm.getPlayerStat("GID") <= 0 || cm.getPlayerStat("GRANK") != 1) {
		cm.sendOk("You can only increase your Guild's capacity if you are the leader.");
		cm.dispose();
	    } else
		cm.sendYesNo("Increasing your Guild capacity by #b5#k costs #b25,000 GP#k, are you sure you want to continue?");
	}
    } else if (status == 2) {
	if (sel == 0 && cm.getPlayerStat("GID") <= 0) {
	    cm.genericGuildMessage(1);
	    cm.dispose();
	} else if (sel == 1 && cm.getPlayerStat("GID") > 0 && cm.getPlayerStat("GRANK") == 1) {
	    cm.disbandGuild();
	    cm.dispose();
	} else if (sel == 2 && cm.getPlayerStat("GID") > 0 && cm.getPlayerStat("GRANK") == 1) {
	    cm.increaseGuildCapacity(false);
	    cm.dispose();
	} else if (sel == 3 && cm.getPlayerStat("GID") > 0 && cm.getPlayerStat("GRANK") == 1) {
	    cm.increaseGuildCapacity(true);
	    cm.dispose();
	}
    }
}