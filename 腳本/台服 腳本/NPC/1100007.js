/* RED Zero
    Kiriru
    Made by Daenerys
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    cm.sendNext("If you're not interested, then oh well...");
            cm.dispose();
        status--;
    }
    if (status == 0) {
	    cm.sendYesNo("Eh... So... Um... Are you trying to leave Victoria to go to a different region? You can take this boat to #b#m130000000##k. There, you will see bright sunlight shining on the leaves and feel a gentle breeze on your skin. It's where Shinsoo and Empress Cygnus are. Would you like to go to #m130000000#?\r\n\r\nIt will take about #b2 minutes#k, and it will cost you #b1000#k mesos.");
	} else if (status == 1) {	
        cm.warp(130000210,0);	
		cm.gainMeso(-1000);
	    cm.dispose(); 
    }
}