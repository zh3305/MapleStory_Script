/* RED 1st impact
    Rupi
    Made by Daenerys
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    cm.sendNext("You still have some business to take care of here, right? It's not bad of an idea to chill around this area and regain full strength before going back out there.");
            cm.dispose();
        status--;
    }
    if (status == 0) {
	    cm.sendYesNo("You don't have anything else to do here, huh? Do you wish to go back to town? If so, I can send you back right this minute. What do you think? Do you want to go back?");
    } else if (status == 1) {
	    cm.warp(100000000);
		cm.dispose();
    }
}